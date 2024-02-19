export default class {
    constructor() {
        document.title = "mypage";
    }
    async getHtml() {
        return `
        <h1 class="pageTitle">MY Page</h1>
        <div class="dash-board">
            <div class="row">
                <div class="col">
                  <h2>TODAY</h2>
                  <span class="title">오늘 할 일</span>
                  <span class="dash-count">6</span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                  <h2>WEEK</h2>
                  <span class="title">주간 할 일</span>
                  <span class="dash-count">130</span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                  <h2>MONTH</h2>
                  <span class="title">월간 할 일</span>
                  <span class="dash-count">8</span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                  <h2>YEAR</h2>
                  <span class="title">연간 할 일</span>
                  <span class="dash-count">4</span>
                </div>
            </div>
        </div>
        <div class="latestTaskListDiv">
            <table>
              <thead class="latestTaskList view10">
                  <tr>
                    <th id="taskDate">날짜</th>
                    <th id="taskTime">시간</th>
                    <th id="taskContent">할일</th>
                    <th id="taskComplete">처리</th>
                    <th id="taskSGTXT">비고</th>
                    <th id="taskDelay">미루기</th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="taskList_content">
                    <td>날짜</td>
                    <td>시간</td>
                    <td>할일</td>
                    <td>처리</td>
                    <td>비고</td>
                    <td>미루기</td>
                  </tr>
              </tbody>          
            </table>    
        </div>
        `;
    }
}
