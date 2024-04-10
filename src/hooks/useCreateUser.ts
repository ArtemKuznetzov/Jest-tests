import { useState } from 'react';
import {validatePassword, wait} from "functions/someFunctions";

const useCreateUser = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async ({ password }: {password: string}) => {
        const { success, error } = validatePassword(password);

        if (!success) {
            throw new Error(error);
        }

        await wait(1000);
    };

    const onSuccess = ({ name, password }: {name: string, password: string}) => {
        setErrorMessage('');
        setSuccessMessage(`User ${name} created with password ${password}`);
    };

    const onChange = () => {}

    const onError = (error: {message: string}) => {
        setErrorMessage(error.message);
    };

    return { successMessage, errorMessage, onSubmit, onChange, onSuccess, onError };
};

export { useCreateUser };