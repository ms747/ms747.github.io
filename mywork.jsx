let WorkCard = function({ projects }) {
  console.log(projects.length);
  return (
    <div className="card-grid">
      {projects.map(project => {
        return (
          <div key={project.id} className="card">
            <h3 className="card-title">{project.name}</h3>
            <img className="card-img" src={project.src} alt="" />
            <div className="card-link">
              <a href={project.url} className="link" target="_blank">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        );
      })}
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
        src: "./img/latur.png"
      },
      {
        id: 2,
        name: "Website for GanSan IT Technologies",
        url: "http://www.gansan.in/",
        src: "./img/website.png"
      },
      {
        id: 3,
        name: "Website for Shivasol Technologies",
        url: "http://support.shivasol.com",
        src: "./img/website.png"
      },
      {
        id: 4,
        name: "Website for Shivasol Technologies",
        url: "http://support.shivasol.com",
        src: "./img/website.png"
      }
    ]
  };
  render() {
    return <WorkCard projects={this.state.projects} />;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
