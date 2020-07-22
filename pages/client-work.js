import Masonry from "react-masonry-css";
import ProjectLayout from "../layouts/ProjectLayout";

const ClientWork = () => {
  const images = [
    {
      caption: "Michele, somewhere",
      image: "projects/clients/clients-1.png",
    },
    {
      caption: "Sapna, somehwere else",
      image: "projects/clients/clients-5.png",
    },
    {
      // caption: "",
      image: "projects/clients/clients-4.png",
    },
    {
      // caption: "",
      image: "projects/clients/clients-3.png",
    },
    {
      // caption: "",
      image: "projects/clients/clients-2.png",
    },
    {
      // caption: "",
      image: "projects/clients/clients-6.png",
    },
    {
      // caption: "",
      image: "projects/clients/clients-8.png",
    },
    {
      // caption: "",
      image: "projects/clients/clients-10.png",
    },
    {
      // caption: "",
      image: "projects/clients/clients-9.png",
    },
    {
      // caption: "",
      image: "projects/clients/clients-7.png",
    },
  ];

  return (
    <ProjectLayout title="Client Work" imageURL="/projects/clients/cover.jpg">
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
                {item.caption && <p className="pt-2 text-sm">{item.caption}</p>}
              </div>
            ))}
          </Masonry>
        </div>
      </section>
    </ProjectLayout>
  );
};

export default ClientWork;
