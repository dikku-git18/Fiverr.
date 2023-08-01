import React from "react"
import  Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home"
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import MyGigs from "./pages/myGigs/MyGigs";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import "./app.scss";
import Featured from "./components/featured/Featured";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


function App() {

  const Layout =()=>{
    return(
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>,
        },
        {
          path:"/gigs",
          element: <Gigs/>
        },
        {
          path:"/gig/:id",
          element: <Gig/>
        },
        {
          path:"/add",
          element: <Add/>
        },
        {
          path:"/orders",
          element: <Orders/>
        },
        {
          path:"/myGigs",
          element: <MyGigs/>
        },
        {
          path:"/message/:id",
          element: <Message/>
        },
        {
          path:"/messages",
          element: <Messages/>
        },
      ]
    },
  ]);

  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
