<template>
  <kb-pop
    full
    title="프로필변경"
  >
    <kb-pop-body>
      <div class="section mg_t48">
        <kb-form-item
          label="닉네임을 입력하세요."
        >
          <kb-input
            v-model="fmVal1"
            placeholder="8자 이내로 입력해주세요"
          />
        </kb-form-item>

        <p class="mg_b32 mg_t40 fz_20 fw_bold t_center">프로필 캐릭터를 선택하세요.</p>
        <div class="character_list">
          <div>
            <kb-radio
              v-model="radioVal1"
              value="1"
            >
              <!--
                    케릭터 이미지 별 클래스 정의
                    루나키키 : ico1
                    포스악어 : ico2
                    심쿵비비 : ico3
                    롤로나무 : ico4
                    멜랑콜리 : ico5
                    의문의 낯선자 : ico6
                  -->
              <i class="character_ico ico1"></i>
              <p class="tit">루나키키</p>
            </kb-radio>
            <kb-radio
              v-model="radioVal1"
              value="2"
            >
              <i class="character_ico ico2"></i>
              <p class="tit">포스아거</p>
            </kb-radio>
            <kb-radio
              v-model="radioVal1"
              value="3"
            >
              <i class="character_ico ico3"></i>
              <p class="tit">심쿵비비</p>
            </kb-radio>
          </div>
          <div>
            <kb-radio
              v-model="radioVal1"
              value="4"
            >
              <i class="character_ico ico4"></i>
              <p class="tit">롤로라무</p>
            </kb-radio>
            <kb-radio
              v-model="radioVal1"
              value="5"
            >
              <i class="character_ico ico5"></i>
              <p class="tit">멜랑콜리</p>
            </kb-radio>
            <kb-radio
              v-model="radioVal1"
              value="6"
            >
              <i class="character_ico ico6"></i>
              <p class="tit">의문의 낯선자</p>
            </kb-radio>
          </div>
        </div>
        <div class="txt_list2 mg_t24">
          <ul>
            <li class="dot">프로필 캐릭터는 ‘마이페이지’와 ‘내자산비타민’에서만 사용되는 캐릭터로, 투자성향에서 선택한 투자프렌즈와는 무관해요.</li>
          </ul>
        </div>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          yellow
        >
          저장
        </kb-button>
      </kb-button-wrap>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TO01E002',
  data() {
    return {
      radioVal1: '1',
      radioVal2: '1',
    };
  },
  methods: {

  },
};
</script>
