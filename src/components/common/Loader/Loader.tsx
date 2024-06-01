import "./Loader.css";
import Logo from "/images/pql_logo_loader.png";

export default function Loader() {
  return (
    <div className="loader-container">
      <img src={Logo} alt="logo" className="loader-img" />
    </div>
  );
}
