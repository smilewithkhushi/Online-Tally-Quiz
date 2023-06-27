import './layout.css'
import React, {useState} from 'react'

function Quiz ({ question, options, correctAnswer, globalscore, setGlobalScore }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedOption === correctAnswer) {
      let temp=score+3;
      setScore(temp);
      setGlobalScore(globalscore+1);
    }

    setSubmitted(true);
  };

  return (
    <div className='quiz_question'>
      <h3>{question}</h3>
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
        <button type="submit" disabled={submitted} className='quiz-button'>
          Submit
        </button>
      </form>
      <br></br>
      {submitted && <div> Your answer {selectedOption} has been saved. </div>}
    </div>
    
      /* marks islie include kia hai taki khud track kar saku nothing more */
  );
};

export default Quiz;
