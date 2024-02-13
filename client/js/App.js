

  //a태그 클릭 했을 때 화면 전환 이벤트
document.body.addEventListener("click", e => {
const target = e.target.closest("a");
if (!(target instanceof HTMLAnchorElement)) return;

e.preventDefault();
navigate(target.href);
});

const navigate = (url) => {
    window.history.pushState(null, null, url);
    App();
};
window.addEventListener("popstate", App);


const routes = [
    { path: "/", view: ()=>{console.log("메인화면이동.")} },
    { path: "/mypage", view: ()=>{console.log("마이페이지이동.")} }
];
const App = async () => {

const pageMatches = routes.map(route => {
    return {
    route: route,
    isMatch: window.location.pathname === route.path,
    };
});

let match = pageMatches.find(pageMatch => pageMatch.isMatch);
console.log(match.route.view());
}

App();