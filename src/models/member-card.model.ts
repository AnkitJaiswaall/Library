import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class MemberCard extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'number',
    required: true,
  })
  barcode: number;

  @property({
    type: 'string',
    required: true,
  })
  member_account: string;

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
    type: 'string',
  })
  modified_by?: string;

  @property({
    type: 'date',
  })
  modified_on?: string;

  @property({
    type: 'date',
  })
  deleted_on?: string;

  @property({
    type: 'string',
  })
  deleted_by?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MemberCard>) {
    super(data);
  }
}

export interface MemberCardRelations {
  // describe navigational properties here
}

export type MemberCardWithRelations = MemberCard & MemberCardRelations;
