<script setup lang="ts">
    import FormulaireQuartier from "../../components/FormulaireQuartier.vue"
    defineProps(["id"])
</script>

<template>
        <FormulaireQuartier :id="id"/>
</template>