import express from 'express';
import cors from 'cors';
import low from 'lowdb';
import uuid from 'uuid/v4';
import FileSync from 'lowdb/adapters/FileSync';
import { TodoItem, API } from '../common/types';

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
api.get(API.getAll.endpoint, (_, res) => {
  res.send({ todos: db.get('items') });
});
api.post(API.create.endpoint, (req, res: express.Response) => {
  const id = uuid();
  const request: API.create.Request = req.body;
  db.get('items')
    .push({
      id: id,
      completed: false,
      message: request.message
    })
    .write();
  res.send({ id });
});
api.put(API.setAll.endpoint, (req, res: express.Response) => {
  const request: API.setAll.Request = req.body;
  db.set('items', request.todos)
    .write();
  res.send({});
});

app.use('/api', api);

/** Start */
app.listen(3000, '0.0.0.0');
