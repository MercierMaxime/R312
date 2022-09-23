<template>
  <figure>
    <img class="rounded-t-lg" :src="image" alt="" />
    <figcaption class="relative flex flex-col rounded-b-lg border-2 border-t-0 px-5 py-7">
      <h3 class="text-2xl text-gray-900">{{ nomMaison }}</h3>
      <address class="not-italic text-gray-500">{{ adresse }}</address>
      <div class="order-first flex items-center">
        <div class="text-2xl text-indigo-500">${{ prix }}</div>
        <div class="text-gray-500">/months</div>
      </div>
      <hr class="my-2 border-t-2 border-indigo-100" />
      <div class="flex justify-between text-sm">
        <div><bed class="inline-block align-top" />4 Beds</div>
        <div><bath class="inline-block align-top" /> {{ nbrSDB }} Bathrooms</div>
        <div><dimension class="inline-block align-top" /> 6x7.5 m²</div>
      </div>
      <div class="absolute top-8 right-4 grid h-12 w-12 place-items-center rounded-full border-2 border-indigo-100">
        <heart :class="{ 'fill-indigo-500': favoris }" />
      </div>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import bed from "./icones/Bed.vue";
import bath from "./icones/Bath.vue";
import dimension from "./icones/Dimension.vue";
import heart from "./icones/Heart.vue";
  defineProps({
    prix:Number,
    nomMaison: String,
    image: String,
    nbrChambres: Number,
    nbrSDB: Number,
    adresse:String,
    id:String,
    favoris: Boolean,
  })

</script>
