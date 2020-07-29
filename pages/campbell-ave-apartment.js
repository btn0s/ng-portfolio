import Masonry from "react-masonry-css";
import ProjectLayout from "../layouts/ProjectLayout";

const CampbellAve = () => {
  const images = [
    "projects/apt/image.png",
    "projects/apt/image 10.png",
    "projects/apt/image 8.png",
    "projects/apt/image 4.png",
    "projects/apt/image 3.png",
    "projects/apt/image 7.png",
    "projects/apt/image 5.png",
    "projects/apt/image 9.png",
    "projects/apt/image 6.png",
  ];

  const getImage = (path) => require(`../public/${path}`);

  return (
    <ProjectLayout
      className="Apt"
      title="Central Phoenix Apartment"
      imageURL={getImage("hero-img.png")}
    >
      {/* <section className="section">
        <div className="container">
          <div className="project-description py-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
            tempore! Natus culpa nesciunt libero assumenda. Iusto deleniti
            voluptatum ipsam veniam amet corporis possimus at fugiat, eligendi
            aliquid, temporibus harum similique?
          </div>
        </div>
      </section> */}
      <section className="section py-10">
        <div className="container">
          <h2 className="h2 text-center mb-10">Concept</h2>
          <img src={getImage("projects/apt/concept.png")} alt="concept" />
        </div>
      </section>
      <section className="section py-10">
        <div className="container">
          <h2 className="h2 text-center mb-10">Mockups</h2>
          <div className="flex -mx-4">
            <div className="flex-1 mx-4">
              <img
                src="/projects/apt/mockup-1.png"
                alt="mockup 1"
                className="w-full rounded-lg"
              />
            </div>
            <div className="flex-1 mx-4">
              <img
                src="/projects/apt/mockup-2.png"
                alt="muckup 2"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section py-10">
        <div className="container">
          <h2 className="h2 text-center mb-10">Final Product</h2>
          <Masonry
            breakpointCols={2}
            className="my-masonry-grid -mx-4"
            columnClassName="my-masonry-grid_column mx-4"
          >
            {images.map((image, index) => (
              <img src={getImage(image)} key={index} className="rounded-lg" />
            ))}
          </Masonry>
        </div>
      </section>
    </ProjectLayout>
  );
};

export default CampbellAve;
