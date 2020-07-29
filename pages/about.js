const About = () => {
  return (
    <div className="About">
      <section className="section">
        <div className="container">
          <h2 className="h2 my-10 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row md:-mx-4">
            <div className="flex-1 order-2 md:order-1 md:mx-4">
              <p className="text-xl font-semibold text-noche mb-3">
                Hi! I'm Nathalie.
              </p>
              <p className="mb-3">
                I have always enjoyed design in general, whether it was graphic,
                fashion, or interiors. Having a background in Advertising and
                Communication led me to understand color theory and composition,
                but it really made me understand how I really just love to
                surround myself in beautiful things and spaces. For me, our
                space is one of the most personal reflection of ourselves.
              </p>
              <p className="mb-3">
                My taste in interiors happened organically, my inspiration comes
                from everything I see and expirience. I want people to be proud
                of their space. A space where you want to spend time in because
                you feel comfortable and make you feel emotions. I want to help
                you implement the ideas in your head into something tangible.
                Help you express your personality and what you really like.
              </p>
              <p className="mb-3">
                Back in 2018 I switched careers and I started to put myself out
                there. I started doing E-designs for friends and just for myself
                for practice. Later in 2019, I got hired as a designer for a
                indie design startup called ‘Spoak’ where we helped clients
                achieve their dream space.
              </p>
              <p className="">
                To accompany my experience, I also started my studies in Parsons
                The New School of Design to obtein a certificate in Interior
                Design & Architecture Studies that I intend to finish by next
                year (2021).
              </p>
            </div>
            <div className="flex-1 order-1 md:order-2 mb-5 md:mb-0 md:mx-4">
              <img
                src="me.jpg"
                alt="Nathalie"
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
