import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./cards.module.scss";
import Card from "./card";
const horn = <FontAwesomeIcon className={styles.icon} icon={faBullhorn} />;
const arrow = <FontAwesomeIcon className={styles.icon} icon={faArrowRight} />;

const OurEvents = () => {
  const cards = [
    {
      icon: horn,
      text: "TotalCross Events",
      url:
        "https://www.youtube.com/playlist?list=PL0yZb3JwIr_P_aKR5QFUQOAVg4o06RkxI",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        <Card icon={cards[0].icon} text={cards[0].text} url={cards[0].url} />
      </div>
    </div>
  );
};

export default OurEvents;
