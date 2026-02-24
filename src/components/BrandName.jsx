import "./BrandName.css";

const BrandName = ({ showDot = false, variant = "dark" }) => (
  <span className={`brand-name ${variant}`}>
    {showDot && <span className="brand-dot" />}
    <span className="brand-labio">LABIO</span>
    <span className="brand-accent">MEDIA</span>
  </span>
);

export default BrandName;