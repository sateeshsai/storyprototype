<script>
	import { cn } from '$lib/utils';
	import clsx from 'clsx';
	import { Arc, Chart, Svg, Text } from 'layerchart';
	import { Field, RangeField, SpringValue, TweenedValue, Switch, Toggle } from 'svelte-ux';

	let value = 0;
	export let valueSet = 0;
	export let color = 'hsl(var(--dgreen-500))';
	export let segments = 100;

	setTimeout(() => {
		value = valueSet;
	}, 1000);

	import { cls } from '@layerstack/tailwind';
</script>

<div class=" h-[200px] overflow-auto p-4">
	<Chart>
		<Svg center>
			<TweenedValue {value} let:value options={{ duration: 2000 }}>
				{#each { length: segments } as _, segmentIndex}
					{@const segmentAngle = (2 * Math.PI) / segments}
					<Arc
						startAngle={segmentIndex * segmentAngle}
						endAngle={(segmentIndex + 1) * segmentAngle}
						innerRadius={-20}
						cornerRadius={4}
						padAngle={0.02}
						fill={(segmentIndex / segments) * 100 < (value ?? 0) ? color : 'hsl(220,10%,10%)'}
					/>
				{/each}

				<Text
					value={Math.round(value ?? 0) + '%'}
					textAnchor="middle"
					verticalAnchor="middle"
					dy={8}
					fill={color}
					class="text-3xl tabular-nums "
				/>
			</TweenedValue>
		</Svg>
	</Chart>
</div>
