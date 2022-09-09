<script setup lang="ts">
import card from "../components/Card.vue";
import headercard from "../components/Header.vue";
import footercard from "../components/Footer.vue";

const maison = {
  image: "/images-maison/maison3.jpg",
  titre: "Faulkner Ave",
  lieu: "909 Woodland St, Michigan, IN",
  price: "4550",
  nbrSDB: 3,
};

const maison2 = {
  favoris: "true",
  image: "/images-maison/maison1.jpg",
  titre: "Beverly Springfield",
  lieu: "2821 Lake Sevilla Palm Harbor TX",
  nbrSDB: 2,
};

const maison3 = {
  image: "/images-maison/maison2.jpg",
  titre: "Palm Harbor",
  lieu: "2699 Green Valley, Highland Lake",
  price: "2095",
  nbrSDB: 2,
};

const maison4 = {
  image: "/images-maison/maison4.jpg",
  titre: "St. Christal",
  lieu: "210 US Highway, HighlandLake, FL",
  price: "4650",
  nbrSDB: 2,
};

const maison5 = {
  favoris: "true",
  image: "/images-maison/maison6.jpg",
  titre: "Tarpon Bay",
  lieu: "103 Lake Shores, Michigan, IN",
  price: "4800",
  nbrSDB: 3,
};

const maison6 = {
  image: "/images-maison/maison3.jpg",
  titre: "Faulkner Ave",
  lieu: "909 Woodland St, Michigan, IN",
  price: "4550",
  nbrSDB: 3,
};
</script>
      
      <template >
        <headercard />
        <div class="mt-18 text-center">
          <h1 class="text-3xl font-bold leading-10">Search properties to rent</h1>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
        
          <card class="p-8" v-bind="maison" />

          <card class="p-8" v-bind="maison2" />

          <card class="p-8" v-bind="maison3" />

          <card class="p-8" v-bind="maison4" />

          <card class="p-8" v-bind="maison5" />

          <card class="p-8" v-bind="maison6" />
        </div>
      </template>