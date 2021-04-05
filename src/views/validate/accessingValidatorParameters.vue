<template>
  <div>
    <div class="form-group" :class="{ 'form-group--error': $v.form.userName.$error }">
      <label class="form__label">Username</label>
      <input class="form__input" v-model.trim="$v.form.userName.$model"/>
    </div>
    <div class="error" v-if="!$v.form.userName.required">Field is required.</div>
    <div class="error" v-if="!$v.form.userName.minLength">Field must have at least {{ $v.form.userName.$params.minLength.min }} characters.</div>
    <div class="form-group" :class="{ 'form-group--error': $v.form.password.$error }">
      <label class="form__label">Password</label>
      <input class="form__input" v-model.trim="$v.form.password.$model" type="password"/>
    </div>
    <div class="error" v-if="!$v.form.password.required">Field is required.</div>
    <div class="error" v-if="!$v.form.password.minLength">Field must have at least {{ $v.form.password.$params.minLength.min }} characters.</div>
    <div class="form-group" :class="{ 'form-group--error': $v.form.$error }">
      <div class="error" v-if="$v.form.$error">Form is invalid.</div>
    </div>
    <tree-view :data="$v" :options="{rootObjectKey: '$v', maxDepth: 2}"></tree-view>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'accessingValidatorParameters',
  data() {
    return {
      form: {
        userName: '',
        password: '',
      },
    };
  },
  validations: {
    form: {
      userName: {
        required,
        minLength: minLength(5),
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
};
</script>

<style>

</style>
