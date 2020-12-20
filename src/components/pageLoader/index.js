import { Spinner } from "react-bootstrap";
import "./index.css";
const PageLoader = () => {
  return (
    <div className="loader-container">
      <Spinner animation="border" variant="primary" />
      <span>Loading.....</span>
    </div>
  );
};

export default PageLoader;
