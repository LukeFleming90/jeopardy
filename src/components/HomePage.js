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
        } catch(e) {
            console.error(e)
        }
    };

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <>
            {
                question.map((item,idx) => {
                    return (
                        <div className="container">
                            <div key={idx}>                               
                                <h1 className="title">Welcome to Jeopardy!</h1>
                                <h2>Score: {score}</h2>
                                <div className="buttonContainer">
                                    <button className="decrease" onClick={() => { return handleDecrease(item.value)}}>Decrease</button>
                                    <button className="increase" onClick={() => { return handleIncrease(item.value)}}>Increase</button>
                                    <button className="reset" onClick={() => { return setToZero()}}>Reset</button>
                                </div>
                                <h2>Let's Play!</h2>
                                <button className="question" onClick={() => { getQuestion(); setDsply(true)}}>Get Question</button>
                                <h2>Category: {item.category.title}</h2>
                                <h2>Points: {item.value}</h2>
                                <h1>Answer: {item.question}</h1>
                                <button style={{visibility: dsply ? 'visible' : 'hidden'}} onClick={() => { setDsply(false)}}>Click to Display Answer</button>
                                <h1 style={{visibility: dsply ? 'hidden' : 'visible'}}>Question: {item.answer}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}