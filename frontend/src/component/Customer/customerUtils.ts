import { CustomerData } from '../customerTypes';

export const calculateRiskScore = (customer: CustomerData): number => {
  const missed = customer.loanRepaymentHistory.filter((v) => v === 0).length;
  const score = missed * 15 + (100 - customer.creditScore / 10);
  const ratio = (customer.outstandingLoans / customer.monthlyIncome) * 10;
  return Math.min(100, score + ratio);
};
