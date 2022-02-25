import { getWeb3 } from "../eth";

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => getWeb3()}> Connect to metamask</button>
    </div>
  );
};

export default Login;
