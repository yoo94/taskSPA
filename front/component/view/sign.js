export default class {
    constructor() {
        document.title = "sign-up";
    }
    async getHtml() {
        return `
            <div>
                <body>
                    <div class="login-wrapper">
                        <h2>SIGN UP</h2>
                        <form method="post" id="sign-form" onsubmit="event.preventDefault();">
                            <span>이메일 (ID) </span><input type="text" name="Email" placeholder="Email">
                            <span>비밀번호</span><input type="password" name="password" placeholder="password">
                            <span>이름 </span><input type="text" name="name" placeholder="name">
                            <input type="submit" value="sign" id="sign-up" data-link>
                        </form>
                    </div>
                </body>
            </div>
        `;
    }
}
