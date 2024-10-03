import { useEffect, useState } from "react";
import BoxContainer from "../components/BoxContainer";
import CardHolder from "../components/Cardholder";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

// Create a new instance of the mock adapter for Axios
const mock = new AxiosMockAdapter(axios);

// Set up the mock response for fetching the values object
mock.onGet("/api/fruits").reply(200, {
  fruits: [
    { name: "Apple", price: 1.5, image: "/assets/apple1.png" },
    { name: "Banana", price: 0.75, image: "/assets/banana.png" },
    { name: "Orange", price: 1.2, image: "/assets/orange.png" },
    { name: "Mango", price: 2.0, image: "/assets/mango.png" },
    { name: "Grapes", price: 2.5, image: "/assets/grapes.png" },
    { name: "Litchi", price: 5.0, image: "/assets/litchi.png" },
    { name: "Jackfruit", price: 9.0, image: "/assets/jackfruit.png" },
    { name: "Peaches", price: 8.5, image: "/assets/peaches.png" },
    { name: "Starfruit", price: 7.9, image: "/assets/starfruit.png" },
  ],
});

export default function MockedPage() {
  const [fruits, setFruits] = useState([]);

  // Fetch the values object when the component mounts
  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await axios.get("/api/fruits");
        setFruits(response.data.fruits);
      } catch (error) {
        console.error("Error fetching fruits:", error);
      }
    };

    fetchFruits();
  }, []);

  return (
    <>
      <header>
        {/* Add header content here if needed */}
      </header>
      <BoxContainer>
        {fruits.map((fruit) => (
          <CardHolder
            key={fruit.name} // Use a unique key
            image={fruit.image}
            name={fruit.name}
            content={fruit.price}
          />
        ))}
      </BoxContainer>
    </>
  );
}
