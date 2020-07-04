/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {
  public async existisSameCategory(title: string): Promise<string> {
    const sameCategory = await this.findOne({title});

    if(!sameCategory){
        const category = this.create({
            title
        });

        await this.save(category);
        
        return category.id;
    }

    return sameCategory.id;
  }
}

export default CategoriesRepository;
