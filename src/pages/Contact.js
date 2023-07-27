import React, { useState } from "react";
import Input from "../components/form/Input";
import TextArea from "../components/form/TextArea";

function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    msg: "",
    type: "",
  });

  const { name, email, query, phone } = user;

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_EMAIL_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, query, phone }),
      });
      const data = await response.json();
      const isSuccess = data.success;
      if (isSuccess) {
        setMessage({
          msg: "Your mail was succesfully send!!",
          type: "success",
        });
      } else {
        setMessage({
          msg: "Something is wrong, try again later!!",
          type: "danger",
        });
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (name, id) => {
    setUser({ ...user, [name]: id });
  };

  return (
    <div className="container my-5">
      {message.msg && (
        <div
          className={`alert alert-${message.type} alert-dismissible fade show`}
          role="alert"
        >
          {message.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      {loading && (
        <div className="text-center fs-1">
          <p>Loading...</p>
        </div>
      )}
      {!loading && (
        <div>
          <div>
            <h2>Contact Me Via Sending Your Details</h2>
            <div className="m-4">
              <form onSubmit={sendMessage}>
                <Input
                  value={name}
                  name="Name"
                  id="name"
                  type="text"
                  placeHolder="Enter Name..."
                  handleChange={handleChange}
                />
                <Input
                  value={email}
                  name="Email Address"
                  id="email"
                  type="email"
                  placeHolder="Enter Email..."
                  handleChange={handleChange}
                />
                <Input
                  value={phone}
                  name="Phone Number"
                  id="phone"
                  type="number"
                  placeHolder="Enter Contact Number..."
                  handleChange={handleChange}
                  length={10}
                />
                <TextArea
                  value={query}
                  name="Enquery"
                  id="query"
                  type="text"
                  placeHolder="Enter Your Enquery..."
                  row={5}
                  handleChange={handleChange}
                />
                <button type="submit" className="btn btn-lg btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div>
            <h2>Contact Me Via Following Details</h2>
            <div className="m-4">
              <h5>Contact me: +91-7011641548</h5>
              <h5>Email me: vikasaggrawal700@gmail.com</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
