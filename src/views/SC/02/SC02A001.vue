<template>
  <kb-page page-title="공지사항">
    <kb-page-body>
      <div class="section">
        <div class="line_list_ty2 border_none">
          <ul>
            <li>
              <div class="item">
                <kb-button aTag not class="inner" @click="showPopup($event.target)">
                  <div class="text_line_1">[SEN]KB증권, 설 맞아 홀몸어르신 가정 방문해[SEN]KB증권, 설 맞아 홀몸어르신 가정 방문해</div>
                  <div class="fz_12 fc_666 mg_t8">2021/12/23</div>
                </kb-button>
              </div>
            </li>
            <li>
              <div class="item">
                <kb-button aTag not class="inner" @click="showPopup($event.target)">
                  <div class="text_line_1">[SEN]KB증권, 설 맞아 홀몸어르신 가정 방문해[SEN]KB증권, 설 맞아 홀몸어르신 가정 방문해</div>
                  <div class="fz_12 fc_666 mg_t8">2021/12/23</div>
                </kb-button>
              </div>
            </li>
            <li>
              <div class="item">
                <kb-button aTag not class="inner" @click="showPopup($event.target)">
                  <div class="text_line_1">[SEN]KB증권, 설 맞아 홀몸어르신 가정 방문해[SEN]KB증권, 설 맞아 홀몸어르신 가정 방문해</div>
                  <div class="fz_12 fc_666 mg_t8">2021/12/23</div>
                </kb-button>
              </div>
            </li>
          </ul>
        </div>
        <div class="no_list_txt icon">
          <strong class="tit">등록된 내용이 없습니다.</strong>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'SC02A001',
  data() {
    return {
    };
  },
  methods: {
    showPopup(el) {
      this.$modal({
        component: () => import('@/views/SC/02/SC02A002.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>
