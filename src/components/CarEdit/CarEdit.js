import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './CarEdit.scss';
import service from '../../services/services';

const CarEdit = ({ car, onClick }) => {
  const [brandAndModel, setBrandAndModel] = useState(car.BrandAndModel);
  const [seaters, setSeaters] = useState(car.Seaters);
  const [trunkSize, setTrunkSize] = useState(car.TrunkSize);
  const [gearBox, setGearBox] = useState(car.GearBox);
  const [pictureUrl, setPictureUrl] = useState(car.PictureUrl);
  const [price, setPrice] = useState(car.Price);
  const [type, setType] = useState(car.Type);
  const [available, setAvailable] = useState(car.Available);

  const onBrandAndModelChange = (e) => setBrandAndModel(e.target.value);
  const onSeatersChange = (e) => setSeaters(e.target.value);
  const onTrunkSizeChange = (e) => setTrunkSize(e.target.value);
  const onGearBoxChange = (e) => setGearBox(e.target.value);
  const onPictureUrlChange = (e) => setPictureUrl(e.target.value);
  const onPriceChange = (e) => setPrice(e.target.value);
  const onTypeChange = (e) => setType(e.target.value);
  const onAvailableChange = (e) => {
    if (e.target.value === 'available') {
      setAvailable(true);
    } else {
      setAvailable(false);
    }
  };

  const onSubmitEdit = (e) => {
    e.preventDefault();
    service.Cars.updateCar(car.Id, {
      id: car.Id,
      brandAndModel,
      seaters,
      trunkSize,
      gearBox,
      pictureUrl,
      price,
      type,
      available,
    });
    window.location.reload();
  };

  return (
    <div className="carEdit">
      <form className="carEdit__form" onSubmit={onSubmitEdit}>
        <GrFormClose className="carEdit__close" onClick={onClick} />
        <Input
          label="Brand and Model"
          className=""
          name="brandAndModel"
          type="string"
          placeholder={car.BrandAndModel}
          vlaue={brandAndModel}
          onChange={onBrandAndModelChange}
        />
        <Input
          label="Seaters"
          className=""
          name="seaters"
          type="string"
          placeholder={car.Seaters}
          vlaue={seaters}
          onChange={onSeatersChange}
        />
        <Input
          label="Trunk size"
          className=""
          name="trunkSize"
          type="string"
          placeholder={car.TrunkSize}
          vlaue={trunkSize}
          onChange={onTrunkSizeChange}
        />
        <Input
          label="Gear Box"
          className=""
          name="gearBox"
          type="string"
          placeholder={car.GearBox}
          vlaue={gearBox}
          onChange={onGearBoxChange}
        />
        <Input
          label="Picture Url"
          className=""
          name="pictureUrl"
          type="string"
          placeholder={car.PictureUrl}
          vlaue={pictureUrl}
          onChange={onPictureUrlChange}
        />
        <Input
          label="Price"
          className=""
          name="price"
          type="string"
          placeholder={car.Price}
          vlaue={price}
          onChange={onPriceChange}
        />
        <Input
          label="Type"
          className=""
          name="type"
          type="string"
          placeholder={car.Type}
          vlaue={type}
          onChange={onTypeChange}
        />
        <Input
          label="Available"
          className=""
          name="available"
          type="string"
          placeholder={car.Available ? 'available' : 'rented'}
          vlaue={available}
          onChange={onAvailableChange}
        />
        <Button className="secondary rental__button" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default CarEdit;
