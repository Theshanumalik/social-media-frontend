import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftSideBar from "./components/leftSidebar/LeftSideBar";
import RightSideBar from "./components/rightSidebar/RightSideBar";
import Register from "./pages/register/Register";

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

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
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
