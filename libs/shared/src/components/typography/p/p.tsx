/* eslint-disable-next-line */
export interface PProps {}

export const P: React.FC<PProps> = ({ ...props }) => {
    return (
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax.
        </p>
    );
};

export default P;
