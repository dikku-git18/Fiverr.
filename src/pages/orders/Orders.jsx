import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Motilonians",
    isSeller: true,
  };

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className="delete" src="/images/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Orders;
