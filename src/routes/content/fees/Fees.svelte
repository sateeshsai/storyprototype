<script lang="ts">
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { crossfade, fade, fly, scale, slide } from 'svelte/transition';

	import BarChartNew from '../fees/BarChartNew.svelte';
</script>

<section class="exec h-[400px]" in:fade={{ delay: 500 }}>
	<h1 class="mb-6 text-2xl font-light text-dgreen-200" in:slide>One more section</h1>
	<p class="mb-6 text-foreground/90">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum culpa quidem reprehenderit, quis
		qui exercitationem rerum aut asperiores blanditiis cum nobis laborum, atque dolore possimus,
		delectus inventore provident.
	</p>
	<div class="charts grid grid-cols-1">
		<!-- <LineChart /> -->
		<!-- <LineChartNew /> -->
		<!-- <BarChart /> -->
		<BarChartNew />
		<!-- <Offices /> -->
	</div>
</section>
