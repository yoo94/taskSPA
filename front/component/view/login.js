import getLogin from "../controller/getLogin.js";

export default class {
    constructor() {
        document.title = "login";
    }
    async getHtml() {
        return `
            <div>
                <body>
                    <div class="login-wrapper">
                        <h2>Login</h2>
                        <form method="post" id="login-form" onsubmit="event.preventDefault(); getLogin();">
                            <input type="text" name="userEmail" placeholder="Email">
                            <input type="password" name="userPassword" placeholder="Password">
                            <label for="remember-check">
                                <input type="checkbox" id="remember-check">아이디 저장하기
                            </label>
                            <input type="submit" value="Login">
                        </form>
                    </div>
                </body>
            </div>
        `;
    }
}
