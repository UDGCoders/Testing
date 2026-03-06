import React from "react";
import BigTitle from "../components/BigTitle";
import SmallTitle from "../components/SmallTitle";
import PrimaryText from "../components/PrimaryText";
import WordPressImage from "../components/WordPressImage";
import singleLayoutPageData from "../constants/singleLayoutPageData";
import styles from "./SingleLayoutPage.module.css";

const defaultPageData = singleLayoutPageData.singlelayoutpage || {};

const renderListGroup = (groups = []) =>
  groups.map((group, index) => (
    <React.Fragment key={`${group.heading || "group"}-${index}`}>
      {group.heading ? <h4 className={styles.listHeading}>{group.heading}</h4> : null}
      {Array.isArray(group.items) && group.items.length > 0 ? (
        <ul className={styles.list}>
          {group.items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{item}</li>
          ))}
        </ul>
      ) : null}
    </React.Fragment>
  ));

const SingleLayoutPage = ({ pageData = defaultPageData }) => {
  const {
    topSection = {},
    complexSection = {},
    mediaSections = [],
    secondLastSection = {},
    finalSection = {},
  } = pageData;

  const topImage = topSection.image || {};
  const complexLeft = complexSection.left || {};
  const complexRight = complexSection.right || {};
  const rightCards = Array.isArray(complexRight.cards)
    ? complexRight.cards
    : Array.isArray(complexSection.rightCards)
    ? complexSection.rightCards
    : [];
  const secondLastColumns = Array.isArray(secondLastSection.columns)
    ? secondLastSection.columns
    : [];
  const secondLastSides = Array.isArray(secondLastSection.sides)
    ? secondLastSection.sides
    : [];
  const secondLastSidesToRender =
    secondLastSides.length > 0
      ? secondLastSides
      : secondLastColumns.length > 0
      ? [
          {
            heading: secondLastSection.title || "",
            subHeading: secondLastSection.subtitle || "",
            primaryText: secondLastSection.primaryText || "",
            listHeading: secondLastColumns[0]?.heading || "",
            items: secondLastColumns[0]?.items || [],
          },
          {
            heading: secondLastColumns[1]?.heading || "",
            primaryText: "",
            items: secondLastColumns[1]?.items || [],
          },
        ]
      : [];

  return (
    <div className={styles.page}>
      <section className={`container ${styles.section}`}>
        <div className={styles.topSplit}>
          <div>
            {topSection.title ? <BigTitle bigTitle={topSection.title} /> : null}
            {topSection.subtitle ? <SmallTitle smallTitle={topSection.subtitle} /> : null}
          </div>
          <div>
            {topSection.primaryText ? (
              <div className={styles.primaryTextSpacing}>
                <PrimaryText primaryText={topSection.primaryText} />
              </div>
            ) : null}
          </div>
        </div>
        {topImage.src ? (
          <WordPressImage
            src={topImage.src}
            alt={topImage.alt || topSection.title || "Project image"}
            className={styles.fullImage}
          />
        ) : null}
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.complexSplit}>
          <div>
            {complexLeft.title ? <BigTitle bigTitle={complexLeft.title} /> : null}
            {complexLeft.subtitle ? <SmallTitle smallTitle={complexLeft.subtitle} /> : null}
            <div className={`mt-3 ${styles.primaryTextSpacing}`}>
              {complexLeft.primaryText ? (
                <PrimaryText primaryText={complexLeft.primaryText} />
              ) : null}
            </div>
            {renderListGroup(complexLeft.listGroups)}
          </div>

          <div className={styles.complexRight}>
            {complexRight.title ? <BigTitle bigTitle={complexRight.title} /> : null}
            {complexRight.subtitle ? <SmallTitle smallTitle={complexRight.subtitle} /> : null}
            <div className={`mt-3 ${styles.primaryTextSpacing}`}>
              {complexRight.primaryText ? (
                <PrimaryText primaryText={complexRight.primaryText} />
              ) : null}
            </div>
            {renderListGroup(complexRight.listGroups)}

            <div className={styles.rightCards}>
              {rightCards.map((card, cardIndex) => (
                <div className={styles.infoCard} key={`${card.heading || "card"}-${cardIndex}`}>
                  {card.heading ? <h4 className={styles.cardTitle}>{card.heading}</h4> : null}
                  {Array.isArray(card.items) && card.items.length > 0 ? (
                    <ul className={styles.list}>
                      {card.items.map((item, itemIndex) => (
                        <li key={`${item}-${itemIndex}`}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {mediaSections.map((section, index) => {
        const splitClassName = [
          styles.mediaSplit,
          section.reverse ? styles.reverse : "",
          section.darkText ? styles.darkText : "",
        ]
          .filter(Boolean)
          .join(" ");

        const splitContent = (
          
          <div className={splitClassName}>
            {section.image?.src ? (
              <WordPressImage
                src={section.image.src}
                alt={section.image.alt || section.title || "Section image"}
                className={styles.mediaImage}
              />
            ) : null}
            <div>
              {section.title ? <BigTitle bigTitle={section.title} /> : null}
              {section.subtitle ? <SmallTitle smallTitle={section.subtitle} /> : null}
              {section.primaryText ? (
                <div className={styles.primaryTextSpacing}>
                  <PrimaryText primaryText={section.primaryText} />
                </div>
              ) : null}
              {section.listHeading ? (
                <h4 className={styles.listHeading}>{section.listHeading}</h4>
              ) : null}
              {Array.isArray(section.listItems) && section.listItems.length > 0 ? (
                <ul className={styles.list}>
                  {section.listItems.map((item, itemIndex) => (
                    <li key={`${item}-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        );

        if (section.grayBackground) {
          return (
            <section
              className={`${styles.section} ${styles.graySection}`}
              key={`media-${index}`}
            >
              <div className="container">{splitContent}</div>
            </section>
          );
        }

        return (
          <section className={`container ${styles.section}`} key={`media-${index}`}>
            {splitContent}
          </section>
        );
      })}

      <section className={`container ${styles.section}`}>
        <div className={styles.bottomSplit}>
          {secondLastSidesToRender.map((side, sideIndex) => (
            <div className={styles.secondLastSide} key={`${side.heading || "side"}-${sideIndex}`}>
              {side.heading ? <h4 className={styles.listHeading}>{side.heading}</h4> : null}
              {side.subHeading ? <h4 className={styles.listHeading}>{side.subHeading}</h4> : null}
              {side.primaryText ? (
                <div className={styles.primaryTextSpacing}>
                  <PrimaryText primaryText={side.primaryText} />
                </div>
              ) : null}
              {side.listHeading ? <h4 className={styles.listHeading}>{side.listHeading}</h4> : null}
              {Array.isArray(side.items) && side.items.length > 0 ? (
                <ul className={styles.list}>
                  {side.items.map((item, itemIndex) => (
                    <li key={`${item}-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.centeredSection}>
          {finalSection.title ? <BigTitle bigTitle={finalSection.title} /> : null}
          {finalSection.subtitle ? <SmallTitle smallTitle={finalSection.subtitle} /> : null}
          {finalSection.primaryText ? (
            <div className={styles.primaryTextSpacing}>
              <PrimaryText primaryText={finalSection.primaryText} />
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default SingleLayoutPage;
