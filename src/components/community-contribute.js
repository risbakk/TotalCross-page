import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./card";
import styles from "./cards.module.scss";

const cog = <FontAwesomeIcon className={styles.icon} icon={faCog} />;
// const arrow = <FontAwesomeIcon className={styles.icon} icon={faArrowRight} />;
const code = <FontAwesomeIcon className={styles.icon} icon={faCode} />;
const file = <FontAwesomeIcon className={styles.icon} icon={faFileAlt} />;

const Contribute = () => {
  const cards = [
    {
      icon: code,
      text: "Source Code",
      url: "https://github.com/TotalCross/totalcross",
    },
    {
      icon: cog,
      text: "Report an Issue",
      url: "https://github.com/TotalCross/totalcross/issues",
    },
    {
      icon: file,
      text: "Docs",
      url: "https://github.com/TotalCross/totalcross-docs",
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Become a TotalCross Contributor</h2>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <Card icon={card.icon} text={card.text} url={card.url} />
        ))}
        {/* <div className={styles.card}>
          <div className={styles.cardIcon}>{code}</div>
          <div className={styles.cardTitle}>Source Code</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TotalCross/totalcross"
          >
            <div className={styles.cardArrow}>{arrow}</div>
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>{cog}</div>
          <div className={styles.cardTitle}>Report an Issue</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TotalCross/totalcross"
          >
            <div className={styles.cardArrow}>{arrow}</div>
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>{file}</div>
          <div className={styles.cardTitle}>Docs</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TotalCross/totalcross"
          >
            <div className={styles.cardArrow}>{arrow}</div>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Contribute;
