import type { FullpageActivityStore } from 'svelte-fullpage';
import { writable, type Writable } from 'svelte/store';

export let activeSection: Writable<number> = writable(0);
