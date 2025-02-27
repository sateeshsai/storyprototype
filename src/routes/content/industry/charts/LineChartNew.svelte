<script lang="ts">
	import { Axis, Chart, Highlight, LineChart, Spline, Svg, Tooltip } from 'layerchart';
	const dateSeriesData = createDateSeries({ count: 30, min: 0, max: 50, value: 'integer' });
	$: dateSeriesDataWithNulls = dateSeriesData.map((d) => {
		return {
			...d,
			value: Math.random() < 0.2 ? null : d.value
		};
	});

	import { PeriodType } from '@layerstack/utils';
	// @ts-ignore
	import { scaleOrdinal, scaleSequential, scaleTime } from 'd3-scale';

	import { addMinutes, formatDate, format, startOfDay, startOfToday, subDays } from 'date-fns';

	export function getRandomNumber(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}
	export function getRandomInteger(min: number, max: number, includeMax = true) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + (includeMax ? 1 : 0)) + min);
	}

	export function createDateSeries<TKey extends string>(options: {
		count?: number;
		min: number;
		max: number;
		keys?: TKey[];
		value?: 'number' | 'integer';
	}) {
		const now = startOfToday();

		const count = options.count ?? 10;
		const min = options.min;
		const max = options.max;
		const keys = options.keys ?? ['value'];

		return Array.from({ length: count }).map((_, i) => {
			return {
				date: subDays(now, count - i - 1),
				...Object.fromEntries(
					keys.map((key) => {
						return [
							key,
							options.value === 'integer' ? getRandomInteger(min, max) : getRandomNumber(min, max)
						];
					})
				)
			} as { date: Date } & { [K in TKey]: number };
		});
	}
	let renderContext: 'svg' | 'canvas' = 'svg';
	let debug = false;
</script>

<div class="h-[200px] rounded-lg p-4">
	<Chart
		data={dateSeriesData}
		x="date"
		xScale={scaleTime()}
		y="value"
		yDomain={[0, null]}
		yNice
		padding={{ left: 16, bottom: 24 }}
		tooltip={{ mode: 'bisect-x' }}
	>
		<Svg>
			<Axis
				placement="left"
				grid
				rule
				classes={{ root: 'border border-red-500', label: 'text-white' }}
			/>
			<!-- <Axis
				placement="bottom"
				format={(d) => formatDate(d, PeriodType.Day.toString(), { variant: 'short' })}
				rule
			/> -->
			<Spline class="stroke-dteal-500 stroke-1 " />
			<Highlight points lines />
		</Svg>

		<Tooltip.Root let:data>
			<Tooltip.Header>{format(data.date, 'eee, MMMM do')}</Tooltip.Header>
			<Tooltip.List>
				<Tooltip.Item label="value" value={data.value} />
			</Tooltip.List>
		</Tooltip.Root>
	</Chart>
</div>
