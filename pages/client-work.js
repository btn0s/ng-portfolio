import ProjectLayout from "../layouts/ProjectLayout";
import ImageGallery from "../components/ImageGallery";

const ClientWork = () => {
  const clients = [
    {
      name: "Mckenzie",
      description:
        "Mckenzie wanted a cozy but sophisticated style. She wanted some new pieces with a Mix of modern and eclectic and deep and fun colors. We mixed a lot of materials in the room such as wool, leather, marble, wood, velvet and rattan, to make it instantly more interesting and stylish.",
      location: "Atlanta, GA",
      images: ["mckenzie-2.png", "mckenzie-3.png"],
    },
    {
      name: "Sapna",
      description:
        "Sapna wanted her space to look more stylish and a bit more girly. She was open to get rid of some pieces to make her space feel more sophisticated and cozier. We went with a mix of pinks and blues to match her existing sofa.",
      location: "Midtown Manhattan, NYC",
      images: ["sapna-1.png", "sapna-2.png"],
    },
    {
      name: "Amy",
      description:
        "Amy wanted her house to look bright and airy with functional pieces to fit her family and lifestyle. Her main goal was her house to look put together so we went with a lot of neutrals and soft blues.",
      location: "Chicago, IL",
      images: ["amy-1.png", "amy-2.png", "amy-3.png", "amy-4.png"],
    },
    {
      name: "Michelle",
      description:
        "Michelle had already some great pieces that I incorporated in the final look. She wanted her home to look whimsical but also very stylish. The big goal was to find two big art pieces that captured her personality and the essence of her home.",
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
            <div className="text-sm mb-2 md:mb-2">{client.location}</div>
            <h5 className="h5 text-sm md:text-md mb-4 md:mb-4">
              {client.description}
            </h5>
            <ImageGallery images={client.images} project="clients" />
          </div>
        </section>
      ))}
    </ProjectLayout>
  );
};

export default ClientWork;
