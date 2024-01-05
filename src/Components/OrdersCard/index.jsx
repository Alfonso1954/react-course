import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg ">
      <p>
        <span>01.02.2023</span> - <span>10:00</span>
        <span>{totalPrice}</span>
        <span>{totalProducts}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
