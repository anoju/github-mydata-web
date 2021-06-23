<template>
  <div class="section pd_bottom">
    <!-- 스텝 -->
    <h2 class="gd__h1 first">text</h2>
    <h2 class="gd__h2">color</h2>
    <div>기본:#333</div>
    <div class="fc_blue">fc_blue:#5177BC</div>
    <div class="fc_yellow">fc_yellow:#ffdc00</div>
    <div class="fc_red">fc_red:#F46600</div>
    <div class="fc_gray">fc_gray:#6f7a94</div>
    <div class="fc_purple">fc_purple:#7040b1</div>
    <div class="fc_yellow">fc_yellow:#ffdc00</div>
    <div class="fc_up">fc_up:#de092f (상승)</div>
    <div class="fc_down">fc_down:#2859d1 (하락)</div>
    <br>
    <div class="fc_000">fc_000:#000</div>
    <div class="fc_222">fc_222:#222</div>
    <div class="fc_444">fc_444:#444</div>
    <div class="fc_666">fc_666:#666</div>
    <div class="fc_888">fc_888:#888</div>
    <div class="fc_ddd">fc_ddd:#ddd</div>
    <div class="pd_10" style="background:#000">
      <div class="fc_white fc_fff">fc_white, fc_fff:#fff</div>
    </div>

    <h2 class="gd__h2">size</h2>
    <div class="fz_12">fz_12: 1.2rem(12px)</div>
    <div class="fz_13">fz_13: 1.3rem(13px)</div>
    <div class="fz_14">fz_14: 1.4rem(14px)</div>
    <div class="fz_15">fz_15: 1.5rem(15px)</div>
    <div class="fz_16">fz_16: 1.6rem(16px)</div>
    <div class="fz_17">fz_17: 1.7rem(17px)</div>
    <div class="fz_18">fz_18: 1.8rem(18px)</div>
    <div class="fz_19">fz_19: 1.9rem(19px)</div>
    <div class="fz_20">fz_20: 2.0rem(20px)</div>

    <h2 class="gd__h2">weight</h2>
    <div class="fw_bold">fw_bold</div>
    <div><strong class="fw_normal">fw_normal</strong></div>

    <h2 class="gd__h2">float</h2>
    <div class="f_left">f_left</div>
    <div class="f_right">f_right</div>
    <div class="clear">clear</div>

    <h2 class="gd__h2">text-align</h2>
    <div class="t_left">t_left</div>
    <div class="t_center">t_center</div>
    <div class="t_right">t_right</div>

    <h2 class="gd__h2">vertical-align</h2>
    <div class="tbl">
      <div
        class="td t_center va_top"
        style="height:100px"
      >
        va_top
      </div>
      <div
        class="td t_center va_mid"
        style="height:100px"
      >
        va_mid
      </div>
      <div
        class="td t_center va_btm"
        style="height:100px"
      >
        va_btm
      </div>
    </div>

    <h2 class="gd__h1">타이틀</h2>
    <div>
      <h3 class="gd__h2">h1 타이틀</h3>
      <kb-title-bar
        h1
        title="h1 타이틀"
      />
      <kb-title-bar
        h1
        tit-tag="h2"
        title="h2(다른) 태그 타이틀"
      />
      <kb-title-bar h2>
        <template slot="left">
          <h2 class="tit">
            h2 타이틀 제목
            <kb-button
              not
              class="tooltip_btn"
              v-tooltip="'views/guide/pop/tooltip.vue'"
              aria-label="팝업으로 상세내용 확인"
            >팝업으로 상세내용 확인</kb-button>
          </h2>
        </template>
      </kb-title-bar>
      <kb-title-bar
        h1
        title="h1 타이틀"
      >
        <kb-button
          line
          h32
        >
          버튼
        </kb-button>
      </kb-title-bar>

      <h3 class="gd__h2">h2 타이틀</h3>
      <kb-title-bar
        h2
        title="h2 타이틀"
      />
      <kb-title-bar
        h2
        tit-tag="h3"
        title="h3(다른) 태그 타이틀"
      />
      <kb-title-bar
        h2
        title="h2 타이틀"
      >
        <kb-button
          line
          h32
        >
          버튼
        </kb-button>
      </kb-title-bar>

      <h3 class="gd__h2">h3 타이틀</h3>
      <kb-title-bar
        h3
        title="h3 타이틀"
      />
      <kb-title-bar
        h3
        tit-tag="h4"
        title="h4(다른) 태그 타이틀"
      />
      <kb-title-bar
        h3
        title="h3 타이틀"
      >
        <div class="tbl_unit">(단위:원)</div>
      </kb-title-bar>

      <h3 class="gd__h2">h4 타이틀</h3>
      <kb-title-bar
        h4
        title="h4 타이틀"
      />
      <kb-title-bar
        h4
        tit-tag="h3"
        title="h3(다른) 태그 타이틀"
      />
      <kb-title-bar
        h4
        title="h4 타이틀"
      >
        <div class="tbl_unit">(단위:원)</div>
      </kb-title-bar>
    </div>

    <h2 class="gd__h1">중간 라인</h2>
    <hr class="hr_line" aria-hidden="true">
    <br>
    <hr class="hr_line ty2" aria-hidden="true">
    <br>
    <hr class="hr_line ty2 inset" aria-hidden="true">
    <br>
    <hr class="hr_line ty2 inset dashed" aria-hidden="true">

    <h2 class="gd__h1">텍스트 아이콘</h2>
    <h3 class="gd__h2">기본</h3>
    <div>
      <ico-txt>기본</ico-txt>
      <ico-txt blue>blue</ico-txt>
      <ico-txt yellow>yellow</ico-txt>
    </div>
    <h2 class="gd__h1">텍스트 리스트 txt_list</h2>
    <div>
      <h3 class="gd__h2">dot</h3>
      <div class="txt_list">
        <ul>
          <li class="dot">
            설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
          </li>
          <li class="dot">
            설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
          </li>
          <li class="dot">
            설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
          </li>
        </ul>
      </div>
      <h3 class="gd__h2">dash</h3>
      <div class="txt_list">
        <ul>
          <li class="dash">
            설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
          </li>
          <li class="dash">
            설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
          </li>
          <li class="dash">
            설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
          </li>
          <li class="dash">
            설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
          </li>
        </ul>
      </div>
      <h3 class="gd__h2">혼합</h3>
      <div class="txt_list">
        <ul>
          <li class="dot">
            설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
            <ul class="fc_gray">
              <li class="dash">
                설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
              </li>
              <li class="dash">
                설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
              </li>
              <li class="dash">
                설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
              </li>
              <li class="dash">
                설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
              </li>
            </ul>
          </li>
          <li class="dot fc_black">
            설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
          </li>
        </ul>
      </div>
      <h3 class="gd__h2">txt_list2</h3>
      <div class="txt_list2">
        <ul>
          <li class="dot">
            설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
          </li>
          <li class="dot">
            설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
          </li>
          <li class="dot">
            설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다. 설명하는 텍스트 입니다.
          </li>
        </ul>
      </div>
    </div>

    <h2 class="gd__h1">etc</h2>
    <div>
      <h3 class="gd__h2">info_txt_box</h3>
      <div class="info_txt_box">
        <ul class="list">
          <li>
            <div class="th">출금가능금액</div>
            <div class="td"><strong>1,200,000원</strong></div>
          </li>
          <li>
            <div class="th">이체금액</div>
            <div class="td"><strong>300,000,000원</strong></div>
          </li>
        </ul>
      </div>
      <br>
      <div class="info_txt_box type2">
        <ul class="list">
          <li>
            <div class="th">연동정보</div>
            <div class="td">
              <div><strong>계좌정보</strong></div>
              <div><strong>개인형 IRP정보</strong></div>
            </div>
          </li>
          <li>
            <div class="th">이체금액</div>
            <div class="td"><strong>2021/01/12 ~ 2022/01/11</strong></div>
          </li>
        </ul>
      </div>
      <h3 class="gd__h2">info_txt_list</h3>
      <div class="info_txt_list">
        <ul class="list">
          <li>
            <div class="th">출금가능금액</div>
            <div class="td fc_666"><strong>1,200,000원</strong></div>
          </li>
          <li>
            <div class="th">이체금액</div>
            <div class="td fc_666"><strong>300,000,000원</strong></div>
          </li>
        </ul>
      </div>
      <h3 class="gd__h2">circle_color_list</h3>
      <ul class="circle_color_list">
        <li>
          <div class="item">
            <div class="ico blue">
              <strong>유사그룹<br>비교</strong>
            </div>
            <div class="txt">나와 유사한 그룹간의 비교 데이터를 통해 현 위치를 활인 할 수 있어요.</div>
          </div>
        </li>
        <li>
          <div class="item">
            <div class="ico yellow">
              <strong>패턴분석</strong>
            </div>
            <div class="txt">주로 투자하는 종목군, 규모별, 투자/손익 비중, 추세 매매 스타일, 보유 기간 스타일을 분석해 드려요.</div>
          </div>
        </li>
        <li>
          <div class="item">
            <div class="ico purple">
              <strong>투자카드</strong>
            </div>
            <div class="txt">앞서 분석한 투자 습관과 투자 패턴을 종합 점수와 함께 확인 할 수 있어요.</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'txt',
};
</script>
