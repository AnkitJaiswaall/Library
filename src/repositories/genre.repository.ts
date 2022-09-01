import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {LibraryDataSource} from '../datasources';
import {Genre, GenreRelations, Book} from '../models';
import {BookRepository} from './book.repository';

export class GenreRepository extends DefaultCrudRepository<
  Genre,
  typeof Genre.prototype.id,
  GenreRelations
> {

  public readonly books: HasManyRepositoryFactory<Book, typeof Genre.prototype.id>;

  constructor(
    @inject('datasources.Library') dataSource: LibraryDataSource, @repository.getter('BookRepository') protected bookRepositoryGetter: Getter<BookRepository>,
  ) {
    super(Genre, dataSource);
    this.books = this.createHasManyRepositoryFactoryFor('books', bookRepositoryGetter,);
    this.registerInclusionResolver('books', this.books.inclusionResolver);
  }
}
