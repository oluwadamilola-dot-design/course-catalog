import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-container not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you requested could not be found.</p>
      <Link to="/" className="home-link">Return to Home</Link>
    </div>
  );
}