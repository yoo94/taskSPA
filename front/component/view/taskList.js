export default class {
    constructor() {
        document.title = "taskList";
    }
    async getHtml() {
        return `
            <div>
                <table class="taskList">
                  <thead>
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
