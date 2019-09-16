'use-strict';

import { SET_PROCEDURE_DATE } from '../actions/types';

export default function procedureDate(state = null, action) {
  switch (action.type) {
    case SET_PROCEDURE_DATE:
      return action.date;
    default:
      return state;
  }
}
