<script>
import {defineComponent} from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: {Navbar}
})

</script>
<template>
  <main>
    <RouterView />
  </main>
</template>