export const dateHelper = (date) => {

  date = date.split("-");
  const year = date[0];
  const day = date[2];

  let numberToMonth = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };

  return `${day} ${numberToMonth[parseInt(date[1])]} ${year}`;

}
