const app = require("./src/app");
const appConstants = require("./src/app/constants/app.constant");


// const port = appConstants.PORT;

 const port = appConstants.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})