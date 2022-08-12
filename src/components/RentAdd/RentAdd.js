import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import service from '../../services/services';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './RentAdd.scss';

const RentAdd = ({ onClick }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [userId, setUserId] = useState(0);
  const [carId, setCarId] = useState(0);

  const onStartDateChange = (e) => setStartDate(e.target.value);
  const onEndDateChange = (e) => setEndDate(e.target.value);
  const onUserIdChange = (e) => setUserId(e.target.value);
  const onCarIdChange = (e) => setCarId(e.target.value);

  const createRental = (e) => {
    e.preventDefault();

    service.Rents.createRentUser({
      rentalStart: startDate,
      rentalEnd: endDate,
      userId: Number(userId),
      carId: Number(carId),
    }).then((result) => {
      elsaWorkflow(result);
    });
    window.location.reload();
  };

  const elsaWorkflow = (result) => {
    console.log(result);
    service.Elsa.documentApproval(result);
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
          placeholder="Start Date"
          value={startDate}
          onChange={onStartDateChange}
        />
        <Input
          label="Select the end date"
          className="rental__date"
          name="endDate"
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={onEndDateChange}
        />
        <Input
          label="Enter the User Id"
          className="rental__id"
          name="userId"
          type="number"
          placeholder="User Id"
          value={userId}
          onChange={onUserIdChange}
        />
        <Input
          label="Enter the Car Id"
          className="rental__id"
          name="carId"
          type="number"
          placeholder="Car Id"
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

export default RentAdd;
