<template>
  <kb-page page-title="멀티로그인 설정">
    <kb-page-body>
      <div class="section mg_bm35">
        <div class="full_height_wrap add_dl">
          <div class="option_list mg_t8">
            <div class="item">
              <div class="flex">
                <label for="switch1" class="lbl">멀티로그인 허용</label>
                <kb-checkbox
                  input-id="switch1"
                  v-model="switchVal1"
                  switch
                />
              </div>
            </div>
            <div class="item" v-if="switchVal1">
              <div class="flex">
                <div class="lbl">동시이용 개수</div>
                <div>
                  <kb-select
                    v-model="selectVal1"
                    :options="selectOpt1"
                    inline
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
        <kb-foldings
          not
          class="accordion_dl mg_b25"
        >
          <kb-folding>
            <template slot="title">
              이용안내
            </template>
            <ul class="txt_list">
              <li class="dot">멀티로그인 허용을 하시면 여러 대의 기기에서 동시 로그인/사용이 가능합니다.</li>
              <li class="dot">멀티로그인 허용을 꺼두시면 다른 기기에서 로그인 시 기존에 로그인되었던 기기에서는 자동로그아웃 처리되어 안심하고 이용하실 수 있습니다.</li>
            </ul>
          </kb-folding>
        </kb-foldings>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'EN06A001',
  data() {
    return {
      switchVal1: false,
      selectVal1: '',
      selectOpt1: [
        { text: '선택하기', value: '' },
        { text: 'A', value: 'A' },
        { text: 'B', value: 'B' },
        { text: 'C', value: 'C', disabled: true },
        { text: 'D', value: 'D' },
      ],
    };
  },
  methods: {
  },
};
</script>
