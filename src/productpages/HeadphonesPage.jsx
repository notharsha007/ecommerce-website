import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function HeadphonesPage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.fruits[2].name}
        price={values.fruits[2].price}
        image={values.fruits[2].image}
        desc={values.fruits[2].desc}
      />
    </>
  );
}
