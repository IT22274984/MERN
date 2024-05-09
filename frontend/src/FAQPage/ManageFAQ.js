import React, { useEffect, useState } from "react";
import ListRow from "../FAQadditionals/ListRow";
import Modal from "../components/Modal/Modal";
// import FaqService from "../services/FaqService";
import { toast } from "react-toastify";
// import Faq from "../Faq.css"

const ManageFAQ = ({ changeCount, setChangeCount }) => {
  const [modalActive, setModalActive] = useState(false);
  const [id, setId] = useState("");
  const [summary, setSummary] = useState("");
  const [info, setInfo] = useState("");
  const [isCreate, setIsCreate] = useState(true);

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

  const onChangeList = () => {
    // setChangeCount(changeCount + 1);
  };

  const saveFaq = () => {
    if (isCreate) {
      const data = { summary, info };
      const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      fetch("http://localhost:4000/api/faq", options)
        .then((res) => {
          toast("Added", { type: "success" });
        })
        .catch((er) => {
          toast("Unable to Add", { type: "error" });
        });
    } else {
      const data = { id, summary, info };
      const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      fetch("http://localhost:4000/api/faq", options)
        .then((res) => {
          toast("Updated", { type: "success" });
        })
        .catch((er) => {
          toast("Unable to update", { type: "error" });
        });
    }
    onChangeList();
    onModalClose();
  };

  const onModalClose = () => {
    setModalActive(false);
    setId("");
    setSummary("");
    setInfo("");
    setIsCreate(true);
  };

  const onEditItem = (id, summary, info) => {
    setIsCreate(false);
    setId(id);
    setSummary(summary);
    setInfo(info);
    setModalActive(true);
  };
  return (
    <>
      <div className="list">
        <div className="list_add">
          <button className="btn" onClick={() => setModalActive(true)}>
            Add
          </button>
        </div>
        {faqs?.map((item) => (
          <ListRow
            key={item._id}
            id={item._id}
            summary={item.summary}
            info={item.info}
            create={item.create}
            onChangeList={onChangeList}
            onEditItem={onEditItem}
          />
        ))}
      </div>
      <Modal active={modalActive} onModalClose={onModalClose}>
        <h3 className="modal__title">{isCreate ? "Create new" : "Edit"}</h3>
        <div className="modal__row">
          <div className="modal__row-summary">
            <textarea
              className="text"
              placeholder="Summary"
              value={summary}
              rows="2"
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>
          </div>
          <div className="modal__row-info">
            <textarea
              className="text"
              placeholder="Info"
              value={info}
              rows="10"
              onChange={(e) => setInfo(e.target.value)}
            ></textarea>
          </div>
          <div className="modal__row-buttons">
            <button className="btn" onClick={saveFaq}>
              Save
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ManageFAQ;