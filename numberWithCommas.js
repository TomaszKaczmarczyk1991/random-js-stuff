const numberWithCommas = (number ) => {
  return number
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

numberWithCommas(40343000)
// "40,343,000"