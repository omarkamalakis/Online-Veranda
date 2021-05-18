/* Express Setup */

import express from "express";

const app = express();
const port = process.env.PORT || 3050;

app.use(express.static("public"));

app.listen(port, async () => {
	console.log(`Listening on port: ${port}`);
});
