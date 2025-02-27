<script>
	import { LayerCake, Svg } from 'layercake';
	// @ts-ignore
	import { scaleBand } from 'd3-scale';

	import Bar from './_components/Bar.svelte';
	import AxisX from './_components/AxisX.svelte';
	import AxisY from './_components/AxisY.svelte';

	// This example loads csv data as json using @rollup/plugin-dsv
	const data = [
		{ key: 'Item 1', value: 40 },
		{ key: 'Item 2', value: 30 },
		{ key: 'Item 3', value: 20 },
		{ key: 'Item 4', value: 10 }
	];

	const xKey = 'value';
	const yKey = 'key';

	data.forEach((d) => {
		d[xKey] = +d[xKey];
	});
</script>

<div class="chart-container">
	<LayerCake
		padding={{ bottom: 0, left: 0 }}
		x={xKey}
		y={yKey}
		yScale={scaleBand().paddingInner(0.2)}
		xDomain={[0, null]}
		{data}
	>
		<Svg>
			<!-- <AxisX tickMarks baseline snapLabels gridlines={false} /> -->
			<!-- <AxisY tickMarks gridlines={false} /> -->
			<Bar />
		</Svg>
	</LayerCake>
</div>

<style>
	/*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
	.chart-container {
		width: 100%;
		height: 250px;
	}
</style>
