import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const BeARider = () => {
    const {user} = useAuth();

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const serviceCenter = useLoaderData();
    return (
        <div>
            
        </div>
    );
};

export default BeARider;