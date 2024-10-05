import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function SmartwatchPage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.fruits[3].name}
        price={values.fruits[3].price}
        image={values.fruits[3].image}
        desc={values.fruits[3].desc}
      />
    </>
  );
}
