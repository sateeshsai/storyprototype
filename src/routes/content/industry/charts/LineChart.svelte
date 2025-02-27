<script lang="ts">
	import { LineChart } from 'layerchart';
	const dateSeriesData = createDateSeries({ count: 5, min: 50, max: 100, value: 'integer' });
	$: dateSeriesDataWithNulls = dateSeriesData.map((d) => {
		return {
			...d,
			value: Math.random() < 0.2 ? null : d.value
		};
	});

	console.log(dateSeriesData);

	import { addMinutes, startOfDay, startOfToday, subDays } from 'date-fns';

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

<div class="h-[300px] rounded border p-4">
	<LineChart data={dateSeriesData} x="date" y="value" {renderContext} {debug} />
</div>
