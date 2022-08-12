import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import RentAdd from '../../components/RentAdd/RentAdd';
import RentList from '../../components/RentList/RentList';
import service from '../../services/services';

const Rentals = () => {
  const [rental, setRental] = useState(null);
  const [rentalAdd, setRentalAdd] = useState(false);

  const getData = () => {
    service.Rents.getRents().then((rentals) => {
      setRental(rentals);
    });
  };

  useEffect(() => {
    if (!rental) {
      getData();
    }
  }, [rental]);

  const onRentalAddClick = () => {
    setRentalAdd(!rentalAdd);
  };

  return (
    <div className="carList">
      <h1>Rentals Management</h1>
      <Button className="addCar secondary" onClick={onRentalAddClick}>
        Add New Rental
      </Button>
      {rental?.map((item) => {
        return <RentList key={item.Id} rental={item} />;
      })}
      {rentalAdd && <RentAdd onClick={onRentalAddClick} />}
    </div>
  );
};

export default Rentals;
