import React, { useEffect, useMemo, useState } from 'react';
import styles from './TeamTabs.module.css';
import TeamCard from './TeamCard';

const WP_API_BASE = 'http://rmaacgroup.local/wp-json/wp/v2';
const TEAM_CATEGORY_SLUG = 'team';
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/150';

const toArray = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.value)) return payload.value;
  return [];
};

const stripHtml = (value = '') => value.replace(/<[^>]+>/g, '').trim();

const toSlug = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const buildTabsFromGroupedPayload = (payload) => {
  if (!payload || Array.isArray(payload) || typeof payload !== 'object') return null;

  const entries = Object.entries(payload);
  if (!entries.length || !entries.every(([, members]) => Array.isArray(members))) return null;

  return entries.map(([label, members]) => ({
    id: toSlug(label) || label,
    label,
    members: members.map((member, index) => ({
      name: member?.name || `Team Member ${index + 1}`,
      role: member?.designation || member?.role || 'Team Member',
      description: member?.bio || member?.description || 'No bio provided.',
      img: member?.picture || member?.img || PLACEHOLDER_IMAGE
    }))
  }));
};

const buildTabsFromWpPosts = (categories, posts) => {
  const categoryList = toArray(categories);
  const postList = toArray(posts);
  const categoryById = new Map(categoryList.map((category) => [category.id, category]));

  const teamCategory =
    categoryList.find((category) => category.slug === TEAM_CATEGORY_SLUG) ||
    categoryList.find((category) => category.name?.toLowerCase() === 'team');

  if (!teamCategory) return [];

  const childCategories = categoryList
    .filter((category) => category.parent === teamCategory.id)
    .sort((a, b) => a.name.localeCompare(b.name));

  const tabsMap = new Map(
    childCategories.map((category) => [
      category.id,
      {
        id: String(category.id),
        label: category.name,
        members: []
      }
    ])
  );

  postList.forEach((post) => {
    const postCategoryIds = Array.isArray(post.categories) ? post.categories : [];
    const childCategoryIds = postCategoryIds.filter((categoryId) => {
      const category = categoryById.get(categoryId);
      return category && category.parent === teamCategory.id;
    });

    if (!childCategoryIds.length) return;

    const member = {
      name: stripHtml(post?.title?.rendered) || 'Team Member',
      role: post?.meta?.Designation || post?.meta?.designation || 'Team Member',
      description: post?.meta?.bio || post?.bio || 'No bio provided.',
      img: post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || PLACEHOLDER_IMAGE
    };

    childCategoryIds.forEach((categoryId) => {
      if (!tabsMap.has(categoryId)) {
        const dynamicCategory = categoryById.get(categoryId);
        if (!dynamicCategory) return;
        tabsMap.set(categoryId, {
          id: String(categoryId),
          label: dynamicCategory.name,
          members: []
        });
      }
      tabsMap.get(categoryId).members.push(member);
    });
  });

  return Array.from(tabsMap.values());
};

const TeamTabs = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTabId, setActiveTabId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true);
        setError('');

        const baseResponse = await fetch(WP_API_BASE);
        if (!baseResponse.ok) throw new Error(`HTTP ${baseResponse.status}`);

        const basePayload = await baseResponse.json();
        const groupedTabs = buildTabsFromGroupedPayload(basePayload);

        if (groupedTabs?.length) {
          setTabs(groupedTabs);
          setActiveTabId(groupedTabs[0].id);
          return;
        }

        const categoriesResponse = await fetch(`${WP_API_BASE}/categories?per_page=100`);
        if (!categoriesResponse.ok) throw new Error(`HTTP ${categoriesResponse.status}`);

        const categories = await categoriesResponse.json();
        const categoryList = toArray(categories);
        const teamCategory =
          categoryList.find((category) => category.slug === TEAM_CATEGORY_SLUG) ||
          categoryList.find((category) => category.name?.toLowerCase() === 'team');

        if (!teamCategory) {
          throw new Error('Team category was not found in WordPress categories.');
        }

        const postsResponse = await fetch(
          `${WP_API_BASE}/posts?categories=${teamCategory.id}&_embed=true&per_page=100`
        );
        if (!postsResponse.ok) throw new Error(`HTTP ${postsResponse.status}`);

        const posts = await postsResponse.json();
        const tabsFromWp = buildTabsFromWpPosts(categories, posts);

        setTabs(tabsFromWp);
        setActiveTabId(tabsFromWp[0]?.id || '');
      } catch (fetchError) {
        console.error('Failed to fetch team tabs:', fetchError);
        setTabs([]);
        setActiveTabId('');
        setError('Unable to load team data right now.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  const activeTab = useMemo(() => {
    if (!tabs.length) return null;
    return tabs.find((tab) => tab.id === activeTabId) || tabs[0];
  }, [tabs, activeTabId]);

  if (loading) {
    return <div className="text-center py-4">Loading team data...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-danger">{error}</div>;
  }

  return (
    <div>
      <div className="d-flex gap-3 justify-content-between align-items-center flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className={`${styles.tabButton} ${activeTab?.id === tab.id ? styles.active : ''}`}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-3">
        <div className={`row g-3 justify-content-center ${styles.contentWrapper}`} key={activeTab?.id}>
          {activeTab?.members?.length > 0 ? (
            activeTab.members.map((member) => (
              <div className="col-sm-6 col-lg-4 d-flex" key={`${activeTab.id}-${member.name}`}>
                <TeamCard
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  img={member.img}
                />
              </div>
            ))
          ) : (
            <div className="text-center">
              <p className="text-muted">No members found for this team tab.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamTabs;
