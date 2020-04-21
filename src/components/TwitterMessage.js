import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state  = {
      message: "",
      charactersLeft: props.maxChars
    };
  }

  handleMessageChange = e =>{
    this.setState({
      message: e.target.value,
      charactersLeft: this.props.maxChars - e.target.value.length 
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value ={this.state.message} onChange={this.handleMessageChange}/>
        <p>{this.state.charactersLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
