import React from "react";
import iconArrowDown from '../assets/images/icon-arrow-down.svg';

const Detail = ({ summary, info }) => {
  return (
    <details>
      <summary>{summary}
        <img src={iconArrowDown} alt="arrow"></img>
      </summary>
      <p>{info}</p>
    </details>
  );
};

export default Detail;