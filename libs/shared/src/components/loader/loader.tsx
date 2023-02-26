import { cn } from '@styles';

/* eslint-disable-next-line */
export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to Loader!</h1>
        </div>
    );
};

export default Loader;
