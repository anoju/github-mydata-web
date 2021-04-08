<template>
  <div class="section pd_bottom">
    <h2 class="gd__h1">테이블</h2>
    <h3 class="gd__h2">테이블 guide</h3>
    <div class="gray_box">
      <p class="tit">&lt;kb-table&gt;</p>
      <p><strong>caption=""</strong>테이블제목</p>
      <p><strong>:col-width="[]"</strong>테이블 colgroup값 : 배열로 추가</p>
    </div>

    <h3 class="gd__h2">기본</h3>
    <h4 class="gd__h3">가로</h4>
    <kb-table
      caption="테이블제목0"
      :col-width="['135px','auto']"
    >
      <thead>
        <tr>
          <th scope="col">thead th1</th>
          <th scope="col">thead th2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>내용 내용 내용 내용 내용 내용 </td>
          <td><strong>3,000,000</strong> 원</td>
        </tr>
        <tr>
          <td>내용 내용 내용 내용 내용 내용 </td>
          <td><strong>3,000,000</strong> 원</td>
        </tr>
        <tr>
          <td>내용 내용 내용 내용 내용 내용 </td>
          <td><strong>3,000,000</strong> 원</td>
        </tr>
      </tbody>
    </kb-table>
    <h4 class="gd__h3">세로</h4>
    <kb-table
      caption="테이블제목1"
      :col-width="['120px','auto']"
    >
      <tbody>
        <tr>
          <th scope="row">tbody th1</th>
          <td><strong>3,000,000</strong> 원</td>
        </tr>
        <tr>
          <th scope="row">tbody th2</th>
          <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
        </tr>
        <tr>
          <th scope="row">tbody th3</th>
          <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
        </tr>
      </tbody>
    </kb-table>
    <h4 class="gd__h3">가로+세로</h4>
    <kb-table
      caption="테이블제목2"
      :col-width="['80px','135px','205px']"
    >
      <thead>
        <tr>
          <th scope="row">구분</th>
          <th scope="col">thead th1</th>
          <th scope="col">thead th2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">tbody th1</th>
          <td>내용 내용 내용 내용 내용 내용 </td>
          <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
        </tr>
        <tr>
          <th scope="row">tbody th2</th>
          <td>내용 내용 내용 내용 내용 내용 </td>
          <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
        </tr>
        <tr>
          <th scope="row">tbody th3</th>
          <td>내용 내용 내용 내용 내용 내용 </td>
          <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
        </tr>
      </tbody>
    </kb-table>
    <h3 class="gd__h2">테이블 스크롤</h3>
    <h4 class="gd__h3">기본형 (좌우 마진 삭제)</h4>
    <kb-table-scroll>
      <kb-table
        caption="테이블제목3"
        :col-width="['60px','135px','205px','135px','205px']"
      >
        <thead>
          <tr>
            <th scope="row">구분</th>
            <th scope="col">thead th1</th>
            <th scope="col">thead th2</th>
            <th scope="col">thead th3</th>
            <th scope="col">thead th4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">th</th>
            <td>내용 내용 내용 내용 내용 내용 </td>
            <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
            <td>내용 내용 내용 내용 내용 내용 </td>
            <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
          </tr>
          <tr>
            <th scope="row">th</th>
            <td>내용 내용 내용 내용 내용 내용 </td>
            <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
            <td>내용 내용 내용 내용 내용 내용 </td>
            <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
          </tr>
        </tbody>
      </kb-table>
    </kb-table-scroll>

    <h4 class="gd__h3">좌측 목차 고정</h4>
    <kb-table-scroll class="table_fixed">
      <kb-table
        caption="테이블제목3"
        :col-width="['60px','135px','205px','135px','205px']"
      >
        <thead>
          <tr>
            <th scope="row" class="fixed">구분</th>
            <th scope="col">thead th1</th>
            <th scope="col">thead th2</th>
            <th scope="col">thead th3</th>
            <th scope="col">thead th4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="fixed">th</th>
            <td>내용 내용 내용 내용 내용 내용 </td>
            <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
            <td>내용 내용 내용 내용 내용 내용 </td>
            <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
          </tr>
          <tr>
            <th scope="row" class="fixed">th</th>
            <td>내용 내용 내용 내용 내용 내용 </td>
            <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
            <td>내용 내용 내용 내용 내용 내용 </td>
            <td>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </td>
          </tr>
        </tbody>
      </kb-table>
    </kb-table-scroll>
  </div>
</template>
<script>
export default {
  name: 'tableGuide',
};
</script>
