<!--
  @component
  Generates an SVG bar chart.
 -->
<script>
	import { getContext } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';

	const { data, xGet, yGet, xScale, yScale } = getContext('LayerCake');

	/** @type {String} [fill='#00bbff'] - The shape's fill color. This is technically optional because it comes with a default value but you'll likely want to replace it with your own color. */
	export let fill = '#00bbff';

	const colors = ['--dgreen-600', '--dblue-400', '--dteal-500', '--dblue-500'];
</script>

<g class="bar-group" in:fade={{ delay: 3000 }}>
	{#each $data as d, i}
		<g class="group">
			<rect
				in:scale|global={{ start: 0, delay: i * 200, opacity: 0.1 }}
				class="group-rect"
				data-id={i}
				x={$xScale.range()[0]}
				y={$yGet(d)}
				height={$yScale.bandwidth()}
				width={$xGet(d)}
				fill={`hsl(var(${colors[i]}))`}
			>
			</rect>
			<text
				class="relative top-12 transition-all group-hover:top-0 group-hover:text-2xl group-hover:font-bold"
				fill={`hsl(var(${colors[i]}))`}
				x={$xScale.range()[0] + $xGet(d) + 10}
				y={$yGet(d) + $yScale.bandwidth() / 1.5}>{d.value}</text
			>
			<text class="" fill={`black`} x={10} y={$yGet(d) + $yScale.bandwidth() / 1.5}>{d.key}</text>
		</g>
	{/each}
</g>
