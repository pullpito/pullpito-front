<template>
    <b-form-group id="fieldset-1" :label="label" :label-for="inputId" :description="description">
        <b-form-input :id="inputId" v-model="value" :state="state" :placeholder="placeholder" :type="type" @input="handleModel" />
        <b-form-invalid-feedback> {{ elementError }} </b-form-invalid-feedback>
    </b-form-group>
</template>

<style lang="sass" scoped>
    @import "@/assets/sass/main.scss";
    @import "@/assets/sass/components/_forms.scss";
</style>

<script>
export default {
    props: {
        value: String,
        label: String,
        errorMessage: String,
        state: Boolean,
        type: String,
        placeholder: String,
        description: String
    },
    data() {
        return {
            inputId: "input-" + (Math.floor(Math.random()*10000) + 1),
            elementModel: this.model,
            elementError: this.errorMessage
        }
    },
    methods: {
        handleModel(value) {
            this.$emit('input', value)
        }
    }
}
</script>


