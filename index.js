// index.js
const app = require("./app");

const port = process.env.port || 4000;

app.listen(4000, (err) => {
  if (err) {
    throw new Error(`An error occurred: ${err.message}`);
  }
  console.log(`Server is listening on ${port}`);
});
