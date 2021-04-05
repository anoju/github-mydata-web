<template>
  <div>
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error}">
      <label class="form__label">Name</label>
      <input class="form__input" v-model.trim="$v.name.$model"/>
    </div>
    <div class="form-group">
      <label class="form__label" for="hasDesc">Has description?</label>
      <div class="toggle">
        <input id="hasDesc" type="checkbox" v-model="hasDescription"/>
        <label for="hasDesc">
          <div class="toggle__switch"></div>
        </label>
      </div>
    </div>
    <div class="form-group" v-if="hasDescription" :class="{ 'form-group--error': $v.description.$error}">
      <label class="form__label">Description</label>
      <input class="form__input" v-model.trim="$v.description.$model"/>
    </div>
    <tree-view :data="$v" :options="{rootObjectKey: '$v', maxDepth: 2}"></tree-view>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'dynamicValidationSchema',
  data() {
    return {
      hasDescription: false,
      name: '',
      description: '',
    };
  },
  validations() {
    if (!this.hasDescription) {
      return {
        name: {
          required,
        },
      };
    }
    return {
      name: {
        required,
      },
      description: {
        required,
      },
    };
  },
};
</script>

<style>

</style>
