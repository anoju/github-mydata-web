<template>
  <kb-page page-title="고수의 Pick">
    <kb-page-body>
      <div class="section">
        <kb-tabs
          fixed
          content-class="mg_t0"
          v-model="tabIdx"
        >
          <kb-tab title="나의 북마크">
            <div class="pick_top my">
              <p class="stit">투자 고수가 선택하고</p>
              <strong>내가 지켜보고 있는 Pick</strong>
              <p class="tip_tit">#고수의 Pick이 한눈에</p>
              <p class="tip_tit">#나만의 북마크로 관심Pick 만들기</p>
              <i class="ico"></i>
            </div>
            <div class="no_list_txt icon" v-if="false">
              <strong class="tit">선택한 북마크가 없어요.</strong>
              <div class="txt">관심있는 고수를 추가해 보세요.</div>
            </div>
            <ul class="pick_list" v-else>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>장기보유 고수가<br>1주일 동안 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                  <i class="ico_pick ico1">투자품격</i>
                  <!--
                    투자품격 ico1
                    보유멘탈 ico2
                    자본포스 ico3
                    운빨충만 ico4
                    한개가 더 있다고 함?? ico5
                  -->
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드키워드키워드키워드워드키워드키워드</span>
                  </div>
                  <kb-button
                    bookmark
                    :class="{checked:isBookmark}"
                    role="checkbox"
                    :aria-checked="isBookmark?'true':'false'"
                    @click="isBookmark = !isBookmark"
                  >123</kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>손절매 고수가<br>지금 매도하는 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                  <i class="ico_pick ico2">보유멘탈</i>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>불타기 고수가<br>지금 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                  <i class="ico_pick ico3">자본포스</i>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>불타기 고수가<br>지금 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                  <i class="ico_pick ico4">운빨충만</i>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>불타기 고수가<br>지금 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                  <i class="ico_pick ico5">찐찐고수</i>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
            </ul>
          </kb-tab>

          <kb-tab title="전체">
            <div class="pick_top ico0">
              <!--
                전체 ico0
                투자품격 ico1
                보유멘탈 ico2
                자본포스 ico3
                운빨충만 ico4
                한개가 더 있다고 함?? ico5
              -->
              <p class="stit">고수님 도와주세요!</p>
              <strong>투자 고수가 선택한 Pick</strong>
              <p class="tip_tit">#고수들은 어디에 투자하지?</p>
              <p class="tip_tit">#선택이 필요한 순간! 살까? 말까?</p>
              <i class="ico"></i>
            </div>
            <ul class="pick_list">
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>장기보유 고수가<br>1주일 동안 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                  <i class="ico_pick ico1">투자품격</i>
                  <!--
                    투자품격 ico1
                    보유멘탈 ico2
                    자본포스 ico3
                    운빨충만 ico4
                    한개가 더 있다고 함?? ico5
                  -->
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드키워드키워드키워드워드키워드키워드</span>
                  </div>
                  <kb-button not aTag class="btn_bmark">
                    <i class="ico_on"></i>123
                  </kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>손절매 고수가<br>지금 매도하는 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                  <i class="ico_pick ico2">보유멘탈</i>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>불타기 고수가<br>지금 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                  <i class="ico_pick ico3">자본포스</i>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>불타기 고수가<br>지금 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                  <i class="ico_pick ico4">운빨충만</i>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>불타기 고수가<br>지금 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                  <i class="ico_pick ico5">찐찐고수</i>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
            </ul>
          </kb-tab>

          <kb-tab title="투자품격">
            <div class="pick_top ico1">
              <p class="stit">왕년에? NO~ 지금도!</p>
              <strong>진행형인 고수의 Pick</strong>
              <p class="tip_tit">#치킨이냐 랍스타냐? 몰빵 or 분산?</p>
              <p class="tip_tit">#물타기냐, 불타기냐?</p>
              <i class="ico"></i>
            </div>
            <ul class="pick_list">
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>장기보유 고수가 1주일 동안 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드키워드키워드키워드워드키워드키워드</span>
                  </div>
                  <kb-button not aTag class="btn_bmark">
                    <i class="ico_on"></i>123
                  </kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>손절매 고수가 지금 매도하는 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
            </ul>
          </kb-tab>

          <kb-tab title="보유멘탈">
            <div class="pick_top ico2">
              <p class="stit">묻을까? 팔까?</p>
              <strong>햄릿 고수의 Pick</strong>
              <p class="tip_tit">#존버는 승리한다!</p>
              <p class="tip_tit">#단타 칠 것인가? 묻을 것인가?</p>
              <i class="ico"></i>
            </div>
            <ul class="pick_list">
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>장기보유 고수가 1주일 동안 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드키워드키워드키워드워드키워드키워드</span>
                  </div>
                  <kb-button not aTag class="btn_bmark">
                    <i class="ico_on"></i>123
                  </kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>손절매 고수가 지금 매도하는 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>불타기 고수가 지금 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>장기보유 고수가 1주일 동안 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>손절매 고수가 지금 매도하는 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>불타기 고수가 지금 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
            </ul>
          </kb-tab>

          <kb-tab title="자본포스">
            <div class="pick_top ico3">
              <p class="stit">끼리끼리 놀아요~</p>
              <strong>자본렙 비슷한 고수의 Pick</strong>
              <p class="tip_tit">#네가 사는 그 종목</p>
              <p class="tip_tit">#조금 벌어요, 많이 벌어요, 무지 벌어요</p>
              <i class="ico"></i>
            </div>
            <ul class="pick_list">
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>장기보유 고수가 1주일 동안 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드키워드키워드키워드워드키워드키워드</span>
                  </div>
                  <kb-button not aTag class="btn_bmark">
                    <i class="ico_on"></i>123
                  </kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>손절매 고수가 지금 매도하는 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
            </ul>
          </kb-tab>

          <kb-tab title="운빨충만">
            <div class="pick_top ico4">
              <p class="stit">가진 건 운 밖에~</p>
              <strong>최고조 운빨력 고수의 Pick</strong>
              <p class="tip_tit">#뒤로 넘어져도 고수익</p>
              <p class="tip_tit">#사면 오르go, 팔면 오르go, 사면 빠지go</p>
              <i class="ico"></i>
            </div>
            <ul class="pick_list">
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>장기보유 고수가 1주일 동안 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드키워드키워드키워드워드키워드키워드</span>
                  </div>
                  <kb-button not aTag class="btn_bmark">
                    <i class="ico_on"></i>123
                  </kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>손절매 고수가 지금 매도하는 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
            </ul>
          </kb-tab>

          <kb-tab title="찐찐고수">
            <div class="pick_top ico5">
              <!--
                전체 ico0
                투자품격 ico1
                보유멘탈 ico2
                자본포스 ico3
                운빨충만 ico4
                한개가 더 있다고 함?? ico5
              -->
              <p class="stit">투자는 실력</p>
              <strong>투자의 구루 고수의 Pick</strong>
              <p class="tip_tit">#실패 없는 투자, 꾸준한 이익</p>
              <p class="tip_tit">#왜 이제야 알게 됐나?</p>
              <i class="ico"></i>
            </div>
            <ul class="pick_list">
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>장기보유 고수가 1주일 동안 매수한 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드키워드키워드키워드워드키워드키워드</span>
                  </div>
                  <kb-button not aTag class="btn_bmark">
                    <i class="ico_on"></i>123
                  </kb-button>
                </div>
              </li>
              <li>
                <kb-button not aTag class="btn_stock">
                  <strong>손절매 고수가 지금 매도하는 종목은?</strong>
                  <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
                </kb-button>
                <div class="hash_tags">
                  <div>
                    <span>#키워드</span>
                    <span>#키워드</span>
                    <span>#키워드</span>
                  </div>
                  <kb-button bookmark>123</kb-button>
                </div>
              </li>
            </ul>
          </kb-tab>

        </kb-tabs>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN06A001',
  data() {
    return {
      isBookmark: true,
      tabIdx: 1,
    };
  },
  watch: {
    '$route.query.tab': {
      handler(tab) {
        if (this.$route.query.tab === undefined) {
          this.tabIdx = 1;
        } else {
          this.tabIdx = Number(tab);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    if (this.$route.query.tab !== undefined) this.tabIdx = Number(this.$route.query.tab);
  },
  methods: {
  },
};
</script>
