import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "./social-networks.module.scss";

const snGit = <FontAwesomeIcon className={styles.icon} icon={faGithub} />;
const snTwt = <FontAwesomeIcon className={styles.icon} icon={faTwitter} />;
const snTel = <FontAwesomeIcon className={styles.icon} icon={faTelegram} />;
const snYou = <FontAwesomeIcon className={styles.icon} icon={faYoutube} />;
// const snLin = <FontAwesomeIcon icon={faLinkedin} />;

const SocialNetworks = () => (
  <div className={styles.container}>
    <div className={styles.iconContainer}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/TotalCross/totalcross"
      >
        {snGit}
      </a>
    </div>
    <div className={styles.iconContainer}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/TotalCross"
      >
        {snTwt}
      </a>
    </div>
    <div className={styles.iconContainer}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://t.me/totalcrosscommunity"
      >
        {snTel}
      </a>
    </div>
    <div className={styles.iconContainer}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://bit.ly/youtube-totalcross"
      >
        {snYou}
      </a>
    </div>

    {/* <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://linkedin.com/company/totalcross"
    >
      {snLin}
    </a> */}
  </div>
);

export default SocialNetworks;
