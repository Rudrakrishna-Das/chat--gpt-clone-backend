const express = require("express");
const cors = require("cors");

const router = require("./serverRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.listen(process.env.PORT || 8000);
