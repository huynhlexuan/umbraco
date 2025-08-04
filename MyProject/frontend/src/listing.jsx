// frontend/src/listing.jsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function ListingComponent() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44394/Umbraco/Api/Listing/GetItems')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div>
            <h2>Item List</h2>
            {items.map((item, i) => (
                <div key={i} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
                    <h3>{item.name}</h3>
                    <img src={item.image} alt={item.name} width="150" />
                    <p>{item.description}</p>
                    <p><strong>Brand:</strong> {item.brand}</p>
                    <p><strong>Type:</strong> {item.type}</p>
                    <p><strong>Width:</strong> {item.width}</p>
                </div>
            ))}
        </div>
    );
}

ReactDOM.render(<ListingComponent />, document.getElementById('react-listing'));
