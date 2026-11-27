import { Link } from 'react-router';

import './ErrorPages.css';

function ErrorTestPage() {
  return (
    <div className="page">
      <div className="page-container error-test-page-container">
        <h2 className="errorpage-heading">Error testing page</h2>
        <Link to="/error/bad-request" className='button'>Bad Request</Link>
        <Link to="/error/unauthorized" className='button'>Unauthorized</Link>
        <Link to="/error/not-found" className='button'>Not Found</Link>
        <Link to="/error/validation-error" className='button'>Validation Error</Link>
        <Link to="/error/server-error" className='button'>Server Error</Link>
      </div>
    </div>
  )
}

export default ErrorTestPage
