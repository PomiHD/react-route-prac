import PageContent from "../components/PageContent.tsx";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.tsx";

export default function Error() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong. Please try again later.";

  if (error.status === 404) {
    title = "Page not found!";
    message = "The page you are looking for does not exist.";
  }
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
