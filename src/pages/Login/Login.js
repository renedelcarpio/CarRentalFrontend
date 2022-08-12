import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import service from '../../services/services';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onUserNameChange = (e) => setUserName(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const onSubmitAdd = (e) => {
    e.preventDefault();
    service.Login.login({
      userName,
      password,
    }).then(
      (user) => user && localStorage.setItem('user', JSON.stringify(user))
    );
    const localUser = localStorage.getItem('user');
    if (!localUser) {
      return;
    } else {
      navigate('/');
    }
  };

  return (
    <div className="login">
      <form className="userAdd__form login__form" onSubmit={onSubmitAdd}>
        <Input
          label="User Name"
          className=""
          name="userName"
          type="string"
          placeholder={'Enter your user name'}
          vlaue={userName}
          onChange={onUserNameChange}
        />
        <Input
          label="Password"
          className=""
          name="password"
          type="password"
          placeholder={'Enter your password'}
          vlaue={password}
          onChange={onPasswordChange}
        />
        <Button className="secondary rental__button" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
