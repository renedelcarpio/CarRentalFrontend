import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import UserAdd from '../../components/UserAdd/UserAdd';
import UserList from '../../components/UserList/UserList';
import service from '../../services/services';

import './Users.scss';

const Users = () => {
  const [user, setUser] = useState(null);
  const [userAdd, setUserAdd] = useState(false);

  const getData = () => {
    service.Users.getUsers().then((data) => {
      setUser(data);
    });
  };

  useEffect(() => {
    if (!user) {
      getData();
    }
  }, [user]);

  const onUserAddClick = () => {
    setUserAdd(!userAdd);
  };

  return (
    <div className="carList">
      <h1>Users Management</h1>
      <Button className="addCar secondary" onClick={onUserAddClick}>
        Add New User
      </Button>
      {user?.map((item) => {
        return <UserList key={item.Id} user={item} />;
      })}
      {userAdd && <UserAdd onClick={onUserAddClick} />}
    </div>
  );
};

export default Users;
