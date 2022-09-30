<script setup lang="ts">
    import {ref} from "@vue/reactivity";
    import card from "./card.vue";
    import { supabase } from "../supabase";
    const maison = ref({});

    async function upsertMaison(dataForm, node) {
    const { data, error } = await supabase.from("Maison").upsert(dataForm);
    if (error) node.setErrors([error.message])
}
</script>

<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">Résultat (Prévisualisation)</h2>
            <card v-bind="maison"/>
        </div>
        <div class="p-2">
            <FormKit @submit="upsertMaison" type="form" v-model="maison"
            :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }" 
            :config="{classes: {input: 'p-1 rounded border-gray-100 shadow-lg border hover:bg-indigo-300', label:'text-indigo-200'}}">
                <FormKit name="nomMaison" label="nom" />
                <FormKit name="adresse" label="adresse" />
                <FormKit name="nbrChambres" label="Nombre de chambres" type="number" />
                <FormKit name="nbrSDB" label="Nombre de salles de bain" type="number" />
                <FormKit name="prix" label="prix" type="number"/>
                <FormKit name="favoris" label="mettre en valeur" type="checkbox"
                :submit-attrs="{ classes: {input: 'bg-red-100 p-3 rounded'}}"/>
            </FormKit>
        </div>
    </div>
</template>