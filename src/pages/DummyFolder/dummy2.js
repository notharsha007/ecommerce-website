import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('http://localhost:3001/categories');
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <h2>{category.name}</h2>
            <p>{category.desc}</p>
            <img src={category.image} alt={category.name} />
            <p>Price: ${category.price}</p>
            <h3>Models:</h3>
            <ul>
              {category.models.map((model) => (
                <li key={model.name}>
                  <strong>{model.name}</strong>: ${model.price} - {model.desc}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
