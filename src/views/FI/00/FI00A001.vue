<template>
  <div class="section">
    <kb-title-bar h3 title="금융생활안내" class="first" />
    <kb-swiper class="first" dir="rtl">
      <swiper-slide>
        <div class="dummy">
          금융생활 컨텐츠1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          금융생활 컨텐츠2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          금융생활 컨텐츠3
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          금융생활 컨텐츠4
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          금융생활 컨텐츠5
        </div>
      </swiper-slide>
    </kb-swiper>
    <kb-title-bar h3 title="금융 안내표" />
    <kb-table
      caption="금융 안내표"
      :col-width="['100px','auto']"
    >
      <tbody>
        <tr>
          <th scope="row">th1</th>
          <td><strong>3,000,000</strong> 원</td>
        </tr>
        <tr>
          <th scope="row">th2</th>
          <td><strong>3,000,000</strong> 원</td>
        </tr>
        <tr>
          <th scope="row">th3</th>
          <td><strong>3,000,000</strong> 원</td>
        </tr>
        <tr>
          <th scope="row">th4</th>
          <td><strong>3,000,000</strong> 원</td>
        </tr>
        <tr>
          <th scope="row">th5</th>
          <td><strong>3,000,000</strong> 원</td>
        </tr>
        <tr>
          <th scope="row">th6</th>
          <td><strong>3,000,000</strong> 원</td>
        </tr>
      </tbody>
    </kb-table>
  </div>
</template>
<script>
export default {
  inject: ['isSwiperTouch'],
};
</script>
