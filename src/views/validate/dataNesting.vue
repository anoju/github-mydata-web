<template>
  <div>
    <div class="form-group" :class="{ 'form-group--error': $v.form.nestedA.$error }">
      <label class="form__label">Nested A</label>
      <input class="form__input" v-model.trim="$v.form.nestedA.$model"/>
    </div>
    <div class="error" v-if="!$v.form.nestedA.required">Field is required.</div>
    <div class="form-group" :class="{ 'form-group--error': $v.form.nestedB.$error }">
      <label class="form__label">Nested B</label>
      <input class="form__input" v-model.trim="$v.form.nestedB.$model"/>
    </div>
    <div class="error" v-if="!$v.form.nestedB.required">Field is required.</div>
    <div class="form-group" :class="{ 'form-group--error': $v.form.$error }"></div>
    <div class="error" v-if="$v.form.$error">Form is invalid.</div>
    <tree-view :data="$v.form" :options="{rootObjectKey: '$v.form', maxDepth: 2}"></tree-view>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'dataNesting',
  data() {
    return {
      form: {
        nestedA: '',
        nestedB: '',
      },
    };
  },
  validations: {
    form: {
      nestedA: {
        required,
      },
      nestedB: {
        required,
      },
    },
  },
};
</script>
