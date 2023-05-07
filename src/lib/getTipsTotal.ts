export const getTipsTotal = (
  bill: number,
  tips: number,
  people: number
): { tipAmount: string; total: string } => {
  const totalTips = calculateTips(bill, tips);

  const tipAmount = totalTips / people;
  const total = (bill + totalTips) / people;

  return { tipAmount: tipAmount.toFixed(2), total: total.toFixed(2) };
};

export const calculateTips = (bill: number, tips: number): number => {
  return bill * (tips / 100);
};
