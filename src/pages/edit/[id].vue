<script setup lang="ts">
    import FicheOffreMaison from "../../components/FicheOffreMaison.vue"
    defineProps(["id"])
</script>

<template>
        <FicheOffreMaison :id="id"/>
</template>