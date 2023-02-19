/* eslint-disable-next-line */
export interface LargeProps {}

export function Large(props: LargeProps) {
    return (
        <div className='text-lg font-semibold text-slate-900 dark:text-slate-50'>
            Are you sure absolutely sure?
        </div>
    );
}

export default Large;
