import "../css/style.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="home-block1">
        <div>
          <h1>
            Organize, <br></br> Make your <span>impact.</span>
          </h1>
          <p>
            Introducing the ultimate To-Do List! With this amazing app, you can
            easily keep track of all the tasks you need to get done. Whether
            it's planning a grocery list, jotting down notes for a meeting, or
            creating reminders for upcoming events, the To-Do List is the
            perfect tool for staying organized. <br></br> <br></br> With its
            intuitive design and easy-to-use interface, you'll be able to
            create, view, and complete tasks like never before. Download the
            To-Do List today and make sure you never miss another deadline!
          </p>
        </div>
        <Player
          src="https://assets10.lottiefiles.com/packages/lf20_cJasAB9Hi0.json"
          className="player"
          speed="0.5"
          keepLastFrame="true"
          autoplay
        ></Player>
      </div>
      <div className="home-block2">
        <span>Completely free</span>
        <h1>Still reading?</h1>
        <p>
          Are you looking for a simple and effective way to stay organized? Our
          to-do list is the perfect tool for you! It's easy to use, and it will
          help you save time and stay productive. With our to-do list, you can
          quickly and easily track tasks, set due dates and reminders, and
          prioritize tasks. Plus, you can access it from any device, making it
          easy to stay on top of your work. Give our to-do list a try today and
          see how it can help you stay organized and productive!
        </p>
        <Link to="/about">Read about us! →</Link>
      </div>
    </>
  );
}
