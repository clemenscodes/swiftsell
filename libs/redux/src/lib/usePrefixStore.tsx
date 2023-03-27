import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

export interface PrefixState {
    prefix: string;
}

export const usePrefixStore = create<PrefixState>()(
    devtools(
        persist(() => ({ prefix: '' }), {
            name: 'prefix-storage',
            storage: createJSONStorage(() => sessionStorage),
        })
    )
);
