import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isBtnClicked: false}

  onClickingBtn = () => {
    this.setState(prevState => ({isBtnClicked: !prevState.isBtnClicked}))
  }

  renderAnswerText = () => {
    const {isBtnClicked} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    const answerEl = isBtnClicked ? (
      <div>
        <hr />
        <p className="answer-text">{answerText}</p>
      </div>
    ) : (
      ''
    )
    return answerEl
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const {isBtnClicked} = this.state

    const btnUrl = isBtnClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isBtnClicked ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="question-container">
          <h2 className="question-text">{questionText}</h2>
          <img
            src={btnUrl}
            alt={altText}
            className="button-image"
            onClick={this.onClickingBtn}
          />
        </div>
        {this.renderAnswerText()}
      </li>
    )
  }
}

export default FaqItem
