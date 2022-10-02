<script setup lang="ts">
    import { ref } from "@vue/reactivity"; 
    import { supabase } from "@/supabase";
    import { useRouter } from "vue-router";
    const commune = ref({});

    async function upsertCommune(dataForm, node) {
    const { data, error } = await supabase.from("Commune").upsert(dataForm);
    if (error) node.setErrors([error.message])
    else {
            node.setErrors([]);
            router.push({ name: "edit-id", params: { id: data[0].id } });
        }
    }
</script>

<template>
<div>
    <div class="p-2">
    <h2 class="text-2xl">Insérer commune</h2>
    </div>

    <div class="p-2">
        <FormKit  @submit="upsertCommune" type="form" 
        :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }" 
        :config="{
            classes: {
            input: 'p-1 rounded border-gray-3100 shadow-sm border',
            label: 'text-gray-300',
            },
        }" 
        v-model="commune">

    <FormKit name="libelle_commune" label="Nom de commune" />

    </FormKit>
    </div>
</div>
    </template>