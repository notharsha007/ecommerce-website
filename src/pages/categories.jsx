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
mock.onGet("/api/categories").reply(200, {
  categories: [
    {
      name: "Smartphone",
      price: 699.99,
      image: "/assets/Smartphone.png",
      desc: "The latest smartphone boasts advanced features such as a high-resolution camera, fast processing speed, and a sleek design.",
      models: [
        {
          name: "Samsung Galaxy S21",
          price: 799.99,
          desc: "A premium smartphone with 120Hz AMOLED display and advanced camera features.",
        },
        {
          name: "Apple iPhone 13",
          price: 999.99,
          desc: "The latest iPhone with an A15 Bionic chip and improved battery life.",
        },
        {
          name: "Oppo Find X3",
          price: 699.99,
          desc: "An affordable flagship with an excellent display and fast charging capabilities.",
        },
      ],
    },
    {
      name: "Laptop",
      price: 1099.99,
      image: "/assets/Laptop.png",
      desc: "This powerful laptop is designed for both gaming and productivity.",
      models: [
        {
          name: "Dell XPS 13",
          price: 1199.99,
          desc: "A high-performance ultrabook with excellent battery life and a stunning display.",
        },
        {
          name: "Apple MacBook Pro",
          price: 1499.99,
          desc: "Apple’s flagship laptop with the M1 chip for top-notch performance.",
        },
        {
          name: "HP Spectre x360",
          price: 999.99,
          desc: "A 2-in-1 laptop with a sleek design and great battery life.",
        },
      ],
    },
    {
      name: "Headphones",
      price: 199.99,
      image: "/assets/Headphones.png",
      desc: "These wireless headphones offer an immersive audio experience with noise cancellation features.",
      models: [
        {
          name: "Sony WH-1000XM4",
          price: 349.99,
          desc: "Premium noise-cancelling headphones with superior sound quality.",
        },
        {
          name: "Bose QuietComfort 35 II",
          price: 299.99,
          desc: "High-quality noise-cancelling headphones with a comfortable fit.",
        },
        {
          name: "Apple AirPods Max",
          price: 549.99,
          desc: "Apple’s over-ear headphones with spatial audio and active noise cancellation.",
        },
      ],
    },
    {
      name: "Smartwatch",
      price: 249.99,
      image: "/assets/Smartwatch.png",
      desc: "Stay connected and track your health with this feature-packed smartwatch.",
      models: [
        {
          name: "Apple Watch Series 7",
          price: 399.99,
          desc: "The latest Apple Watch with advanced health tracking and a larger display.",
        },
        {
          name: "Samsung Galaxy Watch 4",
          price: 299.99,
          desc: "A feature-rich smartwatch with body composition analysis and Google WearOS.",
        },
        {
          name: "Fitbit Sense",
          price: 249.99,
          desc: "A smartwatch focused on health tracking with stress management features.",
        },
      ],
    },
    {
      name: "Tablet",
      price: 399.99,
      image: "/assets/Tablet.png",
      desc: "This lightweight tablet is perfect for browsing the web and streaming shows.",
      models: [
        {
          name: "Apple iPad Air",
          price: 599.99,
          desc: "A versatile tablet with the A14 Bionic chip and support for the Apple Pencil.",
        },
        {
          name: "Samsung Galaxy Tab S7",
          price: 649.99,
          desc: "A powerful Android tablet with a 120Hz display and S Pen support.",
        },
        {
          name: "Microsoft Surface Go 3",
          price: 499.99,
          desc: "A compact Windows tablet with a built-in kickstand and support for a keyboard.",
        },
      ],
    },
    {
      name: "Gaming-Console",
      price: 499.99,
      image: "/assets/Gaming-Console.png",
      desc: "Experience gaming like never before with this next-gen gaming console.",
      models: [
        {
          name: "PlayStation 5",
          price: 499.99,
          desc: "Sony’s latest console with stunning 4K graphics and fast load times.",
        },
        {
          name: "Xbox Series X",
          price: 499.99,
          desc: "Microsoft’s most powerful console with excellent backward compatibility.",
        },
        {
          name: "Nintendo Switch",
          price: 299.99,
          desc: "A versatile console that can switch between handheld and docked modes.",
        },
      ],
    },
    {
      name: "Camera",
      price: 799.99,
      image: "/assets/Camera.png",
      desc: "Capture stunning photos and videos with this high-resolution camera.",
      models: [
        {
          name: "Canon EOS R5",
          price: 3899.99,
          desc: "A professional mirrorless camera with 8K video capabilities and superb image quality.",
        },
        {
          name: "Sony Alpha a7 III",
          price: 1999.99,
          desc: "A full-frame mirrorless camera with great autofocus and 4K video recording.",
        },
        {
          name: "Nikon Z6 II",
          price: 1799.99,
          desc: "A high-quality mirrorless camera with great low-light performance.",
        },
      ],
    },
    {
      name: "Bluetooth-Speaker",
      price: 149.99,
      image: "/assets/Bluetooth-Speaker.png",
      desc: "Enjoy your favorite music with this portable Bluetooth speaker.",
      models: [
        {
          name: "JBL Flip 5",
          price: 119.99,
          desc: "A portable Bluetooth speaker with powerful sound and waterproof design.",
        },
        {
          name: "Bose SoundLink Revolve+",
          price: 299.99,
          desc: "A high-end Bluetooth speaker with 360-degree sound and deep bass.",
        },
        {
          name: "Ultimate Ears Boom 3",
          price: 149.99,
          desc: "A rugged and waterproof Bluetooth speaker with great sound quality.",
        },
      ],
    },
    {
      name: "Drone",
      price: 999.99,
      image: "/assets/Drone.png",
      desc: "Take your photography and videography to new heights with this advanced drone.",
      models: [
        {
          name: "DJI Mavic Air 2",
          price: 799.99,
          desc: "A compact drone with 4K video recording and intelligent flight modes.",
        },
        {
          name: "DJI Phantom 4 Pro",
          price: 1499.99,
          desc: "A professional-grade drone with a 1-inch sensor and 4K video at 60fps.",
        },
        {
          name: "Parrot Anafi",
          price: 699.99,
          desc: "A lightweight and foldable drone with 4K HDR video capabilities.",
        },
      ],
    },
  ],
});

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((categorie) =>
    categorie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        height: "100vh", // Ensure it takes up the full viewport height
        overflowX: "hidden", // Prevent horizontal scrolling
        display: "flex", // Use flexbox to align content
        flexDirection: "column", // Stack children vertically
      }}
    >
      {/* Header */}
      <div
        style={{
          flexShrink: 0, // Prevent the header from shrinking
          overflow: "hidden", // Hide any overflowing content in the header
          padding: 0, // Remove padding to prevent overflow
          margin: 0, // Remove margin if any
        }}
      >
        <GeneralHeader setSearchTerm={setSearchTerm} />
      </div>

      {/* Scrollable Content */}
      <div
        style={{
          flexGrow: 1, // Allow this div to grow and take available space
          overflowY: "auto", // Allow vertical scrolling
          padding: "16px", // Add some padding around the content
        }}
      >
        {/* Breadcrumbs and Title */}
        <div
          style={{
            flexShrink: 0, // Prevent shrinking for breadcrumbs and title
            marginBottom: "16px",
          }}
        >
          <BasicBreadcrumbs />
          <Typography variant="h4" align="center" style={{ margin: "2px" }}>
            Categories
          </Typography>
        </div>

        <BoxContainer>
          {filteredCategories.map((category) => (
            <CardHolder
              key={category.name} // Use name as key since id is missing
              image={category.image}
              name={category.name}
              content={category.price}
            />
          ))}
        </BoxContainer>
      </div>
    </div>
  );
}
