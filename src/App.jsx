import React from 'react';

const App = () => {
  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-3 font-weight-bold text-primary">
          Setting Up React with Vite and Bootstrap
        </h1>
        <p className="lead text-muted mb-4">
          Learn how to quickly set up React with Vite and style it using Bootstrap.
        </p>
      </header>

      <main>
        <section className="mb-5">
          <h2 className="h3 text-primary mb-3">Setting Up the Project with Vite</h2>
          <p>
            To kick off the development of this project, I used <strong>Vite</strong>, a fast and modern build tool for React apps. Here are the steps I followed:
          </p>
          <ul className="list-group shadow-sm">
            <li className="list-group-item">Installed Vite using <code>npm create vite@latest my-react-app --template react</code>.</li>
            <li className="list-group-item">Navigated to the project directory with <code>cd my-react-app</code>.</li>
            <li className="list-group-item">Installed all dependencies using <code>npm install</code>.</li>
            <li className="list-group-item">Started the development server using <code>npm run dev</code>.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 text-primary mb-3">Installing and Using Bootstrap</h2>
          <p>
            To make the project look good and responsive, I integrated <strong>Bootstrap</strong> by following these steps:
          </p>
          <ul className="list-group shadow-sm">
            <li className="list-group-item">Installed Bootstrap via npm with <code>npm install bootstrap</code>.</li>
            <li className="list-group-item">Imported Bootstrap's CSS in <code>src/main.jsx</code> with the following line:
              <pre><code>import 'bootstrap/dist/css/bootstrap.min.css';</code></pre>
            </li>
            <li className="list-group-item">Used Bootstrap's grid system and utility classes to style the app.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3 text-primary mb-3">Building the Layout</h2>
          <p>
            I structured the page using Vite and React, leveraging Bootstrap's grid and responsive classes to create a clean, mobile-friendly layout.
          </p>
          <p>
            I used Bootstrap's <strong>container</strong>, <strong>row</strong>, and <strong>col</strong> classes for layout, which made it easy to build a responsive design.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h3 text-primary mb-3">Challenges and Solutions</h2>
          <div className="accordion" id="challengesAccordion">
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Challenge 1: Vite Configuration
                </button>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#challengesAccordion"
              >
                <div className="accordion-body">
                  Setting up Vite with React was smooth, but configuring it to handle React Fast Refresh and Bootstrap required referencing the Vite documentation. It was easy once I understood how the Vite configuration worked.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Challenge 2: Bootstrap Integration
                </button>
              </h3>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#challengesAccordion"
              >
                <div className="accordion-body">
                  The biggest issue was ensuring Bootstrap’s CSS was correctly loaded in the React environment. After importing it in <code>main.jsx</code>, everything worked smoothly.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Challenge 3: Responsive Design with Bootstrap
                </button>
              </h3>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#challengesAccordion"
              >
                <div className="accordion-body">
                  Making the app responsive on all devices was another challenge. By using Bootstrap's grid system and responsive utilities like <code>col-md-6</code> and <code>col-lg-4</code>, I ensured the app adapts well to different screen sizes.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center mt-5 py-4 bg-light rounded">
        <p className="text-muted mb-0">
          © 2024 React with Vite and Bootstrap | Built with React, Vite, and Bootstrap
        </p>
      </footer>
    </div>
  );
};

export default App;
