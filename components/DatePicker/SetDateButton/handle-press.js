import { DatePickerAndroid } from 'react-native';

export default async function handlePress(date, handleDateSet) {
  const { action, day, month, year } = await pickAndroidDate(date);
  if (isDateSet(action)) {
    handleDateSet(new Date(year, month, day));
  }
}

async function pickAndroidDate(defaultDate) {
  try {
    return await DatePickerAndroid.open({ date: defaultDate || new Date() });
  } catch (error) {
    alert(error);
  }
}

function isDateSet(action) {
  return action === DatePickerAndroid.dateSetAction;
}
