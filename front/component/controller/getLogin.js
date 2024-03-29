export default async function getlogin() {
    const email = document.querySelector('input[name="userEmail"]');
    const password = document.querySelector('input[name="userPassword"]');
    if (!email.value) {
        alert("이메일 입력해");
        return;
    }
    if (!password.value) {
        alert("비밀번호 입력해");
        return;
    }
    try {
        const response = await fetch("/postLogin", {
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
            alert('로그인 실패');
            return false;
        }
        if(response.statusText === 'OK') {
            sessionStorage.setItem("successLogin", "true" ); // 저장
            location.href="/mypage";
        }
    } catch (error) {
        console.error('로그인 요청 실패:', error);
    }
}
