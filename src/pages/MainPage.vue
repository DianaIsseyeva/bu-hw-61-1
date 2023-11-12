<template>
  <p>Block</p>
  <div>
    <!-- {{ $store.state.blocks }} -->
  </div>
  <block :key="block" v-for="block in $store.state.blocks" :block="block" />
</template>

<script>
import { mapActions } from 'vuex';
export default {
  mounted() {
    this.newBlockHeaders();
  },
  methods: {
    ...mapActions({
      newBlockHeaders: 'newBlockHeaders',
    }),
  },
};
</script>

<style></style>
