/**
 * Created by kokikono on 2017/10/19.
 */
import express from 'express';

const app = express();

app.get('/',(req, res) => {
    res.send('Hello World hogehoge');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});