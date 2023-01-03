import React from 'react'
import PropTypes from 'prop-types'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>PositivePercentage: {positivePercentage}</p>
    </>
  )
}

Statistics.propTypes = {}

export default Statistics