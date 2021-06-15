<template>
  <kb-pop
    full
    title="순서 편집"
  >
    <kb-pop-body>
      <div class="section">
        <div class="drag_list" :class="{drag:editable}">
          <div class="top">
            <kb-button aTag not>맨위</kb-button>
            <i class="line"></i>
            <kb-button aTag not>위</kb-button>
            <i class="line"></i>
            <kb-button aTag not>아래</kb-button>
            <i class="line"></i>
            <kb-button aTag not>맨아래</kb-button>
          </div>
          <draggable class="list_group" tag="div" v-model="list" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
            <transition-group tag="ul" type="transition" :name="'drag-list'">
              <li class="list_group_item" v-for="element in list" :key="element.order">
                <kb-checkbox
                  v-model="checkVal1"
                  value="1"
                  small
                >
                  <div class="text_box">
                    <p class="tit">{{element.data.name}}</p>
                  </div>
                  <div class="money_box">
                    <p class="money">{{element.data.money}}원</p>
                    <!--
                      상승 : fc_up
                      하락 : fc_down
                    -->
                    <p class="small" :class="{fc_up : element.data.updown, fc_down : !element.updown}">{{element.data.percents}}</p>
                  </div>
                </kb-checkbox>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <i class="ico_drag"></i>
              </li>
            </transition-group>
          </draggable>
        </div>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button line>
        취소
      </kb-button>
      <kb-button yellow>
        저장
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
import draggable from 'vuedraggable';

const message = [
  {
    name: '삼성전자1', money: '59,300', percents: '+13.25%', updown: true,
  },
  {
    name: '삼성전자2', money: '59,300', percents: '+13.25%', updown: false,
  },
  {
    name: '삼성전자3', money: '59,300', percents: '+13.25%', updown: true,
  },
  {
    name: '삼성전자4', money: '59,300', percents: '+13.25%', updown: false,
  },
  {
    name: '삼성전자5', money: '59,300', percents: '+13.25%', updown: true,
  },
  {
    name: '삼성전자6', money: '59,300', percents: '+13.25%', updown: false,
  },
];

export default {
  name: 'drag',
  components: {
    draggable,
  },
  data() {
    return {
      checkVal1: false,
      list: message.map((data, index) => ({ data, order: index + 1, fixed: false })),
      list2: [],
      editable: true,
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
