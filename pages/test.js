import Head from "next/head";
import Navbar from "../components/Navbar";

const Home = () => {
  let currentProject = 0;
  const bgImg = ["/hero-img.png"];

  return (
    <div className="main-wrapper">
      <Head>
        <title>Nathalie Garcia | Interior Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex">
          <div className="flex-1 h-full">
            <div
              className="home-project-image"
              style={{ backgroundImage: bgImg[currentProject] }}
            ></div>
          </div>
          <div className="flex-1 h-full">
            <Navbar />

            <h1 className="h1 mb-5">
              Hi there! I'm an interior designer and decorator
              <br />
              based in the Valley of the Sun.
            </h1>
            <p>I specialize in digital design services and ...</p>

            <footer className="flex justify-center py-10">
              Nathalie Gacria | Interior Designer
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
