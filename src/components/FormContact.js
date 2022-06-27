import React, { useState, useEffect } from "react";
import "./styles/FormContact.css";

export default function FormContact() {
  const [FormValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...FormValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validationForm(FormValue));
    setSubmit(true);
  };

  const validationForm = (value) => {
    const errors = {};
    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value.name) {
      errors.name = "This field is required";
    }
    if (!value.email) {
      errors.email = "This field is required";
    } else if (!emailPattern.test(value.email)) {
      errors.email = "Enter valid Email";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(FormValue);
      alert("Email sent");
    }
  }, [formError, FormValue, isSubmit]);

  return (
    <div className="contact-out" id="contact">
      <div className="contact">
        <h1 className="contact-hero">QUESTION? WE ARE HERE TO HELP!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="text-name-email">
            <div className="text-name">
              <label>NAME</label>
              <input
                type="text"
                name="name"
                autoComplete="none"
                value={FormValue.name}
                onChange={handleValidation}
              />
              <p className="error-msg">{formError.name}</p>
            </div>

            <div className="text-email">
              <label>EMAIL</label>
              <input
                type="text"
                name="email"
                autoComplete="none"
                value={FormValue.email}
                onChange={handleValidation}
              />
              <p className="error-msg">{formError.email}</p>
            </div>
          </div>

          <div className="text-message">
            <label>MESSAGE</label>
            <input
              type="text"
              name="message"
              autoComplete="none"
              value={FormValue.message}
            />
          </div>

          <button
            className="btn-form"
            id="btn-form"
            name="button"
            type="submit"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
