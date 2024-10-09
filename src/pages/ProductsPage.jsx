import { useEffect, useState } from "react";
import BoxContainer from "../components/BoxContainer";
import CardHolder from "../components/Cardholder";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import GeneralHeader from "../components/Header";
import { Breadcrumbs, Typography } from "@mui/material";
import BasicBreadcrumbs from "../components/BreadCrumbs";

// Create a new instance of the mock adapter for Axios
const mock = new AxiosMockAdapter(axios);

// Set up the mock response for fetching the values object
mock.onGet("/api/categories").reply(200, {
  "categories": [
    {
      "name": "Smartphone",
      "price": 699.99,
      "image": "/assets/Smartphone.png",
      "desc": "The latest smartphone boasts advanced features such as a high-resolution camera, fast processing speed, and a sleek design.",
      "models": [
        {
          "name": "Samsung Galaxy S21",
          "price": 799.99,
          "desc": "A premium smartphone with 120Hz AMOLED display and advanced camera features."
        },
        {
          "name": "Apple iPhone 13",
          "price": 999.99,
          "desc": "The latest iPhone with an A15 Bionic chip and improved battery life."
        },
        {
          "name": "Oppo Find X3",
          "price": 699.99,
          "desc": "An affordable flagship with an excellent display and fast charging capabilities."
        },
        {
          "name": "Google Pixel 6",
          "price": 599.99,
          "desc": "Google's latest phone with a custom-built Tensor chip and advanced AI features."
        },
        {
          "name": "OnePlus 9 Pro",
          "price": 799.99,
          "desc": "A flagship smartphone with a Fluid AMOLED 120Hz display and fast wireless charging."
        },
        {
          "name": "Xiaomi Mi 11",
          "price": 749.99,
          "desc": "A feature-rich smartphone with a high-resolution display and 108MP camera."
        },
        {
          "name": "Sony Xperia 1 Mark 3",
          "price": 1199.99,
          "desc": "A high-end smartphone with a 4K HDR OLED display and pro-grade camera system."
        },
        {
          "name": "Asus ROG Phone 5",
          "price": 999.99,
          "desc": "A gaming smartphone with a 144Hz display, advanced cooling system, and top-tier performance."
        },
        {
          "name": "Vivo X70 Pro+",
          "price": 899.99,
          "desc": "A flagship phone with advanced camera features and a premium design."
        }
      ]
    },
    {
      "name": "Laptop",
      "price": 1099.99,
      "image": "/assets/Laptop.png",
      "desc": "This powerful laptop is designed for both gaming and productivity.",
      "models": [
        {
          "name": "Dell XPS 13",
          "price": 1199.99,
          "desc": "A high-performance ultrabook with excellent battery life and a stunning display."
        },
        {
          "name": "Apple MacBook Pro",
          "price": 1499.99,
          "desc": "Apple’s flagship laptop with the M1 chip for top-notch performance."
        },
        {
          "name": "HP Spectre x360",
          "price": 999.99,
          "desc": "A 2-in-1 laptop with a sleek design and great battery life."
        },
        {
          "name": "Lenovo ThinkPad X1 Carbon",
          "price": 1399.99,
          "desc": "A premium business laptop with exceptional build quality and performance."
        },
        {
          "name": "ASUS ROG Zephyrus G14",
          "price": 1499.99,
          "desc": "A powerful gaming laptop with AMD Ryzen 9 and NVIDIA GeForce RTX 3060."
        },
        {
          "name": "Acer Swift 3",
          "price": 699.99,
          "desc": "A lightweight laptop with great performance and long battery life."
        },
        {
          "name": "Microsoft Surface Laptop 4",
          "price": 1299.99,
          "desc": "A versatile laptop with a beautiful touchscreen and excellent keyboard."
        },
        {
          "name": "Razer Blade Stealth 13",
          "price": 1799.99,
          "desc": "A compact gaming laptop with a sleek design and powerful hardware."
        },
        {
          "name": "Dell G5 15",
          "price": 999.99,
          "desc": "A gaming laptop that offers a balance of performance and affordability."
        }
      ]
    },
    {
      "name": "Headphones",
      "price": 199.99,
      "image": "/assets/Headphones.png",
      "desc": "These wireless headphones offer an immersive audio experience with noise cancellation features.",
      "models": [
        {
          "name": "Sony WH-1000XM4",
          "price": 349.99,
          "desc": "Premium noise-cancelling headphones with superior sound quality."
        },
        {
          "name": "Bose QuietComfort 35 II",
          "price": 299.99,
          "desc": "High-quality noise-cancelling headphones with a comfortable fit."
        },
        {
          "name": "Apple AirPods Max",
          "price": 549.99,
          "desc": "Apple’s over-ear headphones with spatial audio and active noise cancellation."
        },
        {
          "name": "Sennheiser HD 450BT",
          "price": 199.99,
          "desc": "Wireless headphones with noise cancellation and great sound quality."
        },
        {
          "name": "Jabra Elite 85h",
          "price": 249.99,
          "desc": "Smart noise-cancelling headphones with voice assistant support."
        },
        {
          "name": "Beats Solo Pro",
          "price": 299.99,
          "desc": "Over-ear headphones with active noise cancellation and Apple H1 chip."
        },
        {
          "name": "Bang & Olufsen Beoplay H4",
          "price": 349.99,
          "desc": "Luxury headphones with excellent sound quality and premium materials."
        },
        {
          "name": "Anker Soundcore Life Q30",
          "price": 89.99,
          "desc": "Affordable noise-cancelling headphones with great battery life."
        },
        {
          "name": "Focal Listen Wireless",
          "price": 249.99,
          "desc": "High-quality wireless headphones with immersive sound."
        }
      ]
    },
    {
      "name": "Smartwatch",
      "price": 249.99,
      "image": "/assets/Smartwatch.png",
      "desc": "Stay connected and track your health with this feature-packed smartwatch.",
      "models": [
        {
          "name": "Apple Watch Series 7",
          "price": 399.99,
          "desc": "The latest Apple Watch with advanced health tracking and a larger display."
        },
        {
          "name": "Samsung Galaxy Watch 4",
          "price": 299.99,
          "desc": "A feature-rich smartwatch with body composition analysis and Google WearOS."
        },
        {
          "name": "Fitbit Sense",
          "price": 249.99,
          "desc": "A smartwatch focused on health tracking with stress management features."
        },
        {
          "name": "Garmin Venu 2",
          "price": 399.99,
          "desc": "A smartwatch with built-in GPS and a vibrant AMOLED display."
        },
        {
          "name": "Fossil Gen 5",
          "price": 299.99,
          "desc": "Stylish smartwatch with Wear OS and customizable watch faces."
        },
        {
          "name": "Amazfit GTR 3",
          "price": 199.99,
          "desc": "Affordable smartwatch with long battery life and fitness tracking."
        },
        {
          "name": "Suunto 7",
          "price": 499.99,
          "desc": "Multisport GPS smartwatch with offline maps and sports features."
        },
        {
          "name": "TicWatch Pro 3",
          "price": 299.99,
          "desc": "Smartwatch with dual-layer display and long battery life."
        },
        {
          "name": "Withings Steel HR",
          "price": 199.99,
          "desc": "Hybrid smartwatch with fitness tracking and a stylish design."
        }
      ]
    },
    {
      "name": "Tablet",
      "price": 399.99,
      "image": "/assets/Tablet.png",
      "desc": "This lightweight tablet is perfect for browsing the web and streaming shows.",
      "models": [
        {
          "name": "Apple iPad Air",
          "price": 599.99,
          "desc": "A versatile tablet with the A14 Bionic chip and support for the Apple Pencil."
        },
        {
          "name": "Samsung Galaxy Tab S7",
          "price": 649.99,
          "desc": "A powerful Android tablet with a 120Hz display and S Pen support."
        },
        {
          "name": "Microsoft Surface Go 3",
          "price": 499.99,
          "desc": "A compact Windows tablet with a built-in kickstand and support for a keyboard."
        },
        {
          "name": "Lenovo Tab P11 Pro",
          "price": 499.99,
          "desc": "A premium Android tablet with an OLED display and long battery life."
        },
        {
          "name": "Amazon Fire HD 10",
          "price": 149.99,
          "desc": "An affordable tablet for media consumption and light browsing."
        },
        {
          "name": "Huawei MatePad Pro",
          "price": 599.99,
          "desc": "A powerful tablet with a high-resolution display and stylus support."
        },
        {
          "name": "Samsung Galaxy Tab A7",
          "price": 229.99,
          "desc": "A budget-friendly tablet with decent performance and a large display."
        },
        {
          "name": "Xiaomi Pad 5",
          "price": 399.99,
          "desc": "A versatile tablet with a high-refresh-rate display and good audio."
        },
        {
          "name": "Asus ZenPad 3S 10",
          "price": 299.99,
          "desc": "A stylish tablet with a premium design and great performance."
        }
      ]
    },
    {
      "name": "Gaming-Console",
      "price": 499.99,
      "image": "/assets/Gaming-Console.png",
      "desc": "Experience gaming like never before with this next-gen gaming console.",
      "models": [
        {
          "name": "PlayStation 5",
          "price": 499.99,
          "desc": "Sony’s latest console with stunning 4K graphics and fast load times."
        },
        {
          "name": "Xbox Series X",
          "price": 499.99,
          "desc": "Microsoft’s most powerful console with excellent backward compatibility."
        },
        {
          "name": "Nintendo Switch",
          "price": 299.99,
          "desc": "A versatile console that can switch between handheld and docked modes."
        },
        {
          "name": "Sony PlayStation 4 Pro",
          "price": 399.99,
          "desc": "An upgraded version of the PS4 with 4K gaming capabilities."
        },
        {
          "name": "Xbox Series S",
          "price": 299.99,
          "desc": "A compact and affordable next-gen console for casual gamers."
        },
        {
          "name": "Oculus Quest 2",
          "price": 299.99,
          "desc": "A standalone VR headset with a vast library of games."
        },
        {
          "name": "Nintendo Switch Lite",
          "price": 199.99,
          "desc": "A handheld-only version of the Nintendo Switch."
        },
        {
          "name": "Razer Kishi",
          "price": 79.99,
          "desc": "A mobile gaming controller that enhances your gaming experience."
        },
        {
          "name": "Hyperkin RetroN 5",
          "price": 99.99,
          "desc": "A retro gaming console that plays multiple cartridge formats."
        }
      ]
    },
    {
      "name": "Camera",
      "price": 799.99,
      "image": "/assets/Camera.png",
      "desc": "Capture stunning photos and videos with this high-resolution camera.",
      "models": [
        {
          "name": "Canon EOS R5",
          "price": 3899.99,
          "desc": "A professional mirrorless camera with 8K video capabilities and superb image quality."
        },
        {
          "name": "Sony Alpha a7 III",
          "price": 1999.99,
          "desc": "A full-frame mirrorless camera with great autofocus and 4K video recording."
        },
        {
          "name": "Nikon Z6 II",
          "price": 1799.99,
          "desc": "A high-quality mirrorless camera with great low-light performance."
        },
        {
          "name": "Fujifilm X-T4",
          "price": 1699.99,
          "desc": "A versatile mirrorless camera with excellent video capabilities."
        },
        {
          "name": "Panasonic Lumix GH5",
          "price": 1399.99,
          "desc": "A professional camera with 4K video recording and advanced features."
        },
        {
          "name": "Sony ZV-E10",
          "price": 699.99,
          "desc": "A compact camera designed for vloggers and content creators."
        },
        {
          "name": "Canon EOS M50 Mark II",
          "price": 599.99,
          "desc": "An entry-level mirrorless camera with great autofocus and video capabilities."
        },
        {
          "name": "GoPro HERO10 Black",
          "price": 499.99,
          "desc": "A rugged action camera capable of shooting 5.3K video."
        },
        {
          "name": "Nikon D7500",
          "price": 899.99,
          "desc": "A DSLR camera with excellent image quality and fast performance."
        }
      ]
    },
    {
      "name": "Bluetooth-Speaker",
      "price": 149.99,
      "image": "/assets/Bluetooth-Speaker.png",
      "desc": "Enjoy your favorite music with this portable Bluetooth speaker.",
      "models": [
        {
          "name": "JBL Flip 5",
          "price": 119.99,
          "desc": "A portable Bluetooth speaker with powerful sound and waterproof design."
        },
        {
          "name": "Bose SoundLink Revolve+",
          "price": 299.99,
          "desc": "A high-end Bluetooth speaker with 360-degree sound and deep bass."
        },
        {
          "name": "Ultimate Ears Boom 3",
          "price": 149.99,
          "desc": "A rugged and waterproof Bluetooth speaker with great sound quality."
        },
        {
          "name": "Anker Soundcore 2",
          "price": 39.99,
          "desc": "Affordable Bluetooth speaker with impressive sound quality."
        },
        {
          "name": "Marshall Stockwell II",
          "price": 249.99,
          "desc": "A stylish portable speaker with rich sound and vintage design."
        },
        {
          "name": "Sony SRS-XB43",
          "price": 249.99,
          "desc": "A powerful speaker with extra bass and long battery life."
        },
        {
          "name": "Bose SoundLink Mini II",
          "price": 199.99,
          "desc": "Compact speaker with excellent sound quality and deep bass."
        },
        {
          "name": "Sonos Roam",
          "price": 179.99,
          "desc": "Portable smart speaker with voice assistant support and great sound."
        },
        {
          "name": "Google Nest Audio",
          "price": 99.99,
          "desc": "Smart speaker with Google Assistant and great audio quality."
        }
      ]
    },
    {
      "name": "Drone",
      "price": 999.99,
      "image": "/assets/Drone.png",
      "desc": "Take your photography and videography to new heights with this advanced drone.",
      "models": [
        {
          "name": "DJI Mavic Air 2",
          "price": 799.99,
          "desc": "A compact drone with 4K video recording and intelligent flight modes."
        },
        {
          "name": "DJI Phantom 4 Pro",
          "price": 1499.99,
          "desc": "A professional-grade drone with a 1-inch sensor and 4K video at 60fps."
        },
        {
          "name": "Parrot Anafi",
          "price": 699.99,
          "desc": "A lightweight and foldable drone with 4K HDR video capabilities."
        },
        {
          "name": "DJI Mini 2",
          "price": 449.99,
          "desc": "A compact drone with a 12MP camera and 4K video recording."
        },
        {
          "name": "Autel Robotics EVO Lite+",
          "price": 999.99,
          "desc": "A feature-rich drone with a 1-inch sensor and 6K video recording."
        },
        {
          "name": "Holy Stone HS720",
          "price": 329.99,
          "desc": "An affordable drone with a 4K camera and GPS features."
        },
        {
          "name": "Yuneec Typhoon H3",
          "price": 1799.99,
          "desc": "A professional drone with a 4K camera and impressive stability."
        },
        {
          "name": "Ruko F11 Pro",
          "price": 299.99,
          "desc": "An easy-to-fly drone with a 4K camera and long battery life."
        },
        {
          "name": "Snaptain SP350",
          "price": 89.99,
          "desc": "A budget-friendly drone suitable for beginners."
        }
      ]
    }
  ]
}
);

export default function ProductsPage({ category }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        const categoryData = response.data.categories.find(
          (cat) => cat.name.toLowerCase() === category.toLowerCase()
        );
        setSelectedCategory(categoryData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, [category]);

  if (!selectedCategory) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        height: "100vh",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Scrollable Content */}
      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          padding: "16px",
        }}
      >
        {/* Breadcrumbs and Title */}
        <div
          style={{
            flexShrink: 0,
            marginBottom: "16px",
          }}
        >
          <BasicBreadcrumbs />
          <Typography variant="h4" align="center" style={{ margin: "2px" }}>
            {selectedCategory.name}
          </Typography>
        </div>

        <BoxContainer>
          {selectedCategory.models.map((model) => (
            <CardHolder
              key={model.name}
              image={selectedCategory.image}
              name={model.name}
              content={model.price}
            />
          ))}
        </BoxContainer>
      </div>
    </div>
  );
}