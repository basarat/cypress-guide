import express from 'express';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { TodoItem } from './common/types';

/** 
 * Setup db 
 */
type DBSchema = {
  items: TodoItem[]
} 
const adapter = new FileSync<DBSchema>('db.json', {
  defaultValue: {
    items: []
  }
});
const db = low(adapter);

/** 
 * API server 
 */
const app = express();
const api = express.Router();

api.get('/all', (_, res) => {
  res.send({ todos: db.get('items') });
});

app.use('/api', api);

/** Start */
app.listen(3000, '0.0.0.0');
