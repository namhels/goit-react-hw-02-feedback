import React from 'react'
import PropTypes from 'prop-types'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <>
      {options.map((el) => (<button key={el} data-label={el} type="button" onClick={onLeaveFeedback}>
      {el}
    </button>))}
    </>
  )
}

FeedbackOptions.propTypes = {}

export default FeedbackOptions