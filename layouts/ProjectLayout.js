const ProjectLayout = (props) => {
  const { title, children, imageURL, caption } = props;

  return (
    <div className="ProjectLayout">
      <div className="section">
        <div className="container">
          <div className="ProjectLayout__title text-center pt-10">
            <p className="text-lg">project</p>
            <h1 className="h1">{title}</h1>
          </div>
          {imageURL && (
            <img
              src={imageURL}
              alt={title}
              className="project-hero w-full rounded-lg object-cover md:mb-10 mt-5 md:mt-10"
            />
          )}
          {caption && <p className="text-sm p-1 text-center">{caption}</p>}
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProjectLayout;
