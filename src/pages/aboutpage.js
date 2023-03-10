import "../css/style.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="about-wrapper">
      <div className="about-block1">
        <span>About us</span>
        <h1>Who are we?</h1>
        <p>
          Our To-Do List website is designed to help people manage their tasks
          and responsibilities in an organized and efficient manner. With its
          intuitive interface and powerful features, our platform makes it easy
          for users to stay on top of their to-do list, no matter how busy their
          schedule may be.
          <br />
          <br />
          Our website was created with the goal of simplifying task management
          for individuals and teams. Whether you're a student, professional, or
          just someone looking to stay organized, our to-do list platform offers
          the tools and features you need to get the job done. You can create
          task lists, set due dates, and add notes to help you stay on track.
          You can also share your lists with friends, family, or coworkers to
          collaborate on projects and keep everyone up-to-date on progress.
        </p>
        <Link to="/contact">Questions?</Link>
      </div>
      <div className="about-block2">
        <div className="about-grid-block2">
          <div className="about-accomplishments-block2">
            <h2>Our accomplishments</h2>
            <p>
              TO DO has become a leader in its field, earning many <br /> awards
              for its innovative products and excellent customer service. Check
              out more of our projects:
            </p>
            <ul>
              <li>
                A portfolio website - <a href="#">Anass</a>
              </li>
              <li>
                An astronomy website - <a href="#">Stargaze</a>
              </li>
              <li>
                Website for Indian restaurant -{" "}
                <a href="https://restaurant-handi.nl/">Handi</a>
              </li>
            </ul>
            <a
              className="about-btn-block2"
              href="https://github.com/Anassm/Portfolio"
            >
              See more projects →
            </a>
          </div>
          <Player
            src="https://assets3.lottiefiles.com/packages/lf20_akyUFY9GQo.json"
            className="player2"
            background="transparent"
            speed="0.5"
            loop
            autoplay
          ></Player>
        </div>
      </div>
    </div>
  );
}
