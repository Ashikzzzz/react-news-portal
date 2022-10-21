import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Left = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4>All Category{categories.length}</h4>
      {categories.map((category) => (
        <h6 key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </h6>
      ))}
    </div>
  );
};

export default Left;
