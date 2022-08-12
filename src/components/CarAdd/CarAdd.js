import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import Input from '../Input/Input';
import Button from '../Button/Button';

import service from '../../services/services';

const CarAdd = ({ onClick }) => {
  const [brandAndModel, setBrandAndModel] = useState('');
  const [seaters, setSeaters] = useState('');
  const [trunkSize, setTrunkSize] = useState('');
  const [gearBox, setGearBox] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('');
  const [available, setAvailable] = useState(true);

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

  const onSubmitAdd = (e) => {
    e.preventDefault();
    service.Cars.createCar({
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
      <form className="carEdit__form" onSubmit={onSubmitAdd}>
        <GrFormClose className="carEdit__close" onClick={onClick} />
        <Input
          label="Brand and Model"
          className=""
          name="brandAndModel"
          type="string"
          placeholder="Add Brand and Model"
          vlaue={brandAndModel}
          onChange={onBrandAndModelChange}
        />
        <Input
          label="Seaters"
          className=""
          name="seaters"
          type="string"
          placeholder="Add seaters quantity"
          vlaue={seaters}
          onChange={onSeatersChange}
        />
        <Input
          label="Trunk size"
          className=""
          name="trunkSize"
          type="string"
          placeholder="Add trunk size"
          vlaue={trunkSize}
          onChange={onTrunkSizeChange}
        />
        <Input
          label="Gear Box"
          className=""
          name="gearBox"
          type="string"
          placeholder="Add gear box type"
          vlaue={gearBox}
          onChange={onGearBoxChange}
        />
        <Input
          label="Picture Url"
          className=""
          name="pictureUrl"
          type="string"
          placeholder="Add picture url"
          vlaue={pictureUrl}
          onChange={onPictureUrlChange}
        />
        <Input
          label="Price"
          className=""
          name="price"
          type="string"
          placeholder="Add the price per day"
          vlaue={price}
          onChange={onPriceChange}
        />
        <Input
          label="Type"
          className=""
          name="type"
          type="string"
          placeholder="Add the type of the car"
          vlaue={type}
          onChange={onTypeChange}
        />
        <Input
          label="Available"
          className=""
          name="available"
          type="string"
          placeholder="Specify is is avalalble or rented"
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

export default CarAdd;
