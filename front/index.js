// import mypage from "/component/mypage.js";
// import login from "/component/login.js";
// import taskList from "/component/taskList.js";
// import taskEdit from "/component/taskEdit.js";
// import completeTask from "/component/completeTask.js";

// // 뷰 렌더링 함수
// const renderView = async (view) => {
//     document.querySelector("#App").innerHTML = await view.getHtml();
// };

// // 라우터 함수
// const router = async () => {
//     const routes = [
//         { path: "/", view: mypage },
//         { path: "/login", view: login },
//         { path: "/taskList", view: taskList },
//         { path: "/taskEdit", view: taskEdit },
//         { path: "/completeTask", view: completeTask }
//     ];

//     const currentPath = window.location.pathname;
//     const route = routes.find(route => route.path === currentPath);

//     if (route) {
//         await renderView(route.view());
//     } else {
//         // 경로가 없을 경우 404 에러 페이지를 표시하거나 다른 처리를 수행할 수 있다.
//         console.error("404 - Page not found");
//     }
// };

// // 초기화 및 이벤트 핸들러 등록
// document.addEventListener("DOMContentLoaded", () => {
//     document.body.addEventListener("click", (e) => {
//         if (e.target.matches("[data-link]")) {
//             e.preventDefault();
//             history.pushState(null, null, e.target.href);
//             router();
//         }
//     });
//     router();
// });

// window.addEventListener("popstate", router);
console.log('sss')