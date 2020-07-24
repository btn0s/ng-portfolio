import Masonry from "react-masonry-css";
import ProjectLayout from "../layouts/ProjectLayout";

const DesignChallenges = () => {
  const images = [
    {
      caption: "The challenge: A space using only Black-made/owned pieces.",
      image: "projects/designchallenges/challenges-5.png",
    },
    {
      caption: "The challenge: A themed nursery.",
      image: "projects/designchallenges/challenges-4.png",
    },
    {
      caption:
        "The challenge: A reading nook in your dream vacation home in Mexico.",
      image: "projects/designchallenges/challenges-3.png",
    },
    {
      caption: "The challenge: Upping your bookshelf game.",
      image: "projects/designchallenges/challenges-1.png",
    },

    {
      caption: "The challenge: Dream pet nook.",
      image: "projects/designchallenges/challenges-2.png",
    },
  ];

  return (
    <ProjectLayout
      title="Design Challenges"
      imageURL="/projects/designchallenges/cover.jpg"
      caption="The challenge: Design the perfect Zoom background."
    >
      <section className="section py-2">
        <div className="container">
          {/* <div className="project-description py-10 text-center">
            This is a collection of work I've done for clients at Spoak.
          </div> */}
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
