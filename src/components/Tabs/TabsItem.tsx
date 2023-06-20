import React from "react";

import styles from "./Tabs.module.css";

import cn from "classnames";

import Button from "../Button/Button";
import { Tab } from "./Tabs";

interface TabItemProps {
  tab: Tab;
  onTabClick: (tab: Tab) => void;
  className?: string;
}

const TabItem: React.FC<TabItemProps> = ({ tab, onTabClick, className }) => {
  const handleClick = () => onTabClick(tab);

  return (
    <li>
      <Button
        className={cn(styles.button, className)}
        onClick={handleClick}
        size={"small"}
      >
        {tab.label}
      </Button>
    </li>
  );
};

export default TabItem;
