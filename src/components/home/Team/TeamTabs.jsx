import React, { useState } from 'react';
import styles from './TeamTabs.module.css';
import TeamCard from './TeamCard';

const TeamTabs = () => {
  const tabData = [
    { 
      id: 'Management', 
      label: 'Management', 
      members: [
        { name: "MUNEEB AHMED", role: "Managing Director", description: "Leading with vision and strategy to drive innovation, growth, and success.", img: "wp-content/uploads/2026/01/d6a4af1e2a58d865b87ba3ee52d340d809195e0b.webp" },
        { name: "NASAR Ahmed", role: "CEO", description: "With 24+ years bridging finance and technology, he is committed to helping enterprises achieve operational excellence.", img: "wp-content/uploads/2026/01/e67855f3b07204e9c1c4d432634316f9049e0161.webp" },
        { name: "Hassan saifullah", role: "CRO & CMO", description: "Maximizing growth and revenue through strategic, data-driven insights.", img: "wp-content/uploads/2026/01/7bc571934788d2dd84befa65ad53eca93383e7dc.webp" },
        { name: "SHEZRAH ABBASI", role: "PROJECT MANAGER", description: "Ensuring seamless execution and timely delivery through strategic planning.", img: "wp-content/uploads/2026/01/7d7170b7a18cc1bdf6ec7b61d9fb8f85b3240cbd.webp" },
        { name: "Anaum nawaz", role: "Manager Operations", description: "Ensures every project moves on time and on point with sharp process oversight.", img: "wp-content/uploads/2026/01/d0275b1e3b2c3b479ab7f786a253d70e721727cc.webp" }
      ]
    },
    { 
      id: 'Marketing', 
      label: 'Marketing', 
      members: [
         { name: "SLIHA AWAN", role: "HEAD OF CONTENT", description: "Sliha leads with words that move. Whether it's storytelling or strategy, she builds narratives that connect, convert, and resonate.", img: "wp-content/uploads/2026/01/sliha.webp" },
         { name: "m. MANsoor", role: "SOCIAL MEDIA MANAGER ", description: "Mansoor overseas digital strategy, content creation, and audience engagement across all platforms.", img: "wp-content/uploads/2026/01/0157f06573b6e3e64955e166e26576e9c69871a4.webp" },
         { name: "FAKIHA NADEEM", role: "MARKETING EXECUTIVE ", description: "Fakiha creates words with hearts. From websites to campaigns, she turns complex ideas into simple, compelling content.", img: "wp-content/uploads/2026/01/4cb5a1de310fbf1ffaa8b9ca73325c5483beb114.webp" },
         { name: "ABiya Anjum", role: "DIGITAL MARKETING STRATEGIST ", description: "With a knack for turning raw ideas into scroll-stopping magic, she makes sure every campaign and website feels like it was just for you.", img: "wp-content/uploads/2026/01/f1588203aa52717fbe29b0552ec279e993144177.webp" },
         
        ] 
    },
    { id: 'Finance', label: 'Finance', members: [
        { name: "Muhammad Umair ", role: "Head of Finance  ", description: "Umair makes the numbers talk. From forecasting to financial strategy, he helps us scale with stability and smart decision-making.", img: "wp-content/uploads/2026/01/b950e43c3897bb5fed22b792a1a548ca9d8c5e1d.webp" },
        
    ] },
    { id: 'Design & web dev', label: 'Design & web dev', members: [
        { name: "Mohsin Amin ", role: "SR WORDPRESS DEVELOPER ", description: "Mohsin is the creative engine behind our digital presence, a passionate web developer with expertise in CRM and technical SEO  ", img: "wp-content/uploads/2026/01/888e81d5a7f0d2caa0ed067870d8f99dc35c9a15.webp" },
        { name: "Waleed Rattu", role: "UI/GRAPHIC DESIGNER", description: "Waleed turns ideas into visuals. His design instincts shape how the world sees RMAAC - sleek, clean and unforgettable", img: "wp-content/uploads/2026/01/142a34ae514a45150be43a6cc2c11b3195b0a786.webp" },
        { name: "M. Nadeem", role: ".Net Developer", description: "Nadeem makes the complex simple. He develops scalable .NET solutions that keep our systems efficient and secure.", img: "wp-content/uploads/2026/01/142a34ae514a45150be43a6cc2c11b3195b0a786.webp" },
        { name: "hassan khalid", role: ".Net Developer", description: "Hasan is an expert in cloud infrastructure, API development, and database optimization leading the dev team with his vision ", img: "wp-content/uploads/2026/01/142a34ae514a45150be43a6cc2c11b3195b0a786.webp" },
    ] },
    
    { id: 'Apps team', label: 'Apps team', members: [
        { name: "Hassan Ali", role: "ASO EXPERT", description: "Hassan is our ASO Expert who transforms app visibility into real results, making sure every swipe, search, and download counts.  ", img: "wp-content/uploads/2026/01/6cfa1dea47e9ab035fdef8aaf06d77a17f15cda1.webp" },
        { name: "Faraz Ali", role: "MOBILE APP DEVELOPER", description: "Faraz is a passionate mobile app developer with expertise in Flutter, Kotlin, and Machine Learning, dedicated to building innovative applications. ", img: "wp-content/uploads/2026/01/4671f7bfb4b130f4494d93202468784f05ea314a.webp" },
        { name: "M. Awais", role: "Android Developer  ", description: "Awais is a seasoned Android engineer specializing in building robust, user-centric mobile applications. ", img: "wp-content/uploads/2026/01/f09ededfa9b9b56b7ac99760cae7e94ed5bb707f.webp" },
        { name: "Abdullah Saleem", role: "Jr. Developer", description: "Abdullah is a fast learner with strong foundation in UI/UX implementation, RESTful APIs, and agile development ", img: "wp-content/uploads/2026/01/6cb05a889da07017fdfb787f17aceb7a45ebb60f.webp " },

    ] }
  ];

  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <div className="container">
      {/* Tab Navigation */}
      <div className="d-flex gap-3 justify-content-between align-items-center flex-wrap">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tabButton} ${activeTab.id === tab.id ? styles.active : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid Content Area */}
      <div className="mt-3">
        <div className={`row g-3 justify-content-center ${styles.contentWrapper}`} key={activeTab.id}>
          {activeTab.members.length > 0 ? (
            activeTab.members.map((member, index) => (
              <div className="col-sm-6 col-lg-4 d-flex" key={index}>
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
              <p className="text-muted">Members for this department will be updated soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamTabs;