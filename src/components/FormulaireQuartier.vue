<script setup lang="ts">
    import { ref } from "@vue/reactivity"; 
    import { supabase } from "@/supabase";
    import { useRouter } from "vue-router";

    const router = useRouter();
    const quartier = ref({});
    const { data: ListeQuartier, error } = await supabase
        .from("Quartier")
        .select("*");

    if (error) console.log("erreur table Quartier :", error);

    const OptionsQuartier = ListeQuartier?.map((quartier) => ({
    value: quartier.code_quartier,
    label: quartier.libelle_quartier,
    }));

    async function upsertQuartier(dataForm, node) {
    const { data, error } = await supabase.from("Quartier").upsert(dataForm);

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
            <h2 class="text-2xl">Insérer quartier</h2>
        </div>
        <div class="p-2">
            <FormKit @submit="upsertQuartier" type="form" v-model="quartier"
            :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }" 
            :config="{classes: {input: 'p-1 rounded border-gray-100 shadow-lg border hover:bg-indigo-300', label:'text-indigo-200'}}">
                <FormKit name="libelle_quartier" label="nom quartier" />
                <FormKit name="code_quartier" label="code quartier" :options="OptionsQuartier" />
            </FormKit>
        </div>
    </div>
</template>