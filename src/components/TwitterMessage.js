import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetChars: 0,
      messageText: ""
    };
  }

  updateMessageText = (event) => {
    this.setState({
      tweetChars: event.target.value.length,
      messageText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.messageText} onChange={this.updateMessageText}/>
        <p>{this.props.maxChars - this.state.tweetChars} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
