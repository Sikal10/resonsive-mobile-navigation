import React, {useState} from 'react';
import styles from "./header.module.css";
import {AiOutlineMenu} from "react-icons/ai";
import {FaTimes} from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo}>
                    <p>Sikal</p>
                </div>

                <div className={styles.headerButtonBox}>
                    <div className={styles.headerButton} onClick={handleToggle}>
                        {!isOpen ? <AiOutlineMenu className={styles.menuBar} /> : <FaTimes className={styles.menuBar} />}
                    </div>

                    <div className={`${styles.background} ${isOpen && styles.backgroundOpen}`}/>
                </div>
            </div>


            <ul className={`${styles.mobileNavigation} ${isOpen && styles.mobileNavigationOpen}`}>
                <li className={styles.mobileNavigationLinks}><a href="#">Home</a></li>
                <li className={styles.mobileNavigationLinks}><a href="#">About</a></li>
                <li className={styles.mobileNavigationLinks}><a href="#">Contact</a></li>
                <li className={styles.mobileNavigationLinks}><a href="#">Sign In</a></li>
                <li className={styles.mobileNavigationLinks}><a href="#">Register</a></li>
            </ul>

        </header>
    );
};

export default Header;