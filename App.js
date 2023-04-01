import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <div>
      {text}: {value}
    </div>
  )
}

const Statistics = ({statistics}) => {
  if (statistics.all === 0) {
    return (
      <div>
        <h3>No feedback given</h3>
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value = {statistics.good} />
      <StatisticLine text="neutral" value = {statistics.neutral} />
      <StatisticLine text="bad" value = {statistics.bad} />
      <StatisticLine text="all" value = {statistics.all} />
      <StatisticLine text="average" value = {statistics.average} />
      <StatisticLine text="positive" value = {statistics.positive + '%'} />
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
  }

  const average = (good - bad) / allClicks
  const positivePercentage = (good / allClicks) * 100
  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: allClicks,
    average: average,
    positive: positivePercentage
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>Statistics</h1>
      <Statistics statistics={statistics} />
    </div>
  )
}

export default App
