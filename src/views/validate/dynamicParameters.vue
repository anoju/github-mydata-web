<template>
  <div>
    <div class="form-group">
      <label class="form__label">Validator name</label>
      <input class="form__input" v-model.trim="valName" @input="$v.$touch()"/>
    </div>
    <div class="form-group">
      <label class="form__label">Dynamic min length</label>
      <input class="form__input" type="number" v-model.number="minLength" @input="$v.$touch()"/>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Name</label>
      <input class="form__input" v-model.trim="$v.name.$model"/>
    </div>
    <div class="error" v-if="!$v.name[valName]">Field is invalid</div>
    <tree-view :data="$v" :options="{rootObjectKey: '$v', maxDepth: 2}"></tree-view>
  </div>
</template>

<script>
import { minLength } from 'vuelidate/lib/validators';

export default {
  name: 'dynamicParameters',
  data() {
    return {
      name: '',
      minLength: 3,
      valName: 'validatorName',
    };
  },
  validations() {
    return {
      name: {
        [this.valName]: minLength(this.minLength),
      },
    };
  },
};
</script>

<style>

</style>
