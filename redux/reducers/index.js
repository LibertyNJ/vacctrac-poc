import { combineReducers } from 'redux';

import procedureDate from './procedure-date';
import vaccinations from './vaccinations';

export default combineReducers({
  procedureDate,
  vaccinations,
});
