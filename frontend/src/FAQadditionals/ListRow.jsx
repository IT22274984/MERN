import React from "react";
import { toast } from "react-toastify";

const ListRow = ({
  id,
  summary,
  info,
  create = false,
  onChangeList,
  onEditItem,
}) => {
  const deleteFaq = () => {
    const data = { id: id };
    const options = {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    fetch("http://localhost:4000/api/faq", options)
      .then((res) => {
        toast("Deleted", { type: "success" });
      })
      .catch((er) => {
        toast("Unable to delete", { type: "error" });
      });
    onChangeList();
  };

  return (
    <>
      <div className="list__row">
        <div
          className="list_row-left"
          onClick={() => onEditItem(id, summary, info)}
        >
          <p className="list__row-summary">Summary: {summary}</p>
          <p className="list__row-info">Info: {info}</p>
        </div>
        <div className="list__row-buttons">
          <button className="btn" onClick={deleteFaq}>
            Delete
          </button>
        </div>
      </div>
      <div className="list_row-devider"></div>
    </>
  );
};

export default ListRow;
