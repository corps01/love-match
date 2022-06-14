import "./styles.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="logo-container">
        <img src="./../../../assets/love-match-logo.png"></img>
        <h1>Has match con tu <br></br>pareja ideal</h1>
      </div>
      <div className="form-container">
      <h2>Login</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut voluptates dolorum, amet, porro numquam doloribus aperiam itaque voluptatibus molestias delectus neque. Doloribus sint minima sed aperiam optio. Enim, dolore?</p>
        <form>
          <input type="text"></input>
          <input type="password"></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
