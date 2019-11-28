import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>
        💚 #NuncaParesDeAprender
      </p>

      <style jsx>{`
        footer {
          background-color: #1E5372;
          margin: 0;
          padding: 20px 30px;
        }

        p {
          color: white;
          text-align: center;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
