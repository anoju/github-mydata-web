<template>
  <kb-page page-title="총자산 변동 추이">
    <kb-page-body>
      <div class="section">
        <div class="assets_change_info">
          <kb-select
            v-model="selectVal1"
            :options="selectOpt1"
            class="type_line"
            inline
          />
          <p class="tit">총자산 변동 추이는?</p>
          <p class="date">조회기간 : 2010/2/01 - 2021/1/31</p>
          <ul class="assets_list_box">
            <li>
              <span>총자산</span>
              <span>300,000,000원</span>
            </li>
            <li>
              <span>자산 증감액</span>
              <span><b class="fc_down">-12.25%</b>100,000원</span>
            </li>
            <li>
              <span>현금 잔고</span>
              <span><b class="fc_up">+12.25%</b>12,000,000원</span>
            </li>
            <li>
              <span>투자 수익금</span>
              <span><b class="fc_up">+12.25%</b>240,000,000원</span>
            </li>
          </ul>
        </div>

        <!-- chart -->
        <div class="chart_area mg_b30"><img src="@/assets/images/TO/02/chart_total_assets.png" style="width:100%;" alt="총자산 변동 추이 차트 이미지"></div>
        <!-- //chart -->
        <hr aria-hidden="true" class="hr_line">
        <kb-title-bar
          h3
          title="월별 증감액 상세"
          class="tbl_tit mg_t30"
        />

        <!-- 2021-06-10 기획변경에 따른 마크업 변경 -->
        <div class="assets_change_detail">
          <div class="total">
            <p class="tit">기간 총 합계</p>
            <dl class="type2">
              <dt>순자산</dt>
              <dd>+550,000,000원</dd>
            </dl>
            <dl class="type2">
              <dt>증감 총액</dt>
              <dd>+50,000,000원</dd>
            </dl>

            <dl class="line">
              <dt>현금 잔고 증감</dt>
              <dd>123,456,000,000원</dd>
            </dl>
            <dl>
              <dt>투자 수익 증감</dt>
              <dd>123,456,000,000원</dd>
            </dl>
            <dl>
              <dt>기타자산 증감</dt>
              <dd>123,456,000,000원</dd>
            </dl>
          </div>

          <div class="month">
            <p class="tit">12월</p>
            <dl class="type2">
              <dt>순자산</dt>
              <dd>+550,000,000원</dd>
            </dl>
            <dl class="type2">
              <dt>증감 총액</dt>
              <dd>+50,000,000원</dd>
            </dl>

            <div class="box">
              <dl>
                <dt>현금 잔고 증감</dt>
                <dd>123,456,000,000원</dd>
              </dl>
              <dl>
                <dt>투자 수익 증감</dt>
                <dd>123,456,000,000원</dd>
              </dl>
              <dl>
                <dt>기타자산 증감</dt>
                <dd>123,456,000,000원</dd>
              </dl>
            </div>
          </div>
          <div class="month">
            <p class="tit">11월</p>
            <dl class="type2">
              <dt>순자산</dt>
              <dd>+550,000,000원</dd>
            </dl>
            <dl class="type2">
              <dt>증감 총액</dt>
              <dd>+50,000,000원</dd>
            </dl>

            <div class="box">
              <dl>
                <dt>현금 잔고 증감</dt>
                <dd>123,456,000,000원</dd>
              </dl>
              <dl>
                <dt>투자 수익 증감</dt>
                <dd>123,456,000,000원</dd>
              </dl>
              <dl>
                <dt>기타자산 증감</dt>
                <dd>123,456,000,000원</dd>
              </dl>
            </div>
          </div>
          <div class="month">
            <p class="tit">10월</p>
            <dl class="type2">
              <dt>순자산</dt>
              <dd>+550,000,000원</dd>
            </dl>
            <dl class="type2">
              <dt>증감 총액</dt>
              <dd>+50,000,000원</dd>
            </dl>

            <div class="box">
              <dl>
                <dt>현금 잔고 증감</dt>
                <dd>123,456,000,000원</dd>
              </dl>
              <dl>
                <dt>투자 수익 증감</dt>
                <dd>123,456,000,000원</dd>
              </dl>
              <dl>
                <dt>기타자산 증감</dt>
                <dd>123,456,000,000원</dd>
              </dl>
            </div>
          </div>
        </div>
        <!-- //2021-06-10 기획변경에 따른 마크업 변경 -->

        <!--
        <kb-table-scroll class="table_fixed">
          <kb-table
            caption="테이블제목3"
            :col-width="['60px','130px','130px','130px']"
            class="amount"
          >
            <thead>
              <tr>
                <th scope="row" rowspan="2" class="fixed">기준<br>월</th>
                <th scope="col">현금잔고</th>
                <th scope="col">투자수익</th>
                <th scope="col">기타자산</th>
              </tr>
              <tr>
                <th scope="col" colspan="3">월 증감 총액 / 순자산</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" rowspan="2" class="fixed">12월</th>
                <td>+1,000,000,000</td>
                <td>+1,000,000,000</td>
                <td>+1,000,000,000</td>
              </tr>
              <tr>
                <td colspan="3" class="total_right"><strong>+900,000,000 / 550,000,000</strong></td>
              </tr>
              <tr>
                <th scope="row" rowspan="2" class="fixed">11월</th>
                <td>+1,000,000,000</td>
                <td>0</td>
                <td>+1,000,000,000</td>
              </tr>
              <tr>
                <td colspan="3" class="total_right"><strong>-900,000,000 / 550,000,000</strong></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="row" rowspan="2" class="fixed">기간<br>총 합계</th>
                <td>+1,000,000,000</td>
                <td>+1,000,000,000</td>
                <td>+1,000,000,000</td>
              </tr>
              <tr>
                <td colspan="3" class="total_right"><strong>+900,000,000 / 550,000,000</strong></td>
              </tr>
            </tfoot>
          </kb-table>
        </kb-table-scroll>
        -->
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TO02A003',
  data() {
    return {
      selectVal1: '1년 간',
      selectOpt1: [
        { text: '선택하기', value: '' },
        { text: '올해', value: '올해' },
        { text: '1년 간', value: '1년 간' },
        { text: '2년 간', value: '2년 간' },
        { text: '3년 간', value: '3년 간' },
        { text: '4년 간', value: '4년 간' },
        { text: '5년 간', value: '5년 간' },
      ],
    };
  },
  methods: {
  },
};
</script>
