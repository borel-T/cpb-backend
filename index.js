const express = require("express");
const app = express();

app.listen(4000, (err) => {
  if (err) {
    console.log("error Builda-team launching server");
  }
  console.log("Builda-team : 4000");
});
