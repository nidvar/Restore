import { Link } from 'react-router';

import './ErrorPages.css';

function ErrorTestPage() {
  return (
    <div className="page">
      <div className="page-container error-test-page-container">
        <h2 className="errorpage-heading">Error testing page</h2>
        <Link to="/error/bad-request">Bad Request</Link>
        <Link to="/error/unauthorized">Unauthorized</Link>
        <Link to="/error/not-found">Not Found</Link>
        <Link to="/error/validation-error">Validation Error</Link>
        <Link to="/error/server-error">Server Error</Link>
      </div>
    </div>
  )
}

export default ErrorTestPage
