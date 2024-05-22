/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";

export const useUserLocation = () => {
  const [location, setLocation] = useState({ city: '', country: '' });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async (latitude : number, longitude:number) => {
      try {
        const {data}  = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
          params: {
            q: `${latitude},${longitude}`,
            key: '3df9290d63e449e592a97c89c6429924',
          },
        });

        const { results } = data;
        if (results && results.length > 0) {
          const { components } = results[0];
          setLocation({
            city: components.city || components.town || components.village,
            country: components.country,
          });
        }
      } catch (err) {
        setError('Unable to retrieve location data');
      }
    };

    const getGeolocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchLocation(latitude, longitude);
          },
          () => {
            setError('Geolocation permission denied');
          }
        );
      } else {
        setError('Geolocation is not supported by this browser');
      }
    };

    getGeolocation();
  }, []);

  return { location, error };
};

