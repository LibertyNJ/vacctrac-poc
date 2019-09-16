'use-strict';

import {
  ADD_VACCINATION_DOSE,
  REMOVE_VACCINATION_DOSE,
  SET_VACCINATION_DATE,
  TOGGLE_VACCINATION_COMPLETION,
} from '../actions/types';

import createId from '../util/create-id';

const vaccineNames = [
  'Flu',
  'Hepatitis A',
  'Hepatitis B',
  'Meningitis',
  'MMR',
  'PCV13',
  'PPSV23',
  'Shingles',
  'TDaP',
];
const initialState = mapToVaccinations(vaccineNames);

export default function vaccinations(state = initialState, action) {
  switch (action.type) {
    case ADD_VACCINATION_DOSE:
      const previousVaccination = selectVaccinationById(state, action.id);
      return [
        ...state.map(vaccination =>
          isSameId(vaccination, action)
            ? { ...vaccination, isLatestDose: false }
            : vaccination
        ),
        createVaccinationDose(previousVaccination),
      ];
    case REMOVE_VACCINATION_DOSE:
      return state
        .filter(vaccination => !isSameId(vaccination, action))
        .map(vaccination =>
          isPreviousDose(vaccination, action)
            ? { ...vaccination, isLatestDose: true }
            : vaccination
        );
    case SET_VACCINATION_DATE:
      return state.map(vaccination =>
        isSameId(vaccination, action)
          ? { ...vaccination, date: action.date }
          : vaccination
      );
    case TOGGLE_VACCINATION_COMPLETION:
      return state.map(vaccination =>
        isSameId(vaccination, action)
          ? { ...vaccination, isCompleted: !vaccination.isCompleted }
          : vaccination
      );
    default:
      return state;
  }
}

function mapToVaccinations(vaccineNames) {
  return vaccineNames.map(createVaccination);
}

function selectVaccinationById(vaccinations, id) {
  return vaccinations.find(vaccination => vaccination.id === id);
}

function createVaccinationDose({ dose, id, name }) {
  const vaccination = createVaccination(name);
  vaccination.dose = dose + 1;
  vaccination.previousDoseId = id;
  return vaccination;
}

function createVaccination(name) {
  return {
    date: null,
    dose: 1,
    id: createId(),
    isCompleted: false,
    isLatestDose: true,
    name,
  };
}

function isPreviousDose({ id }, { previousDoseId }) {
  return id === previousDoseId;
}

function isSameId({ id: idA }, { id: idB }) {
  return idA === idB;
}
