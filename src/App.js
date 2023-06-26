import './App.css';
import './layout.css';
import questionsList from './quiz_questions';
import Quiz from './quiz_layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

    const quiz_questions = questionsList.map((question) => {
        return (
            <Quiz
                question={question.ques}
                options={question.options}
                correctAnswer={question.correctAnswer}
                points={question.points}
            />
        )
    })

    // const Scores = ({ score }) => {
    //     return (
    //         <div className='quiz-scores'>
    //             <h1>Quiz Scores</h1>
    //             <h2>Your Score: {score}</h2>
    //         </div>
    //     );
    // };

    return (
        <div className="App">
            <nav className='App-navbar'>
                <img src='./logo.jpg' alt='logo' />
                {/* <Link to="/">Login</Link>           
             <Link to="/">Home</Link> 
             <Link to="/">Results</Link> */}
            </nav>

            <header className='App-header'>
                <h1>VMACE Quiz</h1>
            </header>

            <div className='quiz-container'>
                {quiz_questions}
            </div>


            <center>
                <button className='quiz-submission'>Submit the quiz</button>
            </center>

            <footer className='App-footer'>
                <p>Copyright 2023 @VMACE | All Rights Reserved</p>
            </footer>

        </div>
    );


}

export default App;
