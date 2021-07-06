<template>
  <kb-page page-title="개발테스트">
    <kb-page-body>
      <kb-tabs-link
        class="first"
        fixed
      >
        <div class="tab" role="presentation">
          <router-link to="/dev/axios">
            <span>axios</span>
          </router-link>
        </div>
        <div class="tab" role="presentation">
          <router-link to="/dev/await">
            <span>await</span>
          </router-link>
        </div>
        <div class="tab" role="presentation">
          <router-link to="/dev/chart">
            <span>chart</span>
          </router-link>
        </div>
      </kb-tabs-link>

    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'dev',
};
</script>
<style>
.section dd + dt {
  margin-top:100px;
}
</style>
