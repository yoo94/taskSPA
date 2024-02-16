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
                        <form method="post" action="서버의url" id="login-form">
                            <input type="text" name="userName" placeholder="Email">
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
