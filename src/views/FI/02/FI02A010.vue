<template>
  <kb-page page-title="단일 거래 상세">
    <kb-page-body>
      <div class="result_wrap type2">
        <div class="tit_bank mg_t24">
          <p class="bank">
            <span>여의도 식당</span>
            999,999,999
          </p>
          <!--
              승인 : fc_blue
              승인취소 : fc_red
            -->
          <p class="status fc_blue">승인</p>
        </div>
        <dl class="result_list type3 mg_t24">
          <dt class="fz_14">거래일시 </dt>
          <dd>2021/01/21 13:40:12</dd>
          <dt class="fz_14">결제카드</dt>
          <dd>
            <kb-button link line blue>KB국민카드 청춘대로 톡톡카드</kb-button>
            <p class="mg_t4 fz_12 fc_666">12345678901234</p>
          </dd>
          <dt class="fz_14">결제구분</dt>
          <dd>할부(3개월)</dd>
        </dl>
        <dl class="result_list type3">
          <!-- 내용이 있는경우 -->
          <dt class="fz_14">카테고리</dt>
          <dd><kb-button link line blue>#밥값정산</kb-button></dd>
          <dt class="fz_14">메모</dt>
          <dd><kb-button link line blue>여의도 맛집회동</kb-button></dd>
          <!-- //내용이 있는경우 -->

          <!-- 내용이 없는경우 -->
          <dt class="fz_14">카테고리</dt>
          <dd><kb-button link line blue>카테고리를 선택해주세요</kb-button></dd>
          <dt class="fz_14">메모</dt>
          <dd><kb-button link line blue>메모를 남겨보세요</kb-button></dd>
          <!-- //내용이 없는경우 -->
        </dl>
        <dl class="result_list type3">
          <dt class="fz_14">승인번호</dt>
          <dd class="fc_222">12385823923</dd>
        </dl>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI02A010',
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
