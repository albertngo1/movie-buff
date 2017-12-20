export const dateHelper = (date) => {

  date = date.split("-");
  const year = date[0];
  const day = date[2];

  let numberToMonth = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "June",
    7: "July",
    8: "Aug",
    9: "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec"
  };

  return `${day} ${numberToMonth[parseInt(date[1])]} ${year}`;

}
