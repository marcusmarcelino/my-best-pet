import { createConnection } from 'typeorm'
import path from 'path'

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'my-best-pet',
  entities: [path.resolve(__dirname, 'src/app/models/*.ts')],
  migrations: [path.resolve(__dirname, 'src/database/migrations/*.ts')],
  cli: {
    entitiesDir: path.resolve(__dirname, 'src/database/migrations')
  }
}).then(() => console.log('contected success database'))
