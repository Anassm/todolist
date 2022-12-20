import "../css/style.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <a href="#">
            <span>Anass Moussadi</span>
          </a>
        </p>
      </footer>
    </div>
  );
}
