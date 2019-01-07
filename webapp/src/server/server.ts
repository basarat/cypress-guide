import express from 'express';
import cors from 'cors';
import low from 'lowdb';
import uuid from 'uuid/v4';
import FileSync from 'lowdb/adapters/FileSync';
import { TodoItem } from '../common/types';

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

api.use(cors(), express.json());
api.get('/all', (_, res) => {
  res.send({ todos: db.get('items') });
});
api.post('/add', (req, res) => {
  const id = uuid();
  db.get('items')
    .push({
      id: id,
      completed: false,
      message: req.body.message
    })
    .write();
  res.send({ id });
});

app.use('/api', api);

/** Start */
app.listen(3000, '0.0.0.0');
