import './App.css';
import './layout.css';
import questionsList from './quiz_questions';
import Quiz from './quiz_layout';
import { useState } from 'react';


function App() {
    const [globalscore, setGlobalScore] = useState(0);
    const quiz_questions = questionsList.map((question) => {
        return (
            <Quiz
                globalscore={globalscore}
                setGlobalScore={setGlobalScore}
                question={question.ques}
                options={question.options}
                correctAnswer={question.correctAnswer}
                points={question.points}
            />
        )
    })

    const [displayText, setDisplayText] = useState();

    const displayResult = () => {
        setDisplayText(
        <div className='quiz-marks'>
            <h3>VMACE Tally Examination Marks</h3>
            <h2>Your Marks: {globalscore} /15 </h2>
        </div>);
    };

    return (
        <div className="App">
            <nav className='App-navbar'>
                <img src='./logo.jpg' alt='logo' />
                <a href='https://www.vmace.in/contact-us/'>Contact Us</a>
                <a href='https://www.vmace.in/about-us/'>About Us</a>
                <a href='https://www.vmace.in/'>Home</a>
                </nav>

            <header className='App-header'>
                <h1>VMACE Tally Examination</h1>
                <h4>Solve these objective questions based on Tally </h4>
                <h3> INSTRUCTIONS :</h3>
                <h5>- Select an option and click on the submit button to save the answer of the particular question</h5>
                <h5>- You can change your answer by selecting another option and clicking on the submit button</h5>
                <h5>- After completion of the exam, click on "Submit the answers" button to display your marks</h5>

            </header>

            <div className='quiz-container'>
                {quiz_questions}
            </div>


            <center>
                <button className='quiz-submission' onClick={displayResult}>Submit the answers</button>
                {displayText}
            </center>

            <br></br>
            <footer className='App-footer'>
                <p>Copyright 2023 VMACE | All Rights Reserved</p>
                <br></br>
            </footer>

        </div>
    );


}

export default App;
