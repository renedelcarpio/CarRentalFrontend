import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import service from '../../services/services';
import Input from '../Input/Input';
import Button from '../Button/Button';

const RentEdit = ({ rental, onClick }) => {
  const [startDate, setStartDate] = useState(rental.RentalStart);
  const [endDate, setEndDate] = useState(rental.RentalEnd);
  const [userId, setUserId] = useState(rental.UserId);
  const [carId, setCarId] = useState(rental.CarId);

  const onStartDateChange = (e) => setStartDate(e.target.value);
  const onEndDateChange = (e) => setEndDate(e.target.value);
  const onUserIdChange = (e) => setUserId(e.target.value);
  const onCarIdChange = (e) => setCarId(e.target.value);

  const createRental = (e) => {
    e.preventDefault();
    service.Rents.updateRent(rental.Id, {
      id: rental.Id,
      rentalStart: startDate,
      rentalEnd: endDate,
      userId: Number(userId),
      carId: Number(carId),
    });
    window.location.reload();
  };

  return (
    <div className="rental">
      <form className="rental__form" onSubmit={createRental}>
        <GrFormClose className="rental__close" onClick={onClick} />
        <h1 className="rental__title">To rent a car please fill this form</h1>
        <Input
          label="Select the start day"
          className="rental__date"
          name="startDate"
          type="date"
          placeholder={rental.startDate}
          value={startDate}
          onChange={onStartDateChange}
        />
        <Input
          label="Select the end date"
          className="rental__date"
          name="endDate"
          type="date"
          placeholder={rental.endDate}
          value={endDate}
          onChange={onEndDateChange}
        />
        <Input
          label="Enter the User Id"
          className="rental__id"
          name="userId"
          type="number"
          placeholder={rental.userId}
          value={userId}
          onChange={onUserIdChange}
        />
        <Input
          label="Enter the Car Id"
          className="rental__id"
          name="carId"
          type="number"
          placeholder={rental.carId}
          value={carId}
          onChange={onCarIdChange}
        />
        <Button className="secondary rental__button" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default RentEdit;
