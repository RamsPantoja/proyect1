import React, { Fragment } from 'react';
import Head from 'next/head';
import styles from '../styles/layout.module.css';

const LayOut = ({children}) => {
    return (
        <Fragment>
            <Head>
                <title>Proyect1</title>
            </Head>
            <header className={styles.headerContainer}>
                <div className={styles.container}>
                    <div className={styles.siteTitleContainer}>
                        <h1>Sigma|Enginer</h1>
                    </div>
                    <nav className={styles.navContainer}>
                        <ul className={styles.containerListNav}>
                            <li><a className={styles.link} href='#'>Home</a></li>
                            <li><a className={styles.link} href='#'>About</a></li>
                            <li><a className={styles.link} href='#'>News</a></li>
                            <li><a className={styles.link} href='#'>Posts</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={styles.contentContainer}>
                {children}
            </div>
            <footer>
                <div>
                    <h2>Footer</h2>
                </div>
            </footer>
        </Fragment>
    )
}

export default LayOut;