import "./styles.css";
const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white ">
      <div className="flex justify-between items-center p-6">
        <h2 className="text-lg font-medium ">Product Detail</h2>
      </div>
      <buttom>
        <i className="fa-solid fa-xmark"></i> +{" "}
      </buttom>
    </aside>
  );
};

export default ProductDetail;
