<template>
  <div class="section">
    <div ref="character" id="character" class="character_face">
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
    <div ref="span" style="visibility: hidden; position: absolute; top: -999px;">
      <span>{{inpVal1}}.</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'test',
  data() {
    return {
      inpVal1: '',
      inpVal2: '',
      timer: null,
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
  },
};
</script>
