import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function LaptopPage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.fruits[1].name}
        price={values.fruits[1].price}
        image={values.fruits[1].image}
        desc={values.fruits[1].desc}
      />
    </>
  );
}
