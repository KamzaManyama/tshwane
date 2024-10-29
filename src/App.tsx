import {createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from '../src/pages/LandingPage'
import Login from '../src/pages/LoginPage';
import SignUp from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Booking from "./pages/pages/HomeBooking";
import HomePages from "./pages/pages/HomePage";
import Routs from "./pages/pages/RoutingHome";
import UserPage from "./pages/pages/UserPage";


function App() {
  const router = createBrowserRouter([
    {path:"/" , element:<LandingPage/>},
    {path:"/login", element:<Login/>},
    {path:"/SignUp", element:<SignUp/>},
    {path:"/ForgotPassword", element:<ForgotPassword/>},
    {path:"/Booking", element:<Booking/>},
    {path:"/HomePages", element:<HomePages/>},
    {path:"/Routs", element:<Routs/>},
    {path:"/User", element:<UserPage/>},


  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )

}

export default App;
