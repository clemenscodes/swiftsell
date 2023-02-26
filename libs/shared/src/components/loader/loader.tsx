import { cn } from '@styles';
import { Triangle } from 'react-loader-spinner';

/* eslint-disable-next-line */
export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({ ...props }) => {
    return (
        <Triangle
            height='80'
            width='80'
            ariaLabel='triangle-loading'
            wrapperClass={cn()}
            visible={true}
        />
    );
};

export default Loader;
