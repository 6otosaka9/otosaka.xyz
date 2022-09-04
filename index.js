_path = process.cwd();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(_path + "/public"));
app.use("/api", require(_path + "./src/routes/api.js"))
app.use("/", require(_path + "./src/routes/pages.js"))


app.listen(port, () => {
    console.log('Example app listening on port ' + port);
});
