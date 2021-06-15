<template>
  <transition name="fade">
    <div
      v-if="loading"
      class="loading_layer"
      :class="{bottom:type == 'C'}"
    >
      <div class="tl">
        <div v-if="type == 'A'">
          <div class="loading_box">
            <div
              class="loading_icon"
              role="img"
              aria-label="화면을 불러오는중입니다."
            >
              <div>
                <i /><i /><i />
              </div>
            </div>
            <div
              v-if="text != '' && text != undefined"
              class="loading_txt"
            >
              {{ text }}
            </div>
          </div>
        </div>

        <div v-if="type == 'B'" class="ty2">
          <div
            v-if="text != '' && text != undefined"
            class="loading_txt"
          >
            {{ text }}
          </div>
          <div
            class="loading_bar"
            role="img"
            aria-label="화면을 불러오는중입니다."
          >
            <div />
          </div>
        </div>

        <div v-if="type == 'C'">
          <div class="loading_box2">
            <div
              class="loading_icon2"
              role="img"
              aria-label="화면을 불러오는중입니다."
            >
            </div>
            <div
              v-if="text != '' && text != undefined"
              class="loading_txt2"
            >
              {{ text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      load: 0,
      text: '',
      type: null,
    };
  },
  computed: {
    loading() {
      // return this.load > 0;
      return this.load;
    },
  },
  created() {
    this.$loaderInstance = this;
  },
  methods: {
    increaseLoad() {
      // this.load += 1;
      this.load = true;
    },
    decreaseLoad() {
      // if (this.load > 0) {
      //   this.load -= 1;
      // }
      if (this.load) this.load = false;
    },
    addLoading(txt, type) {
      this.text = txt;
      this.type = type;
    },
  },
};
</script>
