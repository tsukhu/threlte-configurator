import { writable } from 'svelte/store';

export interface SnapProps {
	current: string | null;
	items: {
		laces: string;
		mesh: string;
		caps: string;
		inner: string;
		sole: string;
		stripes: string;
		band: string;
		patch: string;
	};
}
export const snap = writable<SnapProps>({
	current: null,
	items: {
		laces: '#ffffff',
		mesh: '#ffffff',
		caps: '#ffffff',
		inner: '#ffffff',
		sole: '#ffffff',
		stripes: '#ffffff',
		band: '#ffffff',
		patch: '#ffffff'
	}
});
