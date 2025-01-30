import ProductContent from "../../features/client/product/ProductContent";
import Header from "../../ui/Header";
const name = "Short black dress";
export default function Product() {
  return (
    <>
      <Header>{name}</Header>
      <ProductContent />
    </>
  );
}
