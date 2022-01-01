import { Controller, Injectable, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FilterOperator,
  Paginate,
  PaginateQuery,
  paginate,
  Paginated,
} from 'nestjs-paginate';
import { Repository, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CatEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  color: string;

  @Column('int')
  age: number;
}

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly catsRepository: Repository<CatEntity>,
  ) {}

  public findAll(query: PaginateQuery): Promise<Paginated<CatEntity>> {
    return paginate(query, this.catsRepository, {
      sortableColumns: ['id', 'name', 'color', 'age'],
      searchableColumns: ['name', 'color', 'age'],
      defaultSortBy: [['id', 'DESC']],
      filterableColumns: {
        age: [FilterOperator.GTE, FilterOperator.LTE],
      },
    });
  }
}

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  public findAll(
    @Paginate() query: PaginateQuery,
  ): Promise<Paginated<CatEntity>> {
    return this.catsService.findAll(query);
  }
}
