import React, { useState } from 'react';
import PasswordStrength from './PasswordStrength';

const UserInput = () => {
    const [userInput, setUserInput] = useState('');
    const [inputType, setInputType] = useState('password');

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const toggleInputType = () => {
        setInputType((prevInputType) => (prevInputType === 'password' ? 'text' : 'password'));
    };

    return (
        <div className="bg-white rounded-md shadow-lg p-6 w-96">
            <div className="flex items-center mb-4">
                <input
                    type={inputType}
                    id="userInput"
                    className="border border-gray-300 rounded-md text-lg w-full py-2 px-4 focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter Password"
                    value={userInput}
                    onChange={handleInputChange}
                />
                <button
                    className="ml-2 px-4 py-2 rounded-md bg-red-400 text-white font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 w-32 h-12"
                    onClick={toggleInputType}
                >
                    {inputType === 'text' ? 'Hide' : 'Show'}
                </button>
            </div>
            <PasswordStrength password={userInput} />
        </div>
    );
};

export default UserInput;
