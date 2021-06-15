<template>
  <kb-pop
    full
    title="다른 카드 보기"
  >
    <kb-pop-body>
      <div class="section">
        <div class="financial_bank_list">
          <ul>
            <li>
              <kb-button not class="bank_info">
                <!-- 즐겨찾기 카드일때 bookmark 클래스 -->
                <i class="ico bookmark"><span style="background: skyblue;"></span></i>
                <div class="name">
                  <p><strong>청춘대로 톡톡카드</strong></p>
                  <span>KB국민은행 12345678901234</span>
                </div>
              </kb-button>
            </li>
            <li>
              <kb-button not class="bank_info">
                <i class="ico"><span style="background: skyblue;"></span></i>
                <div class="name">
                  <p><strong>청춘대로 톡톡카드</strong></p>
                  <span>KB국민은행 12345678901234</span>
                </div>
              </kb-button>
            </li>
          </ul>
        </div>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'FI02A012',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
