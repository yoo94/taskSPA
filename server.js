const express = require("express");
const path = require("path");
// express 사용
const app = express();

// __dirname을 빼도 되지만 포함하는 게 정석.
app.use("/component", express.static(path.resolve(__dirname, "front", "component")))// '/component'으로 시작되는 경로로 접속 시 front/component 기본 고정 경로가 됨.
app.get("/*", (req, res) => {// 모든 경로에 대해 index.html 파일 제공
    res.sendFile(path.resolve(__dirname, "front", "index.html"));
});
app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));// port 생성 서버 실행

const url = require('./front/common/common')
const mongoose = require('mongoose')
mongoose.connect(
        url.getUrl(),
        {
            // useNewUrlPaser: true,
            // useUnifiedTofology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
        }
    )
    .then(() => console.log('MongoDB conected'))
    .catch((err) => {
        console.log(err);
    });
