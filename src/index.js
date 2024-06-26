import express from "express";

const app = express();

app.get('/', (req,res) => {
    const headers = req.headers;

    res.status(200).send(headers);
});

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log(`Express listening on port ${process.env.SERVER_PORT}`);
});