import {getRandomInteger} from '../utils.js';
import {generateType} from './type.js';
import {generateRandomDestination} from './destination.js';
import {offersType} from './offers.js';
import dayjs from 'dayjs';

const generateDate = (dayStart, dayEnd) => {
  const daysGap = getRandomInteger(dayStart, dayEnd);
  const hoursGap = getRandomInteger(0, 24);
  const minutesGap = getRandomInteger(0, 60);
  const secondsGap = getRandomInteger(0, 60);

  return dayjs().add(daysGap, 'day').add(hoursGap, 'hour').add(minutesGap, 'minute').add(secondsGap, 'second').toDate();
};

export const generatePoints = () => ({
  type: generateType(),
  dateFrom: generateDate(0,3),
  dateTo: generateDate(3,5),
  price: getRandomInteger(200,1500),
  isFavorite: Boolean(getRandomInteger(0,1)),
  destination: generateRandomDestination(),
  offers: offersType,
  id: [getRandomInteger(1,5), getRandomInteger(1,5),]
});
