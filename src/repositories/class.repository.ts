import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LibraryDataSource} from '../datasources';
import {Class, ClassRelations} from '../models';

export class ClassRepository extends DefaultCrudRepository<
  Class,
  typeof Class.prototype.id,
  ClassRelations
> {
  constructor(
    @inject('datasources.Library') dataSource: LibraryDataSource,
  ) {
    super(Class, dataSource);
  }
}
