<script setup lang="ts">
    import FormulaireCommune from "../../components/FormulaireCommune.vue"
    defineProps(["id"])
</script>

<template>
        <FormulaireCommune :id="id"/>
</template>