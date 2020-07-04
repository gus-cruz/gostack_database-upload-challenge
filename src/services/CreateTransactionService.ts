/* eslint-disable prettier/prettier */
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionRepository  from '../repositories/TransactionsRepository';
import CategoriesRepository from '../repositories/CategoriesRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  type: 'outcome' | 'income';
  value: number;
  category: string
}

class CreateTransactionService {
  public async execute({title, type, value, category}: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionRepository);
    const categoryRepository = getCustomRepository(CategoriesRepository);

    if(type === 'outcome'){
      if(value > (await transactionsRepository.getBalance()).total){
        throw new AppError('Value must be lower than total for an outcome', 400);
      }
    }

    const sameCategory = categoryRepository.existisSameCategory(category); 

    const newCategory = await categoryRepository.findOne({id: await sameCategory})

    const transaction = transactionsRepository.create({
      title,
      type,
      value,
      category: newCategory
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
