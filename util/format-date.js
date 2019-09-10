'use-strict';

export default function formatDate(date) {
  const month = padLeadingZeros((date.getMonth() + 1).toString());
  const day = padLeadingZeros(date.getDate().toString());
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function padLeadingZeros(numberString) {
  return numberString.padStart(2, '0');
}
