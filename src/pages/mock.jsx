import { useEffect, useState } from "react";
import BoxContainer from "../components/BoxContainer";
import CardHolder from "../components/Cardholder";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import GeneralHeader from "../components/Header";
import BackButton from "../components/BackButton";
import { Breadcrumbs, Typography } from "@mui/material";
import BasicBreadcrumbs from "../components/BreadCrumbs";

// Create a new instance of the mock adapter for Axios
const mock = new AxiosMockAdapter(axios);

// Set up the mock response for fetching the values object
mock.onGet("/api/fruits").reply(200, {
  fruits: [
    {
      id: 1,
      name: "Smartphone",
      price: 699.99,
      image: "/assets/Smartphone.png",
    },
    { id: 2, name: "Laptop", price: 1099.99, image: "/assets/Laptop.png" },
    {
      id: 3,
      name: "Headphones",
      price: 199.99,
      image: "/assets/Headphones.png",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 249.99,
      image: "/assets/Smartwatch.png",
    },
    { id: 5, name: "Tablet", price: 399.99, image: "/assets/Tablet.png" },
    {
      id: 6,
      name: "Gaming-Console",
      price: 499.99,
      image: "/assets/Gaming-Console.png",
    },
    { id: 7, name: "Camera", price: 799.99, image: "/assets/Camera.png" },
    {
      id: 8,
      name: "Bluetooth-Speaker",
      price: 149.99,
      image: "/assets/Bluetooth-Speaker.png",
    },
    { id: 9, name: "Drone", price: 999.99, image: "/assets/Drone.png" },
  ],
});

export default function MockedPage() {
  const [fruits, setFruits] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

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

  // Filter fruits based on the search term
  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ position: "relative" }}>
      <GeneralHeader setSearchTerm={setSearchTerm} />
      <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
        <BackButton />
        <BasicBreadcrumbs />
      </div>
      <Typography
        variant="h4"
        align="center"
        style={{ margin: "2px " }}
      >
        Categories
      </Typography>
      <BoxContainer>
        {filteredFruits.map((fruit) => (
          <CardHolder
            key={fruit.id}
            image={fruit.image}
            name={fruit.name}
            content={fruit.price}
          />
        ))}
      </BoxContainer>
    </div>
  );
}
