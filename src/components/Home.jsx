import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-6">
            <h1 className="text-4xl font-bold">Welcome to Python Tutor</h1>
            <p className="text-lg mt-4">Learn Python in a fun and interactive way!</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link to="/chat" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Start Learning</Link>
                <Link to="/settings" className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200">API key Configuration</Link>
            </div>
        </div>
    );
}

export default Home;
