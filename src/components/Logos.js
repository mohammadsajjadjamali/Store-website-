import React from 'react';

import styles from "./Logos.module.css";
import apple from "../images/apple.jpg";
import samsung from "../images/samsung.jpg";
import xiaomi from "../images/xiaomi.png";
import asus from "../images/Asus.jpg";
import play4 from "../images/PlayStation-simbolo.jpg";



const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <div>
                <img src={samsung} alt="logo" />
                <img src={xiaomi} alt="logo" />
                <img src={apple} alt="logo" />
                <img src={asus} alt="logo" />
                <img src={play4} alt="logo" />
            </div>
        </div>
    );
};

export default Logos;