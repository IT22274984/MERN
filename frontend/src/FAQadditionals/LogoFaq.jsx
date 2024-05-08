import React from "react";

const LogoFaq = ({ classLogo, woman, bg }) => {
  return (
    <div className={classLogo}>
      <img className='faq__img-logo' src={woman} alt="title" />
      <img className='faq__img-shadow' src={bg} alt="title shadow" />
    </div>
  );
};

export default LogoFaq;