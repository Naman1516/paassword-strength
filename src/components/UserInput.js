import React, { useState } from 'react';
import PasswordStrength from './PasswordStrength';

const UserInput = () => {
    const [userInput, setUserInput] = useState("");
    const [inputType, setInputType] = useState("password");

    return (
        <div className="border-8 border-red-400 p-5 m-5 items-center justify-center rounded-sm shadow-2xl">
            <div className="flex justify-center items-center">
                <input
                    type={inputType}
                    id="userInput"
                    className="border border-red-400 rounded-sm text-2xl focus:border-blue-500"
                    value={userInput}
                    onChange={(e) => {
                        setUserInput(e.target.value);
                    }}
                />
                <button
                    className="rounded-sm px-2 ml-2 border border-red-400 bg-red-400 text-white w-24 h-9 hover:bg-red-500"
                    onClick={() => {
                        if (!userInput.length) return;
                        setInputType(inputType === "password" ? "text" : "password");
                    }}
                >
                    {inputType === "text" ? "Hide" : "Show"}
                </button>
            </div>
            <PasswordStrength password={userInput} />
        </div>
    );
};

export default UserInput;