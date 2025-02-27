<script lang="ts">
	import { bin } from 'd3-array';
	import { scaleTime } from 'd3-scale';
	import {
		randomBates,
		randomExponential,
		randomInt,
		randomLogNormal,
		randomNormal,
		randomUniform
	} from 'd3-random';
	import { timeDays, timeMonths, timeWeeks } from 'd3-time';
	import { subDays } from 'date-fns';

	import { BarChart, Tooltip, thresholdTime } from 'layerchart';
	import { MenuField, RangeField, NumberStepper, State } from 'svelte-ux';
	import { format, PeriodType } from '@layerstack/utils';

	let data = [
		{
			id: 736041664,
			key: 'name',
			value: 30
		}
	];

	let thresholds = 10;

	let selectedGenerator = 'normal';
	let randomCount = 1000;
	$: random = randomNormal();
	$: randomData = Array.from({ length: randomCount }, () => random());
	$: binByValues = bin(); //.domain([0, 1]);
	$: randomBins = binByValues(randomData);

	$: getRandomDate = (from: Date, to: Date) => {
		const fromTime = from.getTime();
		const toTime = to.getTime();
		return new Date(fromTime + random() * (toTime - fromTime));
	};

	const now = new Date();
	let dateRange = 10;
	$: randomDateData = Array.from({ length: randomCount }, () =>
		getRandomDate(subDays(now, dateRange), now)
	) as any[]; // TODO: Make typescript happy
</script>

<div class="h-[300px] rounded border p-4">
	<BarChart
		{data}
		x="x0"
		y="length"
		bandPadding={0.2}
		props={{
			// xAxis: { tweened: true },
			// yAxis: { format: 'metric', tweened: true },
			bars: { tweened: true, class: 'bg-red-500' }
		}}
	>
		<svelte:fragment slot="tooltip">
			<Tooltip.Root let:data>
				<Tooltip.Header class="text-center">{data.x0 + ' - ' + (data.x1 - 1)}</Tooltip.Header>
				<Tooltip.List>
					<Tooltip.Item label="count" value={data.length} format="integer" />
					<Tooltip.Separator />
					{#each data.slice(0, 5) as d}
						<Tooltip.Item label={d.name} value={d.weight} />
					{/each}
					{#if data.length > 5}
						<span></span>
						<span>...</span>
					{/if}
				</Tooltip.List>
			</Tooltip.Root>
		</svelte:fragment>
	</BarChart>
</div>
