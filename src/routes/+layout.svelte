<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { ModeWatcher } from 'mode-watcher';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics();
</script>

<ModeWatcher />

{@render children()}
