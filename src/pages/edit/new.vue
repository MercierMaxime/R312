<script setup lang="ts">
    import {ref} from "@vue/reactivity";
    import listemaisons from "../simple.vue"

    const maison = ref({});
</script>

<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">Résultat (Prévisualisation)</h2>
            <listemaisons v-bind="maison"/>
        </div>
        <div class="p-2">
            <FormKit type="form" v-model="maison">
                <FormKit name="nom" label="nom"/>
                <FormKit name="prix" label="prix" type="number"/>
                <FormKit name="favori" label="mettre en valeur" type="checkbox"/>
            </FormKit>
        </div>
    </div>
</template>