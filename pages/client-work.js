import ProjectLayout from "../layouts/ProjectLayout";
import ImageGallery from "../components/ImageGallery";

const ClientWork = () => {
  const clients = [
    {
      name: "Mckenzie",
      location: "Atlanta, GA",
      images: ["mckenzie-2.png", "mckenzie-3.png"],
    },
    {
      name: "Sapna",
      location: "Midtown Manhattan, NYC",
      images: ["sapna-1.png", "sapna-2.png"],
    },
    {
      name: "Amy",
      location: "Chicago, IL",
      images: ["amy-1.png", "amy-2.png", "amy-3.png", "amy-4.png"],
    },
    {
      name: "Michelle",
      location: "West Village, NYC",
      images: ["michelle-1.png", "michelle-2.png"],
    },
  ];

  return (
    <ProjectLayout title="Client Work" imageURL="/projects/clients/cover.jpg">
      <section className="section py-2 mb-4">
        <div className="container">
          {/* <div className="project-description py-10 text-center">
            This is a collection of work I've done for clients at Spoak.
          </div> */}
        </div>
      </section>
      {clients.map((client, index) => (
        <section className="section md:py-5 mb-4" key={index}>
          <div className="container">
            <h3 className="h3">{client.name}</h3>
            <div className="text-sm mb-2 md:mb-4">{client.location}</div>
            <ImageGallery images={client.images} project="clients" />
          </div>
        </section>
      ))}
    </ProjectLayout>
  );
};

export default ClientWork;
