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
    { name: "Smartphone", price: 699.99, image: "/assets/Smartphone.png" },
    { name: "Laptop", price: 1099.99, image: "/assets/Laptop.png" },
    { name: "Headphones", price: 199.99, image: "/assets/Headphones.png" },
    { name: "Smartwatch", price: 249.99, image: "/assets/Smartwatch.png" },
    { name: "Tablet", price: 399.99, image: "/assets/Tablet.png" },
    {
      name: "Gaming-Console",
      price: 499.99,
      image: "/assets/Gaming-Console.png",
    },
    { name: "Camera", price: 799.99, image: "/assets/Camera.png" },
    {
      name: "Bluetooth-Speaker",
      price: 149.99,
      image: "/assets/Bluetooth-Speaker.png",
    },
    { name: "Drone", price: 999.99, image: "/assets/Drone.png" },
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
  );
}
