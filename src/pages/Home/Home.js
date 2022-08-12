import React, { useEffect, useState } from 'react';
import service from '../../services/services';
import CarCard from '../../components/CarCard/CarCard';

import './Home.scss';
import RentAdd from '../../components/RentAdd/RentAdd';

const Home = () => {
  const [car, setCar] = useState(null);
  const [openModal, setOpenModal] = useState(false);

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

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="home">
      {car?.map((item) => {
        return <CarCard key={item.Id} car={item} onClick={handleOpenModal} />;
      })}
      {openModal && <RentAdd onClick={handleOpenModal} />}
    </div>
  );
};

export default Home;
