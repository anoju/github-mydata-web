<template>
  <kb-page page-title="코딩리스트">
    <kb-page-body>
      <div class="section pd_bottom">
        <div class="code_status">
          <div class="info">
            <span class="total">완료본수 : <strong>{{ comLength }}</strong></span>
            <span class="ing">진행률 : <strong v-scroll-number="{to:ingPercent,delay:500}">{{ ingPercent }}</strong>%</span>
            <span class="total">총본수 : <strong>{{ totalLength }}</strong></span>
          </div>
          <div class="bar"><div ref="bar"></div></div>
        </div>
        <br>
        <h3>코딩화면</h3>
        <div class="code_list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>타입</th>
                <th>1뎁스/2뎁스/3뎁스/4뎁스</th>
                <!-- <th>2뎁스</th>
                <th>3뎁스</th>
                <th>4뎁스</th> -->
                <th>완료일</th>
                <th>수정일</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr class="tr" v-for="(item, i) in items" :key="i">
                <template v-if="item.type === 'line'">
                  <td class="line" colspan="6"></td>
                </template>
                <template v-else>
                  <td>
                    <router-link v-if="item.type === 'main'" to="TO/00" target="_blank">
                      {{ item.pageID }}
                    </router-link>
                    <router-link
                      v-if="item.type === 'page'"
                      :to="`/${item.pageID.substr(0, 2)}/${item.pageID.substr(
                        2,
                        2
                      )}/${item.pageID}`"
                      target="_blank"
                    >
                      {{ item.pageID }}
                    </router-link>
                    <a
                      v-if="item.type === 'pop'"
                      href="#"
                      @click="
                        popOpen(
                          $event,
                          `views/${item.pageID.substr(
                            0,
                            2
                          )}/${item.pageID.substr(2, 2)}/${item.pageID}.vue`
                        )
                      "
                    >
                      {{ item.pageID }}
                    </a>
                  </td>
                  <td :class="{sub:item.type === 'page'}">{{ item.type }}</td>
                  <td class="t_left">
                    {{ item.depth1 }}
                    <span v-if="item.depth2"> / {{ item.depth2 }}</span>
                    <span v-if="item.depth3"> / {{ item.depth3 }}</span>
                    <span v-if="item.depth4"> / {{ item.depth4 }}</span>
                  </td>
                  <td>{{ item.complete }}</td>
                  <td>{{ item.change }}</td>
                  <td>{{ item.etc }}</td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
        <br>
        <h3>기타 <small>(스크립트로 띄우는 화면)</small></h3>
        <div class="code_list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>타입</th>
                <th>1뎁스/2뎁스/3뎁스/4뎁스</th>
                <!-- <th>2뎁스</th>
                <th>3뎁스</th>
                <th>4뎁스</th> -->
                <th>완료일</th>
                <th>수정일</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody ref="tbody">
              <tr>
                <td>
                  <a
                    href="#"
                    @click="showLoading('이곳에 안내메세지를 입력 해주세요.')"
                    style="position:relative;z-index:9999;"
                  >
                    UT15B001
                  </a>
                </td>
                <td>Loaing</td>
                <td class="t_left">공통 / 기본로딩</td>
                <td>2020-03-08</td>
                <td></td>
                <td>
                  <a
                    href="#"
                    @click="hideLoading"
                    style="position:relative;z-index:9999;"
                  >
                    로딩닫기
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="#"
                    @click="showLoading2('00개의 금융사를 연동하고 있습니다.')"
                    style="position:relative;z-index:9999;"
                  >
                    UT15B002
                  </a>
                </td>
                <td>Loaing</td>
                <td class="t_left">공통 / 연동로딩</td>
                <td>2020-03-08</td>
                <td></td>
                <td>
                  <a
                    href="#"
                    @click="showLoading2('18개의 금융사를 연동하고 있습니다.')"
                    style="position:relative;z-index:9999;"
                  >
                    텍스트 바뀜
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" @click="showAlert1">UT15C003</a>
                </td>
                <td>Alert</td>
                <td class="t_left">공통 / 알림</td>
                <td>2020-03-08</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <br>
        <h3>가이드 <small>(진행률에서 제외)</small></h3>
        <div class="code_list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>타입</th>
                <th>1뎁스/2뎁스/3뎁스/4뎁스</th>
                <!-- <th>2뎁스</th>
                <th>3뎁스</th>
                <th>4뎁스</th> -->
                <th>완료일</th>
                <th>수정일</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr class="tr" v-for="(item, i) in itemsGuide" :key="i">
                <template v-if="item.type === 'line'">
                  <td class="line" colspan="6"></td>
                </template>
                <template v-else>
                  <td>
                    <a
                      v-if="item.type === 'guide'"
                      :href="`/guide/${item.pageID}`"
                      target="_blank"
                    >
                      {{ item.pageID }}
                    </a>
                    <a
                      v-if="item.type === 'guide-pop'"
                      href="#"
                      @click="
                        popOpen($event, `views/guide/pop/${item.pageID}.vue`)
                      "
                    >
                      {{ item.pageID }}
                    </a>
                  </td>
                  <td>{{ item.type }}</td>
                  <td class="t_left">
                    {{ item.depth1 }}
                    <span v-if="item.depth2"> / {{ item.depth2 }}</span>
                    <span v-if="item.depth3"> / {{ item.depth3 }}</span>
                    <span v-if="item.depth4"> / {{ item.depth4 }}</span>
                  </td>
                  <td>{{ item.complete }}</td>
                  <td>{{ item.change }}</td>
                  <td>{{ item.etc }}</td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
import pubList from '@/assets/js/pubList';
import pubGuide from '@/assets/js/pubGuide';

export default {
  name: 'pubList',
  data() {
    return {
      items: pubList,
      itemsGuide: pubGuide,
      newPubList: [],
      comLength: 0,
      totalLength: 0,
      ingPercent: 0,
    };
  },
  mounted() {
    const newPubList = pubList.filter((item) => {
      if (item.type !== 'line') {
        return item;
      }
      return null;
    });
    const comPubList = newPubList.filter((item) => {
      if (item.complete !== null && item.complete !== '') {
        return item;
      }
      return null;
    });
    const etcTbody = this.$refs.tbody;
    let etcComplateLength = 0;
    etcTbody.childNodes.forEach((el) => {
      if (el.childNodes[3].innerText !== '') {
        etcComplateLength += 1;
      }
    });
    this.totalLength = newPubList.length + etcTbody.childNodes.length;
    this.comLength = comPubList.length + etcComplateLength;
    this.ingPercent = Math.round((this.comLength / this.totalLength) * 100);
    if (this.ingPercent === 100) { this.ingPercent = Math.floor((this.comLength / this.totalLength) * 100); }
    const $el = this.$refs.bar;
    this.$anime({
      targets: $el,
      width: `${this.ingPercent}%`,
      duration: 1000,
      delay: 500,
      easing: 'easeInOutQuad',
    });
  },
  methods: {
    popOpen(e, value) {
      e.preventDefault();
      const el = e.target;
      this.$modal({
        component: () => import('@/' + value),
        returnFocus: el,
      });
    },
    showLoading(txt) {
      this.$loading(true, txt);
    },
    showLoading2(txt) {
      this.$loading(true, txt, 'B');
    },
    hideLoading() {
      this.$loading(false);
    },
    showAlert1(el) {
      this.$alert('원활한 서비스 제공을 위해 최선을 다하고 있습니다. 잠시 후 이용해주세요.', el, '이용에 불편을 드려 죄송합니다.').then(() => {
        console.log('확인');
      });
    },
  },
};
</script>
