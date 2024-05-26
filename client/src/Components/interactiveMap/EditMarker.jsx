import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePlace } from '../../app/redux/slices/placesSlice';
import { updatePlaceAsync } from '../../app/redux/slices/placesSlice';
import styles from './styles.module.css'

const EditMarker = ({onClose}) => {
  const dispatch = useDispatch();

  const selectedMarker = useSelector((state) => state.places.selectedMarker);

  const [latitude, setLatitude] = useState(selectedMarker?.latitude || '');
  const [longitude, setLongitude] = useState(selectedMarker?.longitude || '');
  const [address, setAddress] = useState(selectedMarker?.address || '');
  // const [photoPath, setPhotoPath] = useState(selectedMarker?.photoPath || '');
  const [title, setTitle] = useState(selectedMarker?.title || '');
  const [type, setType] = useState(selectedMarker?.type || '');
  const [typeId, setTypeId] = useState(selectedMarker?.typeId || '');

  useEffect(() => {
    if (selectedMarker) {
      setTitle(selectedMarker.title || '');
      setTypeId(selectedMarker.typeId || '');
      setAddress(selectedMarker.address || '');
      setLatitude(selectedMarker.latitude || '');
      setLongitude(selectedMarker.longitude || '');
      // setPhotoPath(selectedMarker.photoPath || '');
      setType(selectedMarker.type || '');
    }
  }, [selectedMarker]);

const handleSubmit = (e) => {
  e.preventDefault();

  const updatedPlace = {
    id: selectedMarker.id, 
    title,
    typeId,
    address,
    latitude, 
    longitude,
    // photoPath,
    type,
  };

  dispatch(updatePlace(updatedPlace));
  dispatch(updatePlaceAsync(updatedPlace));
  // dispatch(addEditedPlace(updatedPlace)); // dispatching the action to add the updated place to editedPlaces
};


  

  const handleSubmitAndClose = (e) => {
    e.preventDefault();
    handleSubmit(e);
    onClose();
  };

  return (
    <form onSubmit={handleSubmitAndClose} className={styles.form} >
      <label className={styles.label}>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} />
      </label><br />
      {/* <label>
        Type ID:
        <input type="number" value={typeId} onChange={(e) => setTypeId(e.target.value)} />
      </label><br /> */}
      <label className={styles.label}>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className={styles.input}/>
      </label><br />
      <label className={styles.label}>
        Latitude:
        <input type="number" value={latitude} onChange={(e) => setLatitude(e.target.value)} className={styles.input}/>
      </label><br />
      <label className={styles.label}>
        Longitude:
        <input type="number" value={longitude} onChange={(e) => setLongitude(e.target.value)} className={styles.input}/>
      </label><br />
      {/* <label>
        Photo Path:
        <input type="text" value={photoPath} onChange={(e) => setPhotoPath(e.target.value)} />
      </label><br /> */}

      <label className={styles.label}>
        Type:
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} className={styles.input}/>
      </label><br />

      <button type="submit" className={styles.button}>сохранить</button>
      <button type="button" onClick={onClose} className={styles.button}>отменить</button>
    </form>
  );
};

export default EditMarker;