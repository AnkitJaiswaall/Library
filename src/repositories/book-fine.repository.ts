import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LibraryDataSource} from '../datasources';
import {BookFine, BookFineRelations} from '../models';

export class BookFineRepository extends DefaultCrudRepository<
  BookFine,
  typeof BookFine.prototype._id,
  BookFineRelations
> {
  constructor(
    @inject('datasources.Library') dataSource: LibraryDataSource,
  ) {
    super(BookFine, dataSource);
  }
}
