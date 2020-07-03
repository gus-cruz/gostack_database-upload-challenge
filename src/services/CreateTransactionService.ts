/* eslint-disable prettier/prettier */
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionRepository  from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  type: 'outcome' | 'income';
  value: number;
}

class CreateTransactionService {
  public async execute({title, type, value}: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionRepository);

    if(type === 'outcome'){
      if(value > (await transactionsRepository.getBalance()).total){
        throw new AppError('Value must be lower than total for an outcome', 400);
      }
    }

    const transaction = transactionsRepository.create({
      title,
      type,
      value
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
