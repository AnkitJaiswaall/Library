import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {LibraryDataSource} from '../datasources';
import {BookCategory, BookCategoryRelations, Book} from '../models';
import {BookRepository} from './book.repository';

export class BookCategoryRepository extends DefaultCrudRepository<
  BookCategory,
  typeof BookCategory.prototype.id,
  BookCategoryRelations
> {

  public readonly books: HasManyRepositoryFactory<Book, typeof BookCategory.prototype.id>;

  // public readonly _id: HasManyRepositoryFactory<Book, typeof BookCategory.prototype.id>;

  constructor(
    @inject('datasources.Library') dataSource: LibraryDataSource, @repository.getter('BookRepository') protected bookRepositoryGetter: Getter<BookRepository>,
  ) {
    super(BookCategory, dataSource);
    // this._id = this.createHasManyRepositoryFactoryFor('_id', bookRepositoryGetter,);
    // this.registerInclusionResolver('_id', this._id.inclusionResolver);
    this.books = this.createHasManyRepositoryFactoryFor('books', bookRepositoryGetter,);
    this.registerInclusionResolver('books', this.books.inclusionResolver);
  }
}
