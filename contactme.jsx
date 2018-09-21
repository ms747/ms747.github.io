class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    this.myRef = React.createRef();
  }

  handleForm = e => {
    e.preventDefault();
    console.log("works");
  };

  handleMouseOver = e => {
    this.myRef.current.classList.add("popup");
    setTimeout(_=>{
      this.myRef.current.classList.remove("popup");
    },300);
  };

  render() {
    return (
      <div className="contact-container">
        <form id="form1" onSubmit={this.handleForm} className="form">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
          <label htmlFor="email">Email</label>

          <input id="email" type="text" />
          <label htmlFor="message">Message</label>
          <textarea id="message" type="text" rows="10" cols="50" />
          <div id="button-container">
            <button
              type="submit"
              form="form1"
              value="Submit"
              id="submit"
              onMouseOver={this.handleMouseOver}
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
