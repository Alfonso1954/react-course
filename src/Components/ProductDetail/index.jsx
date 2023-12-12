import { XMarkIcon } from "@heroicons/react/24/solid";

import "./styles.css";
const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white ">
      <div className="flex justify-between items-center p-6">
        <h2 className="text-lg font-medium ">Product Detail</h2>
        <div>
          <XMarkIcon className="h-6 w-6 text-grid-500"></XMarkIcon>
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
