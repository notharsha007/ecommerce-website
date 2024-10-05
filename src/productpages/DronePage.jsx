import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function DronePage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.fruits[8].name}
        price={values.fruits[8].price}
        image={values.fruits[8].image}
        desc={values.fruits[8].desc}
      />
    </>
  );
}
