interface Props {
  amount: number;
}

const FormattedPrice = ({ amount }: Props) => {
  const formatter = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <span>{formatter}</span>;
};

export default FormattedPrice;
