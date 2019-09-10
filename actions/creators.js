import {
  ADD_VACCINATION_DOSE,
  REMOVE_VACCINATION_DOSE,
  SET_PROCEDURE_DATE,
  SET_VACCINATION_DATE,
  TOGGLE_VACCINATION_COMPLETION,
} from './types';

export function addVaccinationDose(id) {
  return {
    id,
    type: ADD_VACCINATION_DOSE,
  };
}

export function removeVaccinationDose(id, createdById) {
  return {
    createdById,
    id,
    type: REMOVE_VACCINATION_DOSE,
  };
}

export function setVaccinationDate(id, date) {
  return {
    date,
    id,
    type: SET_VACCINATION_DATE,
  };
}

export function setProcedureDate(date) {
  return {
    date,
    type: SET_PROCEDURE_DATE,
  };
}

export function toggleVaccinationCompletion(id) {
  return {
    id,
    type: TOGGLE_VACCINATION_COMPLETION,
  };
}
