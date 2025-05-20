const express = require("express");
require("dotenv").config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const getDb = require("./connection");
let db;

app.get("/", (req, res) => {
    res.send("hello BALAN");
});

app.post("/register", (req, res) => {
    let data = req.body;
    db.collection("Users").insertOne(data)
        .then(() => {
            res.status(201).json({ message: 'Користувач зареєстрований' });
        })
        .catch(err => {
            console.error("Помилка при реєстрації:", err);
            res.status(500).json({ message: 'Помилка при реєстрації користувача' });
        });
});

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Необхідно вказати логін та пароль' });
        }
        const user = await db.collection("Users").findOne({ username: username });

        // Перевіряємо чи є користувач
        if (!user) {
            return res.status(401).json({ message: 'Користувача не знайдено' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Невірний пароль' });
        }

        const userWithoutPassword = { ...user };
        delete userWithoutPassword.password;

        res.status(200).json({
            message: 'Вхід успішний',
            user: userWithoutPassword
        });
    } catch (error) {
        console.error("Помилка при вході:", error);
        res.status(500).json({ message: 'Помилка на сервері' });
    }
});

app.listen(process.env.PORT, async () => {
    console.log("Сервер запущено на порту", process.env.PORT);
    db = await getDb();
    console.log("З'єднання з базою даних встановлено");
});