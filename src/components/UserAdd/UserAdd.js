import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import Input from '../Input/Input';
import Button from '../Button/Button';

import service from '../../services/services';

import './UserAdd.scss';

const UserAdd = ({ onClick }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const onUserNameChange = (e) => setUserName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const onIsAdminChange = (e) => {
    if (e.target.value === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  const onSubmitAdd = (e) => {
    e.preventDefault();
    service.Users.createUser({
      userName,
      email,
      password,
      isAdmin,
    });
    window.location.reload();
  };

  return (
    <div className="carEdit">
      <form className="userAdd__form" onSubmit={onSubmitAdd}>
        <GrFormClose className="userAdd__close" onClick={onClick} />
        <Input
          label="User name"
          className=""
          name="userName"
          type="string"
          placeholder="Add your user name"
          vlaue={userName}
          onChange={onUserNameChange}
        />
        <Input
          label="Email"
          className=""
          name="email"
          type="string"
          placeholder="Add your email"
          vlaue={email}
          onChange={onEmailChange}
        />
        <Input
          label="Password"
          className=""
          name="password"
          type="password"
          placeholder="Add your password"
          vlaue={password}
          onChange={onPasswordChange}
        />
        <Input
          label="Is Admin"
          className=""
          name="isAdmin"
          type="string"
          placeholder="Specify is is admin or user"
          vlaue={isAdmin}
          onChange={onIsAdminChange}
        />
        <Button className="secondary rental__button" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default UserAdd;
