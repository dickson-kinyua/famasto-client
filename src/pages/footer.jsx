import { Link } from "react-router-dom";

export default function FooterInfo() {
  return (
    <div className="footer">
      <Link to="/contact">Get in touch</Link>
      <p>Copyright by Famasto 2024</p>
    </div>
  );
}
