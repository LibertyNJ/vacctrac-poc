import { createTransform } from 'redux-persist';

import { isDate, isNull } from '../../../../util';

const transformConfig = {
  whitelist: ['vaccinations'],
};

export default createTransform(
  transformInbound,
  transformOutbound,
  transformConfig
);

function transformInbound(vaccinations) {
  return vaccinations.map(vaccination => ({
    ...vaccination,
    date: transformDateToJSON(vaccination.date),
  }));
}

function transformDateToJSON(value) {
  return isDate(value) ? value.toJSON() : value;
}

function transformOutbound(vaccinations) {
  return vaccinations.map(vaccination => ({
    ...vaccination,
    date: transformJSONToDate(vaccination.date),
  }));
}

function transformJSONToDate(value) {
  return isNull(value) ? value : new Date(value);
}
