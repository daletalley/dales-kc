import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CustomerList.css'; // Import the CSS file

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/customers') // Replace with your actual API endpoint
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      {customers.length > 0 ? (
        <div>
          {customers.map(customer => (
            <div key={customer.id} className="customer">
              <h3>{customer.name}</h3>
              <p>Email: {customer.email}</p> {/* Assuming customers have an email field */}
              <p>Phone: {customer.phone}</p> {/* Assuming customers have a phone field */}
            </div>
          ))}
        </div>
      ) : (
        <p>No customers found.</p>
      )}
    </div>
  );
};

export default CustomerList;
