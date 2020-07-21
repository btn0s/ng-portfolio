import ProjectLayout from "../layouts/ProjectLayout";

const LivingRoomConcepts = () => {
  const concepts = [
    {
      title: "Concept 1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere hic non ipsa ea quae nostrum dolorum omnis autem soluta?",
      conceptImage: "concept-1.png",
      mockupImage: "mockup-1.png",
    },
    {
      title: "Concept 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere hic non ipsa ea quae nostrum dolorum omnis autem soluta?",
      conceptImage: "concept-1.png",
      mockupImage: "mockup-1.png",
    },
    {
      title: "Concept 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere hic non ipsa ea quae nostrum dolorum omnis autem soluta?",
      conceptImage: "concept-1.png",
      mockupImage: "mockup-1.png",
    },
    {
      title: "Concept 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere hic non ipsa ea quae nostrum dolorum omnis autem soluta?",
      conceptImage: "concept-1.png",
      mockupImage: "mockup-1.png",
    },
  ];

  const getImage = (path) => require(`../public/projects/livingrooms/${path}`);

  return (
    <ProjectLayout
      title="Living Room Concepts"
      imageURL="/featured/livingroom-concepts-cover.png"
    >
      {concepts.map((concept, index) => (
        <section className="section py-10">
          <div className="container">
            <div className="text-center py-4 mb-4">
              <h2 className="h2 mb-2">{concept.title}</h2>
              <p>{concept.description}</p>
            </div>
            <div className="flex -mx-4">
              <div className="flex-1">
                <img
                  src={getImage(concept.conceptImage)}
                  alt={concept.title}
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <img
                  src={getImage(concept.mockupImage)}
                  alt={concept.title}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </ProjectLayout>
  );
};

export default LivingRoomConcepts;
