import React from "react";

import styles from "./MainLayout.module.css";
import NewReleases from "../components/NewReleases/NewReleases";


interface MainLayoutProps {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ header, main, footer }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>{header}</header>
      <main className={styles.main}>{main}</main>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  );
};

export default MainLayout;
