import Head from "next/head";

import Navbar from "../components/Navbar";
import FeaturedProject from "../components/FeaturedProject";

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
    <div className="main-wrapper">
      <Head>
        <title>Nathalie Garcia | Interior Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-2 md:px-0">
        <Navbar />
        <div className="section py-10">
          <div className="container">
            <h1 className="h1">
              Hi there! I'm an interior designer and decorator
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
              className="hero-img w-11/12"
            />
            <div className="hero-info absolute bottom-0 right-0 p-4 md:p-8 w-10/12 md:w-5/12 mb-5 shadow-xl bg-white rounded-lg">
              <h2 className="h2 mb-2">Cambell Ave Apartment</h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, corporis dolor dolore excepturi omnis asperiores
                expedita.
              </p>
              <button className="btn btn--primary">see more</button>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="flex  -mr-2 -ml-2">
              {featuredProjects.map((project) => (
                <div className="flex-1">
                  <FeaturedProject
                    title={project.title}
                    url={project.url}
                    imagePath={project.imagePath}
                    key={project._id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="flex justify-center py-10">
        Nathalie Gacria | Interior Designer
      </footer>
    </div>
  );
};

export default Home;
