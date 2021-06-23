<template>
  <router-link
    v-if="!!to"
    ref="button"
    :to="to"
    :class="buttonClass"
    :title="title"
    @focus="isFocus = true"
    @blur="isFocus = false"
  >
    <slot />
  </router-link>
  <a
    v-else-if="aTag"
    ref="button"
    role="button"
    :href="href"
    :class="buttonClass"
    :title="title"
    v-on="listeners"
    @focus="isFocus = true"
    @blur="isFocus = false"
    @click="clickEvt"
  >
    <template v-if="filter">
      <i class="line" /><i class="line" /><i class="line" />
    </template>
    <slot />
    <i
      v-if="isClick"
      :style="{width:`${btnInW}px`,height:`${btnInH}px`,left:`${btnInX}px`,top:`${btnInY}px`}"
      class="ui-bt-click-in animate"
    />
  </a>
  <button
    v-else
    ref="button"
    :type="type"
    :class="buttonClass"
    :disabled="disabled"
    :title="title"
    v-on="listeners"
    @focus="isFocus = true"
    @blur="isFocus = false"
    @click="clickEvt"
  >
    <template v-if="filter">
      <i class="line" /><i class="line" /><i class="line" />
    </template>
    <slot />
    <i
      v-if="isClick"
      :style="{width:`${btnInW}px`,height:`${btnInH}px`,left:`${btnInX}px`,top:`${btnInY}px`}"
      class="ui-bt-click-in animate"
    />
  </button>
</template>

<script>
export default {
  name: 'KbButton',
  props: {
    type: { type: String, default: 'button' },
    title: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    noEffect: { type: Boolean, default: false },

    // 링크이동
    to: { type: String, default: null },

    // a태그 설정(링크이동X)
    aTag: { type: Boolean, default: false },
    href: { type: String, default: '#' },

    not: { type: Boolean, default: false },
    link: { type: Boolean, default: false },
    line: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },

    like: { type: Boolean, default: false },
    like2: { type: Boolean, default: false },
    star: { type: Boolean, default: false },
    bookmark: { type: Boolean, default: false },
    filter: { type: Boolean, default: false },

    // 색상
    color: { type: String, default: null },
    yellow: { type: Boolean, default: false },
    blue: { type: Boolean, default: false },
    red: { type: Boolean, default: false },
    green: { type: Boolean, default: false },
    purple: { type: Boolean, default: false },
    dark: { type: Boolean, default: false },
    up: { type: Boolean, default: false }, // 구매 컬러
    down: { type: Boolean, default: false }, // 판매 컬러

    // 크기
    size: { type: String, default: null },
    large: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    h32: { type: Boolean, default: false },
    h40: { type: Boolean, default: false },
    h28: { type: Boolean, default: false },
  },
  data() {
    return {
      colorType: ['yellow', 'blue', 'blue', 'red', 'green', 'purple', 'dark', 'up', 'down'],
      sizeType: ['h40', 'h32', 'h28', 'large', 'small'],
      isFocus: false,
      isClick: false,
      btnInW: 0,
      btnInH: 0,
      btnInX: 0,
      btnInY: 0,
      btnTxt: null,
    };
  },
  computed: {
    listeners() {
      if (this.disabled) {
        return null;
      }
      return this.$listeners;
    },
    $color() {
      if (this.color) {
        if (this.colorType.indexOf(this.color) > -1) {
          return this.color;
        }
        return 'default';
      }
      if (this.yellow) return 'yellow';
      if (this.blue) return 'blue';
      if (this.red) return 'red';
      if (this.green) return 'green';
      if (this.purple) return 'purple';
      if (this.dark) return 'dark';
      if (this.up) return 'up';
      if (this.down) return 'down';
      return 'default';
    },
    $size() {
      if (this.size) {
        if (this.sizeType.indexOf(this.size) > -1) {
          return this.size;
        }
        return null;
      }
      if (this.large) return 'large';
      if (this.small) return 'small';
      if (this.h40) return 'h40';
      if (this.h32) return 'h32';
      if (this.h28) return 'h28';
      return null;
    },
    buttonClass() {
      let $class = this.btnClass;
      if (this.not)$class = this.notClass;
      if (this.link)$class = this.linkClass;
      return $class;
    },
    btnClass() {
      return [
        'button',
        {
          focus: this.isFocus,
          not: this.not,
          line: this.line,
          round: this.round,
          shadow: this.shadow,
          disabled: this.disabled,
          like: this.like,
          like2: this.like2,
          star: this.star,
          bookmark: this.bookmark,
          filter: this.filter,
        },
        'bt_' + this.$color,
        this.$size,
      ];
    },
    notClass() {
      return [
        'button',
        {
          focus: this.isFocus,
          not: this.not,
          disabled: this.disabled,
        },
      ];
    },
    linkClass() {
      return [
        'btn_link',
        {
          focus: this.isFocus,
          line: this.line,
          disabled: this.disabled,
        },
        'bt_' + this.$color,
      ];
    },
    // ,
    // inStyle() {
    //     const btInStyle = []
    //     if (this.btnInW > 0) btInStyle.push(`width:${this.btnInW}px`)
    //     if (this.btnInH > 0) btInStyle.push(`height:${this.btnInH}px`)
    //     console.log(this.btnInW, [btInStyle.join(',')])
    //     return btInStyle
    // }
  },
  methods: {
    clickEvt(e) {
      let isChecked = false;
      if (this.aTag && this.href === '#') e.preventDefault();
      if (!this.isClick && !this.disabled) {
        if (this.$el.classList.contains('checked'))isChecked = true;
        const { $el } = this;
        this.btnTxt = $el.textContent;
        setTimeout(() => {
          if (this.btnTxt !== $el.textContent) return;
          const $btnMax = Math.max($el.offsetWidth, $el.offsetHeight);
          this.btnInW = $btnMax;
          this.btnInH = $btnMax;
          this.btnInX = e.clientX - ($el.getBoundingClientRect().left) - ($btnMax / 2);
          this.btnInY = e.clientY - ($el.getBoundingClientRect().top) - ($btnMax / 2);
          if (!this.noEffect) this.appendEffect();
        }, 10);
        if ((this.like || this.like2 || this.star || this.bookmark) && !isChecked) {
          let checkedTimerNum = 0;
          const checkedTimer = setInterval(() => {
            if (this.$el.classList.contains('checked')) {
              if (this.like) this.$like('heart');
              if (this.like2) this.$like('hands');
              if (this.star) this.$like('star');
              if (this.bookmark) this.$like('bookmark');
              clearInterval(checkedTimer);
            }
            checkedTimerNum += 1;
            if (checkedTimerNum > 30)clearInterval(checkedTimer);
          }, 100);
        }
      }
    },
    appendEffect() {
      this.isClick = true;
      setTimeout(() => {
        this.isClick = false;
      }, 650);
    },
  },
};
</script>
