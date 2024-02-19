export default class {
    constructor() {
        document.title = "taskList";
    }
    async getHtml() {
        return `
            <h1 class="pageTitle">task List</h1>
            <div>
                <div class="taskListBtn">
                    <a href="#" class="btn blue mini">추가</a>
                    <a href="#" class="btn red mini">삭제</a>
                </div>
                <table class="taskList">
                  <thead>
                      <tr>
                        <th id="taskAllCheck"><input type="checkbox" class="check_btn" ><label for="check_btn"></label></th>
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
                        <td>체크</td>
                        <td>날짜</td>
                        <td>시간</td>
                        <td>할일</td>
                        <td>처리</td>
                        <td>비고</td>
                        <td>미루기</td>
                      </tr>
                      <tr class="taskList_content">
                        <td>체크</td>
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
