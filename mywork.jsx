let WorkCard = function({ projects }) {
  return (
    <div className="card-grid">
      {projects ? (
        projects.map(project => {
          return (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              className="card"
            >
              <h3 className="card-title">{project.name}</h3>
              <i className={project.class} />
              <div className="card-link">
                <p className="link">
                  <i className="fas fa-arrow-right" />
                </p>
              </div>
            </a>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

class App extends React.Component {
  state = {
    projects: [
      {
        id: 1,
        name: "Recruitment Website for Latur Zilhaparishad",
        url: "http://www.msrlmlaturjobs.com",
        class: "fas fa-users card-img"
      },
      {
        id: 2,
        name: "Website for GanSan IT Technologies",
        url: "http://www.gansan.in/",
        class: "fab fa-chrome card-img"
      },
      {
        id: 3,
        name: "Website for Shivasol Technologies",
        url: "http://support.shivasol.com",
        class: "fab fa-chrome card-img"
      },
      {
        id: 4,
        name: "Website for Indimac Pvt Ltd.",
        url: "http://www.indimac.in",
        class: "fab fa-chrome card-img"
      },
      {
        id: 5,
        name: "My Git Work",
        url: "https://github.com/ms747/",
        class: "fab fa-github card-img"
      }
    ]
  };
  render() {
    return <WorkCard projects={this.state.projects} />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
