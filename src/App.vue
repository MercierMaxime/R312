<template>   
<nav>         
    <ul>      
      <li>         
          <router-link class="text-red-600 underline" to="/">           
          lien vers           
          <code class="font-mono">/src/App.vue</code>         
          </router-link> 
              <br>
          <router-link class="text-red-600 underline" to="/index">           
          lien vers           
          <code class="font-mono">/src/pages/index.vue</code>         
          </router-link>  
          <br>
          <router-link class="text-red-600 underline" to="/liste">           
          lien vers           
          <code class="font-mono">/src/pages/liste.vue</code>  
          </router-link> 
          <br>
          <router-link class="text-red-600 underline" to="/simple">           
          lien vers           
          <code class="font-mono">/src/pages/simple.vue</code>         
          </router-link> 
              
           </li>     
           </ul>  
            </nav>    
            <!-- Affiche les pages -->  
             <router-view class="m-2 border-2 p-2" /> 
</template>  
             
<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>
  
  
