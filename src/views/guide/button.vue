<template>
  <div class="section pd_bottom">
    <h2 class="gd__h1">버튼 : &lt; kb-button &gt;</h2>
    <h3 class="gd__h2">버튼 설정 guide</h3>
    <div class="gray_box">
      <p><strong>size=""</strong>사이즈(기본:h48, h32, h28)</p>
      <p><strong>h32, h28</strong>사이즈</p>
      <p><strong>color=""</strong>컬러(yellow, blue, red, green, purple)</p>
      <p><strong>yellow, blue, red, green, purple</strong>컬러</p>
      <p><strong>link</strong>텍스트 버튼</p>
      <p><strong>disabled</strong>비활성화</p>
      <p><strong>line</strong>라인</p>
      <p><strong>round</strong>동근 버튼</p>
      <p><strong>shadow</strong>그림자</p>
      <p><strong>title</strong>버튼 title 속성</p>
      <p><strong>to="#"</strong>router-link(링크이동 O), aTag속성 안써도 됨</p>
      <p><strong>aTag</strong>버튼을 a 태그으로 변환</p>
      <p><strong>href="#"</strong>a 타입으로 변환후 href값(링크이동 X)</p>
    </div>

    <h3 class="gd__h2">크기(세로) (size="미정")</h3>
    <kb-button
      yellow
      h32
    >
      button
    </kb-button>
    <kb-button
      h32
      line
    >
      button h32
    </kb-button>
    <kb-button
      h28
      yellow
    >
      button h28
    </kb-button>

    <h3 class="gd__h2">컬러 (color="yellow, blue, gray, white")</h3>
    <kb-button>
      button 기본
    </kb-button>
    <br>
    <kb-button
      yellow
    >
      button yellow
    </kb-button>
    <kb-button
      blue
    >
      button blue
    </kb-button>
    <kb-button
      red
    >
      button red
    </kb-button>
    <kb-button
      green
    >
      button green
    </kb-button>
    <kb-button
      purple
    >
      button purple
    </kb-button>
    <br>

    <h4 class="gd__h3">shadow</h4>
    <kb-button
      shadow
      yellow
    >
      button shadow
    </kb-button>
    <h4 class="gd__h3">라운드 (round)</h4>
    <kb-button
      round
      yellow
    >
      button blue
    </kb-button>
    <kb-button
      round
      line
    >
      button gray
    </kb-button>
    <h4 class="gd__h3">컬러 비활성화 (disabled)</h4>
    <kb-button
      yellow
      disabled
    >
      button disabled
    </kb-button>
    <kb-button
      blue
      disabled
    >
      button disabled
    </kb-button>
    <h3 class="gd__h2">라인 (line)</h3>
    <kb-button
      line
    >
      button line
    </kb-button>
    <kb-button
      line
      yellow
    >
      button line yellow
    </kb-button>
    <kb-button
      line
      blue
    >
      button line blue
    </kb-button>
    <kb-button
      line
      red
    >
      button red
    </kb-button>
    <kb-button
      line
      green
    >
      button line green
    </kb-button>
    <kb-button
      line
      purple
    >
      button line purple
    </kb-button>
    <h4 class="gd__h3">shadow</h4>
    <kb-button
      line
      shadow
      blue
    >
      button shadow
    </kb-button>
    <h4 class="gd__h3">라운드 (round)</h4>
    <kb-button
      round
      line
      yellow
    >
      button blue
    </kb-button>
    <kb-button
      round
      line
    >
      button gray
    </kb-button>
    <h4 class="gd__h3">라인 비활성화 (disabled)</h4>
    <kb-button
      line
      disabled
    >
      button line disabled
    </kb-button>
    <kb-button
      line
      disabled
      blue
    >
      line blue disabled
    </kb-button>

    <h3 class="gd__h2">link버튼 (to="경로"): 버튼으로 쓸때 to속성 제거</h3>
    <kb-button to="#" link>
      텍스트 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <kb-button
      to="#"
      link
      line
    >
      텍스트 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <kb-button
      to="#"
      link
      line
    >
      텍스트 링크
    </kb-button>
    <br>
    <br>
    <kb-button
      to="#"
      link
      line
      yellow
    >
      텍스트 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <kb-button
      to="#"
      link
      line
      blue
    >
      텍스트 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <kb-button
      to="#"
      link
      line
      red
    >
      텍스트 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <kb-button
      to="#"
      link
      line
      green
    >
      텍스트 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <kb-button
      to="#"
      link
      line
      purple
    >
      텍스트 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <br>
    <kb-button
      to="#"
      line
      round
      h28
    >
      버튼 링크
    </kb-button>
    <kb-button
      to="#"
      line
      round
      h28
    >
      버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <kb-button
      to="#"
      line
      round
      h28
      yellow
    >
      버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <kb-button
      to="#"
      round
      h28
      yellow
    >
      버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <kb-button
      to="#"
      line
      round
      h28
      blue
    >
      버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <kb-button
      to="#"
      round
      h28
      blue
    >
      버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <kb-button
      to="#"
      line
      round
      h28
      red
    >
      버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <kb-button
      to="#"
      round
      h28
      red
    >
      버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <kb-button
      to="#"
      line
      round
      h28
      green
    >
      버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <kb-button
      to="#"
      round
      h28
      green
    >
      버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <kb-button
      to="#"
      line
      round
      h28
      purple
    >
      버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <kb-button
      to="#"
      round
      h28
      purple
    >
      버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
    </kb-button>
    <br>
    <kb-button-wrap>
      <template slot="inner">
        <div class="flex">
          <kb-button
            to="#"
            line
            class="btn_arr"
          >
            버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
          <kb-button
            to="#"
            line
            class="btn_arr"
            yellow
          >
            버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </div>
        <div class="flex">
          <kb-button
            to="#"
            line
            class="btn_arr"
            blue
          >
            버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
          <kb-button
            to="#"
            line
            class="btn_arr"
            red
          >
            버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </div>
        <div class="flex">
          <kb-button
            to="#"
            line
            class="btn_arr"
            green
          >
            버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
          <kb-button
            to="#"
            line
            class="btn_arr"
            purple
          >
            버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </div>
        <div class="flex">
          <kb-button
            to="#"
            class="btn_arr"
          >
            버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
          <kb-button
            to="#"
            class="btn_arr"
            yellow
          >
            버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </div>
        <div class="flex">
          <kb-button
            to="#"
            class="btn_arr"
            blue
          >
            버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
          <kb-button
            to="#"
            class="btn_arr"
            red
          >
            버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </div>
        <div class="flex">
          <kb-button
            to="#"
            class="btn_arr"
            green
          >
            버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
          <kb-button
            to="#"
            class="btn_arr"
            purple
          >
            버튼 링크<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </div>
      </template>
    </kb-button-wrap>

    <h3 class="gd__h2">버튼 그리드 : &lt;kb-button-wrap&gt;</h3>
    <h3 class="gd__h2">버튼 그리드 guide</h3>
    <div class="gray_box">
      <p><strong>일반</strong>버튼사이 간격 있음</p>
      <p><strong>group</strong>그룹(버튼사이 간격 없음)</p>
      <p><strong>out</strong>좌우 여백 제거</p>
      <p><strong>bottom-fixed</strong>하단고정</p>
    </div>
    <h4 class="gd__h3">일반</h4>
    <kb-button-wrap>
      <kb-button
        line
      >
        버튼1
      </kb-button>
      <kb-button
        line
      >
        버튼2
      </kb-button>
    </kb-button-wrap>
    <kb-button-wrap>
      <kb-button
        line
      >
        버튼3
      </kb-button>
      <kb-button
        line
      >
        버튼4
      </kb-button>
      <kb-button
        line
      >
        버튼5
      </kb-button>
    </kb-button-wrap>
    <kb-button-wrap>
      <template slot="inner">
        <div class="flex">
          <kb-button
            line
          >
            버튼6
          </kb-button>
          <kb-button
            line
          >
            버튼7
          </kb-button>
          <kb-button
            line
          >
            버튼8
          </kb-button>
          <kb-button
            line
          >
            버튼9
          </kb-button>
        </div>
        <div class="flex">
          <kb-button
            line
          >
            버튼10
          </kb-button>
        </div>
      </template>
    </kb-button-wrap>
    <br>
    <h4 class="gd__h3">group (group)</h4>
    <kb-button-wrap group>
      <kb-button
        line
      >
        버튼1
      </kb-button>
      <kb-button
        line
      >
        버튼2
      </kb-button>
    </kb-button-wrap>
    <kb-button-wrap group>
      <kb-button
        line
      >
        버튼3
      </kb-button>
      <kb-button
        line
      >
        버튼4
      </kb-button>
      <kb-button
        line
      >
        버튼5
      </kb-button>
    </kb-button-wrap>
    <kb-button-wrap group>
      <kb-button
        line
      >
        버튼6
      </kb-button>
      <kb-button
        line
      >
        버튼7
      </kb-button>
      <kb-button
        line
      >
        버튼8
      </kb-button>
      <kb-button
        line
      >
        버튼9
      </kb-button>
    </kb-button-wrap>
    <h4 class="gd__h3">group out (group out)</h4>
    <kb-button-wrap
      group
      out
    >
      <kb-button
        line
      >
        버튼1
      </kb-button>
      <kb-button
        line
      >
        버튼2
      </kb-button>
    </kb-button-wrap>
    <kb-button-wrap
      group
      out
    >
      <kb-button
        line
      >
        버튼3
      </kb-button>
      <kb-button
        line
      >
        버튼4
      </kb-button>
      <kb-button
        line
      >
        버튼5
      </kb-button>
    </kb-button-wrap>
    <kb-button-wrap
      group
      out
    >
      <kb-button
        line
      >
        버튼6
      </kb-button>
      <kb-button
        line
      >
        버튼7
      </kb-button>
      <kb-button
        line
      >
        버튼8
      </kb-button>
      <kb-button
        line
      >
        버튼9
      </kb-button>
    </kb-button-wrap>
    <h4 class="gd__h3">bottom_fixed(하단 고정): style 지워서 사용 (bottom-fixed)</h4>
    <!-- 하단 고정 -->
    <kb-button-wrap bottom-fixed>
      <kb-button
        yellow
      >
        목록
      </kb-button>
    </kb-button-wrap>

    <kb-button-wrap bottom-fixed>
      <template slot="inner">
        <div
          class="flex"
          style="position:static;"
        >
          <kb-button
            line
          >
            취소
          </kb-button>
          <kb-button
            yellow
          >
            확인
          </kb-button>
        </div>
      </template>
    </kb-button-wrap>
    <br>
    <kb-button-wrap bottom-fixed class="ty2">
      <template slot="inner">
        <div
          class="flex"
          style="position:static;"
        >
          <kb-button
            line
          >
            취소
          </kb-button>
          <kb-button
            yellow
          >
            확인
          </kb-button>
        </div>
      </template>
    </kb-button-wrap>
    <br>
    <kb-button-wrap bottom-fixed class="ty3">
      <template slot="inner">
        <div
          class="flex"
          style="position:static;"
        >
          <kb-button
            green
          >
            취소
          </kb-button>
          <kb-button
            line
          >
            취소
          </kb-button>
          <kb-button
            yellow
          >
            확인
          </kb-button>
        </div>
      </template>
    </kb-button-wrap>
    <h3 class="gd__h2">더보기</h3>
    <kb-button-wrap>
      <kb-button
        line
        class="more"
      >
        더보기
      </kb-button>
    </kb-button-wrap>

    <h2 class="gd__h1">탭메뉴 : &lt;kb-tabs&gt;, &lt;kb-tab&gt;</h2>
    <h3 class="gd__h2">탭메뉴 guide</h3>
    <div class="gray_box">
      <p class="tit">&lt;kb-tabs&gt;</p>
      <p><strong>type2</strong>스타일 2번타입</p>
      <p><strong>type3</strong>스타일 3번타입</p>
      <p><strong>fixed</strong>스크롤시 상단 고정</p>

      <p class="tit">&lt;kb-tab&gt;</p>
      <p><strong>active</strong>활성화</p>
      <p><strong>title=""</strong>탭 설명(필수)</p>
    </div>
    <h3 class="gd__h2">3뎁스 탭: tabmenu</h3>
    <div>
      <kb-tabs fixed>
        <kb-tab
          title="탭메뉴1"
          active
        >
          <h1>탭메뉴1</h1>
          내용1 <br>
          내용1 <br>
          내용1
        </kb-tab>
        <kb-tab
          title="탭메뉴2"
        >
          <h1>탭메뉴2</h1>
          내용2 <br>
          내용2 <br>
          내용2
        </kb-tab>
        <kb-tab
          title="탭메뉴3"
        >
          <h1>탭메뉴3</h1>
          내용3 <br>
          내용3 <br>
          내용3
        </kb-tab>
        <kb-tab
          title="탭메뉴4"
        >
          <h1>탭메뉴4</h1>
          내용4 <br>
          내용4 <br>
          내용4
        </kb-tab>
        <kb-tab
          title="탭메뉴5"
        >
          <h1>탭메뉴5</h1>
          내용5 <br>
          내용5 <br>
          내용5
        </kb-tab>
        <kb-tab
          title="탭메뉴6"
        >
          <h1>탭메뉴6</h1>
          내용6 <br>
          내용6 <br>
          내용6
        </kb-tab>
        <kb-tab
          title="탭메뉴7"
        >
          <h1>탭메뉴7</h1>
          내용7 <br>
          내용7 <br>
          내용7
        </kb-tab>
      </kb-tabs>
      <kb-tabs>
        <kb-tab
          title="탭메뉴21"
          active
          @click="tabClick"
        >
          <h1>탭메뉴1</h1>
          내용1 <br>
          내용1 <br>
          내용1
        </kb-tab>
        <kb-tab
          title="탭메뉴2"
        >
          <h1>탭메뉴2</h1>
          내용2 <br>
          내용2 <br>
          내용2
        </kb-tab>
        <kb-tab
          title="탭메뉴3"
        >
          <h1>탭메뉴3</h1>
          내용3 <br>
          내용3 <br>
          내용3
        </kb-tab>
      </kb-tabs>
    </div>
    <h3 class="gd__h2">4뎁스 탭: tabmenu2</h3>

    <kb-tabs type2>
      <kb-tab
        title="탭메뉴1"
        active
      >
        <h1>탭메뉴1탭메뉴1</h1>
        내용1 <br>
        내용1 <br>
        내용1
      </kb-tab>
      <kb-tab
        title="탭메뉴2"
      >
        <h1>탭메뉴2탭메뉴2</h1>
        내용2 <br>
        내용2 <br>
        내용2
      </kb-tab>
      <kb-tab
        title="탭메뉴3"
      >
        <h1>탭메뉴3탭메뉴3</h1>
        내용3 <br>
        내용3 <br>
        내용3
      </kb-tab>
    </kb-tabs>

    <kb-tabs
      type2
      fixed
    >
      <kb-tab
        title="탭메뉴1탭메뉴1"
        active
      >
        <h1>탭메뉴1탭메뉴1</h1>
        내용1 <br>
        내용1 <br>
        내용1
      </kb-tab>
      <kb-tab
        title="탭메뉴2탭메뉴2"
      >
        <h1>탭메뉴2탭메뉴2</h1>
        내용2 <br>
        내용2 <br>
        내용2
      </kb-tab>
      <kb-tab
        title="탭메뉴3탭메뉴3"
      >
        <h1>탭메뉴3탭메뉴3</h1>
        내용3 <br>
        내용3 <br>
        내용3
      </kb-tab>
      <kb-tab
        title="탭메뉴4탭메뉴4"
      >
        <h1>탭메뉴4탭메뉴4</h1>
        내용4 <br>
        내용4 <br>
        내용4
      </kb-tab>
      <kb-tab
        title="탭메뉴5탭메뉴5"
      >
        <h1>탭메뉴5탭메뉴5</h1>
        내용5 <br>
        내용5 <br>
        내용5
      </kb-tab>
      <kb-tab
        title="탭메뉴6탭메뉴6"
      >
        <h1>탭메뉴6탭메뉴6</h1>
        내용6 <br>
        내용6 <br>
        내용6
      </kb-tab>
    </kb-tabs>

    <h3 class="gd__h2">tabmenu3??</h3>
    <kb-tabs type3>
      <kb-tab
        title="탭메뉴1탭메뉴1"
        active
      >
        <h1>탭메뉴1탭메뉴1</h1>
        내용1 <br>
        내용1 <br>
        내용1
      </kb-tab>
      <kb-tab
        title="탭메뉴2탭메뉴2"
      >
        <h1>탭메뉴2탭메뉴2</h1>
        내용2 <br>
        내용2 <br>
        내용2
      </kb-tab>
      <kb-tab
        title="탭메뉴3탭메뉴3"
      >
        <h1>탭메뉴3탭메뉴3</h1>
        내용3 <br>
        내용3 <br>
        내용3
      </kb-tab>
      <kb-tab
        title="탭메뉴4탭메뉴4"
      >
        <h1>탭메뉴4탭메뉴4</h1>
        내용4 <br>
        내용4 <br>
        내용4
      </kb-tab>
      <kb-tab
        title="탭메뉴5탭메뉴5"
      >
        <h1>탭메뉴5탭메뉴5</h1>
        내용5 <br>
        내용5 <br>
        내용5
      </kb-tab>
      <kb-tab
        title="탭메뉴6탭메뉴6"
      >
        <h1>탭메뉴6탭메뉴6</h1>
        내용6 <br>
        내용6 <br>
        내용6
      </kb-tab>
    </kb-tabs>
  </div>
</template>
<script>
export default {
  name: 'button',
  methods: {
    tabClick() {
      console.log('탭메뉴 클릭!!!');
    },
  },
};
</script>
