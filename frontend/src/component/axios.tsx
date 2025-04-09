import axios from 'axios';
import { CustomerData } from './customerTypes';

const BASE_URL = 'http://localhost:5000/api/customers';

export const fetchCustomers = async (): Promise<CustomerData[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const updateCustomerStatus = async (
  id: string,
  status: string
): Promise<void> => {
  await axios.post(`${BASE_URL}/${id}/status`, { status });
};
