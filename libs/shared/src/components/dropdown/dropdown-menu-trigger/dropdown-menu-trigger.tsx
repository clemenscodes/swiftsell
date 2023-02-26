import { cn } from '@styles';

/* eslint-disable-next-line */
export interface DropdownMenuTriggerProps {}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
    ...props
}) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to DropdownMenuTrigger!</h1>
        </div>
    );
};

export default DropdownMenuTrigger;
