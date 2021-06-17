<template>
  <kb-pop
    bottom
    title="내역 메모"
    title-class="flex_ty"
  >
    <template slot="title_next">
      <kb-button aTag link blue class="fz_14 fw_bold" @click="memoDelete">{{memoDeleteText}}</kb-button>
    </template>
    <kb-pop-body>
      <div class="financial_memo">
        <p class="tit">카테고리 선택</p>
        <!-- 2021-06-16 카테고리 소분류 추가 -->
        <p class="mg_t12 mg_b8 fz_12 fc_666">입금</p>
        <!-- //2021-06-16 카테고리 소분류 추가 -->
        <ul class="memo_list" ref="memoList" :class="{editDelete:this.isDelete}">
          <!-- 내가 직접 입력한 항목만 클래스 self 추가 -->
          <li class="self">
            <a href="#" @click="memoClick($event)">
              <i class="ico1"></i>
              <p class="text">직접입력함
                최대10자</p>
            </a>
          </li>
          <li class="self">
            <a href="#" @click="memoClick($event)">
              <i class="ico2"></i>
              <p class="text">카테고리</p>
            </a>
          </li>
          <li class="self">
            <a href="#" @click="memoClick($event)">
              <i class="ico3"></i>
              <p class="text">카테고리</p>
            </a>
          </li>
          <li>
            <a href="#" @click="memoClick($event)">
              <i class="ico4"></i>
              <p class="text">카테고리</p>
            </a>
          </li>
          <li>
            <a href="#" @click="memoClick($event)">
              <i class="ico1"></i>
              <p class="text">직접입력함
                최대10자</p>
            </a>
          </li>
          <li>
            <a href="#" @click="memoClick($event)">
              <i class="ico2"></i>
              <p class="text">카테고리</p>
            </a>
          </li>
          <li>
            <a href="#" @click="memoClick($event)">
              <i class="ico4"></i>
              <p class="text">카테고리</p>
            </a>
          </li>
          <li>
            <a href="#" @click="memoClick($event,'self')">
              <i class="ico0"></i>
              <p class="text">+직접입력</p>
            </a>
          </li>
        </ul>

        <!-- 2021-06-16 카테고리 소분류 추가 -->
        <p class="mg_t24 mg_b8 fz_12 fc_666">출금</p>
        <!-- //2021-06-16 카테고리 소분류 추가 -->
        <ul class="memo_list" ref="memoList" :class="{editDelete:this.isDelete}">
          <!-- 내가 직접 입력한 항목만 클래스 self 추가 -->
          <li class="self">
            <a href="#" @click="memoClick($event)">
              <i class="ico1"></i>
              <p class="text">직접입력함
                최대10자</p>
            </a>
          </li>
          <li class="self">
            <a href="#" @click="memoClick($event)">
              <i class="ico2"></i>
              <p class="text">카테고리</p>
            </a>
          </li>
          <li class="self">
            <a href="#" @click="memoClick($event)">
              <i class="ico3"></i>
              <p class="text">카테고리</p>
            </a>
          </li>
          <li>
            <a href="#" @click="memoClick($event)">
              <i class="ico4"></i>
              <p class="text">카테고리</p>
            </a>
          </li>
          <li>
            <a href="#" @click="memoClick($event)">
              <i class="ico1"></i>
              <p class="text">직접입력함
                최대10자</p>
            </a>
          </li>
          <li>
            <a href="#" @click="memoClick($event)">
              <i class="ico2"></i>
              <p class="text">카테고리</p>
            </a>
          </li>
          <li>
            <a href="#" @click="memoClick($event)">
              <i class="ico4"></i>
              <p class="text">카테고리</p>
            </a>
          </li>
        </ul>

        <transition name="slide">
          <div class="self_memo" v-if="isSelf">
            <p class="tit">카테고리 직접 입력</p>
            <kb-input
              placeholder="최대 10자"
              title="카테고리 직접 입력"
            />
          </div>
        </transition>

        <div class="memo">
          <p class="tit">메모입력</p>
          <kb-input
            placeholder="최대 10자"
            title="카테고리 직접 입력"
          />
        </div>
      </div>

      <kb-button-wrap bottom-fixed>
        <kb-button yellow>확인</kb-button>
      </kb-button-wrap>

    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'FI04A006',
  props: {
  },
  data() {
    return {
      isDelete: false,
      isSelf: false,
      memoDeleteText: '카테고리 삭제',
    };
  },
  methods: {
    memoClick(e, name) {
      if (!this.isDelete) {
        // 일반 선택모드
        if (name === 'self') {
          this.isSelf = true;
        } else {
          this.isSelf = false;
        }

        this.$refs.memoList.getElementsByTagName('A').forEach((el) => {
          el.classList.remove('active');
        });

        const btn = e.target.tagName !== 'A' ? e.target.parentNode : e.target;
        btn.classList.add('active');
      } else {
        // 삭제모드
      }
    },

    memoDelete() {
      this.isDelete = !this.isDelete;
      if (this.isDelete) {
        this.memoDeleteText = '취소';
      } else {
        this.memoDeleteText = '카테고리 삭제';
      }
    },
  },
};
</script>
