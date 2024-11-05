import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function CameraPage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.categories[6].name}
        price={values.categories[6].price}
        image={values.categories[6].image}
        desc={values.categories[6].desc}
      />
    </>
  );
}
