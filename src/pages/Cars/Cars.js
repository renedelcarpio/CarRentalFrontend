import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import CarAdd from '../../components/CarAdd/CarAdd';
import CarList from '../../components/CarList/CarList';
import service from '../../services/services';

import './Cars.scss';

const Cars = () => {
  const [car, setCar] = useState(null);
  const [carAdd, setCarAdd] = useState(false);

  const getData = () => {
    service.Cars.getAllCars().then((cars) => {
      setCar(cars);
    });
  };

  useEffect(() => {
    if (!car) {
      getData();
    }
  }, [car]);

  const onCarAddClick = () => {
    setCarAdd(!carAdd);
  };

  return (
    <div className="carList">
      <h1>Cars Management</h1>
      <Button className="addCar secondary" onClick={onCarAddClick}>
        Add New Car
      </Button>
      {car?.map((item) => {
        return <CarList key={item.Id} car={item} />;
      })}
      {carAdd && <CarAdd onClick={onCarAddClick} />}
    </div>
  );
};

export default Cars;
