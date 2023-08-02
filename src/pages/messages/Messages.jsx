import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Motilonians",
    isSeller: true,
  };

  const message = "Hi Dan, it looks like you had an issue with your order. Sorry about that. We’re working on it right now and will be in touch with updates within 24 hours."

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>
              User1
            </td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
                <button>Mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>
              User2
            </td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
                <button>Mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>
              User3
            </td>
            <td><Link to="/message/123" className="link" >{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
                <button>Mark as read</button>
            </td>
          </tr>
          <tr >
            <td>
              User4
            </td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            {/* <td>
                <button>Mark as read</button>
            </td> */}
          </tr>
          <tr >
            <td>
              User5
            </td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            {/* <td>
                <button>Mark as read</button>
            </td> */}
          </tr>
          <tr >
            <td>
              User6
            </td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            {/* <td>
                <button>Mark as read</button>
            </td> */}
          </tr>

          <tr >
            <td>
              User7
            </td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            {/* <td>
                <button>Mark as read</button>
            </td> */}
          </tr>
          <tr >
            <td>
              User8
            </td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            {/* <td>
                <button>Mark as read</button>
            </td> */}
          </tr>
          <tr>
            <td>
              User9
            </td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            {/* <td>
                <button>Mark as read</button>
            </td> */}
          </tr>
          
        </table>
      </div>
    </div>
  );
};
export default Messages;
