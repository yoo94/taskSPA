export default async function signUp() {
    const email = document.querySelector('input[name="Email"]');
    const password = document.querySelector('input[name="password"]');
    const name = document.querySelector('input[name="name"]');
    if (!email.value) {
        alert("이메일 입력해");
        return;
    }
    if (!password.value) {
        alert("비밀번호 입력해");
        return;
    }
    if (!name.value) {
        alert("이름 입력해");
        return;
    }
    try {
        const response = await fetch("/postSignUp", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: email.value,
                            password: password.value,
                        }),
                    })
        if(response.statusText === 'Unauthorized'){
            alert('회원가입 실패');
            return false;
        }
        if(response.statusText === 'OK') location.href="/login";
    } catch (error) {
        console.error('로그인 요청 실패:', error);
    }
}
