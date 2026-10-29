const express = require("express")

const app = express();
const PORT = 3000;

app.get("/api/health",(req,res) => {
	res.json({"message" : "EzCall backend is running!"});
});


app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
})

