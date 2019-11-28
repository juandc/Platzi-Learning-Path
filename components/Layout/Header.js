import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <figure>
          <img
            src="https://static.platzi.com/static/images/footer/logo.a76b2a87162b.png"
            alt="Platzi Learning Paths"
          />
        </figure>
      </nav>

      <style jsx>{`
        header {
          background-color: #254152;
          height: 90px;
          padding: 20px 30px;
        }

        figure {
          margin: 0;
          padding: 0;
          height: 50px;
        }

        img { height: inherit; }
      `}</style>
    </header>
  );
};

export default Header;
