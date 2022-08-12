import { useState } from 'react';
import service from '../../services/services';
import Button from '../Button/Button';
import CarEdit from '../CarEdit/CarEdit';

import './CarList.scss';

const CarList = ({ car }) => {
  const [edit, setEdit] = useState(false);

  const {
    Id,
    BrandAndModel,
    PictureUrl,
    Seaters,
    TrunkSize,
    GearBox,
    Price,
    Type,
    Available,
  } = car;

  const onEditClick = () => {
    setEdit(true);
  };

  const onCloseEdit = () => {
    setEdit(false);
  };

  const onDeleteClick = () => {
    service.Cars.deleteCar(Id);
    window.location.reload();
  };

  return (
    <>
      <div className="carList__container">
        <img className="carList__image" src={PictureUrl} alt={BrandAndModel} />
        <p className="carList__item">{Type}</p>
        <p className="carList__item">{BrandAndModel}</p>
        <p className="carList__item">{Seaters}</p>
        <p className="carList__item">{TrunkSize}</p>
        <p className="carList__item">{GearBox}</p>
        <p className="carList__item carlist__price">$ {Price}</p>
        <p className="carList__item">{Available ? 'available' : 'rented'}</p>
        <Button className="primary" onClick={onEditClick}>
          Edit
        </Button>
        <Button className="alert" onClick={onDeleteClick}>
          Delete
        </Button>
      </div>
      {edit && <CarEdit car={car} onClick={onCloseEdit} />}
    </>
  );
};

export default CarList;
