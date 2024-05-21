// useCurrentCity.js
import { useState, useEffect } from 'react';

export const useUserLocation = () => {
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCity = async (lat : number, lon:number) => {
      try {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${'3df9290d63e449e592a97c89c6429924'}`);
        const data = await response.json();
        if (data.results.length > 0) {
          setCity(data.results[0].components.city);
        } else {
          setError('City not found');
        }
      } catch (err:any) {
        setError(err.message);
      }
    };

    const success = (position : any) => {
      const { latitude, longitude } = position.coords;
      fetchCity(latitude, longitude);
    };

    const error = (err:any) => {
      setError(err.message);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setError('Geolocation is not supported by this browser');
    }
  }, []);

  return { city, error };
};
;
