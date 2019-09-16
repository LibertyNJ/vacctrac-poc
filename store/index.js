'use-strict';

import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import rootReducer from '../reducers';
import transformProcedureDate from './transforms/procedure-date';
import transformVaccinations from './transforms/vaccinations';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [transformProcedureDate, transformVaccinations],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
