export default class {
    constructor() {
        document.title = "taskList";
    }
    async getHtml() {
        return `
            <h3>완료 및 삭제, 취소된 TASK 목록</h3>
            <body>
                <table class="taskList">
                  <thead>
                      <tr>
                        <th id="taskDate">날짜</th>
                        <th id="taskTime">시간</th>
                        <th id="taskContent">할일</th>
                        <th id="taskComplete">상태</th>
                        <th id="taskDelay">복구</th>
                        <th id="taskDelay">영구삭제</th>
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
            
</body>
        `;
    }
}

