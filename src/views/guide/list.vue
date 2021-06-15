<template>
  <div class="section pd_bottom">
    <h2 class="gd__h1">아코디언</h2>
    <h3 class="gd__h2">아코디언 guide</h3>
    <div class="gray_box">
      <p class="tit">&lt;kb-foldings&gt;</p>
      <p><strong>not-toggle</strong>자동 닫힘 삭제</p>
      <p><strong>first-open</strong>첫번째 아코디언 오픈</p>
      <p><strong> class="ty2"</strong> 아코디언 끼리 묶여 있는 버전</p>
      <p><strong> class="ty3"</strong> 아코디언 여백 넓음</p>
      <p><strong>type1</strong>좌우 라인 삭제, +이미지로 변경</p>
      <p><strong>type1, class="ty2"</strong>좌우 라인 삭제, 좌우 여백 삭제, +이미지로 변경</p>
      <p><strong>disabled</strong>비활성화</p>

      <p class="tit">&lt;kb-folding&gt;</p>
      <p><strong>title=""</strong>아코디언 제목</p>
      <p><strong>&lt;template slot="title"&gt;</strong>제목 마크업 추가 방식</p>

      <p class="tit">&lt;kb-total-bar&gt;</p>
      <p><strong>:total</strong>전체 값 입력 (숫자)</p>
      <p><strong>마크업</strong>우측에 들어가는 내용</p>
    </div>
    <h3 class="gd__h2">accordion_list</h3>
    <div>
      <h4 class="gd__h3">기본</h4>
      <kb-foldings>
        <kb-folding
          title="폴딩제목 폴딩제목 폴딩제목 폴딩제목1"
        >
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠
        </kb-folding>
        <kb-folding
          title="폴딩제목 폴딩제목 폴딩제목 폴딩제목2"
        >
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠
        </kb-folding>
      </kb-foldings>
      <h4 class="gd__h3">not-toggle</h4>
      <kb-foldings
        not-toggle
      >
        <kb-folding
          title="폴딩제목 폴딩제목 폴딩제목 폴딩제목1"
        >
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠
        </kb-folding>
        <kb-folding
          title="폴딩제목 폴딩제목 폴딩제목 폴딩제목2"
        >
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠
        </kb-folding>
      </kb-foldings>
      <h4 class="gd__h3">이용안내,유의사항</h4>
      <div>
        <kb-foldings
          not
          class="accordion_dl"
        >
          <kb-folding title="이용안내">
            <ul class="txt_list">
              <li class="dot">공동인증서를 통해 본인확인을 하신 경우에는 인증서가 바로 등록됩니다.</li>
              <li class="dot">공동인증서를 통해 본인확인을 하신 경우에는 인증서가 바로 등록됩니다.</li>
              <li class="dot">공동인증서를 통해 본인확인을 하신 경우에는 인증서가 바로 등록됩니다.</li>
            </ul>
          </kb-folding>
        </kb-foldings>
        <br>
        <kb-foldings
          not
          class="accordion_dl"
        >
          <kb-folding title="유의사항">
            <div class="txt_list">
              <ul>
                <li class="dot">
                  설명텍스트 설명텍스트 설명텍스트
                </li>
                <li class="dot">
                  설명텍스트 설명텍스트 설명텍스트 설명텍스트 설명텍스트 설명텍스트 설명텍스트 설명텍스트 설명텍스트 설명텍스트 설명텍스트 설명텍스트
                </li>
              </ul>
            </div>
          </kb-folding>
        </kb-foldings>
      </div>
      <h4 class="gd__h3">ty2</h4>
      <kb-foldings class="ty2">
        <kb-folding>
          <template slot="title">
            <div class="tbl">
              <div class="th">
                <div class="title">
                  Global Unlimited(글로벌 언리미티드)체크카드체크카드체크카드체크카드체크카드
                </div>
                <div class="card">
                  1234-56**-****-1234
                </div>
              </div>
              <div class="td price">
                <strong>123,456,789</strong> 원
              </div>
            </div>
          </template>
          <ul class="list_box_table no_line fz_12">
            <li>
              <div class="th">
                연체 시작일
              </div>
              <div class="td">
                2020.03.10
              </div>
            </li>
            <li>
              <div class="th">
                연체 개월수
              </div>
              <div class="td">
                1개월
              </div>
            </li>
            <li>
              <div class="th">
                연체 원금
              </div>
              <div class="td">
                <strong>123,123,123</strong> 원
              </div>
            </li>
            <li>
              <div class="th">
                수수료(연회비)
              </div>
              <div class="td">
                <strong>123,123,123</strong> 원
              </div>
            </li>
            <li>
              <div class="th">
                해외이용수수료
              </div>
              <div class="td">
                <strong>123,123,123</strong> 원
              </div>
            </li>
            <li>
              <div class="th">
                연체료
              </div>
              <div class="td">
                <strong>123,123,123</strong> 원
              </div>
            </li>
            <li class="last">
              <div class="th">
                합계
              </div>
              <div class="td">
                <strong>123,123,123</strong> 원
              </div>
            </li>
          </ul>
        </kb-folding>
        <kb-folding>
          <template slot="title">
            <div class="tbl">
              <div class="th">
                <div class="title">
                  Global Unlimited(글로벌 언리미티드)체크카드체크카드체크카드체크카드체크카드
                </div>
                <div class="card">
                  1234-56**-****-1234
                </div>
              </div>
              <div class="td price">
                <strong>123,456,789</strong> 원
              </div>
            </div>
          </template>
          <ul class="list_box_table no_line fz_12">
            <li>
              <div class="th">
                연체 시작일
              </div>
              <div class="td">
                2020.03.10
              </div>
            </li>
            <li>
              <div class="th">
                연체 개월수
              </div>
              <div class="td">
                1개월
              </div>
            </li>
            <li>
              <div class="th">
                연체 원금
              </div>
              <div class="td">
                <strong>123,123,123</strong> 원
              </div>
            </li>
            <li>
              <div class="th">
                수수료(연회비)
              </div>
              <div class="td">
                <strong>123,123,123</strong> 원
              </div>
            </li>
            <li>
              <div class="th">
                해외이용수수료
              </div>
              <div class="td">
                <strong>123,123,123</strong> 원
              </div>
            </li>
            <li>
              <div class="th">
                연체료
              </div>
              <div class="td">
                <strong>123,123,123</strong> 원
              </div>
            </li>
            <li class="last">
              <div class="th">
                합계
              </div>
              <div class="td">
                <strong>123,123,123</strong> 원
              </div>
            </li>
          </ul>
        </kb-folding>
      </kb-foldings>
    </div>
    <h3 class="gd__h2">accordion_list_1</h3>
    <div>
      <h4 class="gd__h3">ty3</h4>
      <kb-foldings type1 not-toggle class="ty3">
        <kb-folding>
          <template slot="title">
            <div class="accodion_header">
              <p class="title"><i style="background:skyblue;"></i>현금<span>예금총액</span></p>
              <p class="money">300,000,000,000 원</p>
            </div>
          </template>
          <div class="accordion_box">
            <div class="box_header">
              <p class="sub_tit">
                <span>입출금</span>
                <span>1,000,000,000원</span>
              </p>
            </div>
            <ul class="bank_list">
              <li>
                <div class="info">
                  <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                  <i class="ico" style="background:skyblue"></i>
                  <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                  <p class="money">300,000,000원</p>
                </div>
              <!-- <p class="amount_money plus">+990,000</p> -->
              </li>
              <li>
                <div class="info">
                  <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                  <p class="money">300,000,000원</p>
                </div>
              <!-- <p class="amount_money plus">+990,000</p> -->
              </li>
              <li>
                <div class="info">
                  <i class="ico" style="background:skyblue"></i>
                  <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                  <p class="money">300,000,000원</p>
                </div>
              <!-- <p class="amount_money plus">+990,000</p> -->
              </li>
            </ul>
          </div>

          <div class="accordion_box">
            <div class="box_header">
              <p class="sub_tit">
                <span>비상금 <a href="#" class="link">직접입력</a></span>
                <span>1,000,000,000원</span>
              </p>
            </div>
            <ul class="bank_list">
              <li>
                <div class="info">
                  <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                  <p class="list_tit">직접입력 문구</p>
                  <p class="money">300,000,000원</p>
                </div>
              </li>
            </ul>
          </div>
        </kb-folding>

        <kb-folding>
          <template slot="title">
            <div class="accodion_header">
              <p class="title"><i style="background:skyblue;"></i>현금<span>예금총액</span></p>
              <p class="money">300,000,000,000 원</p>
              <p class="amount_money plus">454,000원 올랐어요! <span class="label">21.02%</span></p>
            </div>
          </template>
          <div class="accordion_box">
            <div class="box_header">
              <p class="sub_tit">
                <span>입출금</span>
                <span>1,000,000,000원</span>
              </p>
              <!-- 증감액
              plus : 상승
              minus : 하락
            -->
              <p class="amount_money plus">+990,000</p>
            </div>

            <ul class="bank_list">
              <li>
                <div class="info">
                  <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                  <i class="ico" style="background:skyblue"></i>
                  <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                  <p class="money">300,000,000원</p>
                </div>
                <!-- 증감액
                  plus : 상승
                  minus : 하락
               -->
                <p class="amount_money plus">+990,000</p>
              </li>
              <li>
                <div class="info">
                  <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                  <p class="money">300,000,000원</p>
                </div>
                <!-- 증감액
                  plus : 상승
                  minus : 하락
               -->
                <p class="amount_money plus">+990,000</p>
              </li>
              <li>
                <div class="info">
                  <i class="ico" style="background:skyblue"></i>
                  <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                  <p class="money">300,000,000원</p>
                </div>
                <!-- 증감액
                  plus : 상승
                  minus : 하락
               -->
                <p class="amount_money plus">+990,000</p>
              </li>
            </ul>
          </div>

          <div class="accordion_box">
            <div class="box_header">
              <p class="sub_tit">
                <span>비상금 <a href="#" class="link">직접입력</a></span>
                <span>1,000,000,000원</span>
              </p>
              <!-- 증감액
              plus : 상승
              minus : 하락
            -->
              <p class="amount_money minus">-990,000</p>
            </div>

            <ul class="bank_list">
              <li>
                <div class="info">
                  <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                  <p class="list_tit">직접입력 문구</p>
                  <p class="money">300,000,000원</p>
                </div>
                <!-- 증감액
                  plus : 상승
                  minus : 하락
               -->
                <p class="amount_money minus">-990,000</p>
              </li>
            </ul>
          </div>
        </kb-folding>

        <kb-folding>
          <template slot="title">
            <div class="accodion_header">
              <p class="title"><i style="background:skyblue;"></i>카드<span>누적사용 총액</span></p>
              <p class="money">300,000,000,000 원</p>
              <p class="amount_money plus">454,000원 올랐어요! <span class="label">21.02%</span></p>
            </div>
          </template>
          <div class="accordion_box type2">
            <div class="box_header">
              <p class="sub_tit">
                <span>입출금</span>
                <span>1,000,000,000원</span>
              </p>
              <div class="sub_info">
                <p class="due_date">1월 24일 결제예정</p>
              <!-- <p class="amount_money minus">-990,000</p> -->
              </div>
            </div>

            <ul class="bank_list">
              <li>
                <div class="info">
                  <i class="ico" style="background:skyblue"></i>
                  <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                  <p class="money">300,000,000원</p>
                </div>
                <!-- <p class="amount_money minus">-990,000</p> -->
                <p class="due_date t_right">1월 24일 결제예정</p>

                <!-- card 리스트 -->
                <div class="card_list">
                  <div class="scroll">
                    <div class="box">
                      <div>
                        <p class="due_date">1월 24일 결제예정</p>
                        <p class="money">300,000,000원</p>
                      </div>
                    <!-- <p class="amount_money minus">-990,000</p> -->
                    </div>
                    <div class="box">
                      <div>
                        <p class="due_date">1월 24일 결제예정</p>
                        <p class="money">300,000,000원</p>
                      </div>
                    <!-- <p class="amount_money minus">-990,000</p> -->
                    </div>
                    <div class="box">
                      <div>
                        <p class="due_date">1월 24일 결제예정</p>
                        <p class="money">300,000,000원</p>
                      </div>
                    <!-- <p class="amount_money minus">-990,000</p> -->
                    </div>
                  </div>
                </div>
              <!-- //card 리스트 -->
              </li>

              <li>
                <div class="info">
                  <i class="ico" style="background:skyblue"></i>
                  <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                  <p class="money">300,000,000원</p>
                </div>
                <p class="amount_money minus">-990,000</p>
                <p class="due_date t_right">1월 24일 결제예정</p>

                <!-- card 리스트 -->
                <div class="card_list">
                  <div class="scroll">
                    <div class="box">
                      <div>
                        <p class="due_date">1월 24일 결제예정</p>
                        <p class="money">300,000,000원</p>
                      </div>
                      <p class="amount_money minus">-990,000</p>
                    </div>
                    <div class="box">
                      <div>
                        <p class="due_date">1월 24일 결제예정</p>
                        <p class="money">300,000,000원</p>
                      </div>
                      <p class="amount_money minus">-990,000</p>
                    </div>
                    <div class="box">
                      <div>
                        <p class="due_date">1월 24일 결제예정</p>
                        <p class="money">300,000,000원</p>
                      </div>
                      <p class="amount_money minus">-990,000</p>
                    </div>
                  </div>
                </div>
              <!-- //card 리스트 -->
              </li>
            </ul>
          </div>
        </kb-folding>
      </kb-foldings>

      <h4 class="gd__h3">faq_list</h4>
      <kb-foldings
        type1
        class="faq_list"
      >
        <kb-folding>
          <template slot="title">
            <div class="qust_box">
              해외에서 ATM 이용시 현금이 인출되지 않습니다.
            </div>
          </template>
          <div class="qust_box anw">
            즉시 해외 해당 은행의 ATM기 관리 담당자에게 문의하여야하며, 무인점포일 경우 ATM 상의 연락처로 문의하시기 바랍니다.
          </div>
          <div class="qust_btm_box">
            <div>질문/답변 내용이 의문점 해소에 도움이 되셨습니까?</div>
            <div class="btn_box">
              <kb-button
                line
                round
                h28
              >
                도움되지 않음
              </kb-button>
              <kb-button
                line
                round
                h28
                yellow
              >
                도움됨
              </kb-button>
            </div>
          </div>
        </kb-folding>
        <kb-folding>
          <template slot="title">
            <div class="qust_box">
              해외에서 ATM 이용시 현금이 인출되지 않습니다.
            </div>
          </template>
          <div class="qust_box anw">
            즉시 해외 해당 은행의 ATM기 관리 담당자에게 문의하여야하며, 무인점포일 경우 ATM 상의 연락처로 문의하시기 바랍니다.
          </div>
          <div class="qust_btm_box">
            <div>질문/답변 내용이 의문점 해소에 도움이 되셨습니까?</div>
            <div class="btn_box">
              <kb-button
                line
                round
                h28
              >
                도움되지 않음
              </kb-button>
              <kb-button
                line
                round
                h28
                yellow
              >
                도움됨
              </kb-button>
            </div>
          </div>
        </kb-folding>
      </kb-foldings>
    </div>
    <h3 class="gd__h2">accordion_list_2</h3>
    <div>
      <kb-foldings type2>
        <kb-folding
          title="폴딩제목 폴딩제목 폴딩제목 폴딩제목1"
        >
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠
        </kb-folding>
        <kb-folding
          title="폴딩제목 폴딩제목 폴딩제목 폴딩제목2"
        >
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠<br>
          폴딩컨텐츠
        </kb-folding>
      </kb-foldings>
    </div>
    <h2 class="gd__h1">리스트</h2>
    <h3 class="gd__h2">no_list_txt(데이터 없음)</h3>
    <div>
      <div class="no_list_txt">
        <strong class="tit">등록된 내용이 없습니다.</strong>
      </div>

      <div class="no_list_txt icon">
        <strong class="tit">등록된 내용이 없습니다.</strong>
      </div>

      <div class="no_list_txt">
        <strong class="tit">KB증권 계좌가 없습니다.</strong>
        <div class="txt">계좌개설 후 이체는 물론 상품가입, 매매까지 이용해 보세요.</div>
      </div>

      <div class="no_list_txt face">
        <div class="tit">내일 다시오면 알려드릴게요~</div>
      </div>
    </div>
    <h3 class="gd__h2">gray_box_list + ico_info_list</h3>
    <div>
      <ul class="gray_box_list">
        <li>
          <div class="gray_box_item">
            <div class="head">
              <div class="flex_wrap space_between">
                <div>퇴직연금</div>
                <div>1,000,000,000원</div>
              </div>
            </div>
            <div class="cont">
              <div class="ico_info_item">
                <div class="info">
                  <div class="left">
                    <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                    <i class="ico" style="background:skyblue"></i>
                    <p class="tit">KB able Plus 통장 KB able Plus 통장</p>
                  </div>
                  <div class="right">
                    <p class="money">300,000,000원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="gray_box_item">
            <div class="head">
              <div class="flex_wrap space_between">
                <div>퇴직연금</div>
                <div>1,000,000,000원</div>
              </div>
            </div>
            <div class="cont">
              <ul class="ico_info_list">
                <li>
                  <div class="ico_info_item">
                    <div class="info">
                      <div class="left">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="tit">KB able Plus 통장 KB able Plus 통장</p>
                      </div>
                      <div class="right">
                        <p class="money">300,000,000원</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="ico_info_item">
                    <div class="info">
                      <div class="left">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="tit">KB able Plus 통장 KB able Plus 통장</p>
                      </div>
                      <div class="right">
                        <p class="money">300,000,000원</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'list',
  data() {
    return {
      active: false,
    };
  },
};
</script>
