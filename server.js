const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const selectUser = require("./dbQuery/user/mongodb_select_user");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/component", express.static(path.resolve(__dirname, "front", "component")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front", "index.html"));
});

app.post("/postLogin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await selectUser(email, password);
        if (user) {
            res.status(200).json({ message: "로그인 성공" });
        } else {
            res.status(401).json({ message: "로그인 실패" });
        }
    } catch (error) {
        console.error("로그인 요청 실패:", error);
        res.status(500).json({ message: "서버 오류" });
    }
});

app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));

const url = require("./front/common/common");
const mongoose = require("mongoose");
mongoose
    .connect(url.getUrl(), {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
        console.log(err);
    });
