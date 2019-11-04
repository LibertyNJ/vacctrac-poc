import { createTransform } from 'redux-persist';

import { isDate, isNull } from '../../../../util';

const transformConfig = {
  whitelist: ['procedureDate'],
};

export default createTransform(
  transformInbound,
  transformOutbound,
  transformConfig
);

function transformInbound(procedureDate) {
  return isDate(procedureDate) ? procedureDate.toJSON() : procedureDate;
}

function transformOutbound(procedureDate) {
  return isNull(procedureDate) ? procedureDate : new Date(procedureDate);
}
