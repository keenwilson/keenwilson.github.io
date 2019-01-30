import React, { Component } from "react";
import fire from "../fire";

class ContactForm extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      messageSubject: "",
      messageBody: "",
      isSubmitted: props.messageSent,
      databaseMessage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    let messageObj = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      subject: this.state.messageSubject,
      messageBody: this.state.messageBody
    };

    this.setState(
      {
        isSubmitted: true,
        databaseMessage: messageObj
      },
      () => this.addMessage()
    );
    // this.props.onSubmit();
  }

  clearState() {
    this.setState({
      name: "",
      email: "",
      phoneNumber: "",
      messageSubject: "",
      messageBody: ""
    }); // <- clear the input
  }
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire
      .database()
      .ref("messages")
      .orderByKey()
      .limitToLast(100);
    messagesRef.on("child_added", snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({
        databaseMessage: [message].concat(this.state.databaseMessage)
      });
    });
  }

  addMessage() {
    console.log(this.state.databaseMessage);
    fire
      .database()
      .ref("messages")
      .push(this.state.databaseMessage);
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          {this.state.isSubmitted === false && (
            <div>
              <p className="subtitle">
                If you're interested in collaborating a product together or help
                designing any of your tools or technologies, please reach out to
                me.
              </p>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Your Contact Infomation:</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input
                        className="input"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user" />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label" />
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="field has-addons">
                      <p className="control is-expanded has-icons-left has-icons-right">
                        <input
                          className="input"
                          type="tel"
                          name="phoneNumber"
                          value={this.state.phoneNumber}
                          onChange={this.handleChange}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-phone" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Subject</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="messageSubject"
                        value={this.state.messageSubject}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Message</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea"
                        name="messageBody"
                        value={this.state.messageBody}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label" />
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button
                        className="button is-dark"
                        onClick={this.handleSubmit}
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {this.state.isSubmitted === true && (
            <p className="subtitle">
              {this.state.name}, <br />
              <br /> Thank you for getting in touch. I appreciate you contacting
              me about <strong>{this.state.messageSubject}</strong>. I will
              reply by email as soon as possible.
              <br />
              <br />
              Talk to you soon,
              <br />
              <br />
              Keen
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default ContactForm;
