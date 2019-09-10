import {
  ADD_VACCINATION_DOSE,
  REMOVE_VACCINATION_DOSE,
  SET_VACCINATION_DATE,
  TOGGLE_VACCINATION_COMPLETION,
} from '../actions/types';

export default function vaccinations(state = defaultState, action) {
  switch (action.type) {
    case ADD_VACCINATION_DOSE:
      const previousVaccination = state.find(vaccination =>
        isSameId(vaccination, action)
      );
      return [
        ...state.map(vaccination =>
          isSameId(vaccination, action)
            ? { ...vaccination, canAddDose: false }
            : vaccination
        ),
        {
          canAddDose: true,
          createdById: action.id,
          completed: false,
          date: null,
          dose: previousVaccination.dose + 1,
          id: state.length + 1,
          key: (state.length + 1).toString(),
          name: previousVaccination.name,
        },
      ];
    case REMOVE_VACCINATION_DOSE:
      return state
        .filter(vaccination => !isSameId(vaccination, action))
        .map(vaccination =>
          isCreator(vaccination, action)
            ? { ...vaccination, canAddDose: true }
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
          ? { ...vaccination, completed: !vaccination.completed }
          : vaccination
      );
    default:
      return state;
  }
}

function isSameId({ id: idA }, { id: idB }) {
  return idA === idB;
}

function isCreator({ id }, { createdById }) {
  return id === createdById;
}

const vaccines = [
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

const defaultState = vaccines.map((vaccine, index) => {
  return {
    canAddDose: true,
    completed: false,
    date: null,
    dose: 1,
    id: index,
    key: index.toString(),
    name: vaccine,
  };
});
