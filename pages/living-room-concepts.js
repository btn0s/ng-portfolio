import ProjectLayout from "../layouts/ProjectLayout";
import { PROJECTS_DIR } from "../constants";

const ASSET_PATH = `${PROJECTS_DIR}/livingrooms`;

const concepts = [
  {
    title: "Concept 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere hic non ipsa ea quae nostrum dolorum omnis autem soluta?",
    conceptImage: "concept-1.png",
    mockupImage: "mockup-1.jpg",
  },
  {
    title: "Concept 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere hic non ipsa ea quae nostrum dolorum omnis autem soluta?",
    conceptImage: "concept-2.png",
    mockupImage: "mockup-2.jpg",
  },
  {
    title: "Concept 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere hic non ipsa ea quae nostrum dolorum omnis autem soluta?",
    conceptImage: "concept-3.png",
    mockupImage: "mockup-3.jpg",
  },
  {
    title: "Concept 4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere hic non ipsa ea quae nostrum dolorum omnis autem soluta?",
    conceptImage: "concept-4.png",
    mockupImage: "mockup-4.jpg",
  },
  {
    title: "Concept 5",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere hic non ipsa ea quae nostrum dolorum omnis autem soluta?",
    conceptImage: "concept-5.png",
    mockupImage: "mockup-5.jpg",
  },
  {
    title: "Concept 6",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere hic non ipsa ea quae nostrum dolorum omnis autem soluta?",
    conceptImage: "concept-6.png",
    mockupImage: "mockup-6.jpg",
  },
];

const LivingRoomConcepts = () => {
  return (
    <ProjectLayout
      title="Living Room Concepts"
      imageURL={`${ASSET_PATH}/cover.png`}
    >
      {concepts.map((concept, index) => (
        <section className="section py-10" key={concept.title}>
          <div className="container">
            <div className="text-center py-4 md:mb-4">
              <h2 className="h2 mb-2">{concept.title}</h2>
              {/* <p>{concept.description}</p> */}
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:-mx-4">
              <div className="w-full md:w-6/12 md:mx-4">
                <img
                  src={`${ASSET_PATH}/${concept.conceptImage}`}
                  alt={concept.title}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-full md:w-6/12 md:mx-4">
                <img
                  src={`${ASSET_PATH}/${concept.mockupImage}`}
                  alt={concept.title}
                  className="w-full rounded-lg"
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
