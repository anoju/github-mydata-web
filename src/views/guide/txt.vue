<template>
  <div class="section pd_bottom">
    <!-- 스텝 -->
    <h2 class="gd__h1 first">text</h2>
    <h2 class="gd__h2">color</h2>
    <div>기본:#333</div>
    <div class="fc_blue">fc_blue:#5177BC</div>
    <div class="fc_yellow">fc_yellow:#ffdc00</div>
    <div class="fc_red">fc_red:#F46600</div>
    <div class="fc_gray">fc_gray:#666</div>
    <div class="fc_gray2">fc_gray2:#60584c</div>
    <div class="fc_gray3">fc_gray2:#52555c</div>
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
    <hr class="hr_line ty2" aria-hidden="true">
    <hr class="hr_line ty2 inset" aria-hidden="true">
    <hr class="hr_line ty2 inset dashed" aria-hidden="true">

    <h2 class="gd__h1">텍스트 아이콘</h2>
    <h3 class="gd__h2">기본</h3>
    <div>
      <ico-txt class="red">red</ico-txt>
      <ico-txt class="blue">blue1</ico-txt>
      <ico-txt class="blue2">blue2</ico-txt>
      <ico-txt class="yellow">yellow</ico-txt>
      <ico-txt class="green">green</ico-txt>
      <ico-txt class="skyblue">skyblue</ico-txt>
      <ico-txt class="purple">purple</ico-txt><br>
      <ico-txt class="green5 fc_green3">TIP</ico-txt>
    </div>
    <h3 class="gd__h2">카테고리별 flag 컬러</h3>
    <kb-table-scroll class="flag">
      <kb-table
        caption="카테고리별 flag 컬러0"
        :col-width="['100px','100px','100px','100px','100px']"
      >
        <thead>
          <tr>
            <th scope="col">blue2</th>
            <th scope="col">green</th>
            <th scope="col">yellow</th>
            <th scope="col">blue</th>
            <th scope="col">red</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ico-txt class="blue2">금융</ico-txt>
              <br>
              <ico-txt class="blue2">보험</ico-txt>
            </td>
            <td>
              <ico-txt class="green">스포츠</ico-txt>
              <br>
              <ico-txt class="green">영화/공연</ico-txt>
              <br>
              <ico-txt class="green">뷰티</ico-txt>
              <br>
              <ico-txt class="green">웰빙</ico-txt>
              <br>
              <ico-txt class="green">레져</ico-txt>
              <br>
              <ico-txt class="green">항공</ico-txt>
              <br>
              <ico-txt class="green">여행</ico-txt>
              <br>
              <ico-txt class="green">골프</ico-txt>
              <br>
              <ico-txt class="green">도서</ico-txt>
              <br>
              <ico-txt class="green">놀이공원</ico-txt>
            </td>
            <td>
              <ico-txt class="yellow">커피</ico-txt>
              <br>
              <ico-txt class="yellow">외식</ico-txt>
              <br>
              <ico-txt class="yellow">베이커리</ico-txt>
            </td>
            <td>
              <ico-txt class="blue">주유</ico-txt>
              <br>
              <ico-txt class="blue">쇼핑</ico-txt>
              <br>
              <ico-txt class="blue">교육</ico-txt>
              <br>
              <ico-txt class="blue">통신</ico-txt>
              <br>
              <ico-txt class="blue">교통</ico-txt>
              <br>
              <ico-txt class="blue">의료</ico-txt>
              <br>
              <ico-txt class="blue">전가맹점</ico-txt>
              <br>
              <ico-txt class="blue">해외가맹점</ico-txt>
              <br>
              <ico-txt class="blue">비즈니스</ico-txt>
            </td>
            <td>
              <ico-txt class="red">포인트</ico-txt>
              <br>
              <ico-txt class="red">무이자할부</ico-txt>
              <br>
              <ico-txt class="red">프리미엄</ico-txt>
              <br>
              <ico-txt class="red">선포인트/특별할부</ico-txt>
              <br>
              <ico-txt class="red">마일리지</ico-txt>
            </td>
          </tr>
        </tbody>
      </kb-table>
    </kb-table-scroll>
    <h4 class="gd__h3">그외 혜택 표기</h4>
    <ico-txt class="red">추천</ico-txt>
    <ico-txt class="green">이벤트</ico-txt>
    <ico-txt class="blue">인기</ico-txt>
    <ico-txt class="blue2">NEW</ico-txt>
    <ico-txt
      class="more"
      role="img"
      aria-label="그외 혜택들"
    />

    <h4 class="gd__h3">회원등급</h4>
    <ico-txt class="blue2">노블레스</ico-txt>
    <ico-txt class="green">슈퍼로얄</ico-txt>
    <ico-txt class="yellow">로얄</ico-txt>
    <ico-txt class="blue">프라임</ico-txt>

    <h4 class="gd__h3">카드구분</h4>
    <ico-txt class="blue">신용</ico-txt>
    <ico-txt class="green">체크</ico-txt>
    <ico-txt class="red">신용/체크 통합</ico-txt>
    <ico-txt class="blue">대환대출</ico-txt>
    <ico-txt class="green">장기카드대출</ico-txt>

    <h4 class="gd__h3">성별, 나이</h4>
    <ico-txt class="pink">여성</ico-txt>
    <ico-txt class="gray2">남성</ico-txt>
    <br>
    <ico-txt class="green2">20대</ico-txt>

    <h4 class="gd__h3">완료,미완료</h4>
    <ico-txt class="blue">동의</ico-txt>
    <ico-txt class="red">동의안함</ico-txt>
    <br>
    <ico-txt class="green">진행중</ico-txt>
    <ico-txt class="red">종료</ico-txt>
    <br>
    <ico-txt class="green">신청중</ico-txt>
    <ico-txt class="blue">처리완료</ico-txt>
    <ico-txt class="red">취소(INT)</ico-txt>
    <ico-txt class="red">발급불가</ico-txt>
    <br>
    <ico-txt class="red">접수</ico-txt>
    <ico-txt class="green">신청중</ico-txt>
    <ico-txt class="green">심사중</ico-txt>
    <ico-txt class="green">심사완료</ico-txt>
    <ico-txt class="blue">발급완료</ico-txt>
    <ico-txt class="blue">배송완료</ico-txt>
    <ico-txt class="red">발급불가</ico-txt>
    <ico-txt class="red">심사전 취소</ico-txt>
    <br>
    <ico-txt class="green">정상</ico-txt>
    <ico-txt class="blue">완납</ico-txt>
    <ico-txt class="red">철회</ico-txt>
    <br>
    <ico-txt class="red">미충족</ico-txt>
    <ico-txt class="blue">충족</ico-txt>
    <br>
    <ico-txt class="red">탈회방지미등록</ico-txt>
    <ico-txt class="blue">탈회방지등록</ico-txt>
    <br>
    <ico-txt class="blue">철회완료</ico-txt>
    <ico-txt class="red">철회불가</ico-txt>
    <br>
    <ico-txt class="blue">이용중</ico-txt>

    <h4 class="gd__h3">etc</h4>
    <ico-txt class="purple">U+</ico-txt>
    <br>
    <ico-txt class="angle blue">소득공제</ico-txt>
    <ico-txt class="red">분실</ico-txt>
    <ico-txt class="blue">대표카드</ico-txt>
    <br>
    <ico-txt class="line red">만료</ico-txt>

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
    </div>

    <h2 class="gd__h1">info_txt_box</h2>
    <div>
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
    </div>
  </div>
</template>
<script>
export default {
  name: 'txt',
};
</script>
