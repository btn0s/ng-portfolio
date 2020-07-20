const ProjectLayout = (props) => {
  const { title } = props;

  return (
    <div className="ProjectLayout">
      <div className="section">
        <div className="container">
          <div className="ProjectLayout__title">
            <h1 className="h1">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
