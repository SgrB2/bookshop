import React from "react";

import styles from "./EmptyContainer.module.css";

import Title from "../Title/Title";

interface EmptyContainerProps {
  emptyTitle: string;
}

const EmptyContainer: React.FC<EmptyContainerProps> = ({ emptyTitle }) => {
  return (
    <div className={styles.empty_wrapper}>
      <Title title={emptyTitle} size="small" />
    </div>
  );
};

export default EmptyContainer;
