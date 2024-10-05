import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function GamingConsolePage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.fruits[5].name}
        price={values.fruits[5].price}
        image={values.fruits[5].image}
        desc={values.fruits[5].desc}
      />
    </>
  );
}
