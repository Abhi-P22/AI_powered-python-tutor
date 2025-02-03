import { useState } from "react";

function Lessons() {
    const lessons = [
        {
            title: "Lesson 1: Variables and Data Types",
            content: "Variables store data in Python.\nExample:\n\nx = 5\ny = 'Hello'\nprint(x, y)",
            question: "What will this code print?\n\nx = 10\ny = 'ChatGPT'\nprint(x, y)",
            correctAnswer: "10 ChatGPT"
        },
        {
            title: "Lesson 2: If-Else Statements",
            content: "Python uses 'if' statements to make decisions.\nExample:\n\nx = 10\nif x > 5:\n    print('Big number!')\nelse:\n    print('Small number!')",
            question: "What will print if x = 2?\n\nx = 2\nif x > 5:\n    print('Big')\nelse:\n    print('Small')",
            correctAnswer: "Small"
        },
        {
            title: "Lesson 3: Loops (For & While)",
            content: "Loops repeat actions in Python.\n\nFor loop:\nfor i in range(3):\n    print(i)\n\nWhile loop:\ni = 0\nwhile i < 3:\n    print(i)\n    i += 1",
            question: "What does this print?\n\nfor i in range(3):\n    print('Hello')",
            correctAnswer: "Hello\nHello\nHello"
        },
        {
            title: "Lesson 4: Functions",
            content: "Functions let you reuse code.\n\nExample:\ndef greet(name):\n    print('Hello, ' + name)\n\ngreet('Alice')",
            question: "What does this print?\n\ndef add(x, y):\n    return x + y\n\nprint(add(3, 4))",
            correctAnswer: "7"
        },
        {
            title: "Lesson 5: Lists",
            content: "Lists store multiple values in Python.\n\nExample:\nnumbers = [1, 2, 3]\nprint(numbers[0])  # Prints 1",
            question: "What does this print?\n\nfruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])",
            correctAnswer: "banana"
        }
    ];

    const [currentLesson, setCurrentLesson] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState("");

    const checkAnswer = () => {
        if (userAnswer.trim().toLowerCase() === lessons[currentLesson].correctAnswer.toLowerCase()) {
            setFeedback("✅ Correct! Great job!");
        } else {
            setFeedback("❌ Incorrect. Try again!");
        }
    };

    const nextLesson = () => {
        setFeedback("");
        setUserAnswer("");
        if (currentLesson < lessons.length - 1) {
            setCurrentLesson(currentLesson + 1);
        } else {
            alert("🎉 You've completed all lessons!");
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold">{lessons[currentLesson].title}</h2>
            <pre className="bg-gray-200 p-4 mt-2 rounded">{lessons[currentLesson].content}</pre>

            <h3 className="text-lg font-semibold mt-4">📝 Try This:</h3>
            <pre className="bg-gray-100 p-4 rounded">{lessons[currentLesson].question}</pre>

            <input
                className="mt-4 p-2 border w-full"
                type="text"
                placeholder="Enter your answer..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
            />

            <button className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200" onClick={checkAnswer}>
                Submit Answer
            </button>

            {feedback && <p className="mt-2">{feedback}</p>}

            {feedback.includes("Correct") && (
                <button className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200" onClick={nextLesson}>
                    Next Lesson
                </button>
            )}
        </div>
    );
}

export default Lessons;
