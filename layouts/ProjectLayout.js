const ProjectLayout = (props) => {
  const { title, children, imageURL } = props;

  return (
    <div className="ProjectLayout">
      <div className="section">
        <div className="container">
          <div className="ProjectLayout__title text-center py-10">
            <p className="text-lg">project</p>
            <h1 className="h1">{title}</h1>
          </div>
          <img
            src={imageURL}
            alt={title}
            className="w-full rounded-lg object-cover"
            style={{ height: 500 }}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProjectLayout;