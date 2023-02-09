import "../css/style.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function AboutPage() {
  return (
    <div className="about-wrapper">
      <div className="about-block2">
        <div className="about-grid-block2">
          <div className="about-accomplishments-block2">
            <h2>Our accomplishments</h2>
            <p>
              TO DO has become a leader in its field, earning many awards for
              its innovative products and excellent customer service. Check out
              more of our projects:
            </p>
            <ul>
              <li>
                A portfolio website - <a href="https://anassm.com">Anassm</a>
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
              href="https://anassm.com/my-projects"
            >
              See more projects →
            </a>
          </div>
          <div>
            <Player
              src="https://assets3.lottiefiles.com/packages/lf20_akyUFY9GQo.json"
              className="player2"
              background="transparent"
              speed="0.5"
              loop
              controls
              autoplay
            ></Player>
          </div>
        </div>
      </div>
    </div>
  );
}
