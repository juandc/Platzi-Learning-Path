import React from 'react';

const LearningPathEditor = () => {
  return (
    <section className="editor">
      <style jsx>{`
        .editor {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1200px;
        }

        .editor-form {
          width: 60%;
        }

        .editor-coursesPreview {
          width: 40%;
        }

        .coursesSelector {
          display: flex;
          flex-wrap: wrap;
        }
        input { width: 100%;}
      `}</style>
    
      <article className="editor-form">
        <div className="backgroundSelector">
          <label>Selecciona una plantilla:</label>

          <select>...</select>
        </div>

        <div className="coursesSelector">
          <label>Selecciona tus cursos:</label>

          <input type="text" />

          <ul>
            <li>Curso Profesional de JavScript</li>
          </ul>

          <button>Añadir</button>
        </div>
      </article>

      <article className="editor-coursesPreview">
        <ul className="dragabbleList">
          <li className="course">
            <figure className="course-image">
              <img src="..." alt="Curso de X" />
            </figure>

            <span className="course-name">Curso de X</span>
          </li>

          <li className="course">
            <figure className="course-image">
              <img src="..." alt="Curso de X" />
            </figure>

            <span className="course-name">Curso de X</span>
          </li>

          <li className="course">
            <figure className="course-image">
              <img src="..." alt="Curso de X" />
            </figure>

            <span className="course-name">Curso de X</span>
          </li>
        </ul>

        <button>Crear</button>
      </article>
    </section>
  );
};

export default LearningPathEditor;
