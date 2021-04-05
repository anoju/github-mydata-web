<template>
  <div class="section">
    <form @submit.prevent="submit" novalidate="true" class="validate_item">

      <kb-form-item
        label="Name"
      >
        <kb-validate-item
          success=""
          :error="errorNameMSG"
          class="t_left"
        >
          <kb-input
            placeholder="이름입력"
            title="이름입력"
            type="text"
            v-model.trim="$v.name.$model"
          />
        </kb-validate-item>
      </kb-form-item>

      <kb-form-item
        label="Age"
      >
        <kb-validate-item
          success=""
          :error="errorAgeMSG"
          class="t_left"
        >
          <kb-input
            placeholder="나이입력"
            title="나이입력"
            type="number"
            v-model.trim.lazy="$v.age.$model"
          />
        </kb-validate-item>
      </kb-form-item>

      <!-- email -->
      <kb-form-item
        label="Email"
      >
        <kb-validate-item
          success=""
          :error="errorEmailMSG"
          class="t_left"
        >
          <kb-input
            placeholder="이메일입력"
            title="이메일입력"
            type="email"
            v-model.trim.lazy="$v.email.$model"
          />
        </kb-validate-item>
      </kb-form-item>

      <!-- password -->
      <kb-form-item
        label="Password"
      >
        <kb-validate-item
          success=""
          :error="errorPasswordMSG"
          class="t_left"
        >
          <kb-input
            placeholder="패스워드입력"
            title="패스워드입력"
            type="password"
            v-model.trim.lazy="$v.password.$model"
          />
        </kb-validate-item>
      </kb-form-item>
      <br>
      <kb-button
        type="submit"
        color="blue"
        :disabled="submitStatus === 'PENDING'"
      >
        Submit
      </kb-button>
      <p class="error_txt" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
      <p class="error_txt" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
      <p class="error_txt" v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
  </div>
</template>

<script>
import {
  required,
  minLength,
  between,
  email,
} from 'vuelidate/lib/validators';

const passwordRule = (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value); // 최소 8 자, 최소 하나의 문자 및 하나의 숫자 :
export default {
  name: 'formSubmission',
  data() {
    return {
      name: '',
      age: 0,
      email: '',
      submitStatus: null,
      password: null,
    };
  },
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
  computed: {
    errorNameMSG() {
      const vm = this;
      if (!vm.$v.name.required) return 'Field is required';
      if (!vm.$v.name.minLength) {
        return `Name must have at least
        ${vm.$v.name.$params.minLength.min} letters.`;
      }
      return '';
    },
    errorAgeMSG() {
      const vm = this;
      if (!vm.$v.age.between) {
        return ` Must be between ${vm.$v.age.$params.between.min} and
        ${vm.$v.age.$params.between.max}`;
      }

      return '';
    },
    errorEmailMSG() {
      const vm = this;
      if (!vm.$v.email.required) return 'Field is required';
      if (vm.$v.email.$error) return 'Not email format';
      return '';
    },
    errorPasswordMSG() {
      const vm = this;
      if (!vm.$v.password.required) return 'Field is required';
      if (vm.$v.password.$error) return 'Password Error';
      return '';
    },
  },
  methods: {
    submit() {
      console.log('submit!');
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING';
        setTimeout(() => {
          this.submitStatus = 'OK';
        }, 500);
      }
    },
  },
};
</script>

<style>

</style>
