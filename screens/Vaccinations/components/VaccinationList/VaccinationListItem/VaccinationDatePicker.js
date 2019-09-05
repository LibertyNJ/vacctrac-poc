import React from 'react';
import DatePicker from '../../../../../components/DatePicker';

export default function VaccinationDatePicker({ date, handleDateSet }) {
  return (
    <DatePicker date={date} handleDateSet={handleDateSet} label="Date: " />
  );
}
