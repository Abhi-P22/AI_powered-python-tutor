import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import Lessons from "./components/Lessons";
import Settings from "./components/Settings";
import Header from './components/Header'
import About from './components/About'

function App() {
    return (
        <Router>
            <Header/>
            <div className="min-h-screen bg-gray-100 text-gray-900">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/chat" element={<Chatbot />} />
                    <Route path="/lessons" element={<Lessons />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


