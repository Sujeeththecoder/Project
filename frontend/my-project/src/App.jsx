// App.jsx

import React from 'react';
import { addProduct } from './api'; 

function App() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const company = event.target.company.value;
    
    try {
      await addProduct({ name, price, company });
      // Handle success
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h1>Product Management System</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="price" placeholder="Price" />
        <input type="text" name="company" placeholder="Company" />
        <button type="submit">Add Product</button>
      </form>
      {/* Add other components and logic as needed */}
    </div>
  );
}

export default App;
