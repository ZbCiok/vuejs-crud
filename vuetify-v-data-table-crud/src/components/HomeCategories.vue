<template>
	<v-container>	
		<v-layout text-center wrap>
			<v-flex xs12>
				<br/>
				<br/>				
				<v-img
					:src="require('../assets/german-shepherd-2.jpg')"
					class="my-3"
					contain
					height="350"
				></v-img>
			</v-flex>

			<v-flex mb-4>
				<br/>
				<br/>
				<h1 class="display-2 font-weight-bold mb-3">
					Welcome to Vuetify
				</h1>
				<h2 class="subheading font-weight-regular">
					on the example of the military equipment categories
				</h2>
				<div style="margin-bottom: 8em;"/>
				<div class="subheading font-italic font-weight-regular">
					Photo: A U.S. Army Belgian Malinois wearing Doggles to protect his eyes from dust in Afghanistan (Wikipedia)
				</div>
			</v-flex>

		</v-layout>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		//
	})
}
</script>

