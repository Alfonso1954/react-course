import Home from "../Home";
import Signin from "../Signin";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import MyOrder from "../MyOrder";
import NotFound from "../NotFound";
import "./App.css";

function App() {
  return (
    <div className="App" bg="red-200">
      <Home />
      <Signin />
      <MyAccount />
      <MyOrders />
      <MyOrder />
      <NotFound />
    </div>
  );
}

export default App;
