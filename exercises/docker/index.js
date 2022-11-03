const express = require('express')
const { createClient } = require('redis');
const app = express()
const port = 3000

console.log(process.env.REDIS_URL);

app.get('/', async (req, res) => {
  const client = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  });

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  let value = await client.get('key') || 0;
  value++;
  await client.set('key', value);

  res.send(`Hello World! The value fetched from Redis is ${value}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
