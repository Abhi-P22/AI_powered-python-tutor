import { useState } from "react";

function Settings() {
    const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey") || "");

    const saveApiKey = () => {
        if (apiKey.trim() === "") {
            alert("Please enter a valid API key.");
            return;
        }
        localStorage.setItem("apiKey", apiKey);
        alert("API Key saved!");
    };

    const clearApiKey = () => {
        localStorage.removeItem("apiKey");
        setApiKey(""); // Clear the input field as well
        alert("API Key cleared!");
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            
            {/* API Key Input */}
            <input
                className="mt-4 p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter API Key"
            />

            {/* Buttons Wrapper */}
            <div className="mt-6 flex space-x-4">
                {/* Save API Key Button */}
                <button
                    className="p-2 bg-green-500 text-white hover:bg-green-600 transition duration-200 w-full sm:w-auto"
                    onClick={saveApiKey}
                >
                    Save API Key
                </button>

                {/* Clear API Key Button */}
                <button
                    className="p-2 bg-red-500 text-white hover:bg-red-600 transition duration-200 w-full sm:w-auto"
                    onClick={clearApiKey}
                >
                    Clear API Key
                </button>
            </div>
        </div>
    );
}

export default Settings;
