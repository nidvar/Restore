import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

type errorType = {
  detail: string;
  status: number;
  title: string;
  errors?: {
    Problem1: string;
    Problem2: string;
  }
}

function BadRequestPage() {

  const params = useParams();
  const [error, setError] = useState<errorType>();

  useEffect(() => {
    fetch("https://localhost:5001/api/buggy/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setError(res);
      })
  }, [params.id])

  return (
    <div className="page">
      <div className="page-container">
        {
          error ?
            <div>
              <h2 className="app-heading">{error.title}</h2>
              <br />
              <div className='flex-col gap-10 mw-400'>
                <p><span className='font-light'>Status:</span> {error.status}</p>
                {error.detail ? <p><span className='font-light'>Detail:</span> {error.detail}</p> : null}
                {
                  error.errors?
                  <div>
                    <p><span className='font-light'>Problem 1:</span> {error.errors.Problem1}</p>
                    <p><span className='font-light'>Problem 2:</span> {error.errors.Problem2}</p>
                  </div>:null
                }
              </div>
            </div> : null
        }
        <br />
        <Link to='/' className='button'>HOME</Link>
      </div>
    </div>
  )
}

export default BadRequestPage
