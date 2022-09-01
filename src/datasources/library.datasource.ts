import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Library',
  connector: 'mongodb',
  url: 'mongodb+srv://ankitjaiswal:7ntRA9sWDdeCkJWv@cluster0.k9wlucb.mongodb.net/Library',
  host: 'localhost',
  port: '27017',
  user: '',
  password: '',
  database: 'Library',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LibraryDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Library';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Library', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
