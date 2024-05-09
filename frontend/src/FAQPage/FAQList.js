import React, { useEffect, useState } from "react";
import womanDesktop from "../assets/images/illustration-woman-online-desktop.svg";
import bgDesktop from "../assets/images/bg-pattern-desktop.svg";
import womanMobile from "../assets/images/illustration-woman-online-mobile.svg";
import bgMobile from "../assets/images/bg-pattern-mobile.svg";
import LogoBox from "../FAQadditionals/LogoBox";
import LogoFaq from "../FAQadditionals/LogoFaq";
import DetailsList from "../FAQadditionals/DetailsList";
import FaqService from "../services/FaqService";
// import "../App.css";

const FAQList = () => {
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
    };
    fetch("http://localhost:4000/api/faq", options).then((response) => {
      if (response.ok) {
        response.json().then((res) => {
          setFaqs(res);
        });
      } else {
        return;
      }
    });
  }, []);
  return (
    <main>
      <LogoBox />
      <div className="faq">
        <LogoFaq
          classLogo="faq__mobile-log"
          woman={womanMobile}
          bg={bgMobile}
        />
        <LogoFaq
          classLogo="faq__desktop-log"
          woman={womanDesktop}
          bg={bgDesktop}
        />
        <div className="container">
          <h1 className="faq_title">FAQs</h1>
          <DetailsList details={faqs} />
        </div>
      </div>
    </main>
  );
};

export default FAQList;