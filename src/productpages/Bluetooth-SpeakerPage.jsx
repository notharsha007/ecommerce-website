import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import {values} from "../data.js";

export default function Bluetooth_Speaker() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.fruits[7].name}
        price={values.fruits[7].price}
        image={values.fruits[7].image}
        desc={values.fruits[7].desc}
      />
    </>
  );
}
