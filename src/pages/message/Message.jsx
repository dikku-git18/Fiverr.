import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> > USER >
        </span>

        <div className="messages">
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg"
              alt=""
            />
            <p>
              "It was the best of times, it was the worst of times, it was the
              age of wisdom, it was the age of foolishness, it was the epoch of
              belief, it was the epoch of incredulity, it was the season of
              Light, it was the season of Darkness, it was the spring of hope,
              it was the winter of despair, we had everything before us, we ...
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg"
              alt=""
            />
            <p>
              "It was the best of times, it was the worst of times, it was the
              age of wisdom, it was the age of foolishness, it was the epoch of
              belief, it was the epoch of incredulity, it was the season of
              Light, it was the season of Darkness, it was the spring of hope,
              it was the winter of despair, we had everything before us, we ...
            </p>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg"
              alt=""
            />
            <p>
              "It was the best of times, it was the worst of times, it was the
              age of wisdom, it was the age of foolishness, it was the epoch of
              belief, it was the epoch of incredulity, it was the season of
              Light, it was the season of Darkness, it was the spring of hope,
              it was the winter of despair, we had everything before us, we ...
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg"
              alt=""
            />
            <p>
              "It was the best of times, it was the worst of times, it was the
              age of wisdom, it was the age of foolishness, it was the epoch of
              belief, it was the epoch of incredulity, it was the season of
              Light, it was the season of Darkness, it was the spring of hope,
              it was the winter of despair, we had everything before us, we ...
            </p>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg"
              alt=""
            />
            <p>
              "It was the best of times, it was the worst of times, it was the
              age of wisdom, it was the age of foolishness, it was the epoch of
              belief, it was the epoch of incredulity, it was the season of
              Light, it was the season of Darkness, it was the spring of hope,
              it was the winter of despair, we had everything before us, we ...
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg"
              alt=""
            />
            <p>
              "It was the best of times, it was the worst of times, it was the
              age of wisdom, it was the age of foolishness, it was the epoch of
              belief, it was the epoch of incredulity, it was the season of
              Light, it was the season of Darkness, it was the spring of hope,
              it was the winter of despair, we had everything before us, we ...
            </p>
          </div>
        </div>

        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};
export default Message;
