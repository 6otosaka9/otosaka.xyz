_path = process.cwd();
const express = require("express");
const cors = require("cors");
const secure = require("ssl-express-www");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000 || 8080 || 4000;

app.use(express.static(_path + "/public"));
app.use(cors());
app.use(secure);
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", require(_path + "/src/routes/api.js"))
app.use("/", require(_path + "/src/routes/pages.js"))


app.listen(port, () => {
    console.log('Example app listening on port ' + port);
});