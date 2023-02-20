import { create } from 'zustand';

export interface PrefixState {
    prefix: string;
}

export const usePrefixStore = create<PrefixState>(() => ({
    prefix: '',
}));
