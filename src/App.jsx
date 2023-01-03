import React, { Component } from 'react'
import Section from "components/Section";
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleLeaveFeedback= () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      neutral: prevState.neutral + 1,
      bad: prevState.bad + 1,
    }))
  }

  render() {
    const { handleLeaveFeedback } = this;
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback = {handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            // total={ }
            // positivePercentage={ }
          />
        </Section>
      </>
    )
  }
}

export default App


