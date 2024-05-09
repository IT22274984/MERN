import React, { useRef, useState } from "react";
import emailjs from "emailjs-com"; // Correct import statement
import "../css/status.css";


const FormComponent = (props) => {
  const form = useRef();

  //   const [formData, setFormData] = useState({
  //     user_name: "",
  //     user_email: "",
  //     message: "",
  //   });

  //   const handleOnChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gno29wf",
        "template_aom0df2",
        form.current,
        "hyDMrgasuqpaiV0Cg"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="addContainer">
      <FormTable
        handleSubmit={(e) => {
          props.handleSubmit(e);
          sendEmail(e);
        }}
        form={form}
        handleOnChange={props.handleOnChange}
        formData={props.rest}
      />
    </div>
  );
};

const FormTable = ({ handleSubmit, form, handleOnChange, formData }) => {
  const validateInput = (event) => {
    const { name, value } = event.target;

    if (name === "user_name") {
      const re = /^[a-zA-Z\s]*$/; 
      if (value === "" || re.test(value)) {
        handleOnChange(event);
      }
  
    } else {
      handleOnChange(event);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <label htmlFor="user_name">Customer Name:</label>
      <input
        type="text"
        id="user_name"
        name="user_name"
        onChange={validateInput}
        value={formData?.user_name}
      />

      <label htmlFor="user_email">Customer Email:</label>
      <input
        type="email"
        id="user_email"
        name="user_email"
        onChange={validateInput}
        value={formData?.user_email}
      />
   
      <label htmlFor="message">Status:</label>
      <select
        id="message"
        name="message"
        onChange={handleOnChange}
        value={formData?.message}
      >
        <option value="Order Placed">Order Placed</option>
        <option value="Order Confirmed">Order Confirmed</option>
        <option value="Processing">Processing</option>
        <option value="Ready for Shipping">Ready for Shipping</option>
        <option value="Shipped">Shipped</option>
      </select>
      <input className="btn" type="submit" value="Send" />
    </form>
  );
};

export default FormComponent;
