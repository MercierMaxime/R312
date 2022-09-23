<script setup lang="ts">
    import { supabase } from "../supabase";
    console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
    const maisons = []; // à remplacer par l'appel à Supabase
    console.log(card.props)
</script>

<template>
    <div class="p-2">
        <h1 class="text-xl">Page Supabase</h1>
            <card v-for="maison in maisons" :key="maison.nom" v-bind="maison"/>
    </div>
</template>