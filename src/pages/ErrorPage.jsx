import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="text-center">
          <h2 className="text-9xl text-primary font-bold">404</h2>
          <p className="text-2xl mb-5">Pages Not Found</p>

          <Link className="btn btn-primary" to="/">
            Home
          </Link>
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default ErrorPage;
