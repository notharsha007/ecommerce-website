import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function DronePage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.categories[8].name}
        price={values.categories[8].price}
        image={values.categories[8].image}
        desc={values.categories[8].desc}
      />
    </>
  );
}
