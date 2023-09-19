import { UseContext } from "../ContextAPI/ContextAPI";
import Loading from "../components/Loading/Loading";
import Join from "../pages/Join/Join";

const ProtectedRoute = ({ children }) => {
  const { loggedUser, userLoading } = UseContext();

  if (userLoading) {
    return <Loading />;
  }

  if (loggedUser?.status !== "success") {
    return <Join />;
  }

  return children;
};

export default ProtectedRoute;
