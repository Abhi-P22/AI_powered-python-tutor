function About() {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-blue-600">About AI Python Tutor</h2>
            
            <p className="mt-4 text-gray-700">
                AI Python Tutor is an interactive learning platform designed to help children learn basic Python coding in a fun and engaging way. 
                The application uses the **Gemini AI** to provide real-time explanations, answer questions, and assist with Python exercises.
            </p>

            <h3 className="mt-6 text-2xl font-semibold">Unique Features</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>🚀 **Customizable AI Tutors** – Choose between a friendly fox or a logical robot to match learning styles.</li>
                <li>📚 **Interactive Lessons & Exercises** – AI-powered guidance tailored for beginners.</li>
                <li>🔑 **User-configurable API Key** – Allows users to enter their own Gemini AI API key for uninterrupted access.</li>
            </ul>

            <h3 className="mt-6 text-2xl font-semibold">Design Approach</h3>
            <p className="mt-2 text-gray-700">
                The app is built using **React (Frontend)** and **Tailwind CSS** for a responsive and child-friendly UI.  
                We implemented **React Router** for smooth navigation and **localStorage** to save user preferences like API keys.
                Our focus is on simplicity, clarity, and an interactive experience to make learning Python enjoyable for kids.
            </p>
        </div>
    );
}

export default About;
