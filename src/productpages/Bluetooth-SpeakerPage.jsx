import ProductDetailsTemplate from "../components/ProductDetailsTemplate.jsx";
import {values} from "../data.js";

export default function Bluetooth_Speaker() {
  return (
    <>
      <ProductDetailsTemplate
        name={values.categories[7].name}
        price={values.categories[7].price}
        image={values.categories[7].image}
        desc={values.categories[7].desc}
      />
    </>
  );
}
