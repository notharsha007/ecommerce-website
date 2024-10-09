import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function GamingConsolePage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.categories[5].name}
        price={values.categories[5].price}
        image={values.categories[5].image}
        desc={values.categories[5].desc}
      />
    </>
  );
}
