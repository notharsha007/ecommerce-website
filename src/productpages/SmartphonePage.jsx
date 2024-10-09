import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function SmartphonePage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.categories[0].name}
        price={values.categories[0].price}
        image={values.categories[0].image}
        desc={values.categories[0].desc}
      />
    </>
  );
}
