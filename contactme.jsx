class App extends React.Component {
  state = {};

  handleForm = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="contact-container">
        <form onSubmit={this.handleForm} className="form">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
          <label htmlFor="email">Email</label>
          <input id="email" type="text" />
          <label htmlFor="message">Message</label>
          <textarea id="message" type="text" rows="4" cols="50" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
