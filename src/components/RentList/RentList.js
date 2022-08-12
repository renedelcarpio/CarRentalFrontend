import { useState } from 'react';
import service from '../../services/services';
import Button from '../Button/Button';
import RentEdit from '../RentEdit/RentEdit';

import './RentList.scss';

const RentList = ({ rental }) => {
  const [edit, setEdit] = useState(false);

  const { Id, RentalStart, RentalEnd, ConfirmationStatus, User, Car } = rental;

  const onEditClick = () => {
    setEdit(true);
  };

  const onCloseEdit = () => {
    setEdit(false);
  };

  const onDeleteClick = () => {
    service.Rents.deleteRent(Id);
    window.location.reload();
  };

  return (
    <>
      <div className="carList__container">
        <p className="carList__item">Id: {Id}</p>
        <p className="carList__item">{RentalStart}</p>
        <p className="carList__item">{RentalEnd}</p>
        <p className="carList__item">User Id: {User.Id}</p>
        <p className="carList__item">Car Id: {Car.Id}</p>
        <p className="carList__item">Status: {ConfirmationStatus}</p>

        <Button className="primary" onClick={onEditClick}>
          Edit
        </Button>
        <Button className="alert" onClick={onDeleteClick}>
          Delete
        </Button>
      </div>
      {edit && <RentEdit rental={rental} onClick={onCloseEdit} />}
    </>
  );
};

export default RentList;
