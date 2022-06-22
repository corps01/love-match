import './styles.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="logo-container">
        <img src="./../../../assets/love-match-logo.png"></img>
        <h1>
          Has match con tu <br></br>pareja ideal
        </h1>
      </div>
      <div className="form-container">
        <div className="login-form">
          <h2>Registrate</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut
            voluptates dolorum, amet, porro numquam doloribus aperiam itaque
            voluptatibus molestias delectus neque. Doloribus sint minima sed
            aperiam optio. Enim, dolore?
          </p>
          <form>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <div className="login-form-footer">
              <div className="form-checkbox">
                <input type="checkbox"></input> <p>Recuerdame</p>
              </div>
              <a href='#'>Ya soy un miembro</a>
            </div>
            <button>Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
