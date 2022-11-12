// useDispatch will be used to modifying the redux state
import { useDispatch } from "react-redux";
import {login,logout} from "../../features/user";
const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Suyog", age: "22", email: "gmail@gmail.com" })
          );
        }}
      >
        Login
      </button>

      <button onClick={()=>{dispatch(logout())}}>Logout</button>
    </div>
  );
};

export default Login;
