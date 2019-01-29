import React from 'react';
import './Resume.css';
import profile from '../../images/mogrady.jpg';

const Resume = () => {
  return (
    <div className="resume">
      <img
        className="profile-img"
        src={profile}
        alt="profile"
        width="150"
        height="150"
      />

      <div className="resume-header">
        <h2 className="active-text">MATTHEW R. O'GRADY</h2>
        <div className="active-text">
          250 10th St NE #2203, Atlanta Ga. 30309 | 586-863-6509 |
          mrogrady88@gmail.com
        </div>
        <div>
          <a
            className="active-text"
            href="https://www.linkedin.com/in/matthew-o-grady-b7aa1bbb/"
          >
            https://www.linkedin.com/in/matthew-o-grady-b7aa1bbb/
          </a>
          |
          <a className="active-text" href="https://github.com/mogrady88">
            https://github.com/mogrady88
          </a>
        </div>
        <br />
        <div className="active-text">
          SUMMARY: Freelance developer who recently graduated from the Georgia
          Tech Coding Boot camp. Currently seeking full-time employment as Full
          Stack Developer. I have a passion for problem solving and artistic
          development. Current focus on MERN stack technologies.
        </div>
      </div>
      <div className="skills-projects-body">
        <h4 className="active-text">Technical Skills:</h4>
        <ul className="active-text">
          <li>
            Technologies: Javascript, HTML5, CSS, Node.js, React.js, Express.js,
            Bootstrap, JQuery, Handlebars.js
          </li>
          <li>Routing: RESTful APIs, AJAX, Axios</li>
          <li>Data Storage: MongoDB, Mongoose, MySQL, Sequelize</li>
          <li>Version Control / Deployment: Heroku, Git, Gitlab, Github</li>
        </ul>

        <p>
          <h3 className="active-text">TECHNICAL PROJECTS:</h3>
          <p className="active-text">
            Dialectic (MongoDB, Express.js, React.js, Node.js) – A workspace app
            designed to increase efficiency of communication between company and
            their consumer base.
          </p>
          <ul className="active-text">
            <li>
              Built backend web services using Node.js, Express.js, and MongoDB.
            </li>
            <li>Organized API routing and data flow.</li>
            <li>Enhanced frontend components using React.js.</li>
          </ul>
        </p>

        <p className="active-text">
          Atlanta Commons (HTML, CSS, Javascript, Node.js, Express.js, JQuery,
          Cloudinary, Nodemailer)– A community forum app based around the city
          of Atlanta.
        </p>
        <ul className="active-text">
          <li>
            Built backend web services using Node.js, Express.js, and
            Sequelize(MySQL).
          </li>
          <li>Implemented Cloudinary API for user photo storage.</li>
          <li>
            Integrated Nodemailer to streamline user to user communication.
          </li>
        </ul>
        <p className="active-text">
          iTravel (HTML, CSS, Javascript, JQuery) – Travel helper app to be used
          to find new attractions, hotels, and restaurants.
        </p>
        <ul className="active-text">
          <li>
            Developed single page web application using HTML, CSS, Javascript,
            and JQuery.
          </li>
          <li>
            Consumed Eventful and Yelp’s public api to populate front-end data
            visualization.
          </li>
        </ul>
        <ul className="active-text">
          <li>Smaller apps can be found via my Github account.</li>
        </ul>
      </div>
      <div className="work-body">
        <h3 className="active-text">PROFESSIONAL EXPERIENCE:</h3>

        <p className="active-text">
          GEORGIA AQUARIUM, Senior Technician – Industrial Automation, Atlanta,
          GA (2014 – 11/2018)
          <ul>
            <li>
              Worked as part of a team of 15 technicians to ensure proper
              filtration and water quality of salt and freshwater aquariums.
            </li>
            <li>
              Provided leadership to junior members of the team through
              mentorship and project management.
            </li>
            <li>
              Worked to improve functionality of our automated controls system
              through expansion buildouts and scripting development.
            </li>
          </ul>
        </p>
        <p className="active-text">
          A & M AQUATICS, Junior Aquarist, Lansing, MI (2012 – 2013)
          <ul>
            <li>
              Optimized A&M core business needs of maintaining a safe
              environment for fish stocks, plants and corals.
            </li>
            <li>
              Work included supporting fish breeding tasks, maintenance of
              tanks, water filtration systems and general record keeping and
              clerical tasks.
            </li>
            <li>
              Performed packaging and shipping services relative to meeting the
              needs of A&M customers by properly packaging live orders to assure
              safe delivery and minimize losses.
            </li>
          </ul>
        </p>
        <p className="active-text">
          OHLROGGE LAB, Plant Biology Bldg, Lab Technician, Michigan State
          University (2012)
          <ul>
            <li>
              While attending MSU, worked with professors and other field
              biologists to cultivate recombinant seed lines and was charged
              with maintaining the greenhouses on campus.
            </li>
            <li>
              Under minimal supervision, managed the germination, care, and
              cultivation of numerous plants of the genus Camellina.
            </li>
            <li>
              Critical controls were placed to measure observed changes to plant
              maturities when climate adjustments were applied.
            </li>
            <li>
              Used thin layer chromatography and other lab techniques and
              equipment to determine genotype of several T2 and T3 lines.
            </li>
          </ul>
        </p>
        <p className="active-text">
          LEO'S LANDSCAPING, Site Manager, Sterling Heights, MI (2004-2010)
          <ul>
            <li>
              Supervised and managed five employees with servicing 65 properties
              per week.
            </li>
            <li>
              Worked directly with company owner to ensure productivity and
              adherence to strict deadlines of property reconstruction.
            </li>
            <li>
              Other duties include marketing, point of sale, project management,
              and scheduling.
            </li>
          </ul>
        </p>
      </div>
      <div className="educ-body">
        <h3 className="active-text">EDUCATION:</h3>
        <ul className="active-text">
          <li>Georgia Tech – MERN Stack Bootcamp (2018)</li>
          <li>
            Michigan State University – B.S. in Zoology with a concentration in
            Marine Biology (2012)
          </li>
          <li>
            Macomb Community College – A.S. Degree with emphasis on Natural
            Sciences (2008)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
