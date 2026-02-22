import "./BrandName.css";

const BrandName = ({ showDot = false }) => (
  <span className="brand-name">
    {showDot && <span className="brand-dot" />}
    <span className="text-dark">LABIO</span>
    <span className="brand-accent">MEDIA</span>
  </span>
);

export default BrandName;