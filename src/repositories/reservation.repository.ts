import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LibraryDataSource} from '../datasources';
import {Reservation, ReservationRelations} from '../models';

export class ReservationRepository extends DefaultCrudRepository<
  Reservation,
  typeof Reservation.prototype._id,
  ReservationRelations
> {
  constructor(
    @inject('datasources.Library') dataSource: LibraryDataSource,
  ) {
    super(Reservation, dataSource);
  }
}
