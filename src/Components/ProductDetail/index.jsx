import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context";
import "./styles.css";
const ProductDetail = () => {
  const context = useContext(ShoppingCardContext);
  return (
    <aside
      className={
        "${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white"
      }
    >
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
