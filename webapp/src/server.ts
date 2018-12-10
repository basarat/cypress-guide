import express from 'express';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

/** 
 * Setup server 
 */
const app = express();

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
app.use('/api', express.json());
app.get('/api/all', (_, res) => {
  res.send({ todos: db.get('todos') });
})

/** Start */
app.listen(3000, '0.0.0.0');
