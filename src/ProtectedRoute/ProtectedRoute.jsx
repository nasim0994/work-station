import { useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import Join from "../pages/Join/Join";

const ProtectedRoute = ({ children }) => {
  const { loggedUser, loading } = useSelector((state) => state.auth);

  if (loading && !loggedUser?.status) {
    return <Loading />;
  }

  if (!loggedUser?.status && !loading) {
    <Join />;
  }

  if (loggedUser?.status) {
    return children;
  }
};

export default ProtectedRoute;
