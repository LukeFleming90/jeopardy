import { useState, useEffect } from "react";

export default function HomePage(props) {

    const url = `http://jservice.io/api/random`

    const [question, setQuestion] = useState([]);
    const [score, setScore] = useState(0);
    const [dsply, setDsply] = useState(true);

    const handleIncrease = (value) => { setScore(score + value); };
    const handleDecrease = (value) => { setScore(score - value); };
    const setToZero = () => { setScore(0); };

    const getQuestion = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setQuestion(data);
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <div className="container">
            <div className="subContainer">
                {
                    question.map((item, idx) => {
                        return (

                            <div key={idx}>
                                <h1>Welcome to Jeopardy!</h1>
                                <h2>Score: <span className="textColor">{score}</span></h2>
                                <div className="buttonContainer">
                                    <button className="decrease" onClick={() => { return handleDecrease(item.value) }}>Decrease</button>
                                    <button className="increase" onClick={() => { return handleIncrease(item.value) }}>Increase</button>
                                    <button className="reset" onClick={() => { return setToZero() }}>Reset</button>
                                </div>
                                <h2>Let's Play!</h2>
                                <button className="question" onClick={() => { getQuestion(); setDsply(true) }}>Get New Question</button>
                                <h2>Category: <span className="textColor">{item.category.title}</span></h2>
                                <h2>Points: <span className="textColor">{item.value}</span></h2>
                                <h2>Answer: <span className="textColor">{item.question}</span></h2>
                                <button className="answerButton" style={{ visibility: dsply ? 'visible' : 'hidden' }} onClick={() => { setDsply(false) }}>Click to Display Question</button>
                                <h2 style={{ visibility: dsply ? 'hidden' : 'visible' }}>Question: <span className="textColor">{item.answer}</span></h2>
                            </div>

                                )
                    })
                }
            </div>
        </div>
        
            )
}