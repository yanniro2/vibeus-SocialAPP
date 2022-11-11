import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Navbar from "./Components/Navbar"
import LeftBar from "./Components/LeftBar"
import RightBar from "./Components/RightBar"
import Profile from "./Components/Profile"
import Home from "./Components/Home"
import
{
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
function App()
{
  const currentUser = true;
  const Layout = () =>
  {
    return (
      <div className="relative w-full h-full">
        <Navbar />
        <div className="relative w-full h-full top-[8%] flex justify-between ">
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    )
  }


  const ProtectRoute = ({ children }) =>
  {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectRoute ><Layout /></ProtectRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        }, {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
  ]);
  return (
    <div className="App w-screen h-screen flex items-center justify-center relative">
      {/* <Login /> */}
      {/* <Register /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
