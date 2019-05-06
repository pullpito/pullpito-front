<template>
    <b-button 
        class="button" 
        variant="primary" 
        :size="buttonSize" 
        type="submit" 
        :disabled="buttonDisabled" 
        @click="onClick">{{ label }}</b-button>
</template>

<script>
export default {
    props: {
        label: String,
        onClick: Function,
        buttonDisabled: Boolean,
        variant: String,
        size: String,
        type: String
    },
    data() {
        return {
            buttonSize: this.size || "lg"
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/main.scss";
    @import "@/assets/sass/components/_buttons.scss";
</style>
