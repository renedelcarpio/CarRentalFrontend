import { useState } from 'react';
import service from '../../services/services';
import Button from '../Button/Button';
import UserEdit from '../UserEdit/UserEdit';

import './UserList.scss';

const UserList = ({ user }) => {
  const [edit, setEdit] = useState(false);

  const { Id, Username, Email, Password, IsAdmin } = user;

  const onEditClick = () => {
    setEdit(true);
  };

  const onCloseEdit = () => {
    setEdit(false);
  };

  const onDeleteClick = () => {
    service.Users.deleteUser(Id);
    window.location.reload();
  };

  return (
    <>
      <div className="carList__container">
        <p className="carList__item">{Username}</p>
        <p className="carList__item carlist__email">{Email}</p>
        <p className="carList__item">{Password}</p>
        <p className="carList__item">{IsAdmin ? 'admin' : 'user'}</p>
        <Button className="primary" onClick={onEditClick}>
          Edit
        </Button>
        <Button className="alert" onClick={onDeleteClick}>
          Delete
        </Button>
      </div>
      {edit && <UserEdit user={user} onClick={onCloseEdit} />}
    </>
  );
};

export default UserList;
