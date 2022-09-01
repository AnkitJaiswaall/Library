import {Entity, model, property} from '@loopback/repository';

@model()
export class BookLending extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  book_item_id: string;

  @property({
    type: 'string',
    required: true,
  })
  member_id: string;

  @property({
    type: 'boolean',
    required: true,
  })
  membership: boolean;

  @property({
    type: 'string',
    required: true,
  })
  reservation_id: string;

  @property({
    type: 'date',
    required: true,
  })
  due_date: string;

  @property({
    type: 'date',
    required: true,
  })
  return_date: string;

  @property({
    type: 'number',
  })
  fine_charge?: number;

  @property({
    type: 'number',
  
  })
  damage_charges?: number;

  @property({
    type: 'number',
  })
  waived_amount?: number;

  @property({
    type: 'number',
  })
  net_amount?: number;

  @property({
    type: 'string',
    required: true,
  })
  received_by: string;

  @property({
    type: 'boolean',
  })
  status?: boolean;

  @property({
    type: 'date',
    required: true,
  })
  created_on: string;

  @property({
    type: 'string',
    required: true,
  })
  created_by: string;

  @property({
    type: 'date',
  })
  modified_on?: string;

  @property({
    type: 'string',
  })
  modified_by?: string;

  @property({
    type: 'date',
  })
  deleted_on?: string;

  @property({
    type: 'string',
  })
  deleted_by?: string;


  constructor(data?: Partial<BookLending>) {
    super(data);
  }
}

export interface BookLendingRelations {
  // describe navigational properties here
}

export type BookLendingWithRelations = BookLending & BookLendingRelations;
