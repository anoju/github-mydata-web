<template>
  <div class="section">
    <div class="flex_wrap align_center space_between">
      <kb-checkbox v-model="editable">드래그드랍 활성화</kb-checkbox>
      <kb-button line h28 @click="orderList">원래대로</kb-button>
    </div>
    <br>
    <div class="drag_sample" :class="{drag:editable}">
      <draggable class="list-group" tag="div" v-model="list" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
        <transition-group tag="ul" type="transition" :name="'drag-list'">
          <li class="list-group-item" v-for="element in list" :key="element.order">
            <div>
              <i class="ico" :class="element.fixed? 'fixed' : 'no'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
              {{element.name}}
            </div>
            <span class="badge">{{element.order}}</span>
          </li>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable';

const message = [
  'vue.draggable',
  'draggable',
  'component',
  'for',
  'vue.js 2.0',
  'based',
  'on',
  'Sortablejs',
];

export default {
  name: 'drag',
  components: {
    draggable,
  },
  data() {
    return {
      list: message.map((name, index) => ({ name, order: index + 1, fixed: false })),
      list2: [],
      editable: false,
      isDragging: false,
      delayedDragging: false,
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost',
      };
    },
    listString() {
      return JSON.stringify(this.list, null, 2);
    },
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    },
  },
  mounted() {
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => one.order - two.order);
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
  },
};
</script>
