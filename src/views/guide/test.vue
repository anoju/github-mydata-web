<template>
  <div class="section">
    <div class="character_face_wrap">
      <div class="mg_t30">
        <kb-input
          @focus="look"
          @click="look"
          @keyup="look"
          @blur="reset"
          v-model="inpVal3"
          placeholder="이름입력"
        />
      </div>
      <div class="mg_t10">
        <kb-input
          type="password"
          @click="lookAway"
          @focus="lookAway"
          @blur="reset"
          v-model="inpVal4"
          placeholder="주민번호입력"
        />
      </div>
      <div ref="character" id="character" class="character_face mg_t30">
        <div class="body"></div>
        <div class="face">
          <div class="ears">
            <div></div>
            <div></div>
          </div>
          <div class="face_line">
            <div class="face_in">
              <div class="eyes">
                <div class="eye left"></div>
                <div class="eye right"></div>
              </div>
              <div class="mouse">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mg_t30">
        <kb-input
          @focus="look"
          @click="look"
          @keyup="look"
          @blur="reset"
          v-model="inpVal1"
          placeholder="이메일입력"
        />
      </div>
      <div class="mg_t10">
        <kb-input
          type="password"
          @click="lookAway"
          @focus="lookAway"
          @blur="reset"
          v-model="inpVal2"
          placeholder="비밀번호입력"
        />
      </div>
    </div>
    <div ref="span" style="visibility: hidden; position: absolute; top: -999px;left:0;">
      <span>{{spanVal}}.</span>
    </div>
    <br>
    <div
      class="gd__tab_box"
      v-touch:tap="tapEvt"
    >
      <div
        class="item"
        v-for="(item, i) of tabAry"
        :key="i"
        :style="{left:`${item.X}px`,top:`${item.Y}px`}"
      >
        {{item.X}}
        <br>
        {{item.Y}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'test',
  data() {
    return {
      inpNumber: '',
      inpVal1: '',
      inpVal2: '',
      inpVal3: '',
      inpVal4: '',
      spanVal: '',
      timer: null,
      tabAry: [],
    };
  },
  mounted() {
  },
  methods: {
    rotate3d(x, y, z, rad) {
      const face = this.$el.querySelectorAll('.ears, .eyes, .mouse');
      const value = `rotate3d(${x}, ${y}, ${z}, ${rad}rad)`;
      face.forEach((el) => {
        el.style.transform = value;
      });
      /*
      for (let i = 0; i < face.length; i++) {
        face[i].style.transform = value;
      }
      */
    },
    reset() {
      this.$refs.character.classList.remove('playing');

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$refs.character.classList.remove('look-away', 'down', 'up');
        this.rotate3d(0, 0, 0, 0);
      }, 1);
    },
    look(event) {
      const el = event.target;
      const text = el.value.substr(0, el.selectionStart);
      this.spanVal = text;

      const characterRect = this.$refs.character.getBoundingClientRect();
      const inputRect = el.getBoundingClientRect();
      const caretRect = this.$refs.span.getBoundingClientRect();
      const caretPos = caretRect.left + Math.min(caretRect.width, inputRect.width) * !!text;
      const distCaret = characterRect.left + characterRect.width / 2 - inputRect.left - caretPos;
      const distInput = characterRect.top + characterRect.height / 2 - inputRect.top;
      const y = Math.atan2(-distCaret, Math.abs(distInput) * 3);
      const x = Math.atan2(distInput, (Math.abs(distInput) * 3) / Math.cos(y));
      const angle = Math.max(Math.abs(x), Math.abs(y));
      this.rotate3d(x / angle, y / angle, y / angle / 2, angle);
    },
    lookAway(event) {
      const el = event.target;
      const characterRect = this.$refs.character.getBoundingClientRect();
      const inputRect = el.getBoundingClientRect();
      const distInput = characterRect.top + characterRect.height / 2 - inputRect.top;

      this.$refs.character.classList.add('look-away', distInput < 0 ? 'up' : 'down');

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$refs.character.classList.add('playing');
      }, 300);
    },
    tapEvt(e) {
      const $tap = { X: 0, Y: 0 };
      const evt = (e.type === 'touchend') ? e.changedTouches[0] : e;
      const wrap = e.target.classList.contains('gd__tab_box') ? e.target : e.target.closest('.gd__tab_box');
      const sclBody = (this.$el.closest('.scl__body') === null) ? window : this.$el.closest('.scl__body');
      const sclTop = (sclBody === window) ? sclBody.scrollY : sclBody.scrollTop;
      $tap.X = evt.clientX;
      $tap.Y = evt.clientY;
      this.tabAry.push({
        X: ($tap.X - this.$getOffset(wrap).left),
        Y: ($tap.Y - (this.$getOffset(wrap).top - sclTop)),
      });
    },
  },
};
</script>
