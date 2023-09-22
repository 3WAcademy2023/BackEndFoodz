
import express from 'express'
import bodyparser from 'body-parser'
import connectDB from './server.js'
import cookieParser from 'cookie-parser';



const app = express();
const PORT = 9000;

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
//configuration de dossier views
app.set("views", "views");


console.log('3wacademy2023')

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});







connectDB()
app.use(cookieParser());
app.use(express.static('public'))

