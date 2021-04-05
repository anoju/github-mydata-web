<template>
  <div>
    <div class="form-group" :class="{ 'form-group--error': $v.fieldA.$error }">
      <label class="form__label">Field A</label>
      <input class="form__input" v-model.trim="$v.fieldA.$model"/>
    </div>
    <div class="error" v-if="!$v.fieldA.required">Field A is required.</div>
    <div class="error" v-if="!$v.fieldA.minLength">Field A must have at least {{$v.fieldA.$params.minLength.min}} letters.</div>
    <div class="form-group" :class="{ 'form-group--error': $v.fieldB.$error }">
      <label class="form__label">Field B</label>
      <input class="form__input" v-model.trim="$v.fieldB.$model"/>
    </div>
    <div class="error" v-if="!$v.fieldB.required">Field B is required.</div>
    <div class="error" v-if="!$v.fieldB.minLength">Field B must have at least {{$v.fieldB.$params.minLength.min}} letters.</div>
    <div class="form-group">
      <button class="button" @click="$v.$reset">$reset</button>
    </div>
    <div class="form-group">
      <label class="form__label">Validation status:</label>
      <ul class="list__ul">
        <li v-if="$v.fieldA.$invalid">Field A is <kbd>$invalid</kbd>.</li>
        <li v-if="$v.fieldA.$error">Field A has <kbd>$error</kbd> and <kbd>$anyError</kbd>.</li>
        <li v-if="$v.fieldB.$invalid">Field B is <kbd>$invalid</kbd>.</li>
        <li v-if="$v.fieldB.$error">Field B has <kbd>$error</kbd> and <kbd>$anyError</kbd>.</li>
        <li v-if="$v.$invalid">Form is <kbd>$invalid</kbd>.</li>
        <li v-else>All fine.</li>
        <li v-if="$v.$error"><strong>Form has <kbd>$error</kbd>.</strong></li>
        <li v-if="$v.$anyError"><strong>Form has <kbd>$anyError</kbd>.</strong></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'errorVsAnyError',
  data() {
    return {
      fieldA: '',
      fieldB: '',
    };
  },
  validations: {
    fieldA: {
      required,
      minLength: minLength(3),
    },
    fieldB: {
      required,
      minLength: minLength(3),
    },
  },
};
</script>

<style>

</style>
