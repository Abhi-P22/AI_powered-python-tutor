import { useState, useEffect } from "react";
import axios from "axios";

function Chatbot() {
    const [message, setMessage] = useState("");
    const [responses, setResponses] = useState([]);
    const [character, setCharacter] = useState("fox");
    const [learningStage, setLearningStage] = useState("start");
    const [customTopic, setCustomTopic] = useState("");
    const [loading, setLoading] = useState(false);

    const defaultApiKey = "AIzaSyCx8g9L2bWQZgQRao9N7c7VnmsnncyEk4s";
    const apiKey = defaultApiKey || localStorage.getItem("apiKey") ;

    const sendMessage = async (userMessage) => {
        if (!userMessage.trim()) return;

        const personalities = {
            fox: "A playful and encouraging Python tutor.",
            robot: "A logical and precise Python tutor."
        };

        setLoading(true); 

        try {
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
                {
                    contents: [{ parts: [{ text: `${personalities[character]} Answer this: ${userMessage}` }] }]

                },
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.data?.candidates?.length > 0) {
                const aiResponse = response.data.candidates[0].content.parts[0].text;
                setResponses([...responses, { user: userMessage, ai: aiResponse }]);
            } else {
                throw new Error("No valid response from Gemini.");
            }

            setMessage("");
        } catch (error) {
            console.error("Error fetching AI response:", error);
            alert("Error fetching AI response. Check your API key or Clear custom API key to go back to defaul API key.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!localStorage.getItem("apiKey") && apiKey === defaultApiKey) {
            alert("Using default API key. If it doesn't work, please enter your own Gemini API key in settings.");
        }
    }, []);

    const startTutorial = (topic) => {
        setLearningStage("learning");
        sendMessage(`Teach me about ${topic} in Python.`);
    };

    const handleCustomTopicSubmit = () => {
        if (customTopic.trim()) {
            sendMessage(`Teach me about ${customTopic} in Python.`);
            setLearningStage("learning");
            setCustomTopic("");
        }
    };

    return (
        <div className="p-6 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto bg-white shadow-lg rounded-lg md:p-8">
            <h2 className="text-2xl font-bold text-center mb-4">🐍 AI Python Tutor</h2>
            <div className="mb-4 text-center">
                <label className="text-sm font-semibold mr-2">Choose Tutor:</label>
                <select className="p-2 border rounded" value={character} onChange={e => setCharacter(e.target.value)}>
                    <option value="fox">🦊 Friendly Fox</option>
                    <option value="robot">🤖 Logical Robot</option>
                </select>
            </div>
            {learningStage === "start" && (
                <div className="text-center">
                    <p className="mb-4 text-lg">What do you want to learn about Python?</p>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                        {["Variables", "Loops", "Functions", "If-Else", "Lists", "Dictionaries"].map((topic) => (
                            <button
                                key={topic}
                                onClick={() => startTutorial(topic)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                            >
                                {topic}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4">
                        <input
                            type="text"
                            value={customTopic}
                            onChange={(e) => setCustomTopic(e.target.value)}
                            placeholder="Ask about any Python topic..."
                            className="p-2 border rounded w-full"
                        />
                        <button
                            onClick={handleCustomTopicSubmit}
                            className="mt-2 p-2 bg-green-500 text-white rounded w-full hover:bg-green-600 transition duration-200"
                        >
                            Ask about this topic
                        </button>
                    </div>
                </div>
            )}

            {learningStage === "learning" && (
                <div className="mt-4 space-y-3 max-h-64 overflow-auto p-3 border rounded">
                    {responses.map((res, i) => (
                        <div key={i} className="text-sm">
                            <p className="font-semibold">You: <span className="text-gray-700">{res.user}</span></p>
                            <p className="bg-gray-100 p-2 rounded">{res.ai}</p>
                        </div>
                    ))}

                    {/* Loading Indicator */}
                    {loading && (
                        <div className="text-center">
                            <p className="text-gray-500">...Waiting for response</p> 
                        </div>
                    )}
                </div>
            )}

            {/* Message Input */}
            {learningStage === "learning" && !loading && (
                <div className="mt-4">
                    <input
                        className="p-2 border w-full rounded-md"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask a follow-up question..."
                    />
                    <button className="mt-2 p-2 bg-blue-500 text-white rounded w-full hover:bg-blue-600 transition duration-200" onClick={() => sendMessage(message)}>
                        Send
                    </button>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
