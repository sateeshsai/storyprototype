<script lang="ts">
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { crossfade, fade, fly, scale, slide } from 'svelte/transition';
	import ArcChart from './charts/ArcChart.svelte';
	import LineChart from './charts/LineChart.svelte';
	import LineChartNew from './charts/LineChartNew.svelte';
	import BarChart from './charts/BarChart.svelte';
	import BarChartNew from '../fees/BarChartNew.svelte';
</script>

<section class="exec h-[400px]" in:fade={{ delay: 500 }}>
	<h1 class="mb-6 text-center text-2xl font-light text-foreground/70" in:slide>
		Our industry experience
	</h1>

	<div class="charts grid grid-cols-2">
		<ArcChart valueSet={90} color="hsl(var(--dgreen-200))" />
		<ArcChart valueSet={65} color="hsl(var(--dblue-200))" segments={20} />
		<ArcChart valueSet={90} color="hsl(var(--dteal-200))" segments={10} />
		<ArcChart valueSet={73} color="hsl(var(--dgreen-300))" segments={150} />
	</div>

	<div class="charts grid grid-cols-1">
		<!-- <LineChart /> -->
		<!-- <LineChartNew /> -->
		<!-- <BarChart /> -->
		<!-- <BarChartNew /> -->
		<!-- <Offices /> -->
	</div>
</section>
