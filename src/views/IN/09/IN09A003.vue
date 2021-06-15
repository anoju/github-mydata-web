<template>
  <div class="section">
    <kb-title-bar h2 class="pd_t24" title="현재까지 준비된<br>은퇴 자산은 얼마일까요?" />
    <p class="mg_t32">현재 자산을 불러왔어요.</p>
    <div class="fz_12 fc_666 mg_t4">20/10/19 기준</div>
    <div class="fz_18 mg_t16"><strong>총 2,000,160,000원 입니다.</strong></div>
    <ul class="gray_box_list mg_t24">
      <li>
        <div class="gray_box_item">
          <div class="head">
            <div class="flex_wrap space_between">
              <span>퇴직연금</span>
              <div>1,000,000,000원</div>
            </div>
          </div>
          <div class="cont">
            <div class="ico_info_item">
              <div class="info">
                <div class="left">
                  <p class="tit">KB able Plus 통장 KB able Plus 통장</p>
                </div>
                <div class="right">
                  <p class="money">300,000,000원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="gray_box_item">
          <div class="head">
            <div class="flex_wrap space_between">
              <div>개인연금</div>
              <div>1,000,000,000원</div>
            </div>
          </div>
          <div class="cont">
            <div class="ico_info_item">
              <div class="info">
                <div class="left">
                  <p class="tit">KB able Plus 통장 KB able Plus 통장</p>
                </div>
                <div class="right">
                  <p class="money">300,000,000원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="gray_box_item">
          <div class="head">
            <div class="flex_wrap space_between">
              <div>예금</div>
              <div>1,000,000,000원</div>
            </div>
          </div>
          <div class="cont">
            <div class="ico_info_item">
              <div class="info">
                <div class="left">
                  <p class="tit">KB able Plus 통장 KB able Plus 통장</p>
                </div>
                <div class="right">
                  <p class="money">300,000,000원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="gray_box_item">
          <div class="head">
            <div class="flex_wrap space_between">
              <div>주식</div>
              <div>1,000,000,000원</div>
            </div>
          </div>
          <div class="cont">
            <div class="ico_info_item">
              <div class="info">
                <div class="left">
                  <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                  <i class="ico" style="background:skyblue"></i>
                  <p class="tit">KB able Plus 통장 KB able Plus 통장</p>
                </div>
                <div class="right">
                  <p class="money">300,000,000원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div class="btm_btn_util mg_t32">
      <kb-button aTag not class="btn_refresh">새로고침</kb-button>
      <kb-button aTag not class="btn_linkage">추가연동</kb-button>
    </div>

    <kb-button-wrap bottom-fixed>
      <kb-button
        line
        to="/IN/09/IN09A010/1"
      >
        이전
      </kb-button>
      <kb-button
        yellow
        to="/IN/09/IN09A010/3"
      >
        다음
      </kb-button>
    </kb-button-wrap>
  </div>
</template>
<script>

export default {
  name: 'IN09A003',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
