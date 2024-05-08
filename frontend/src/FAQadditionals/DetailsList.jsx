import React from "react";
import Detail from "./Detail";

const DetailsList = ({ details }) => {

  if (!details || !Array.isArray(details) || details.length === 0) {
    return <div>Backend not connected !!!</div>;}

  return (
    <>
      {details.map(item =>
        <Detail
          key={item._id}
          summary={item.summary}
          info={item.info}
        />
      )}
    </>
  );
};

export default DetailsList;