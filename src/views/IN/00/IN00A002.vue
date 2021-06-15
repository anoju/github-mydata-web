<template>
  <kb-pop
    full
    title="홈 화면 편집"
  >
    <kb-pop-body>
      <div class="section">
        <div class="fz_12 fc_666"><strong>홈화면에서 보이기</strong></div>
        <draggable
          tag="div"
          class="list_edit_menu"
          :class="{empty:list.length === 0}"
          v-model="list"
          v-bind="dragOptions"
          :move="onMove"
          @start="isDragging=true"
          @end="isDragging=false"
        >
          <transition-group tag="ul" type="transition" name="drag-list">
            <li class="item" v-for="(element,i) in list" :key="i">
              <div class="tit">
                <strong>{{element.name}}</strong>
              </div>
            </li>
          </transition-group>
          <!-- <div
            slot="footer"
            role="group"
            key="footer"
            class="placeholder"
            v-show="list.length == 0"
          >여기에 놓으면 홈에서 보여요</div> -->
        </draggable>

        <div class="fz_12 fc_666 mg_t32"><strong>홈화면에서 감추기</strong></div>
        <draggable
          tag="div"
          class="list_edit_menu not_use"
          :class="{empty:list2.length === 0}"
          v-model="list2"
          v-bind="dragOptions"
          :move="onMove"
          @start="isDragging=true"
          @end="isDragging=false"
        >
          <transition-group tag="ul" type="transition" name="drag-list">
            <li class="item" v-for="(element,i) in list2" :key="i">
              <div class="tit">
                <strong>{{element.name}}</strong>
              </div>
            </li>
          </transition-group>
          <!-- <div
            slot="footer"
            role="group"
            key="footer"
            class="placeholder"
            v-show="list2.length == 0"
          >여기에 놓으면 홈에서 안보여요</div> -->
        </draggable>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button yellow>저장</kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
import draggable from 'vuedraggable';

export default {
  name: 'IN00A002',
  components: {
    draggable,
  },
  data() {
    return {
      isDragging: false,
      delayedDragging: false,
      list: [
        { name: '모르면 손해보는 요즘 테마', key: '1' },
        { name: '손쉬운 투자공식 모델포트폴리오', key: '2' },
        { name: '고수의 PICK', key: '3' },
        { name: '두근두근 이번 달 성적', key: '4' },
        { name: '달콤한 미래투자', key: '5' },
        { name: '운명을 건 투자 발굴', key: '6' },
      ],
      list2: [],
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'menuList',
        ghostClass: 'ghost',
      };
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
  methods: {
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
