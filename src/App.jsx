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

  handleLeaveFeedback = (e) => {
    // console.log(typeof Object.values(this.state)[1] );
    const option = e.target.dataset.label;
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }))
  }

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    // console.log(total);
    // return total.reduce(({ acc, el }) => acc + el, 0)
    console.log(total.reduce(({ acc, el }) => acc + el, 0));
    // return total;
   }

  countPositiveFeedbackPercentage = () => {}

  render() {
    const { handleLeaveFeedback, countTotalFeedback } = this;
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback = {handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            // positivePercentage={ }
          />
        </Section>
      </>
    )
  }
}

export default App


