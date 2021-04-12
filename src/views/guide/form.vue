<template>
  <div class="section pd_bottom">
    <h2 class="gd__h1">form 태그</h2>
    <div>
      <h3 class="gd__h2">input 박스 guide</h3>
      <div class="gray_box">
        <p class="tit">&lt;kb-input&gt;</p>
        <p><strong>v-model=""</strong>입력받는 값</p>
        <p><strong>placeholder=""</strong>placeholder값</p>
        <p><strong>title=""</strong>타이틀 값</p>
        <p><strong>disabled</strong>비활성화</p>
        <p><strong>readonly</strong>읽기전용</p>
        <p><strong>type=""</strong>input 타입변경(password), ※file 타입은 없음</p>
        <p><strong>not-del</strong>삭제버튼 삭제</p>
        <p><strong>input-class=""</strong>input 영역에 직접 클래스적용</p>
        <p><strong>unit=""</strong>input 박스 내부 글씨 (뒤)</p>
        <p><strong>front-unit=""</strong>input 박스 내부 글씨 (앞)</p>
        <p><strong>maxlength="</strong>최대글자 (숫자만)</p>

        <p class="tit">&lt;kb-checkbox&gt;</p>
        <p><strong>input-id=""</strong>id값 적용 (미입력시 자동 추가)</p>
        <p><strong>v-model=""</strong>입력받는 값</p>
        <p><strong>title=""</strong>타이틀 값</p>
        <p><strong>disabled</strong>비활성화</p>
        <p><strong>readonly</strong>읽기전용</p>
        <p><strong>radio</strong>라디오 스타일로 변경</p>
        <!-- <p><strong>large</strong>큰버전</p> -->
        <p><strong>box</strong>box형태</p>
        <p><strong>button</strong>버튼 스타일로 변경</p>
        <p><strong>class="ty2"</strong>ty2 : 라운드형 박스체크박스</p>
        <p><strong>switch</strong>스위치형 체크박스</p>

        <p class="tit">&lt;kb-radio&gt;</p>
        <p><strong>v-model=""</strong>입력받는 값 (그룹끼리는 같은 값을 사용해야 함)</p>
        <p><strong>input-id=""</strong>id값 적용 (미입력시 자동 추가)</p>
        <p><strong>title=""</strong>타이틀 값</p>
        <p><strong>block</strong>block 타입으로 변경</p>
        <p><strong>checkbox</strong>checkbox 스타일로 변경</p>
        <!-- <p><strong>large</strong>큰버전</p> -->
        <p><strong>box</strong>box타입</p>
        <p><strong>box - 설명</strong>&lt;template slot="summary"&gt; 설명영역 추가</p>
        <p><strong>button</strong>버튼 스타일로 변경</p>
        <p><strong>class="ty2"</strong>ty2 : 라운드형 박스라디오</p>
        <p><strong>toggle태그들</strong>하단 내용 참고</p>

        <p class="tit">&lt;kb-textarea&gt;</p>
        <p><strong>v-model=""</strong>입력받는 값 (그룹끼리는 같은 값을 사용해야 함)</p>
        <p><strong>title=""</strong>타이틀 값</p>
        <p><strong>maxlength="</strong>최대글자 (숫자만)</p>
        <p><strong>rows="</strong>최초 줄 수 (숫자만)</p>
        <p><strong>disabled</strong>비활성화</p>
        <p><strong>readonly</strong>읽기전용</p>
        <p><strong>autoHeight</strong>높이값 자동 조절</p>

        <p class="tit">&lt;kb-select&gt;</p>
        <p><strong>v-model=""</strong>입력받는 값 (그룹끼리는 같은 값을 사용해야 함)</p>
        <p><strong>:options=""</strong>옵션값 설정 {객체로 호출} : {text:'텍스트내용', value:'value값'}</p>
        <p><strong>disabled</strong>비활성화</p>

      </div>
      <h3 class="gd__h2">input 박스</h3>
      <div>
        <kb-input
          v-model="inpVal3"
          placeholder="이름입력"
          title="이름입력"
        />
        <div>{{ inpVal3 }}</div>
        <br>

        <kb-input
          v-model="inpVal1"
          disabled
          title="disabled 상태"
        />
        <kb-input
          v-model="inpVal2"
          readonly
          title="readonly 상태"
        />

        <kb-input
          value="2,031"
          readonly
          class="ty2"
          input-class="t_right"
          unit="만원"
          title="현재시세"
        />

        <h4 class="gd__h3">line</h4>
        <kb-input
          line
          v-model="inpVal7"
          placeholder="이름입력"
          title="이름입력"
        />
        <div>{{ inpVal7 }}</div>
        <kb-input
          line
          readonly
          v-model="inpVal7"
          placeholder="이름입력"
          title="이름입력"
        />
        <kb-input
          line
          disabled
          v-model="inpVal7"
          placeholder="이름입력"
          title="이름입력"
        />

        <h4 class="gd__h3">date</h4>
        <kb-input line date v-model="inpVal8" disabled />
        <div>{{ inpVal8 }}</div>
        <br>
        <div class="datepicker_box">
          <div class="flex">
            <div><kb-input line date v-model="inpVal9" /></div>
            <span>-</span>
            <div><kb-input line date v-model="inpVal10" /></div>
          </div>
        </div>
        <div>{{ inpVal9 }} ~ {{ inpVal10 }}</div>
        <h4 class="gd__h3">time</h4>
        <kb-input type="time" line time v-model="inpVal11" />
        {{ inpVal11 }}
        <br><br>
        <div class="datepicker_box">
          <div class="flex">
            <div><kb-input type="time" line time v-model="inpVal12" /></div>
            <span>-</span>
            <div><kb-input type="time" line time v-model="inpVal13" /></div>
          </div>
        </div>
        <div>{{ inpVal12 }} ~ {{ inpVal13 }}</div>

        <h4 class="gd__h3">삭제버튼 없음: not-del</h4>
        <kb-input
          type="password"
          not-del
          placeholder="비밀번호입력(삭제버튼 없음)"
          title="비밀번호입력"
        />
        <h4 class="gd__h3">단위포함: unit</h4>
        <kb-input
          v-model="inpVal4"
          type="tel"
          input-class="t_right"
          unit="만원"
          placeholder="금액입력"
          title="금액입력"
        />
        <kb-input
          v-model="inpVal4"
          type="tel"
          input-class="t_right"
          front-unit="약"
          unit="세"
          placeholder="나이입력"
          title="나이입력"
        />
        <h4 class="gd__h3">password: type</h4>
        <kb-input
          v-model="inpVal5"
          type="password"
          placeholder="비밀번호"
          title="비밀번호입력"
        />
        <h4 class="gd__h3">counter</h4>
        <kb-input
          v-model="inpVal6"
          placeholder="최대 10글자 입력"
          title="이름입력"
          maxlength="10"
        />
        <div class="inp_util">
          <div>{{ inpVal6 }}</div>
          <div class="inp_count">
            <strong>{{ inpVal6.length }}</strong> / 10자
          </div>
        </div>

        <h4 class="gd__h3">focus</h4>
        <kb-input
          v-model="inpVal6"
          placeholder="최대 10글자 입력"
          title="이름입력"
          maxlength="10"
          ref="focusInput"
        />
        <kb-button line blue @click="focusInput('focusInput')">포커스로 이동</kb-button>
      </div>

      <h3 class="gd__h2">checkbox</h3>
      <div>
        <kb-checkbox
          v-model="checkVal1"
          value="1"
        >
          value:1
        </kb-checkbox>
        <kb-checkbox
          v-model="checkVal1"
          value="2"
        >
          value:2
        </kb-checkbox>
        <kb-checkbox
          v-model="checkVal1"
          disabled
          value="3"
        >
          value:3
        </kb-checkbox>
        <kb-checkbox
          v-model="checkVal1"
          value="4"
        >
          value:4
        </kb-checkbox>
        <br><br>
        체크박스 선택 값: {{ checkVal1 }}
        <hr>
        <kb-checkbox
          v-model="checkVal2"
        >
          체크상태: {{ checkVal2 }}
        </kb-checkbox>
        <kb-checkbox
          v-model="checkVal3"
          disabled
        >
          disabled 체크상태: {{ checkVal3 }}
        </kb-checkbox>
        <kb-checkbox
          v-model="checkVal4"
          disabled
        >
          disabled 체크상태: {{ checkVal4 }}
        </kb-checkbox>

        <h4 class="gd__h3">동그란 스타일 업는 체크박스</h4>
        <kb-checkbox
          v-model="checkVal4"
          class="no_style"
        >
          disabled 체크상태: {{ checkVal4 }}
        </kb-checkbox>

        <h4 class="gd__h3">종류</h4>
        <div>
          <kb-checkbox>
            label 감싼 체크박스
          </kb-checkbox>
          <kb-checkbox
            input-id="chk1"
          >
            div 감싼 체크박스:'input-id'속성이 있어야 함
          </kb-checkbox>
        </div>
        <hr>
        <div>
          <kb-checkbox
            block
          >
            block 체크박스
          </kb-checkbox>
          <kb-checkbox
            block
          >
            block 체크박스
          </kb-checkbox>
        </div>
        <hr>
        <div>
          <kb-checkbox
            radio
          >
            radio모양 체크박스
          </kb-checkbox>
          <kb-checkbox
            radio
          >
            radio모양 체크박스
          </kb-checkbox>
        </div>
        <h4 class="gd__h3">박스타입</h4>
        <div>
          <kb-checkbox
            box
          >
            box 체크박스
          </kb-checkbox>
          <kb-checkbox
            box
          >
            box 체크박스
            <template slot="summary">
              설명글 설명글 설명글
            </template>
          </kb-checkbox>
        </div>
        <h4 class="gd__h3">버튼타입</h4>
        <div class="checkbox_btn_wrap">
          <kb-checkbox
            button
          >
            button 체크박스
          </kb-checkbox>
          <kb-checkbox
            button
          >
            button 체크박스
          </kb-checkbox>
          <kb-checkbox
            button
          >
            button 체크박스
          </kb-checkbox>
          <kb-checkbox
            button
          >
            button 체크박스
          </kb-checkbox>
          <kb-checkbox
            button
          >
            button 체크박스
          </kb-checkbox>
          <kb-checkbox
            button
          >
            button 체크박스
          </kb-checkbox>
        </div>
        <br>
        <div class="checkbox_btn_wrap full">
          <kb-checkbox
            button
          >
            button 체크박스
          </kb-checkbox>
          <kb-checkbox
            button
          >
            button 체크박스
          </kb-checkbox>
          <kb-checkbox
            button
          >
            button 체크박스
          </kb-checkbox>
          <kb-checkbox
            button
          >
            button 체크박스
          </kb-checkbox>
        </div>
        <br>
        <div class="checkbox_btn_wrap">
          <kb-checkbox
            button
            class="ty2"
          >
            button 체크박스
          </kb-checkbox>
          <kb-checkbox
            button
            class="ty2"
          >
            button 체크박스
          </kb-checkbox>
          <kb-checkbox
            button
            class="ty2"
          >
            button 체크박스
          </kb-checkbox>
          <kb-checkbox
            button
            class="ty2"
          >
            button 체크박스
          </kb-checkbox>
        </div>
        <h4 class="gd__h3">switch</h4>
        <div>

          <kb-checkbox
            v-model="switchVal1"
            switch
          />

          <kb-checkbox
            v-model="switchVal1"
            switch
          >
            switch
          </kb-checkbox>
          <!-- <kb-switch v-model="switchVal1" /> -->
          {{ switchVal1 }}
          <br>
          <br>
          <kb-checkbox
            v-model="switchVal2"
            switch
            class="right"
          >
            switch right
          </kb-checkbox>
          {{ switchVal2 }}
          <br><br>
          <kb-checkbox
            v-model="switchVal3"
            switch small
          >
          </kb-checkbox>
          <kb-checkbox
            v-model="switchVal3"
            switch small
          >
            switch
          </kb-checkbox>
          {{ switchVal3 }}
          <br><br>
          <kb-checkbox
            v-model="switchVal4"
            switch small
            class="right"
          >
            switch right
          </kb-checkbox>
          {{ switchVal4 }}
        </div>
      </div>

      <h3 class="gd__h2">radio</h3>
      <div>
        <p>value 값 필수</p>
        <br>
        <kb-radio
          v-model="radioVal1"
          value="1"
        >
          value:1
        </kb-radio>
        <kb-radio
          v-model="radioVal1"
          value="2"
        >
          value:2
        </kb-radio>
        <kb-radio
          v-model="radioVal1"
          value="3"
        >
          value:3
        </kb-radio>
        <kb-radio
          v-model="radioVal1"
          disabled
          value="4"
        >
          value:4
        </kb-radio>
        <br><br>
        라디오 선택 값: {{ radioVal1 }}

        <h4 class="gd__h3">종류</h4>
        <div>
          <kb-radio
            v-model="radioVal2"
            value="1"
          >
            label 감싼 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal2"
            input-id="rdo1"
            value="2"
          >
            div 감싼 라디오:'input-id'속성이 있어야 함
          </kb-radio>
        </div>
        <hr>
        <div>
          <kb-radio
            v-model="radioVal3"
            block
            value="1"
          >
            block 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal3"
            block
            value="2"
          >
            block 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal3"
            block
            value="3"
          >
            block 라디오
          </kb-radio>
        </div>
        <hr>
        <div>
          <kb-radio
            v-model="radioVal4"
            checkbox
            value="1"
          >
            checkbox모양 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal4"
            checkbox
            value="2"
          >
            checkbox모양 라디오
          </kb-radio>
        </div>
        <hr>
        <div>
          <kb-radio
            v-model="radioVal6"
            box
            value="1"
          >
            box 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal6"
            box
            value="2"
          >
            box 라디오
            <template slot="summary">
              설명글 설명글 설명글
            </template>
          </kb-radio>
        </div>
        <hr>
        <div class="checkbox_btn_wrap">
          <kb-radio
            v-model="radioVal7"
            button
            value="1"
          >
            button 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal7"
            button
            value="2"
          >
            button 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal7"
            button
            value="3"
          >
            button 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal7"
            button
            value="4"
          >
            button 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal7"
            button
            value="5"
          >
            button 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal7"
            button
            value="6"
          >
            button 라디오
          </kb-radio>
        </div>
        <br>
        <div class="checkbox_btn_wrap full">
          <kb-radio
            v-model="radioVal8"
            button
            value="1"
          >
            button 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal8"
            button
            value="2"
          >
            button 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal8"
            button
            value="3"
          >
            button 라디오
          </kb-radio>
          <kb-radio
            v-model="radioVal8"
            button
            value="4"
          >
            button 라디오
          </kb-radio>
        </div>
      </div>

      <h3 class="gd__h2">toggle</h3>
      <div>
        <kb-btn-toggle>
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal1"
              button
              value="1"
            >
              tog value:1
            </kb-radio>
            <kb-radio
              v-model="toggleVal1"
              button
              value="2"
            >
              tog value:2
            </kb-radio>
          </kb-btn-toggle-row>
        </kb-btn-toggle>
        <br>
        toggle 선택 값: {{ toggleVal1 }}

        <h4 class="gd__h3">정렬</h4>
        <kb-btn-toggle>
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal2"
              button
              value="1"
            >
              선택1
            </kb-radio>
          </kb-btn-toggle-row>
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal2"
              button
              value="2"
            >
              선택2
            </kb-radio>
            <kb-radio
              v-model="toggleVal2"
              button
              disabled
              value="3"
            >
              선택3 (disabled)
            </kb-radio>
          </kb-btn-toggle-row>
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal2"
              button
              value="4"
            >
              선택4
            </kb-radio>
            <kb-radio
              v-model="toggleVal2"
              button
              value="5"
            >
              선택5
            </kb-radio>
            <div class="bg" />
          </kb-btn-toggle-row>
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal2"
              button
              disabled
              value="6"
            >
              선택6 (disabled)
            </kb-radio>
            <kb-radio
              v-model="toggleVal2"
              button
              value="7"
            >
              선택7
            </kb-radio>
            <div class="bg" />
            <div class="bg" />
          </kb-btn-toggle-row>
        </kb-btn-toggle>
        <br>
        toggle 선택 값: {{ toggleVal2 }}

        <h4 class="gd__h3">다른타입</h4>
        <kb-btn-toggle class="h70">
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal3"
              button
              value="1"
            >
              텍스트 많아서 3줄까지 <br>값:1
            </kb-radio>
            <kb-radio
              v-model="toggleVal3"
              button
              value="2"
            >
              텍스트 많음. 값:2
            </kb-radio>
            <kb-radio
              v-model="toggleVal3"
              button
              value="3"
            >
              텍스트 많아서 3줄까지 <br>값:3
            </kb-radio>
          </kb-btn-toggle-row>
        </kb-btn-toggle>
        <br>
        toggle 선택 값: {{ toggleVal3 }}
        <br>
        <br>
        <kb-btn-toggle small>
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal4"
              button
              value="1"
            >
              ty2. 값:1
            </kb-radio>
            <kb-radio
              v-model="toggleVal4"
              button
              value="2"
            >
              ty2.  값:2
            </kb-radio>
            <kb-radio
              v-model="toggleVal4"
              button
              value="3"
            >
              ty2. 값:3
            </kb-radio>
          </kb-btn-toggle-row>
        </kb-btn-toggle>
        <kb-btn-toggle small inline>
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal4"
              button
              value="1"
            >
              1개월
            </kb-radio>
            <kb-radio
              v-model="toggleVal4"
              button
              value="2"
            >
              3개월
            </kb-radio>
            <kb-radio
              v-model="toggleVal4"
              button
              value="3"
            >
              6개월
            </kb-radio>
            <kb-radio
              v-model="toggleVal4"
              button
              value="3"
            >
              1년
            </kb-radio>
            <kb-radio
              v-model="toggleVal4"
              button
              value="3"
            >
              직접선택
            </kb-radio>
          </kb-btn-toggle-row>
        </kb-btn-toggle>
        <br>
        toggle 선택 값: {{ toggleVal4 }}
        <h4 class="gd__h3">체크박스</h4>
        <kb-btn-toggle>
          <kb-btn-toggle-row>
            <kb-checkbox
              v-model="toggleVal5"
              button
              value="1"
            >
              tog value:1
            </kb-checkbox>
            <kb-checkbox
              v-model="toggleVal5"
              button
              value="2"
            >
              tog value:2
            </kb-checkbox>
            <kb-checkbox
              v-model="toggleVal5"
              button
              value="3"
            >
              tog value:3
            </kb-checkbox>
          </kb-btn-toggle-row>
        </kb-btn-toggle>
        <br>
        toggle(체크박스) 선택 값: {{ toggleVal5 }}
      </div>

      <h3 class="gd__h2">textarea</h3>
      <div>
        <h4 class="gd__h3">기본</h4>
        <kb-textarea
          v-model="textareaVal1"
          placeholder="내용을 입력해주세요."
          title="내용입력"
        />
        <br>
        <kb-textarea
          v-model="textareaVal2"
          readonly
          placeholder="내용을 입력해주세요."
          title="내용입력"
        />
        <br>
        <kb-textarea
          v-model="textareaVal3"
          disabled
          placeholder="내용을 입력해주세요."
          title="내용입력"
        />
        <h4 class="gd__h3">글자카운터</h4>
        <kb-textarea
          v-model="textareaVal4"
          rows="3"
          maxlength="100"
          wrap-tag="label"
          placeholder="내용을 입력해주세요."
          title="내용입력"
        >
          <div class="inp_count">
            <strong>{{ textareaVal4.length }}</strong>/100
          </div>
        </kb-textarea>
        <br>
        <kb-textarea
          v-model="textareaVal5"
          rows="4"
          maxlength="200"
          placeholder="내용을 입력해주세요."
          title="내용입력"
        />
        <div class="inp_util">
          <div class="inp_count">
            <strong>{{ textareaVal5.length }}</strong>/200
          </div>
        </div>

        <h4 class="gd__h3">autoHeight</h4>
        <kb-textarea
          autoHeight
          v-model="textareaVal7"
          rows="4"
          maxlength="200"
          placeholder="내용을 입력해주세요."
          title="내용입력"
        />
        <br>
      </div>

      <h3 class="gd__h2">select</h3>
      <div>
        <kb-select
          v-model="selectVal1"
          :options="selectOpt1"
        />
        <br>
        <span>Selected: {{ selectVal1 }}</span>
        <br>
        <kb-select
          v-model="selectVal1"
          base
          disabled
          :options="selectOpt1"
        />
        <br>
        <br>
        <kb-select
          v-model="selectVal2"
        >
          <option value="">선택</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </kb-select>
        <br>
        <span>Selected: {{ selectVal2 }}</span>
        <div class="select">
          <a href="#" class="btn_select">선택</a>
        </div>
      </div>

      <h4 class="gd__h3">select inline</h4>
      <kb-select
        v-model="selectVal1"
        :options="selectOpt1"
        inline
      />
    </div>

    <h2 class="gd__h1">form item</h2>
    <div>
      <kb-form-item
        label="기본"
      >
        <kb-input
          v-model="fmVal1"
        />
      </kb-form-item>
      <kb-form-item
        label="필수"
        required
      >
        <kb-input
          v-model="fmVal1"
        />
      </kb-form-item>
      <kb-form-item
        label="우측요소추가"
      >
        <template slot="labelRight">
          <kb-button
            line
            h28
          >
            버튼
          </kb-button>
        </template>
        <kb-input
          v-model="fmVal1"
        />
      </kb-form-item>
      <kb-form-item label="좌측">
        <template slot="labelLeft">
          커스텀
          <kb-button
            line
            h28
            class="mg_l5"
          >
            버튼
          </kb-button>
        </template>
        <kb-input
          v-model="fmVal1"
        />
      </kb-form-item>
      <kb-form-item
        label="에러"
      >
        <kb-validate-item
          success=""
          error="이름이 다릅니다."
        >
          <kb-input
            v-model="fmVal1"
          />
        </kb-validate-item>
      </kb-form-item>

      <kb-form-item
        label="에러"
      >
        <kb-validate-item
          success=""
          error="이름이 다릅니다."
          class="t_right"
        >
          <kb-input
            v-model="fmVal1"
          />
        </kb-validate-item>
      </kb-form-item>

      <!-- 2021.02.16 확인후 삭제요망
      <kb-form-item
        label="확인완료"
      >
        <kb-validate-item
          error=""
          success="이름이 맞습니다."
        >
          <kb-input
            v-model="fmVal1"
          />
        </kb-validate-item>
      </kb-form-item>
      -->
      <h4 class="gd__h3">이메일</h4>
      <kb-form-item
        label="이메일"
      >
        <div class="tbl">
          <div class="td wp_40">
            <kb-input
              id="mail1"
              type="text"
              title="이메일 아이디 입력"
            />
          </div>
          <div class="td dash ty2">
            @
          </div>
          <div
            class="td wp_60 email_sel"
          >
            <kb-select
              v-model="mailVal1"
              title="이메일 도메인 선택"
              :options="mailOpt"
            />
          </div>
        </div>
        <div
          v-show="mailVal1 == 'etc'"
          class="email_inp"
        >
          <kb-input
            v-model="mailInp1"
            title="이메일 도메인 직접입력"
            placeholder="직접입력"
          />
        </div>
      </kb-form-item>
      <h4 class="gd__h3">검색</h4>
      <kb-form-item>
        <kb-input
          v-model="searchVal1"
          class="search"
          type="search"
          placeholder="검색어를 입력해주세요."
          title="검색어 입력"
        >
          <kb-button
            not
            class="btn_search"
            aria-label="검색하기"
          >검색하기</kb-button>
        </kb-input>
      </kb-form-item>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Form',
  data() {
    return {
      inpVal1: 'input disabled',
      inpVal2: 'input readonly',
      inpVal3: '123456',
      inpVal4: '',
      inpVal5: '',
      inpVal6: '',
      inpVal7: '',
      inpVal8: '',
      inpVal9: '',
      inpVal10: '',
      inpVal11: '',
      inpVal12: '',
      inpVal13: '',
      checkVal1: [],
      checkVal2: true,
      checkVal3: false,
      checkVal4: true,
      radioVal1: '4',
      radioVal2: '',
      radioVal3: '1',
      radioVal4: '1',
      radioVal5: '1',
      radioVal6: '1',
      radioVal7: '1',
      radioVal8: '1',
      radioVal9: '1',
      toggleVal1: '',
      toggleVal2: '',
      toggleVal3: '',
      toggleVal4: '',
      toggleVal5: [],
      switchVal1: false,
      switchVal2: false,
      switchVal3: false,
      switchVal4: false,
      selected: '',
      selectVal1: '',
      selectOpt1: [
        { text: '선택하기', value: '' },
        { text: 'A', value: 'A' },
        { text: 'B', value: 'B' },
        { text: 'C', value: 'C', disabled: true },
        { text: 'D', value: 'D' },
      ],
      selectVal2: '',
      selectOpt2: [
        { text: '선택하기', value: '' },
        { text: 'opt1', value: '1' },
        { text: 'opt2', value: '2' },
        { text: 'opt3', value: '3' },
        { text: 'opt4', value: '4', disabled: true },
        { text: 'opt5', value: '5' },
        { text: 'opt6', value: '6' },
      ],
      selectVal3: '',
      selectOpt3: [
        { text: '선택하기', value: '' },
        { text: 'opt1opt1opt1', value: '1' },
        { text: 'opt2opt2opt2', value: '2' },
        { text: 'opt3opt3opt3', value: '3' },
        { text: 'opt4opt4opt4', value: '4', disabled: true },
        { text: 'opt5opt5opt5', value: '5' },
        { text: 'opt6opt6opt6', value: '6' },
      ],
      selectVal4: '',
      selectOpt4: [
        { text: '은행선택', value: '' },
        { value: '011', text: '농협(농협은행)' },
        { value: '012', text: '농협(농·축협)' },
        { value: '039', text: '경남은행' },
        { value: '034', text: '광주은행' },
        { value: '004', text: '국민은행' },
        { value: '003', text: '기업은행' },
        { value: '031', text: '대구은행' },
        { value: '055', text: '도이치은행' },
        { value: '032', text: '부산은행' },
        { value: '002', text: '산업은행' },
        { value: '050', text: '상호저축' },
        { value: '045', text: '새마을금고' },
        { value: '007', text: '수협' },
        { value: '088', text: '신한은행(구조흥)' },
        { value: '048', text: '신협' },
        { value: '020', text: '우리은행' },
        { value: '071', text: '우체국' },
        { value: '037', text: '전북은행' },
        { value: '023', text: '한국스탠다드차타드(구제일)' },
        { value: '035', text: '제주은행' },
        { value: '081', text: 'KEB하나은행' },
        { value: '027', text: '한국씨티(구한미)' },
        { value: '089', text: '케이뱅크' },
        { value: '090', text: '카카오뱅크' },
        { value: '209', text: '유안타증권' },
        { value: '218', text: 'KB증권' },
        { value: '238', text: '미래에셋대우' },
        { value: '240', text: '삼성증권' },
        { value: '243', text: '한국투자증권' },
        { value: '247', text: 'NH투자증권' },
        { value: '261', text: '교보증권' },
        { value: '262', text: '하이투자증권' },
        { value: '263', text: '에이치엠씨투자증권' },
        { value: '264', text: '키움증권' },
        { value: '265', text: '이베스트증권' },
        { value: '266', text: '에스케이증권' },
        { value: '267', text: '대신증권' },
        { value: '268', text: '아이엠투자증권' },
        { value: '269', text: '한화투자증권' },
        { value: '270', text: '하나금융투자' },
        { value: '278', text: '신한금융투자' },
        { value: '279', text: '동부증권' },
        { value: '280', text: '유진투자증권' },
        { value: '287', text: '메리츠종합금융증권' },
        { value: '290', text: '부국증권' },
        { value: '291', text: '신영증권' },
        { value: '292', text: '엘아이지투자증권' },
      ],
      selectVal5: '',
      selectOpt5: [
        { text: '은행선택', value: '' },
        { value: '011', text: '농협(농협은행)' },
        { value: '012', text: '농협(농·축협)' },
        { value: '039', text: '경남은행' },
        { value: '034', text: '광주은행' },
        { value: '004', text: '국민은행' },
        { value: '003', text: '기업은행' },
        { value: '031', text: '대구은행' },
        { value: '055', text: '도이치은행' },
        { value: '218', text: 'KB증권' },
      ],
      selectVal6: '',
      selectOpt6: [
        { text: '은행선택', value: '' },
        { value: '004', text: '국민은행' },
        { value: '209', text: '유안타증권' },
        { value: '218', text: 'KB증권' },
        { value: '238', text: '미래에셋대우' },
        { value: '240', text: '삼성증권' },
        { value: '243', text: '한국투자증권' },
        { value: '247', text: 'NH투자증권' },
        { value: '261', text: '교보증권' },
        { value: '262', text: '하이투자증권' },
      ],
      selectVal7: '',
      selectOpt7: [
        { text: '은행선택', value: '' },
        { value: '011', text: '농협(농협은행)' },
        { value: '012', text: '농협(농·축협)' },
        { value: '039', text: '경남은행' },
        { value: '034', text: '광주은행' },
        { value: '004', text: '국민은행' },
        { value: '003', text: '기업은행' },
        { value: '031', text: '대구은행' },
      ],
      textareaVal1: '가나다라마바사',
      textareaVal2: 'readonly',
      textareaVal3: 'disabled',
      textareaVal4: '',
      textareaVal5: '',
      textareaVal6: '가나다라마바사',
      textareaVal7: '가나다라마바사',
      fmVal1: '홍길동',
      mailOpt: [
        { text: '메일선택', value: '' },
        { value: 'naver.com', text: 'naver.com' },
        { value: 'daum.net', text: 'daum.net' },
        { value: 'gmail.com', text: 'gmail.com' },
        { value: 'kakao.com', text: 'kakao.com' },
        { value: 'nate.com', text: 'nate.com' },
        { value: 'hanmail.net', text: 'hanmail.net' },
        { value: 'outlook.com', text: 'outlook.com' },
        { value: 'etc', text: '직접입력' },
      ],
      mailVal1: '',
      mailInp1: '',
      searchVal1: '',
    };
  },
  methods: {
    focusInput(ref) {
      this.$refs[ref].$refs.input.focus();
    },
  },
};
</script>
