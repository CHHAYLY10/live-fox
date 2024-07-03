interface Props {
  amount: number;
}

const Percentage = ({ amount }: Props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
  });
  const percentFormat = formatter.format(amount / 100);
  return (
    <span>
      {percentFormat} <br />
      OFF
    </span>
  );
};

export default Percentage;
