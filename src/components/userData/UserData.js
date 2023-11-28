// MyComponent.jsx
import React, { useState, useEffect } from 'react';
import jsonData from '../Data.json';
import './UserData.scss';
import Footer from '../footer/Footer';

const UserData = () => {
    const [inputValue, setInputValue] = useState('');
    const [progress, setProgress] = useState(0);
    const [filteredData, setFilteredData] = useState(jsonData);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        filterData(value);
    };

    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        const filtered = jsonData.filter(user => user.name.toLowerCase().includes(lowercasedValue));
        setFilteredData(filtered);
    };

    const handleButtonClick = () => {
        setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
    };

    return (
        <div className="my-component">
            <div className="contact-icon"></div>
            <div className='count'>4</div>
            <div className="moptro-logo"></div>

            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter text here"
                className="input-box1"
            />

            <div className="user-data">
                <ul>
                    {filteredData.map((user) => (
                        <li key={user.empId} className="user-item">
                            <div className="info-item">
                                <strong>Employee ID:</strong> {user.empId}
                            </div>
                            <div className="info-item">
                                <strong>Name:</strong> {user.name}
                            </div>
                            <div className="info-item">
                                <strong>DOB:</strong> {user.dob}
                            </div>
                            <div className="info-item">
                                <strong>Role:</strong> {user.role}
                            </div>
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>

            <Footer />
        </div>
    );
};

export default UserData;
