import express from 'express';

const app = express();

app.listen({ port: 3000 }, () => {  
  console.log('Server is running on http://localhost:3000');
});