
export default function getlogin() {
    const email = document.querySelector('input[name="userName"]').value;
    const password = document.querySelector('input[name="userPassword"]').value;

    try {
        const response = fetch('/postLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            // 로그인 성공
            console.log('로그인 성공');
        } else {
            // 로그인 실패
            console.error('로그인 실패');
        }
    } catch (error) {
        console.error('로그인 요청 실패:', error);
    }
}
