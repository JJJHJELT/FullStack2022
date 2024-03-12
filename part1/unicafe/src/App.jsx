/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({text, value}) => {

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = all ? (good * 1 + neutral * 0 + bad * -1) / all : 0;
  const positive = all ? (good / all) * 100 : 0;


  if(all === 0){
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text='Good' value={good}/>
          <StatisticsLine text='Neutral' value={neutral}/>
          <StatisticsLine text='Bad' value={bad}/>
          <StatisticsLine text='All' value={all}/>
          <StatisticsLine text='Average' value={average}/>
          <StatisticsLine text='Positive' value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={increaseGood} text='Good'/>
      <Button handleClick={increaseNeutral} text='Neutral'/>
      <Button handleClick={increaseBad} text='Bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App