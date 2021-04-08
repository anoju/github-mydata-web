<template>
  <kb-page page-title="가상투자">
    <kb-page-body>
      <div class="section">
        <div class="ticket_money">
          <div class="inner">
            <div class="box">
              <div class="info">김스타님의 가상 투자자금</div>
              <div class="money">
                <div class="word">일천만원</div>
                <div class="num">10,000,000원</div>
              </div>
            </div>
          </div>
        </div>
        <kb-title-bar h4 center tit-class="firecracker" class="mg_t12" title="축하합니다!" />

        <div class="fz_14 fc_666 t_center mg_t8">
          가상 투자 진행을 위한 자금을 획득하셨어요!<br>
          본격적인 투자를 위해 포트폴리오를 골라볼까요?
        </div>
        <hr class="hr_line mg_t24" aria-hidden="true">
        <!--
            포스아거(공격투자형) : type1
            루나키키(적극투자형) : type2
            멜랑콜리(위험중립형) : type3
            심쿵비비(안정추구형) : type4
            롤로라무(안정형) : type5
          -->
        <kb-swiper
          full-width
          index="0"
        >
          <swiper-slide>
            <div class="in_chart_item">
              <div class="tit">
                <div class="name">김스타님은</div>
                <div>고수익을 최우선으로 추구하는
                  <strong class="line">포스아거</strong>
                  와 유사한 성향을 가지고 있어요!
                </div>
              </div>
              <div class="summary">망설임없이 적극적으로 투자에 집중하는 공격투자형 상품을 준비해봤어요.</div>
              <div class="chart_wrap ">
                <div class="character type1"></div>
                <div class="chart">
                  <img src="@/assets/images/temp/chart_donut1.png" alt="" class="wp_100">
                </div>
              </div>
              <div class="chart_legend">
                <ul>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#3e61ba;"></i>
                      <strong>국내주식</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#3bae6c;"></i>
                      <strong>해외주식</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#91a5e9;"></i>
                      <strong>국내채권</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#b7ebcd;"></i>
                      <strong>해외채권</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#7040b1;"></i>
                      <strong>부동산</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#c79fe7;"></i>
                      <strong>ELS/DLS</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#c76ee6;"></i>
                      <strong>상품</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                </ul>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="in_chart_item">
              <div class="tit">
                <div class="name">김스타님은</div>
                <div>고위험을 감내하며 고수익을 추구하는
                  <strong class="line">루나키키</strong>
                  와 유사한 성향을 가지고 있어요!
                </div>
              </div>
              <div class="summary">자산관리와 투자관리 모두에 관심이 많은 적극투자형 상품을 준비해봤어요.</div>
              <div class="chart_wrap ">
                <div class="character type2"></div>
                <div class="chart">
                  <img src="@/assets/images/temp/chart_donut1.png" alt="" class="wp_100">
                </div>
              </div>
              <div class="chart_legend">
                <ul>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#3e61ba;"></i>
                      <strong>국내주식</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#3bae6c;"></i>
                      <strong>해외주식</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#91a5e9;"></i>
                      <strong>국내채권</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#b7ebcd;"></i>
                      <strong>해외채권</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#7040b1;"></i>
                      <strong>부동산</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#c79fe7;"></i>
                      <strong>ELS/DLS</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#c76ee6;"></i>
                      <strong>상품</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                </ul>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="in_chart_item">
              <div class="tit">
                <div class="name">김스타님은</div>
                <div>위험 자산과 안정 자산에 균형투자를 추구하는
                  <strong class="line">멜랑콜리</strong>
                  와 유사한 성향을 가지고 있어요!
                </div>
              </div>
              <div class="summary">안정한 수익 추구와 절약 소비에 관심이 많은 위험중립형 상품을 준비해봤어요.</div>
              <div class="chart_wrap ">
                <div class="character type3"></div>
                <div class="chart">
                  <img src="@/assets/images/temp/chart_donut1.png" alt="" class="wp_100">
                </div>
              </div>
              <div class="chart_legend">
                <ul>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#3e61ba;"></i>
                      <strong>국내주식</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#3bae6c;"></i>
                      <strong>해외주식</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#91a5e9;"></i>
                      <strong>국내채권</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#b7ebcd;"></i>
                      <strong>해외채권</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#7040b1;"></i>
                      <strong>부동산</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#c79fe7;"></i>
                      <strong>ELS/DLS</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#c76ee6;"></i>
                      <strong>상품</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                </ul>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="in_chart_item">
              <div class="tit">
                <div class="name">김스타님은</div>
                <div>저위험, 안정 투자를 선호하는
                  <strong class="line">심쿵비비</strong>
                  와 유사한 성향을 가지고 있어요!
                </div>
              </div>
              <div class="summary">미래 대비를 위한 연금, 보험, 세금 등에 관심이 많은 안정추구형 삼풍을 준비해봤어요.</div>
              <div class="chart_wrap ">
                <div class="character type4"></div>
                <div class="chart">
                  <img src="@/assets/images/temp/chart_donut1.png" alt="" class="wp_100">
                </div>
              </div>
              <div class="chart_legend">
                <ul>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#3e61ba;"></i>
                      <strong>국내주식</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#3bae6c;"></i>
                      <strong>해외주식</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#91a5e9;"></i>
                      <strong>국내채권</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#b7ebcd;"></i>
                      <strong>해외채권</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#7040b1;"></i>
                      <strong>부동산</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#c79fe7;"></i>
                      <strong>ELS/DLS</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#c76ee6;"></i>
                      <strong>상품</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                </ul>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="in_chart_item">
              <div class="tit">
                <div class="name">김스타님은</div>
                <div>수익보다는 위험요소가 가장 낮은 상품을 선호하는
                  <strong class="line">롤로라무</strong>
                  와 유사한 성향을 가지고 있어요!
                </div>
              </div>
              <div class="summary">관심 분야에 투자하여 자산을 키우는 안정형 상품을 준비해봤어요.</div>
              <div class="chart_wrap ">
                <div class="character type5"></div>
                <div class="chart">
                  <img src="@/assets/images/temp/chart_donut1.png" alt="" class="wp_100">
                </div>
              </div>
              <div class="chart_legend">
                <ul>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#3e61ba;"></i>
                      <strong>국내주식</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#3bae6c;"></i>
                      <strong>해외주식</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#91a5e9;"></i>
                      <strong>국내채권</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#b7ebcd;"></i>
                      <strong>해외채권</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#7040b1;"></i>
                      <strong>부동산</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#c79fe7;"></i>
                      <strong>ELS/DLS</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                  <li>
                    <div class="th">
                      <i class="dot" style="background-color:#c76ee6;"></i>
                      <strong>상품</strong>
                    </div>
                    <div class="td">67%</div>
                  </li>
                </ul>
              </div>
            </div>
          </swiper-slide>
        </kb-swiper>
        <hr class="hr_line mg_t24" aria-hidden="true">
        <div class="t_center mg_t32">
          <div>할까말까 망설여 질땐, <br>
            가볍게 가상투자 G0!</div>
          <div class=" mg_t16">
            <kb-button yellow class="w_200">가상투자 시작하기</kb-button>
          </div>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN07A001',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
