export interface CustomerData {
    customerId: string;
    name: string;
    monthlyIncome: number;
    creditScore: number;
    loanRepaymentHistory: number[];
    outstandingLoans: number;
    status: string;
    incomeHistory?: number[];
    expenseHistory?: number[];
  }
  