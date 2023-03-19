/* eslint-disable-next-line */
export interface SmallProps {}

export const Small: React.FC<SmallProps> = ({ ...props }) => {
    return <small className='text-sm font-medium leading-none'>Email address</small>;
};

export default Small;
