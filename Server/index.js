import bcrypt from "bcryptjs";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "./models/User.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
    .connect("mongodb://127.0.0.1:27017/Employees", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected ✅"))
    .catch((err) => console.error("MongoDB Connection Error ❌", err));

app.get("/", (req, res) => {
    res.send("MongoDB Connected with ES6 Modules 🚀");
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists)
            return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "Invalid email or password" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invalid email or password" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
});

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" });
        }
        req.user = decoded;
        next();
    });
};

app.get("/protected", verifyToken, (req, res) => {
});

app.get("/user/details", verifyToken, (req, res) => {
    res.json({
        name: "Haider",
        image: "https://i.imgur.com/1X9aWvV.png"
    });
});

app.get("/dashboard/data", verifyToken, (req, res) => {
    res.json({
        users: {
            count: 40689,
            change: "4.8%",
            direction: "up"
        },
        orders: {
            count: 10293,
            change: "1.3%",
            direction: "up"
        },
        sales: {
            amount: 89000,
            change: "4.3%",
            direction: "down"
        },
        pending: {
            count: 2040,
            change: "1.8%",
            direction: "up"
        }
    });
});

app.get("/latest-deals", verifyToken, (req, res) => {
    const deals = [
        {
            product: "Apple Watch",
            location: "6096 Marjolaine Landing",
            dateTime: "12.09.2019 - 12.53 PM",
            piece: "423",
            amount: "$34,295",
            status: "Delivered",
            image: "https://i.imgur.com/1X9aWvV.png",
        },
        {
            product: "iPhone 14 Pro",
            location: "8132 Olive Street",
            dateTime: "21.02.2023 - 11.23 AM",
            piece: "312",
            amount: "$45,800",
            status: "Pending",
            image: "https://i.imgur.com/qQq5eYy.png",
        },
        {
            product: "Samsung Galaxy S22",
            location: "2301 Mountain Ave",
            dateTime: "03.06.2022 - 9.45 AM",
            piece: "150",
            amount: "$27,990",
            status: "Shipped",
            image: "https://i.imgur.com/W5y6pao.png",
        },
        {
            product: "Sony WH-1000XM5",
            location: "421 Sunset Blvd",
            dateTime: "11.12.2021 - 6.12 PM",
            piece: "78",
            amount: "$12,460",
            status: "Delivered",
            image: "https://i.imgur.com/YZzkZ6v.png",
        },
        {
            product: "MacBook Air M2",
            location: "99 Lincoln Street",
            dateTime: "05.03.2022 - 2.20 PM",
            piece: "54",
            amount: "$59,320",
            status: "Delivered",
            image: "https://i.imgur.com/lGJw6Lz.png",
        }
    ];

    res.json(deals);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});