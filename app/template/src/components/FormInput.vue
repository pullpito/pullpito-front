<template>
    <b-form-group id="fieldset-1" :label="label" :label-for="inputId" :description="description">
        <b-form-input :id="inputId" v-model="elementModel" :state="state" :placeholder="placeholder" :type="type" />
        <b-form-invalid-feedback> {{ elementError }} </b-form-invalid-feedback>
    </b-form-group>
</template>

<script>
export default {
    props: {
        label: String,
        errorMessage: String,
        model: String,
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
    }
}
</script>
