<script setup lang="ts">
    import card from "@/components/card.vue";
    const res = await fetch("/maisons.json")
    const maisons = await res.json()
</script>

<template>
    <div class="p-2">
        <h1 class="text-xl">Page Liste-Fetch</h1>
            <card v-for="maison in maisons" :key="maison.nom" v-bind="maison"/>
    </div>
</template>