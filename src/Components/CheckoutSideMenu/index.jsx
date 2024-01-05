import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
    context.setCount(filteredProducts.length);
    context.setCount(filteredProducts.length);
  };
  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-blue-50`}
    >
      <div className="flex justify-between items-center p-3">
        {/**  Mostrar el contador de artículos aquí */}
        <h2 className="font-medium text-xl">
          My Order ({context.count} items)
        </h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black bold cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-3">
        <p className="flex justify-between items-center gap-2 ">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl mb-2">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <button
          className="w-full bg-blue-500 text-black py-3 rounded-lg prounded-lg p-2 btn btn-primary"
          onClick={() => handleCheckout()}
        >
          checkout
        </button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
