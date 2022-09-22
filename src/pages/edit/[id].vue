<script setup lang="ts">
    import FicheOffreMaison from "../../components/FormulaireOffreMaison.vue"
    defineProps(["id"])
</script>

<template>
        <FicheOffreMaison :id="id"/>
</template>