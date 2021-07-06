<template>
  <div>
    <h2 class="gd__h1">processUtil.js -> await 활용</h2>
    <div class="gd__wrap">
      <dl class="section">
        <dt>
          <h3 class="gd__h2">단순대기(sleep 용도)</h3>
        </dt>
        <dd>
          <p>
            <input type="number" ref="timeout"> 초 대기하기
            <kb-button
              color="blue"
              size="h32"
              @click="sleep"
            >
              대기시작
            </kb-button>
          </p>

          <p>
            <br>
            <span ref="info1">시간 입력후 대기시작 클릭</span>
          </p>
        </dd>

        <dt>
          <h3 class="gd__h2">조건부 대기</h3>
        </dt>
        <dd>
          <p>
            5초동안 <input type="number" ref="until"> 까지 더하면 success(then) / 아니면 fail(catch)<br>
            <kb-button
              color="blue"
              size="h32"
              @click="condition"
            >
              시작
            </kb-button>
          </p>

          <p>
            상태 : <span ref="info2Status">대기중</span>
          </p>
          <p>
            현재까지 계산된수치 : <span ref="info2Total"></span>
          </p>
        </dd>
      </dl>
    </div>

  </div>
</template>
<script>

import processUtil from '@/utils/processUtil';

export default {
  name: 'await',
  data() {
    return {
      tick: 50, // await 수행 루프 재시도 tick
    };
  },
  methods: {
    /**
     * 단순 sleep 용도로 활용
     */
    sleep() {
      const num = this.$refs.timeout.value;
      if (Number.isNaN(num) || num === '') {
        return;
      }

      (async () => {
        this.$refs.info1.innerText = `${num} 초 대기후 다음라인 수행`;

        await processUtil.await(null, num * 1000, this.tick)
          .then((res) => {
            console.log(`대기시간 : ${res}ms`);
          });

        this.$refs.info1.innerText = `${num} 초 대기완료`;
      })();
    },

    /**
     * 조건부 대기로 활용
     */
    condition() {
      const until = this.$refs.until.value;
      if (Number.isNaN(until) || until === '') {
        return;
      }

      (async () => {
        this.$refs.info2Status.innerText = '수행중';
        let total = 0;
        await processUtil.await(() => {
          total += 1;
          this.$refs.info2Total.innerText = `${total}`;
          if (total >= until) {
            return true;
          }
          return false;
        }, 5000, this.tick)
          .then((res) => {
            console.log(res);
            this.$refs.info2Status.innerText = `수행성공(then) / 소요시간:${res}(ms)`;
          })
          .catch((error) => {
            this.$refs.info2Status.innerText = `수행실패(catch) / 소요시간:${error}(ms)`;
          });
      })();
    },
  },
};
</script>
