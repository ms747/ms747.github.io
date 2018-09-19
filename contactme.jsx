class App extends React.Component {
  state = {};

  handleForm = e => {
    e.preventDefault();
    console.log("works");
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
            <button type="submit" form="form1" value="Submit" id="submit">
              Submit
            </button>
            <button disabled id="after" />
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
