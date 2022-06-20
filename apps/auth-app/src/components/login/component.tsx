import './styles.scss';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';



export interface loginForm {
  email: string;
  password: string;
}

export const loginSchema = Yup.object({
  email: Yup.string().email('Escribe un email valido'),
  password: Yup.string()
    .max(20, 'La clave debe contener menos de 20 caracteres.')
    .min(3, 'La clave debe contener al menos 3 caracteres.'),
});


const Login = () => {
  const [formView, setFormView] = useState('');

  const toggledRegister = () => {
    setFormView(formView === 'enter' ? 'register' : 'enter');
  };


const formik = useFormik({
  initialValues:{
    email: '',
    password:'',
  },
  onSubmit: (values) =>{
    console.log(values)
  }
})

  return (
    <div className="login">
      <div className="logo-container">
        <img src="./../../../assets/love-match-logo.png"></img>
        <h1>
          Has match con tu <br></br>pareja ideal
        </h1>
      </div>

      {formView === 'enter' ?(<div className="form-container">
        <div className="login-form">
          <h2>Bienvenido</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut
            voluptates dolorum, amet, porro numquam doloribus aperiam itaque
            voluptatibus molestias delectus neque. Doloribus sint minima sed
            aperiam optio. Enim, dolore?
          </p>
          <form>
            <input type="email" placeholder="email" name='email' onChange={formik.handleChange("email")} value={formik.values.email}></input>
            <input type="password" placeholder="contraseña" name='password' onChange={formik.handleChange("password")} value={formik.values.password}></input>
            <div className="login-form-footer">
              <div className="form-checkbox">
                <input type="checkbox"></input> <p>Recuerdame</p>
              </div>
              <a href='#' onClick={toggledRegister}>Registrarme</a>
            </div>
            <button type='button' onClick={()=> formik.handleSubmit()}>Ingresar</button>
          </form>
        </div>
      </div>
      ) : (<div className="form-container">
        <div className="login-form">
          <h2>Estas a segundos de encontrar el amor</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut
            voluptates dolorum, amet, porro numquam doloribus aperiam itaque
            voluptatibus molestias delectus neque. Doloribus sint minima sed
            aperiam optio. Enim, dolore?
          </p>

          <form>
            <input type="email" placeholder="email" name='email'></input>
            <input
              type="confirma email"
              placeholder="confirma tu email"
            ></input>
            <input type="password" placeholder="contraseña" name='password'></input>
            <input type="password" placeholder="confirma tu contraseña"></input>
            <div className="login-form-footer">
              <div className="form-checkbox">
                <input type="checkbox"></input> <p>Recuerdame</p>
              </div>
              <a href='#' onClick={toggledRegister}>Ya soy un miembro</a>
            </div>
            <button type='button' onClick={()=> formik.handleSubmit()}>Registrarme</button>
          </form>
        </div>
      </div>)}
    </div>
  );
};

export default Login;
