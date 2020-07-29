const Inspiration = () => {
  return (
    <div className="Inspiration">
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row md:-mx-4">
            <div className="md:mx-4 w-full md:w-4/12 text-center md:text-left py-10">
              <h2 className="h2">Creativity never goes out of style.</h2>
            </div>
            <div className="md:mx-4 w-full md:w-8/12">
              <img src="/inspo.png" alt="Inspiration Board" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inspiration;
