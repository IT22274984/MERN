import React, { useState } from "react";
import './Form.css'; // Changed CSS file name
import img1 from './image/stu.jpeg';

const NewFormTable = ({ handleSubmit, handleOnChange }) => { // Changed component name
    const [showOptions, setShowOptions] = useState({
        color: false,
        size: false,
        quan: false
    });

    const toggleOptions = (column) => {
        setShowOptions({
            ...showOptions,
            [column]: !showOptions[column]
        });
    };

    return (
        <div>
            <header className="header"> {/* Simple header */}
                <h1> ICare</h1>
            </header>
            <div className="new-container"> {/* Updated class name */}
                <div className="new-addContainer"> {/* Updated class name */}
                    <img src={img1} alt="Your image description" className="new-form-image" /> {/* Updated class name */}
                    <form onSubmit={handleSubmit} className="new-form"> {/* Updated class name */}
                        <label htmlFor="color">Color:</label>
                        <select id="color" name="color" onChange={handleOnChange} defaultValue="">
                            <option value="">Select Color</option>
                            <option value="black">Black</option>
                            <option value="blue">Blue</option>
                            <option value="red">Red</option>
                            <option value="yellow">Yellow</option>
                            <option value="green">Green</option>
                        </select>
                        <label htmlFor="size">Size:</label>
                        <input type="number" id="quan" name="quan" onChange={handleOnChange} />
                        <label htmlFor="add">Adding:</label>
                        <select id="add" name="add" onChange={handleOnChange} defaultValue="">
                            <option value="">Select Adding</option>
                            <option value="UV protection">UV protection</option>
                            <option value="Cooling">Cooling</option>
                            <option value="Blue light blocking">Blue light blocking</option>
                            <option value="Anti-Reflective Coating">Anti-Reflective Coating</option>
                        </select>
                        <label htmlFor="quan">Quantity:</label>
                        <input type="number" id="quan" name="quan" onChange={handleOnChange} />
                    
                    </form>
                </div>
                <a href="http://localhost:3000/payment" className='new-pay-btn'>PAY</a> {/* Updated class name */}
            </div>
            <footer className="footer"> {/* Simple footer */}
                <p>ICare</p>
            </footer>
        </div>
    );
};

export default NewFormTable;
