import axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},tw`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export const FETCH_PLACE = 'FETCH_PLACE'
export function fetchPlace(placeid,cb) {
  const API_KEY = 'AIzaSyD9S3Vb4lwkSGpyAf-UgskUjl5GPy-MgAA'
  const ROOT_URL_PL = `https://maps.googleapis.com/maps/api/place/details/json?`
  const placeUrl = `${ROOT_URL_PL}placeid=${placeid}&key=${API_KEY}`;
  const request = axios.get(placeUrl).then((res)=>{
     console.log("Res",res)
     fetchPhoto(res.data.result.photos,cb)
  })
  console.log(request)
  return request
}

export const FETCH_PHOTO = 'FETCH_PHOTO'
export function fetchPhoto(photos,cb){
  photos = photos || []
  console.log("Photo",photos)
  const API_KEY = 'AIzaSyD9S3Vb4lwkSGpyAf-UgskUjl5GPy-MgAA'
  const ROOT_URL_PH = `https://maps.googleapis.com/maps/api/place/photo?`
  const photoUrls = photos.map((photo)=>{return `${ROOT_URL_PH}maxwidth=300&photoreference=${photo.photo_reference}&key=${API_KEY}`})
  //const request = axios.get(photoUrl).then((res)=>{console.log("ee",res);cb(res.data)})

  cb(photoUrls)
  return {
    type: FETCH_PHOTO,
    payload: request
  }
}
