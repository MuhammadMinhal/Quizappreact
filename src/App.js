import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [qs,setqs] = useState([
    {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },


  ])
const [ind,setind]=useState(0)
const [score,setscore]=useState(0)
const [showresult,setshowresult]=useState(false)
let check=(s,c)=>{
  if(s==c)
  {
    setscore(score+1)
  }
  setind(ind+1)
  if(ind+1 == qs.length)
  {
    setshowresult(true)
  }
}
  return (
    <div className="App">
      <h1>Basic Quiz</h1>
      {showresult? <h1 className='score'>Your Score = {score}</h1> : <div><h2>Question {ind + 1} of {qs.length}</h2>
      <div>
        <h3 className='quest'>Question: {qs[ind].question}</h3>
      </div>
      <div>
       <h4> Options:</h4>
        {
          qs[ind].options.map((e,i)=> {
            return (
              <div>
                <button className='options' onClick={()=>{check(e,qs[ind].answer)}}>
                  {e}
                </button>
              </div>
            )
          })
        }
      </div></div>
      }
    </div>

  );
}

export default App;
