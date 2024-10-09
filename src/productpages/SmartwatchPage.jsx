import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function SmartwatchPage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.categories[3].name}
        price={values.categories[3].price}
        image={values.categories[3].image}
        desc={values.categories[3].desc}
      />
    </>
  );
}
