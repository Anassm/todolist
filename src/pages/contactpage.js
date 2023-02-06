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
        <h1>Fill out this form to contact us!</h1>
        <div>
          <form>
            <label>
              <p>E-mail</p>
              <input type="email" placeholder="Contact@Anass.com" />
            </label>
            <label>
              <p>Message</p>
              <input
                type="textarea"
                placeholder="You have such an amazing website!"
              />
            </label>
          </form>
        </div>
      </div>
      <h1 style={{ marginTop: "8vh", marginBottom: "2vh" }}>
        Follow us on our social platforms:
      </h1>
      <div className="contact-block2">
        <a href="#">
          <div className="contact-lable1">
            <AiFillFacebook /> <h2>Facebook</h2>
          </div>
        </a>
        <a href="#">
          <div className="contact-lable2">
            <AiFillInstagram /> <h2>Instagram</h2>
          </div>
        </a>
        <a href="#">
          <div className="contact-lable3">
            <AiFillTwitterCircle /> <h2>Twitter</h2>
          </div>
        </a>
        <a href="#">
          <div className="contact-lable4">
            <AiFillYoutube /> <h2>Youtube</h2>
          </div>
        </a>
      </div>
    </div>
  );
}
