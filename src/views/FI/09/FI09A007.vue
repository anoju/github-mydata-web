<template>
  <kb-pop
    full
    title="다른 PAY 보기"
  >
    <kb-pop-body>
      <div class="section">
        <div class="financial_bank_list">
          <ul>
            <li>
              <kb-button not class="bank_info">
                <i class="ico"><span style="background: skyblue;"></span></i>
                <div class="name">
                  <p><strong>네이버페이 abc***eee</strong></p>
                  <span>KB국민은행 12345678901234</span>
                </div>
              </kb-button>
            </li>
            <li>
              <kb-button not class="bank_info">
                <i class="ico"><span style="background: skyblue;"></span></i>
                <div class="name">
                  <p><strong>쿠팡페이</strong></p>
                  <span>
                    <ico-txt>비활동</ico-txt>
                  </span>
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
  name: 'FI09A007',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
