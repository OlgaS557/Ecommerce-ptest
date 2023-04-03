import React from "react";
import ContentLoader from "react-content-loader";
import styles from "../../css_modules/card.module.css";

const Skeleton = (props) => (
  <ContentLoader 
    className={styles.cards}
    speed={2}
    width={300}
    height={466}
    viewBox="0 0 300 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="381" rx="0" ry="0" width="100" height="20" /> 
    <rect x="7" y="409" rx="0" ry="0" width="45" height="18" /> 
    <rect x="4" y="441" rx="0" ry="0" width="146" height="18" /> 
    <rect x="251" y="438" rx="0" ry="0" width="37" height="24" /> 
    <rect x="353" y="-59" rx="0" ry="0" width="219" height="266" /> 
    <rect x="0" y="0" rx="0" ry="0" width="300" height="365" />
  </ContentLoader>
)

export default Skeleton;