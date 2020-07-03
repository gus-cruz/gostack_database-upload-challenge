/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    function reducer(accumulator: number, curentValue: number): number {
      return accumulator + curentValue;
    }
    
    let income = 0;
    let outcome = 0;
    let total = 0;

    const exisitsAnIncome = await this.findOne({
      type: "income"
    });
    const existisAnOutcome = await this.findOne({
      type: "outcome"
    });

    if(exisitsAnIncome){
      const allIncomes = await await this.find({type: "income"});

      income = allIncomes.map(transaction => transaction.value).reduce(reducer);
    }

    if(existisAnOutcome){
      const allOutcomes = await await this.find({type: "outcome"});

      outcome = allOutcomes.map(transaction => transaction.value).reduce(reducer);
    }

    total = income - outcome;
    const balance: Balance = {income, outcome, total};
    return balance;
  }
}

export default TransactionsRepository;
