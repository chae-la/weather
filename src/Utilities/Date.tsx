const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = today.getDate();
const day = today.getDay();

const stringDay = (day: number) => {
  switch(day) {
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "Unknown Day";
  }
};

const stringMonth = (month:number) => {
  switch(month) {
    case 1: return "January";
    case 2: return "February";
    case 3: return "March";
    case 4: return "April";
    case 5: return "May";
    case 6: return "June";
    case 7: return "July";
    case 8: return "August";
    case 9: return "September";
    case 10: return "October";
    case 11: return "November";
    case 12: return "December";
    default: return "Unknown Month";
  }
};

export const currentDate = `${date}/${month}/${year}`;
export const currentDay = `${stringDay(day)} ${date} ${stringMonth(month)} ${year}`;
