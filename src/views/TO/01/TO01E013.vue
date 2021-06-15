<template>
  <kb-pop
    full
    noClose
  >
    <kb-pop-body>
      <div class="section mg_t48">
        <p class="fz_20 fw_bold t_center">
          KB증권 오늘을 <br />이용해주셔서 감사합니다.
        </p>
        <p class="mg_t8 fz_16 fc_666 t_center">
          휴대폰 번호를 남겨주시면 <br />커피쿠폰을 보내드려요.
        </p>
        <div class="coffee_result_box">
          <p class="text">귀욤뽀짝님 <br />행복한 하루되세요</p>
        </div>

        <kb-input class="mg_t24" v-model="inpVal1" placeholder="-없이 숫자만 입력해주세요."/>
        <div class="txt_list mg_t12">
          <ul>
            <li class="dot">
              커피 쿠폰은 오늘 하루만 등록이 가능해요.<br />연락처를 꼭 남겨주세요!
            </li>
          </ul>
        </div>

      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button yellow @click="popClose">등록완료</kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'TO01E013',
  data() {
    return {
      chkVal: [],
      inpVal1: '',
    };
  },
  methods: {
    popClose() {
      if (this.inpVal1 !== '' && this.inpVal1) {
        this.$emit('close');
      } else {
        this.$alert('커피쿠폰을 받으실 휴대번호를 남기신 후, <br />등록완료 버튼을 클릭해 주세요.', null, null).then(() => {
          console.log('확인');
        });
      }
    },
  },
};
</script>
