import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import { values } from "../data.js";

export default function CameraPage() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.fruits[6].name}
        price={values.fruits[6].price}
        image={values.fruits[6].image}
        desc={values.fruits[6].desc}
      />
    </>
  );
}
