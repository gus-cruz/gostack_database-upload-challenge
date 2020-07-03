/* eslint-disable prettier/prettier */
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction'

class DeleteTransactionService {
  public async execute(transaction_id: string): Promise<void> {
    const transactionRepository = getRepository(Transaction);
    
    const transaction = await transactionRepository.findOne(transaction_id);

    if (!transaction) {
      throw new AppError('None transaction has found.', 401);
    }

     transactionRepository.delete(transaction);
  }
}

export default DeleteTransactionService;
