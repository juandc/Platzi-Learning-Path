import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-layout">
        <div className="hero-col hero-col--left">
          <h1 className="hero-title">Crea tu Ruta de Aprendizaje Personalizada</h1>
          <p className="hero-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="hero-col hero-col--right">
          <figure className="hero-image">
            <img
              src="https://static.platzi.com/static/images/Forum/foro_ilustracion.0bc6d9bb569e.png"
              alt="Aquí no sé qué va"
            />
          </figure>
        </div>
      </div>

      <style jsx>{`
        .hero {
          background-color: #1E5372;
          color: white;
          padding: 30px 60px;
        }

        .hero-layout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1200px;
        }
        .hero-col--left {
          width: 60%;
        }
        .hero-col--right {
          width: 40%;
        }

        .hero-title, .hero-description {
          margin: 0;
          padding: 0;
        }
        .hero-title {
          margin-bottom: 16px;
          font-size: 36px;
        }
        .hero-description {
          font-size: 18px;
        }

        .hero-image {
          margin: 0;
          padding: 0;
          height: 200px;
          text-align: center;
        }
        img {
          height: inherit;
        }
      `}</style>
    </section>
  );
};

export default Hero;
