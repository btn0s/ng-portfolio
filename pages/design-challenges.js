import Masonry from "react-masonry-css";
import ProjectLayout from "../layouts/ProjectLayout";

const DesignChallenges = () => {
  const images = [
    {
      // caption: "BLM Design Challenge",
      image: "projects/designchallenges/challenges-5.png",
    },
    {
      // caption: "",
      image: "projects/designchallenges/challenges-4.png",
    },
    {
      // caption: "",
      image: "projects/designchallenges/challenges-1.png",
    },
    {
      // caption: "",
      image: "projects/designchallenges/challenges-3.png",
    },
    {
      // caption: "",
      image: "projects/designchallenges/challenges-2.png",
    },
  ];

  return (
    <ProjectLayout
      title="Design Challenges"
      imageURL="/projects/designchallenges/cover.jpg"
    >
      <section className="section">
        <div className="container">
          <div className="project-description py-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
            tempore! Natus culpa nesciunt libero assumenda. Iusto deleniti
            voluptatum ipsam veniam amet corporis possimus at fugiat, eligendi
            aliquid, temporibus harum similique?
          </div>
        </div>
      </section>
      <section className="section py-10">
        <div className="container">
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
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
