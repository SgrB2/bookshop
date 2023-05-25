import React from "react";

import styles from "./LoadMoreButton.module.css";

import Button from "../Button/Button";

interface LoadMoreButtonProps {
    onClick: () => void;
    loading?: boolean;
  }
  
  const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
    loading,
    onClick,
  }) => {
    return (
      <div className={styles.button_wrapper}>
        <Button onClick={onClick} size="large" title="load more">{loading ? "loading..." : "load more"}</Button>
      </div>
    );
  };
  
  export default LoadMoreButton;