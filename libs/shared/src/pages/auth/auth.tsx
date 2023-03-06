import { Button } from '../../components/button/button';
import H1 from '../../components/typography/h1/h1';
import { cn } from '@styles';
import { AuthProps } from '@types';
import { getApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { NextPage } from 'next';
import { useState } from 'react';

export const Auth: NextPage<AuthProps> = ({ ...props }) => {
    const auth = getAuth(getApp());

    const [formState, setFormState] = useState<AuthProps>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            formState.email,
            formState.password
        )
            .then((userCredential) => {
                const user = userCredential.user;
                console.log({ user });
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log({ errorCode });
                const errorMessage = error.message;
                console.log({ errorMessage });
            });
    };

    return (
        <div className={cn(['m-12 flex flex-col items-center justify-center'])}>
            <H1>Login Page</H1>
            <div className='m-12 items-center justify-center'>
                <form
                    onSubmit={handleSubmit}
                    className='mb-4 rounded p-12 px-8 pt-6 pb-8'
                >
                    <div className='mb-4'>
                        <label
                            className='text-md mb-2 block font-bold text-slate-900 dark:text-white'
                            htmlFor='email'
                        >
                            Email
                        </label>
                        <input
                            className='focus:shadow-outline rounded border py-2 px-3 leading-tight text-slate-900 shadow focus:outline-none dark:bg-white'
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Enter your email address'
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            className='text-md mb-2 block font-bold text-slate-900 dark:text-white'
                            htmlFor='password'
                        >
                            Password
                        </label>
                        <input
                            className='focus:shadow-outline rounded border py-2 px-3 leading-tight text-slate-900 shadow focus:outline-none dark:bg-white'
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Enter your password'
                            value={formState.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='flex items-center justify-between'>
                        <Button>Sign Up</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
