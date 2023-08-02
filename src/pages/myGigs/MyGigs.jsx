import React from 'react'
import "./MyGigs.scss"
import { Link } from 'react-router-dom'

const MyGigs =()=>{
    return (
        <div className = 'myGigs'>
        <div className='container'>
            <div className='title'>
                <h1>Gigs</h1>
                <Link to="/add">
                    <button>Add New Gig</button>
                </Link>
            </div>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>
                        <img className='img' src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg' alt=''/>
                    </td>
                    <td>Gig1</td>
                    <td>88</td>     
                    <td>123</td>
                    <td>
                        <img className='delete' src='/images/delete.png' alt=''/>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <img className='img' src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg' alt=''/>
                    </td>
                    <td>Gig1</td>
                    <td>88</td>     
                    <td>123</td>
                    <td>
                        <img className='delete' src='/images/delete.png' alt=''/>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <img className='img' src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg' alt=''/>
                    </td>
                    <td>Gig1</td>
                    <td>88</td>     
                    <td>123</td>
                    <td>
                        <img className='delete' src='/images/delete.png' alt=''/>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <img className='img' src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg' alt=''/>
                    </td>
                    <td>Gig1</td>
                    <td>88</td>     
                    <td>123</td>
                    <td>
                        <img className='delete' src='/images/delete.png' alt=''/>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <img className='img' src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg' alt=''/>
                    </td>
                    <td>Gig1</td>
                    <td>88</td>     
                    <td>123</td>
                    <td>
                        <img className='delete' src='/images/delete.png' alt=''/>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <img className='img' src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg' alt=''/>
                    </td>
                    <td>Gig1</td>
                    <td>88</td>     
                    <td>123</td>
                    <td>
                        <img className='delete' src='/images/delete.png' alt=''/>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <img className='img' src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg' alt=''/>
                    </td>
                    <td>Gig1</td>
                    <td>88</td>     
                    <td>123</td>
                    <td>
                        <img className='delete' src='/images/delete.png' alt=''/>
                    </td>
                    
                </tr>
            </table>
        </div>
        </div>
    )
}
export default MyGigs