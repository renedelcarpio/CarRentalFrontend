import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import Input from '../Input/Input';
import Button from '../Button/Button';

import service from '../../services/services';

const UserEdit = ({ user, onClick }) => {
  const [userName, setUserName] = useState(user.Username);
  const [email, setEmail] = useState(user.Email);
  const [password, setPassword] = useState(user.Password);
  const [isAdmin, setIsAdmin] = useState(user.IsAdmin);

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
    service.Users.updateUser(user.Id, {
      id: user.Id,
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
          label="User Name"
          className=""
          name="userName"
          type="string"
          placeholder={user.Username}
          vlaue={userName}
          onChange={onUserNameChange}
        />
        <Input
          label="Email"
          className=""
          name="email"
          type="string"
          placeholder={user.Email}
          vlaue={email}
          onChange={onEmailChange}
        />
        <Input
          label="Password"
          className=""
          name="password"
          type="password"
          placeholder={user.Password}
          vlaue={password}
          onChange={onPasswordChange}
        />
        <Input
          label="Is Admin"
          className=""
          name="isAdmin"
          type="string"
          placeholder={user.IsAdmin ? 'admin' : 'user'}
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

export default UserEdit;
