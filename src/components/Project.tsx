import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <h2>3S Wallet</h2>
          </a>
          <p>
            3S Wallet is a multi-chain crypto wallet researched and developed by
            BHO Network based on three criteria Simple - Secure - Safe, aiming
            to be a comprehensive product in terms of technology, security and
            user experience
          </p>
        </div>
        <div className="project">
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <h2>English For School</h2>
          </a>
          <p>
            Building App English For School with a micro-learning method.
            Support students to learn and practice the exercises in the textbook
            with many activities and more than 100 different types of exercises.
            Include features for practicing speaking and learning new words with
            flashcard and teaching online
          </p>
        </div>
        <div className="project">
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <h2>NetView</h2>
          </a>
          <p>
            Develop applications to help organizations summarize, classify and
            statistics articles on newspapers & social networks. Netview users
            can view articles according to trends and outstanding and
            interesting topics of people in the fields of economy, education,
            transportation, science and technology, and quickly update
            information. quickly and effectively on the economic and social
            situation of the country
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Viettel Voice Note</h2>
          </a>
          <p>
            Develop applications for recording directly or via switchboard,
            using AI technology to produce speech recognition with high
            accuracy. Help journalists record and automatically convert into
            text
          </p>
        </div>
        <div className="project">
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <h2>Ereka Mobile App: Knowledge social network</h2>
          </a>
          <p>A knowledge sharing platform for Vietnamese people</p>
        </div>
        <div className="project">
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <h2>T-REX EXCHANGE</h2>
          </a>
          <p>
            Building a P2P platform that supports safe and fast electronic asset
            trading, for many different investors on the blockchain platform.
            This will be the first step in realizing our vision of innovative
            financial services for everyone
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
