<template>
  <div class="basic form">
    <div>
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">
          Name
          <input type="text" class="form__input" v-model.trim="$v.name.$model" />
        </label>
      </div>
      <div class="error" v-if="!$v.name.required">Field is required</div>
      <div class="error" v-if="!$v.name.minLength">
        Name must have at least
        {{$v.name.$params.minLength.min}} letters.
      </div>
      <tree-view :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></tree-view>
      <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
        <label class="form__label">
          Age
          <input type="number" class="form__input" v-model.trim.lazy="$v.age.$model" />
        </label>
      </div>
      <div class="error" v-if="!$v.age.between">
        Must be between {{$v.age.$params.between.min}} and
        {{$v.age.$params.between.max}}
      </div><span tabindex="0">Blur to see changes</span>
      <tree-view :data="$v.age" :options="{rootObjectKey: '$v.age', maxDepth: 2}"></tree-view>
      <!-- email -->
      <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
        <label class="form__label">
          Email
          <input type="email" class="form__input" v-model.trim.lazy="$v.email.$model" />
        </label>
      </div>
      <div class="error" v-if="!$v.email.required">Field is required</div>
      <div class="error" v-if="$v.email.$error">
        Not email format
      </div>
      <tree-view :data="$v.email" :options="{rootObjectKey: '$v.email', maxDepth: 2}"></tree-view>
      <!-- password -->
      <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
        <label class="form__label">
          Password
          <input class="form__input" type="password" v-model.trim.lazy="$v.password.$model" />
        </label>
      </div>
      <div class="error" v-if="!$v.password.required">Field is required</div>
      <div class="error" v-if="$v.password.$error">
        Password Error
      </div>
      <tree-view :data="$v.password" :options="{rootObjectKey: '$v.password', maxDepth: 2}"></tree-view>
    </div>
  </div>
</template>

<script>
import {
  required, minLength, between, email,
} from 'vuelidate/lib/validators';

const passwordRule = (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value); // 최소 8 자, 최소 하나의 문자 및 하나의 숫자 :

export default {
  name: 'basicForm',
  data: () => ({
    name: '',
    age: 0,
    email: '',
    password: null,
  }),
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    age: {
      between: between(20, 30),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      passwordRule,
    },
  },
  methods: {

  },
};
</script>

<style>

</style>
