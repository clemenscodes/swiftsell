import Auth from './auth';
import { render } from '@testing-library/react';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';

describe('Auth', () => {
    it('should render successfully', () => {
        const mockSession: Session = {
            expires: '1',
            user: { email: 'a', name: 'Delta', image: 'c' },
        };

        (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);

        const wrapper = ({ children }: React.PropsWithChildren) => <SessionProvider>{children}</SessionProvider>;
        const { baseElement } = render(<Auth />, { wrapper });
        expect(baseElement).toBeTruthy();
    });
});
