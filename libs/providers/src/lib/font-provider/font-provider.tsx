import { RobotoCondensed } from '@fonts';

/* eslint-disable-next-line */
export interface FontProviderProps extends React.PropsWithChildren {}

export function FontProvider({ children }: FontProviderProps) {
    return <RobotoCondensed>{children}</RobotoCondensed>;
}

export default FontProvider;
