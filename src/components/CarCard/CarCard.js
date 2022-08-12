import './CarCard.scss';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineLuggage } from 'react-icons/md';
import { GiGearStick } from 'react-icons/gi';
import Button from '../Button/Button';

const CarCard = ({ car, onClick }) => {
  const {
    BrandAndModel,
    Seaters,
    TrunkSize,
    GearBox,
    PictureUrl,
    Price,
    Type,
    Available,
  } = car;

  return (
    <div className="car__card">
      <h1 className="car__brand">{BrandAndModel}</h1>
      <h3 className="car__type">{Type}</h3>
      <ul className="car__specs">
        <li className="car__specs--item">
          <BsPerson className="car__specs--icon" />
          {Seaters}
        </li>
        <li className="car__specs--item">
          <MdOutlineLuggage className="car__specs--icon" />
          {TrunkSize}
        </li>
        <li className="car__specs--item">
          <GiGearStick className="car__specs--icon" />
          {GearBox}
        </li>
      </ul>
      <h3 className="car__available">{Available ? 'Available' : 'Rented'}</h3>
      <img className="car__image" src={PictureUrl} alt={BrandAndModel} />
      <p className="car__price--title">Price for 1 day:</p>
      <h2 className="car__price">USD {Price}</h2>
      <Button className="car__button secondary" onClick={onClick}>
        Rent now
      </Button>
    </div>
  );
};

export default CarCard;
