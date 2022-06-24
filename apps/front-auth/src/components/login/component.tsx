import './styles.scss';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginService } from '../../services/login';
import { saveToken } from '../../services/localstorage';
import { sha512 } from 'js-sha512';
import { Button, InputField } from '@love-match/components';

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

  // const formik = useFormik({
  //   initialValues:{
  //     email: '',
  //     password:'',
  //   },
  //   onSubmit: (values) =>{
  //     console.log(values)
  //   }
  // })

  const fetchLogin = async (values: loginForm) => {
    const auth = await LoginService({
      email: values.email,
      password: values.password,
    });
    saveToken(auth);
  };

  const formik = useFormik<loginForm>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: fetchLogin,
  });

  return (
    <div className="login">
      <div className="logo-container">
        <img src="./../../../assets/love-match-logo.png"></img>
        <h1>
          Has match con tu <br></br>pareja ideal
        </h1>
      </div>

      {formView !== 'enter' ? (
        <div className="form-container">
          <div className="login-form">
            <h2>Bienvenido</h2>
            <p>
              <b>AMOR - </b>
              Sentimiento hacia otra persona que naturalmente nos atrae y que,
              procurando reciprocidad en el deseo de unión, nos completa, alegra
              y da energía para convivir, comunicarnos y crear.
            </p>
            <form>
              <InputField
                type="email"
                placeholder="email"
                name="email"
                onChange={formik.handleChange('email')}
                value={formik.values.email}
                errorText={formik.errors.email}
                error={formik.errors.email !== undefined}
                />
              <InputField
                type="password"
                placeholder="contraseña"
                name="password"
                onChange={formik.handleChange('password')}
                value={formik.values.password}
                errorText={formik.errors.password}
                error={formik.errors.password !== undefined}
              />
              <div className="login-form-footer">
                <div className="form-checkbox">
                  <input type="checkbox"></input> <p>Recuerdame</p>
                </div>
                <button className='text-button' type="button" onClick={toggledRegister}>
                  Registrarme
                </button>
              </div>
              <Button type="button" onClick={() => formik.handleSubmit()}>
                Ingresar
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <div className="login-form">
            <h2>Estas a segundos de encontrar el amor</h2>
            <p>
              <b>AMOR - </b>
              Sentimiento hacia otra persona que naturalmente nos atrae y que,
              procurando reciprocidad en el deseo de unión, nos completa, alegra
              y da energía para convivir, comunicarnos y crear.
            </p>

            <form>
              <input type="email" placeholder="email" name="email"></input>
              <input
                type="confirma email"
                placeholder="confirma tu email"
              ></input>
              <input
                type="password"
                placeholder="contraseña"
                name="password"
              ></input>
              <input
                type="password"
                placeholder="confirma tu contraseña"
              ></input>
              <div className="login-form-footer">
                <div className="form-checkbox">
                  <input type="checkbox"></input> <p>Recuerdame</p>
                </div>
                <button type="button" className='text-button' onClick={toggledRegister}>
                  Ya soy un miembro
                </button>
              </div>
              <Button type="button" onClick={() => formik.handleSubmit()}>
                Registrarme
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
