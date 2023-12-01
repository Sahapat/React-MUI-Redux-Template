import { FC } from "react";
import { useRouteError, ErrorResponse } from "react-router-dom"

interface IProps {}

const ErrorRoute: FC<IProps> = ({}) => {
  const error = useRouteError() as ErrorResponse
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{`${error.status} ${error.statusText}`}</i>
      </p>
    </div>
  )
}

export default ErrorRoute
