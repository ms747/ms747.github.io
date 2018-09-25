const Spinner = ({ show }) => {
  return (
    <div
      className="spinner"
      style={{ display: show === true ? "block" : "none" }}
    >
      <div />
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      URL: "https://server-wcirhuzeau.now.sh/contactme",
      buttonState: false,
      loadingState: false
    };
    this.pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    this.myRef = React.createRef();
  }

  handleForm = e => {
    e.preventDefault();
    this.setState({ loadingState: true }, () => {
      axios
        .post(this.state.URL, {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        })
        .then(res => {
          this.setState(
            {
              name: "",
              email: "",
              message: "",
              buttonState: false
            },
            () => {
              this.setState({ loadingState: false });
            }
          );
          console.log("Done");
        })
        .catch(err => {
          console.log("Error");
        });
    });
  };

  handleMouseOver = e => {
    this.myRef.current.classList.add("popup");
    setTimeout(_ => {
      this.myRef.current.classList.remove("popup");
    }, 300);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value }, () => {
      this.setState({
        buttonState:
          this.pattern.test(this.state.email) &&
          !!this.state.name &&
          !!this.state.message
      });
    });
  };

  render() {
    return (
      <div className="contact-container">
        <form id="form1" onSubmit={this.handleForm} className="form">
          <label htmlFor="name">Name</label>
          <Spinner show={this.state.loadingState} />
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            type="text"
            rows="10"
            cols="50"
            value={this.state.message}
            onChange={this.handleChange}
          />

          <div id="button-container">
            <button
              type="submit"
              form="form1"
              value="Submit"
              id="submit"
              onMouseOver={this.handleMouseOver}
              disabled={!this.state.buttonState}
            >
              Submit
            </button>
            <button disabled id="after" ref={this.myRef} />
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
