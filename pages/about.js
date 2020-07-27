const About = () => {
  return (
    <div className="About">
      <section className="section">
        <div className="container">
          <h2 className="h2 my-10 text-center">About Me</h2>
          <div className="flex -mx-4">
            <div className="flex-1 mx-4">
              <p className="mb-3">Hi! I'm Nathalie.</p>
              <p className="mb-3">
                I have always enjoy design in general, whether it was graphic,
                fashion, or interiors. Having a background in Advertising and
                Communication led me to understand color theory and composition,
                but it really make me understand how I really just love to
                surround myself in beautiful things and spaces.
              </p>
              <p className="mb-3">
                My taste in interiors happened organically, my inspiration comes
                from everything that surrounds me.
              </p>
              <p className="mb-3">
                Just last year (2019) I swiched careers and I started to put
                myself out there. I started doing E-designs for friends and just
                for myself for practice. Later in that year I got hired as a
                designer for a indie startup called ‘Spoak’ where we helped
                clients achieve their dream space.
              </p>
              <p className="">
                To accompany my experience, I also started my studies in Parsons
                The New School of Design to obtein a certificate in Interior
                Design & Architecture Studies that I intend to finish by next
                year (2021).
              </p>
            </div>
            <div className="flex-1 mx-4">
              <img src="me.png" alt="Nathalie" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
