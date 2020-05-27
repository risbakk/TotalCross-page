import React from "react";
import { Link } from "docz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./payment-plans.module.scss";
import { CONTACT, GET_STARTED } from "../utils/links";
const check = <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />;

const PaymentPlans = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Our Plans</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Free</h3>
          <h5 className={styles.cardSubtitle}>Under LGPL v2.1</h5>
          <ul className={styles.cardList}>
            <li className={styles.cardListItem}>
              {check}
              Unlimited Developers
            </li>
            <li className={styles.cardListItem}>{check} Unlimited Runtime</li>
            <li className={styles.cardListItem}>{check} Community Support</li>
            <li className={styles.cardListItem}>
              {check} Embedded Apps: Linux Arm, Android, WinCE
            </li>
            <li className={styles.cardListItem}>
              {check} Desktop Apps: Windows, Linux
            </li>
            <li className={styles.cardListItem}>
              {check} Mobile Apps: Android, iOS
            </li>
            <li className={styles.cardListItem}>
              {check} Documentation and Guidelines
            </li>
            <li className={styles.cardListItem}>{check} Video Tutorials</li>
            <li className={styles.cardListItem}>{check} Forum</li>
          </ul>
          <a href={GET_STARTED} target="_blank" rel="noreferrer">
            <button className={styles.cardButtonGetStarted}>Get Started</button>
          </a>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Enterprise</h3>
          <h5 className={styles.cardSubtitle}></h5>
          <ul className={styles.cardList}>
            <li className={styles.cardListItem}>
              {check} 01 Developer per License
            </li>
            <li className={styles.cardListItem}>{check} Unlimited Runtime</li>
            <li className={styles.cardListItem}>{check} Premium Support</li>
            <li className={styles.cardListItem}>
              {check} Embedded Apps: Linux Arm, Android, WinCE
            </li>
            <li className={styles.cardListItem}>
              {check} Desktop Apps: Windows, Linux
            </li>
            <li className={styles.cardListItem}>
              {check} Mobile Apps: Android, iOS
            </li>
            <li className={styles.cardListItem}>
              {check} Documentation and Guidelines
            </li>
            <li className={styles.cardListItem}>{check} Video Tutorials</li>
            <li className={styles.cardListItem}>{check} Forum</li>
          </ul>
          <Link to={CONTACT}>
            <button className={styles.cardButtonContact}>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlans;
