import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { orderNumber, totalPrice, totalProducts } = props;

  return (
    <div className="flex flex-col justify-between items-center mb-3 border border-black rounded-lg p-4 w-80 h-30">
      {/* Primera fila: Orden con contador */}
      <div className="w-full flex justify-between items-center mb-2">
        <span className="font-bold">Orden:</span>
        <span className="font-bold">{orderNumber}</span>{" "}
        {/* Supongo que 'orderNumber' es la prop que representa el número de orden */}
      </div>

      {/* Segunda fila: Fecha y Precio */}
      <div className="w-full flex justify-between items-center mb-2">
        <span className="font-bold">Fecha:</span>
        <span className="">{new Date().toLocaleDateString()}</span>{" "}
        {/* Fecha actual */}
      </div>
      <div className="w-full flex justify-between items-center mb-2">
        <span className="font-bold">Precio:</span>
        <span className="font-bold">$ {totalPrice}</span>{" "}
        {/* Mostrando el precio con el símbolo $ */}
      </div>

      {/* Tercera fila: Articles y Número de artículos */}
      <div className="w-full flex justify-between items-center">
        <span className="font-bold">Articles:</span>
        <span className="font-bold">{totalProducts}</span>

        <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
      </div>
    </div>
  );
};

export default OrdersCard;
