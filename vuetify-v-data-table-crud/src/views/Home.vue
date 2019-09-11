<template>
	<div class="home">
		<HomeCategories msg="Welcome to Your Vue.js/Vuetify App" />
	</div>
</template>

<script>
// @ is an alias to /src
import HomeCategories from '@/components/HomeCategories.vue'

export default {
	name: 'home',
	components: {
		HomeCategories
	}
}
</script>
