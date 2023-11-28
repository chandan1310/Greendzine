import React, { useState } from 'react';
import './Dashboard.scss';
import Footer from '../footer/Footer';

const Dashboard = () => {
    const [inputValue, setInputValue] = useState('');
    const [progress, setProgress] = useState(0);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
    };

    const productivityData = [
        { day: 'Monday', value: 50 },
        { day: 'Tuesday', value: 60 },
        { day: 'Wednesday', value: 75 },
        { day: 'Thursday', value: 80 },
        { day: 'Friday', value: 70 },
        { day: 'Saturday', value: 100 },
    ];

    const filteredData = productivityData.filter((item) =>
        item.day.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div className="my-component">
            <div className="contact-icon"></div>
            <div className='count'>4</div>
            <div className="moptro-logo"></div>
            <div className='process-bar'>

                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Search for a day..."
                    className="input-box1"
                />

                {filteredData.map((item) => (
                    <div key={item.day}>
                        <p>{`Productivity on ${item.day}`}</p>
                        <progress className="custom-progress" value={item.value} max={100} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
