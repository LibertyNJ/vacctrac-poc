'use-strict';

import { createTransform } from 'redux-persist';

import isDate from '../../util/is-date';
import isNull from '../../util/is-null';

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
  isNull(value) ? value : new Date(value);
}
