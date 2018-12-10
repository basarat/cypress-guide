import express from 'express';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

/** 
 * Setup db 
 */
const adapter = new FileSync('db.json')
const db = low(adapter);

db.defaults({ todos: [] })
  .write();

/** 
 * API server 
 */
const app = express();
const api = express.Router();

api.get('/all', (_, res) => {
  res.send({ todos: db.get('todos') });
});

app.use('/api', api);

/** Start */
app.listen(3000, '0.0.0.0');
