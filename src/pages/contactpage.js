import "../css/style.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

export default function ContactPage() {
  return (
    <div className="contact-wrapper">
      <div className="contact-block1">
        <h1>Leave a message</h1>
        <form>
          <label className="contact-email-block1">
            <p>E-mail</p>
            <input type="email" placeholder="Contact@Anass.com" />
          </label>
          <label className="contact-subject-block1">
            <p>Subject</p>
            <input type="text" placeholder="Projects" />
          </label>
          <label>
            <p>Message</p>
            <textarea
              placeholder="You have such an amazing website!"
              rows="9"
            />
          </label>
          <button type="submit" value="">
            Send Message
          </button>
        </form>
      </div>
      <div className="contact-block2">
        <h1>
          <span>Follow us</span>
        </h1>
        <div className="contact-lables">
          <a href="#">
            <div className="contact-lable">
              <AiFillFacebook /> <h2>Facebook</h2>
            </div>
          </a>
          <a href="#">
            <div className="contact-lable">
              <AiFillInstagram /> <h2>Instagram</h2>
            </div>
          </a>
          <a href="#">
            <div className="contact-lable">
              <AiFillTwitterCircle /> <h2>Twitter</h2>
            </div>
          </a>
          <a href="#">
            <div className="contact-lable">
              <AiFillYoutube /> <h2>Youtube</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
