<script lang="ts">
	import { cls } from '@layerstack/tailwind';
	import { format } from '@layerstack/utils';

	import { transformContext } from './TransformContext.svelte';

	const transform = transformContext();
	const { translate, scale } = transform;
</script>

<div class={cls('bg-surface-300/50 m-1 rounded p-2 tabular-nums backdrop-blur', $$props.class)}>
	<div class="grid gap-2 text-xs">
		<div><span class="opacity-50">scale:</span> {format($scale, 'decimal')}</div>

		<div>
			<span class="opacity-50">translate:</span>
			<div class="text-right">{format($translate.x, 'decimal')}</div>
			<div class="text-right">{format($translate.y, 'decimal')}</div>
		</div>
	</div>
</div>
