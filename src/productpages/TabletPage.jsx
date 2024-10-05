import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function TabletPage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.fruits[4].name}
        price={values.fruits[4].price}
        image={values.fruits[4].image}
        desc={values.fruits[4].desc}
      />
    </>
  );
}
