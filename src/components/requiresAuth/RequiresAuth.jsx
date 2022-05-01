import { Toast } from "components";
import { useLogin } from "contexts";
import { Navigate, useLocation } from "react-router-dom";

export function RequiresAuth({ children }) {
  const { isLoggedIn } = useLogin();
  const location = useLocation();
  
  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
          <>
        <Navigate to="/signup" state={{ from: location }} replace></Navigate>
        </>
      )}
    </>
  );
}
