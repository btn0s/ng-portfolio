import Masonry from "react-masonry-css";
import ProjectLayout from "../layouts/ProjectLayout";

const DesignChallenges = () => {
  const images = [
    {
      image: "projects/collab/collab-5.png",
    },
    {
      image: "projects/collab/collab-4.png",
    },
    {
      image: "projects/collab/collab-3.png",
    },
    {
      image: "projects/collab/collab-7.png",
    },
    {
      image: "projects/collab/collab-1.png",
    },
    {
      image: "projects/collab/collab-2.png",
    },
    {
      image: "projects/collab/collab-6.png",
    },
    {
      image: "projects/collab/collab-10.png",
    },
    {
      image: "projects/collab/collab-8.png",
    },
    {
      image: "projects/collab/collab-9.png",
    },
  ];

  return (
    <ProjectLayout
      title="Design Challenges"
      imageURL="/projects/collab/collab-3.png"
    >
      <section className="section py-2">
        <div className="container">
          <div className="project-description py-10 text-center">
            These designs are in collaboration with Equal Parts, Open Spaces,
            and Oliver Space, only using products from their collections.
          </div>
        </div>
      </section>
      <section className="section md:py-10">
        <div className="container">
          <Masonry
            breakpointCols={2}
            className="my-masonry-grid -mx-4"
            columnClassName="my-masonry-grid_column mx-4"
          >
            {images.map((item, index) => (
              <div className="grid-item" key={index}>
                <img src={item.image} className="rounded-lg" />
                {item.caption && <p className="pt-4">{item.caption}</p>}
              </div>
            ))}
          </Masonry>
        </div>
      </section>
    </ProjectLayout>
  );
};

export default DesignChallenges;
