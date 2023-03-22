/* eslint-disable-next-line */
export interface H3Props {}

export const H3: React.FC<H3Props> = ({ ...props }) => {
    return <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>The Joke Tax</h3>;
};

export default H3;
