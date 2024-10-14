export function numberFormatter(number, symbol = "") {
  return (
    symbol + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, `${symbol}1,`)
  );
}
