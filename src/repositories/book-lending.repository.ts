import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LibraryDataSource} from '../datasources';
import {BookLending, BookLendingRelations} from '../models';

export class BookLendingRepository extends DefaultCrudRepository<
  BookLending,
  typeof BookLending.prototype._id,
  BookLendingRelations
> {
  constructor(
    @inject('datasources.Library') dataSource: LibraryDataSource,
  ) {
    super(BookLending, dataSource);
  }
}
