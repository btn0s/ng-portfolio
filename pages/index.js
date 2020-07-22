import FeaturedProject from "../components/FeaturedProject";
import Link from "next/link";

const Home = () => {
  const featuredProjects = [
    {
      _id: 1,
      title: "Nursery Concepts",
      url: "/nursery-concepts",
      imagePath: "/featured/nursery-concepts-cover.png",
    },
    {
      _id: 2,
      title: "Bedroom Concepts",
      url: "/bedroom-concepts",
      imagePath: "/featured/bedroom-concepts-cover.png",
    },
    {
      _id: 3,
      title: "Living Room Concepts",
      url: "/living-room-concepts",
      imagePath: "/featured/livingroom-concepts-cover.png",
    },
  ];

  return (
    <>
      <div className="section pt-5 md:pt-10 py-10">
        <div className="container">
          <h1 className="h1">
            Hi there! I'm an interior designer and stylist
            <br />
            based in the Valley of the Sun.
          </h1>
        </div>
      </div>
      <div className="section mb-10">
        <div className="container">
          <img
            src="/hero-img.png"
            alt="Campbell Ave"
            className="hero-img w-full md:w-11/12 md:mb-0"
          />
          <div className="hero-info absolute bottom-0 right-0 p-4 md:p-8 w-10/12 md:w-5/12 -mb-5 md:mb-5 shadow-xl bg-white rounded-lg">
            <h2 className="h2 mb-2">Cambell Ave Apartment</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, corporis dolor dolore excepturi omnis asperiores
              expedita.
            </p>
            <Link href="/campbell-ave-apartment">
              <button className="btn btn--primary">see more</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2 className="h2 pt-10 mb-5">Featured Projects</h2>
          <div className="flex flex-col md:flex-row -mr-2 -ml-2">
            {featuredProjects.map((project) => (
              <div className="flex-1" key={project._id}>
                <FeaturedProject
                  title={project.title}
                  url={project.url}
                  imagePath={project.imagePath}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
