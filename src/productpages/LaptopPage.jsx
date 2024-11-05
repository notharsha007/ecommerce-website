import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function LaptopPage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.categories[1].name}
        price={values.categories[1].price}
        image={values.categories[1].image}
        desc={values.categories[1].desc}
      />
    </>
  );
}
