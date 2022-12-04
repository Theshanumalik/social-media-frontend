import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftSideBar from "./components/leftSidebar/LeftSideBar";
import RightSideBar from "./components/rightSidebar/RightSideBar";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Profile from "./pages/profile/Profile";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <LeftSideBar />
          <Outlet />
        <RightSideBar />
      </div>
    </>
  );
};
const ProtectedRout = ({children}) => {
  const {state} = useContext(AuthContext);
  if(!state.user) {
    return <Navigate to='/login' />
  }
  return children
}
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRout><Layout /></ProtectedRout>,
      children: [
        {
          path: '/',
          element: <Home />
        },
      {
        path: "/profile/:userId",
        element: <Profile />
      }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
