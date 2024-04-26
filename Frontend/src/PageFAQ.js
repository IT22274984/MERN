import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FaqService from './services/FaqService';
import FAQList from './FAQPage/FAQList';
import ManageFAQ from './FAQPage/ManageFAQ';

function PageFAQ() {
  const [faqs, setFaqs] = useState([]);
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    FaqService.getAllFaqs(setFaqs);
  }, [changeCount])

  return (
    <>
      <Routes>
        <Route path="/faqs" element={<FAQList
          faqs={faqs}
        />} />
        <Route path="/mfaqs" element={<ManageFAQ
          faqs={faqs}
          setFaqs={setFaqs}
          changeCount={changeCount}
          setChangeCount={setChangeCount}
        />} />
      </Routes>
    </>
  );
}

export default PageFAQ;