<template>   
<nav>         
    <ul>      
      <li>         
          <router-link class="text-red-600 underline" to="/">           
          lien vers           
          <code class="font-mono">/src/App.vue</code>         
          </router-link>  
          <br>
          <router-link class="text-red-600 underline" to="/liste">           
          lien vers           
          <code class="font-mono">/src/pages/liste.vue</code>  
          </router-link> 
          <br>
          <router-link class="text-red-600 underline" to="/listeFetch">           
          lien vers           
          <code class="font-mono">/src/pages/listeFetch.vue</code>  
          </router-link> 
          <br>
          <router-link class="text-red-600 underline" to="/listeSupabase">           
          lien vers           
          <code class="font-mono">/src/pages/listeSupabase.vue</code>  
          </router-link> 
          <br>
          <router-link class="text-red-600 underline" to="/simple">           
          lien vers           
          <code class="font-mono">/src/pages/simple.vue</code>         
          </router-link>
          <br>
          <router-link class="text-red-600 underline" to="/edit/new">           
          lien vers           
          <code class="font-mono">/src/pages/edit/new.vue</code>         
          </router-link>
          <br>
          <router-link class="text-red-600 underline" to="/quartier/index">           
          lien vers           
          <code class="font-mono">/src/pages/quartier/index.vue</code>         
          </router-link> 
              
           </li>     
           </ul>  
            </nav>    
            <!-- Affiche les pages -->  
            <suspense> 
                <router-view class="m-2 border-2 p-2" /> 
            </suspense> 
</template>  
             
<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>
  
  
