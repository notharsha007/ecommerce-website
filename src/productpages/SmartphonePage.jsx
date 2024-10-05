import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function SmartphonePage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.fruits[0].name}
        price={values.fruits[0].price}
        image={values.fruits[0].image}
        desc={values.fruits[0].desc}
      />
    </>
  );
}
