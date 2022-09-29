<script setup lang="ts">
    import { supabase } from "../supabase";
    import card from "../components/card.vue"

    console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code

    let { data: Maison, error } = await supabase

    .from('Maison')
    .select('*') // à remplacer par l'appel à Supabase
    console.log(Maison)
</script>

<template>
    <div class="p-2">
        <h1 class="text-xl">Page Supabase</h1>
        <div v-for="maison in Maison" :key="maison.nomMaison">
            <Card class="w-1/2" v-bind="maison"/>
        </div>
    </div>
</template>