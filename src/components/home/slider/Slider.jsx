import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import useFetch from "../../../utils/useFetch";
import { API_ENDPOINTS, appConfig, buildUrl } from "../../../config/config";
import { randomNumber } from "../../../utils/utils";
import './Slider.css';

function Slider() {
    const [albumNumber, setAlbumNumber] = useState(null);
    

  const { data, error, loading } = useFetch(
    `${appConfig.API_URL}${buildUrl(API_ENDPOINTS.GET_ALBUM_PHOTOS, { id: albumNumber })}`
  );

  useEffect(() => {
    const number = randomNumber(1, 100);
    setAlbumNumber(number);
  }, []); 

  useEffect(() => {
    // console.log('randomNumber(1,100)',randomNumber(1,100));
    
    if (data) {
    //   console.log('Fetched data:', data);
    }
    if (error) {
      console.error('Error fetching data:', error);
    }
  }, [data, error]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Carousel className="main-slider">
        {data?.map((photo, index) => (
          <Carousel.Item key={photo.id}>
            <img
              className="slider-image"
              src={photo.url}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h3>{photo.title}</h3>
              <p>{photo.description || ''}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
