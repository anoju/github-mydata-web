<template>
  <div class="section">
    <!-- 보유상품 없을때 -->
    <div v-if="false" class="no_list_txt icon vh_70">
      <strong class="tit">보유한 상품이 없습니다.</strong>
    </div>
    <!-- //보유상품 없을때 -->

    <kb-tabs
      v-else
      type3
      v-model="tabIdx"
    >
      <!-- 유형별 -->
      <kb-tab title="유형별">
        <kb-foldings
          type1
          not-toggle
          class="ty3"
        >
          <!-- 주식 -->
          <kb-folding>
            <template slot="title">
              <div class="accodion_header">
                <p class="title">
                  주식<strong class="fc_blue mg_l4">30</strong>
                </p>
                <p class="money"><sub>평가금액</sub>300,000,000,000원</p>
                <p class="amount_money">
                  454,000원 늘었어요!
                  <ico-txt large red>+21.02%</ico-txt>
                </p>

                <div class="ico_scl_wrap">
                  <div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <kb-foldings
              type1
              not-toggle
              class="ty3 in_box_type">
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      국내 주식<strong class="fc_blue mg_l4">30</strong>
                    </p>
                    <p class="money">300,000,000,000원</p>
                    <p class="amount_money">
                      <span class="fc_up">+999,999,000(1.23%)</span>
                    </p>
                  </div>
                </template>
                <div class="financial_bank_list small_ty">
                  <ul>
                    <li>
                      <!-- 종목당 증권사가 여러개일때 -->
                      <!-- 합계 -->
                      <div class="bank_info box_ty">
                        <div class="name">
                          <p>삼성전자 <sub class="sub">100주</sub></p>
                        </div>
                        <div class="money">
                          <div>246,000,000원</div>
                          <div class="sub_text"><span class="fc_up">+1,880,000(1.23%)</span></div>
                        </div>
                      </div>
                      <!-- //합계 -->
                      <div class="bank_info">
                        <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                        <div class="name">
                          <p>삼성전자 <sub class="sub">50주</sub></p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                        </div>
                      </div>
                      <div class="bank_info">
                        <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                        <div class="name">
                          <p>삼성전자 <sub class="sub">50주</sub></p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                        </div>
                      </div>
                      <!-- //종목당 증권사가 여러개일때 -->
                    </li>
                    <li>
                      <div class="bank_info">
                        <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                        <div class="name">
                          <p>데브시스터즈<sub class="sub">50주</sub></p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="bank_info">
                        <i class="ico"><span style="background: skyblue;"></span></i>
                        <div class="name">
                          <p>NC소프트NC소프트NC소프트NC소프트NC소프트NC소프트<sub class="sub">50주</sub></p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      해외 주식<strong class="fc_blue mg_l4">30</strong>
                    </p>
                    <p class="money">300,000,000,000원</p>
                    <p class="amount_money">
                      <span class="fc_down">-999,999,000(1.23%)</span>
                    </p>
                  </div>
                </template>
                <div class="financial_bank_list small_ty">
                  <ul>
                    <li>
                      <!-- 종목당 증권사가 여러개일때 -->
                      <!-- 합계 -->
                      <div class="bank_info box_ty">
                        <div class="name">
                          <p>테슬라 <sub class="sub">100주</sub></p>
                        </div>
                        <div class="money">
                          <div>246,000,000원</div>
                          <div class="sub_text"><span class="fc_up">+1,880,000(1.23%)</span></div>
                        </div>
                      </div>
                      <!-- //합계 -->
                      <div class="bank_info">
                        <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                        <div class="name">
                          <p>테슬라 <sub class="sub">50주</sub></p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                        </div>
                      </div>
                      <div class="bank_info">
                        <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                        <div class="name">
                          <p>테슬라 <sub class="sub">50주</sub></p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                        </div>
                      </div>
                      <!-- //종목당 증권사가 여러개일때 -->
                    </li>
                    <li>
                      <div class="bank_info">
                        <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                        <div class="name">
                          <p>아마존<sub class="sub">50주</sub></p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="bank_info">
                        <i class="ico"><span style="background: skyblue;"></span></i>
                        <div class="name">
                          <p>엔비디아엔비디아엔비디아엔비디아엔비디아<sub class="sub">50주</sub></p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
            </kb-foldings>
          </kb-folding>
          <!-- //주식 -->

          <!-- 펀드 -->
          <kb-folding>
            <template slot="title">
              <div class="accodion_header">
                <p class="title">
                  펀드<strong class="fc_blue mg_l4">30</strong>
                </p>
                <p class="money"><sub>평가금액</sub>300,000,000,000원</p>
                <p class="amount_money">
                  454,000원 내렸어요!
                  <ico-txt large blue>-21.02%</ico-txt>
                </p>

                <div class="ico_scl_wrap">
                  <div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <kb-foldings
              type1
              not-toggle
              class="ty3 in_box_type">
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      국내 펀드<strong class="fc_blue mg_l4">30</strong>
                    </p>
                    <p class="money">300,000,000,000원</p>
                    <p class="amount_money">
                      <span class="fc_up">+999,999,000(1.23%)</span>
                    </p>
                  </div>
                </template>
                <div class="financial_bank_list small_ty">
                  <ul>
                    <li>
                      <div class="bank_info">
                        <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                        <div class="name">
                          <p>펀드이름펀드이름펀드이름펀드이름</p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="bank_info">
                        <i class="ico"><span style="background: skyblue;"></span></i>
                        <div class="name">
                          <p>펀드이름펀드이름펀드이름펀드이름</p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      해외 펀드<strong class="fc_blue mg_l4">30</strong>
                    </p>
                    <p class="money">300,000,000,000원</p>
                    <p class="amount_money">
                      <span class="fc_down">-999,999,000(1.23%)</span>
                    </p>
                  </div>
                </template>
                <div class="financial_bank_list small_ty">
                  <ul>
                    <li>
                      <div class="bank_info">
                        <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                        <div class="name">
                          <p>펀드이름펀드이름펀드이름펀드이름펀드이름</p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="bank_info">
                        <i class="ico"><span style="background: skyblue;"></span></i>
                        <div class="name">
                          <p>펀드이름펀드이름펀드이름펀드이름펀드이름</p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
            </kb-foldings>
          </kb-folding>
          <!-- //펀드 -->

          <!-- 채권 -->
          <kb-folding>
            <template slot="title">
              <div class="accodion_header">
                <p class="title">
                  채권<strong class="fc_blue mg_l4">30</strong>
                </p>
                <p class="money"><sub>평가금액</sub>300,000,000,000원</p>
                <p class="amount_money">
                  454,000원 늘었어요!
                  <ico-txt large red>+21.02%</ico-txt>
                </p>

                <div class="ico_scl_wrap">
                  <div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <kb-foldings
              type1
              not-toggle
              class="ty3 in_box_type">
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      국내 채권<strong class="fc_blue mg_l4">30</strong>
                    </p>
                    <p class="money">300,000,000,000원</p>
                    <p class="amount_money">
                      <span class="fc_up">+999,999,000(1.23%)</span>
                    </p>
                  </div>
                </template>
                <div class="financial_bank_list small_ty">
                  <ul>
                    <li>
                      <div class="bank_info">
                        <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                        <div class="name">
                          <p>채권이름채권이름채권이름채권이름</p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="bank_info">
                        <i class="ico"><span style="background: skyblue;"></span></i>
                        <div class="name">
                          <p>채권이름채권이름채권이름채권이름</p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      해외 채권<strong class="fc_blue mg_l4">30</strong>
                    </p>
                    <p class="money">300,000,000,000원</p>
                    <p class="amount_money">
                      <span class="fc_down">-999,999,000(1.23%)</span>
                    </p>
                  </div>
                </template>
                <div class="financial_bank_list small_ty">
                  <ul>
                    <li>
                      <div class="bank_info">
                        <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                        <div class="name">
                          <p>채권이름채권이름채권이름채권이름채권이름</p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="bank_info">
                        <i class="ico"><span style="background: skyblue;"></span></i>
                        <div class="name">
                          <p>채권이름채권이름채권이름채권이름채권이름</p>
                        </div>
                        <div class="money">
                          <div>123,000,000원</div>
                          <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
            </kb-foldings>
          </kb-folding>
          <!-- //채권 -->

          <!-- ELS/DLS -->
          <kb-folding>
            <template slot="title">
              <div class="accodion_header">
                <p class="title">
                  ELS/DLS<strong class="fc_blue mg_l4">30</strong>
                </p>
                <p class="money"><sub>평가금액</sub>300,000,000,000원</p>
                <p class="amount_money">
                  454,000원 내렸어요!
                  <ico-txt large blue>-21.02%</ico-txt>
                </p>

                <div class="ico_scl_wrap">
                  <div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <div class="financial_bank_list small_ty box_ty">
              <ul>
                <li>
                  <div class="bank_info">
                    <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                    <div class="name">
                      <p>ELS/DLS이름ELS/DLS이름ELS/DLS이름ELS/DLS이름</p>
                    </div>
                    <div class="money">
                      <div>123,000,000원</div>
                      <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="bank_info">
                    <i class="ico"><span style="background: skyblue;"></span></i>
                    <div class="name">
                      <p>ELS/DLS이름ELS/DLS이름ELS/DLS이름ELS/DLS이름</p>
                    </div>
                    <div class="money">
                      <div>123,000,000원</div>
                      <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </kb-folding>
          <!-- ELS/DLS -->

          <!-- 선물/옵션 -->
          <kb-folding>
            <template slot="title">
              <div class="accodion_header">
                <p class="title">
                  선물/옵션<strong class="fc_blue mg_l4">30</strong>
                </p>
                <p class="money"><sub>평가금액</sub>300,000,000,000원</p>
                <p class="amount_money">
                  454,000원 늘었어요!
                  <ico-txt large red>+21.02%</ico-txt>
                </p>

                <div class="ico_scl_wrap">
                  <div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <div class="financial_bank_list small_ty box_ty">
              <ul>
                <li>
                  <div class="bank_info">
                    <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                    <div class="name">
                      <p>선물/옵션이름선물/옵션이름선물/옵션이름선물/옵션이름</p>
                    </div>
                    <div class="money">
                      <div>123,000,000원</div>
                      <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="bank_info">
                    <i class="ico"><span style="background: skyblue;"></span></i>
                    <div class="name">
                      <p>선물/옵션이름선물/옵션이름선물/옵션이름선물/옵션이름</p>
                    </div>
                    <div class="money">
                      <div>123,000,000원</div>
                      <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </kb-folding>
          <!-- //선물/옵션 -->

          <!-- 기타 -->
          <kb-folding>
            <template slot="title">
              <div class="accodion_header">
                <p class="title">
                  기타<strong class="fc_blue mg_l4">30</strong>
                </p>
                <p class="money"><sub>평가금액</sub>300,000,000,000원</p>
                <p class="amount_money">
                  454,000원 내렸어요!
                  <ico-txt large blue>-21.02%</ico-txt>
                </p>

                <div class="ico_scl_wrap">
                  <div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <i class="ico" style="background:skyblue"></i>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <div class="financial_bank_list small_ty box_ty">
              <ul>
                <li>
                  <div class="bank_info">
                    <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                    <div class="name">
                      <p>기타이름기타이름기타이름기타이름</p>
                    </div>
                    <div class="money">
                      <div>123,000,000원</div>
                      <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="bank_info">
                    <i class="ico"><span style="background: skyblue;"></span></i>
                    <div class="name">
                      <p>기타이름기타이름기타이름기타이름</p>
                    </div>
                    <div class="money">
                      <div>123,000,000원</div>
                      <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </kb-folding>
          <!-- //기타 -->
        </kb-foldings>
      </kb-tab>
      <!-- //유형별 -->

      <!-- 금융사별 -->
      <kb-tab title="금융사별">
        <kb-foldings
          type1
          not-toggle
          class="ty3"
        >
          <kb-folding>
            <template slot="title">
              <div class="accodion_header">
                <p class="title">
                  <i class="ico" style="background:skyblue"></i>
                  KB증권<strong class="fc_blue mg_l4">30</strong>
                </p>
                <p class="money"><sub>평가금액</sub>300,000,000,000원</p>
                <p class="amount_money">
                  454,000원 늘었어요!
                  <ico-txt large red>+21.02%</ico-txt>
                </p>

                <div class="ico_scl_wrap">
                  <div>
                    <div class="ico_scl_item">
                      <span class="ico_scl_name">주식</span>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <span class="ico_scl_name">펀드</span>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <span class="ico_scl_name">채권</span>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <span class="ico_scl_name">ELS/DLS</span>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <span class="ico_scl_name">선물/옵션</span>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <span class="ico_scl_name">기타</span>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <kb-foldings
              type1
              not-toggle
              class="ty3 in_line_type">
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      종합위탁<strong class="fc_blue mg_l4">30</strong>
                    </p>
                    <p class="money">
                      <sub class="mg_ra">123-456-789 01</sub>
                      300,000,000,000원
                    </p>
                    <p class="amount_money">
                      <span class="fc_up">+999,999,000(1.23%)</span>
                    </p>
                  </div>
                </template>
                <kb-foldings
                  type1
                  not-toggle
                  class="ty3 in_box_type">
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          국내 주식<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_up">+999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>삼성전자 <sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>데브시스터즈<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <div class="name">
                              <p>NC소프트NC소프트NC소프트NC소프트NC소프트NC소프트<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          해외 주식<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_down">-999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>테슬라 <sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <div class="name">
                              <p>아마존<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <div class="name">
                              <p>엔비디아엔비디아엔비디아엔비디아엔비디아<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          국내 펀드<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_up">+999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>펀드이름펀드이름펀드이름펀드이름펀드이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          해외 펀드<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_down">-999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>펀드이름펀드이름펀드이름펀드이름펀드이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          국내 채권<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_up">+999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>채권이름채권이름채권이름채권이름채권이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          해외 채권<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_down">-999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>채권이름채권이름채권이름채권이름채권이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          ELS/DLS<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_down">-999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>ELS/DLS이름ELS/DLS이름ELS/DLS이름ELS/DLS이름ELS/DLS이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          선물/옵션<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_up">+999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>선물/옵션이름선물/옵션이름선물/옵션이름선물/옵션이름선물/옵션이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          기타<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_up">+999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>기타이름기타이름기타이름기타이름기타이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                </kb-foldings>
              </kb-folding>
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      종합위탁<strong class="fc_blue mg_l4">30</strong>
                    </p>
                    <p class="money">
                      <sub class="mg_ra">123-456-789 01</sub>
                      300,000,000,000원
                    </p>
                    <p class="amount_money">
                      <span class="fc_up">+999,999,000(1.23%)</span>
                    </p>
                  </div>
                </template>
                <kb-foldings
                  type1
                  not-toggle
                  class="ty3 in_box_type">
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          국내 주식<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_up">+999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>삼성전자 <sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>데브시스터즈<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <i class="ico"><span style="background: skyblue;"></span></i>
                            <div class="name">
                              <p>NC소프트NC소프트NC소프트NC소프트NC소프트NC소프트<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          해외 주식<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_down">-999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>테슬라 <sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>아마존<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <div class="name">
                              <p>엔비디아엔비디아엔비디아엔비디아엔비디아<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                </kb-foldings>
              </kb-folding>
            </kb-foldings>
          </kb-folding>
          <kb-folding>
            <template slot="title">
              <div class="accodion_header">
                <p class="title">
                  <i class="ico" style="background:skyblue"></i>
                  NH투자증권<strong class="fc_blue mg_l4">30</strong>
                </p>
                <p class="money"><sub>평가금액</sub>300,000,000,000원</p>
                <p class="amount_money">
                  454,000원 늘었어요!
                  <ico-txt large red>+21.02%</ico-txt>
                </p>

                <div class="ico_scl_wrap">
                  <div>
                    <div class="ico_scl_item">
                      <span class="ico_scl_name">주식</span>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <span class="ico_scl_name">펀드</span>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <span class="ico_scl_name">채권</span>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <span class="ico_scl_name">ELS/DLS</span>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <span class="ico_scl_name">선물/옵션</span>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                    <div class="ico_scl_item">
                      <span class="ico_scl_name">기타</span>
                      <span class="ico_scl_txt">99+</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <kb-foldings
              type1
              not-toggle
              class="ty3 in_line_type">
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      종합위탁<strong class="fc_blue mg_l4">30</strong>
                    </p>
                    <p class="money">
                      <sub class="mg_ra">123-456-789 01</sub>
                      300,000,000,000원
                    </p>
                    <p class="amount_money">
                      <span class="fc_up">+999,999,000(1.23%)</span>
                    </p>
                  </div>
                </template>
                <kb-foldings
                  type1
                  not-toggle
                  class="ty3 in_box_type">
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          국내 주식<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_up">+999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>삼성전자 <sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>데브시스터즈<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <div class="name">
                              <p>NC소프트NC소프트NC소프트NC소프트NC소프트NC소프트<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          해외 주식<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_down">-999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>테슬라 <sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>아마존<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <div class="name">
                              <p>엔비디아엔비디아엔비디아엔비디아엔비디아<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          국내 펀드<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_up">+999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>펀드이름펀드이름펀드이름펀드이름펀드이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          해외 펀드<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_down">-999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>펀드이름펀드이름펀드이름펀드이름펀드이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          국내 채권<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_up">+999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>채권이름채권이름채권이름채권이름채권이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          해외 채권<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_down">-999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>채권이름채권이름채권이름채권이름채권이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          ELS/DLS<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_down">-999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>ELS/DLS이름ELS/DLS이름ELS/DLS이름ELS/DLS이름ELS/DLS이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          선물/옵션<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_up">+999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>선물/옵션이름선물/옵션이름선물/옵션이름선물/옵션이름선물/옵션이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          기타<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_up">+999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>기타이름기타이름기타이름기타이름기타이름</p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                </kb-foldings>
              </kb-folding>
              <kb-folding>
                <template slot="title">
                  <div class="accodion_header">
                    <p class="title">
                      종합위탁<strong class="fc_blue mg_l4">30</strong>
                    </p>
                    <p class="money">
                      <sub class="mg_ra">123-456-789 01</sub>
                      300,000,000,000원
                    </p>
                    <p class="amount_money">
                      <span class="fc_up">+999,999,000(1.23%)</span>
                    </p>
                  </div>
                </template>
                <kb-foldings
                  type1
                  not-toggle
                  class="ty3 in_box_type">
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          국내 주식<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_up">+999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>삼성전자 <sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>데브시스터즈<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <div class="name">
                              <p>NC소프트NC소프트NC소프트NC소프트NC소프트NC소프트<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                  <kb-folding>
                    <template slot="title">
                      <div class="accodion_header">
                        <p class="title">
                          해외 주식<strong class="fc_blue mg_l4">30</strong>
                        </p>
                        <p class="money">300,000,000,000원</p>
                        <p class="amount_money">
                          <span class="fc_down">-999,999,000(1.23%)</span>
                        </p>
                      </div>
                    </template>
                    <div class="financial_bank_list small_ty">
                      <ul>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>테슬라 <sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <i class="ico_bookmark"></i><!-- 로고가 없어지고 즐겨찾기 항목에서만 노출 -->
                            <div class="name">
                              <p>아마존<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_down">-990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="bank_info">
                            <div class="name">
                              <p>엔비디아엔비디아엔비디아엔비디아엔비디아<sub class="sub">50주</sub></p>
                            </div>
                            <div class="money">
                              <div>123,000,000원</div>
                              <div class="sub_text"><span class="fc_up">+990,000(1.23%)</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </kb-folding>
                </kb-foldings>
              </kb-folding>
            </kb-foldings>
          </kb-folding>
        </kb-foldings>
      </kb-tab>
      <!-- //금융사별 -->
    </kb-tabs>
  </div>
</template>
<script>
export default {
  name: 'IN01A003',
  data() {
    return {
      tabIdx: 1,
    };
  },
  methods: {
  },
};
</script>
