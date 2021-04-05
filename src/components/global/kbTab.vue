<template>
  <div
    v-if="!linkTo"
    :id="href"
    ref="tabpanel"
    role="tabpanel"
    class="tab_panel"
    :class="{active:isActive}"
    :aria-labelledby="btnId"
    :aria-expanded="isActive?'true':'false'"
    :data-height="height"
  >
    <slot />
  </div>
</template>

<script>
let uuid = 0;
export default {
  name: 'kbTab',
  props: {
    title: { type: String, required: true },
    active: { type: Boolean, default: false },
    linkTo: { type: [String, Location], default: null },
  },
  data() {
    return {
      isActive: false,
      height: 0,
      style: null,
    };
  },
  computed: {
    listeners() {
      if (this.disabled) {
        return null;
      }
      return this.$listeners;
    },
    href() {
      let rtnVal = null;
      if (this.linkTo !== null) {
        rtnVal = `${this.linkTo}`;
      } else {
        // rtnVal = `#${this.title.toLowerCase().replace(/ /g, '-')}`
        rtnVal = `tab_panel_${this.uuid}`;
      }
      return rtnVal;
    },
    btnId() {
      let rtnVal = null;
      if (this.linkTo === null) {
        rtnVal = `tab_btn_${this.uuid}`;
      }
      return rtnVal;
    },
  },
  beforeCreate() {
    this.uuid = uuid.toString();
    uuid += 1;
  },
  mounted() {
    this.isActive = this.active;
    this.getHeight();
  },
  methods: {
    getHeight() {
      this.$el.setAttribute('style', 'display:block;height:0;opacity:0;');
      this.height = this.$el.scrollHeight;
      this.$el.removeAttribute('style');
    },
  },
};
</script>
