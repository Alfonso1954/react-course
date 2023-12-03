import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import Signin from "../Signin";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import MyOrder from "../MyOrder";
import NotFound from "../NotFound";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sign-in", element: <Signin /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order/:id", element: <MyOrder /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
