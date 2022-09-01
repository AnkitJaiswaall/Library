import {Entity, model, property, hasMany} from '@loopback/repository';
import {Book} from './book.model';

@model()
export class BookCategory extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  category_image: string;

  @property({
    type: 'boolean',
    required: true,
  })
  status: boolean;

  @property({
    type: 'string',
    required: true,
  })
  created_by: string;

  @property({
    type: 'string',
    required: true,
  })
  modified_by: string;

  @property({
    type: 'date',
  })
  deleted_on?: string;

  @property({
    type: 'string',
  })
  deleted_by?: string;

  // @hasMany(() => Book, {keyTo: 'category_id'})
  // _id: Book[];
  @hasMany(() => Book, {keyTo: 'category_id'})
  books: Book[];

  constructor(data?: Partial<BookCategory>) {
    super(data);
  }
}

export interface BookCategoryRelations {
  // describe navigational properties here
}

export type BookCategoryWithRelations = BookCategory & BookCategoryRelations;
