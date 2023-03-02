import { app } from '@config';
import { cn } from '@styles';

/* eslint-disable-next-line */
export interface FirebaseProps {}

export const Firebase: React.FC<FirebaseProps> = ({ ...props }) => {
    console.log(app);
    return (
        <div className={cn([])}>
            <h1>Welcome to Firebase!</h1>
        </div>
    );
};

export default Firebase;
