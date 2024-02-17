import mypage from "./view/mypage.js";
import login from "./view/login.js";
import taskList from "./view/taskList.js";
import completeTask from "./view/completeTask.js";
import getLogin from "./controller/getLogin.js"

// 뷰 렌더링 함수
const renderView = async (route) => {
    const view = new route.view()
    document.querySelector("#App").innerHTML = await view.getHtml();
    if(route.path === '/login'){
        document.getElementById('login').addEventListener("click", (e) => {
            getLogin();
        });
    }
};

// 라우터 함수
const router = async () => {
    const routes = [
        { path: "/", view: mypage },
        { path: "/mypage", view: mypage },
        { path: "/login", view: login },
        { path: "/taskList", view: taskList },
        { path: "/completeTask", view: completeTask }
    ];

    const currentPath = window.location.pathname;
    const route = routes.find(route => route.path === currentPath);

    if (route) {
        await renderView(route);
    } else {
        // 경로가 없을 경우 404 에러 페이지를 표시하거나 다른 처리를 수행할 수 있다.
        console.error("404 - Page not found");
    }
};

// 초기화 및 이벤트 핸들러 등록
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router();
        }
    });
    router();
});

window.addEventListener("popstate", router);
