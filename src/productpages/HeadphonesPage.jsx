import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function HeadphonesPage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.categories[2].name}
        price={values.categories[2].price}
        image={values.categories[2].image}
        desc={values.categories[2].desc}
      />
    </>
  );
}
