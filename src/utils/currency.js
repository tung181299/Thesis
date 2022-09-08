export const formatVND = (value, currency) => {
  return currency + " " + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}