// src/store.js
import { writable } from 'svelte/store';

export const activeSection = writable('');
export const isClickScrolling = writable(false);
export const currentPath = writable('/');