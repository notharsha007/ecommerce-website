import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function TabletPage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.categories[4].name}
        price={values.categories[4].price}
        image={values.categories[4].image}
        desc={values.categories[4].desc}
      />
    </>
  );
}
