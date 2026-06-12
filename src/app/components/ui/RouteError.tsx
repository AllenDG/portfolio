import { useRouteError, isRouteErrorResponse } from "react-router";
import { Container } from "./Container";
import { H2, Body } from "./Typography";
import { Button } from "./Button";

export function RouteError() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || "Unknown error";
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Container>
        <div className="text-center space-y-4">
          <H2 className="text-4xl">Oops!</H2>
          <Body className="text-xl text-[#525252]">Sorry, an unexpected error has occurred.</Body>
          <div className="bg-red-50 p-4 rounded text-left overflow-auto max-w-lg mx-auto">
            <code className="text-red-500 text-sm block">
              {errorMessage}
            </code>
          </div>
          <Button onClick={() => window.location.href = "/"} variant="outline" className="mt-4">
            Reload Application
          </Button>
        </div>
      </Container>
    </div>
  );
}
