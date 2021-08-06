import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CurrentForm, Input, Button } from './Form.styled';

export default function Form({onSubmit}) {
    const [value, setValue] = useState('');

    const handleInputValue = (e) => {
        setValue(e.target.value.toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
            toast.error('Input movie`s name');
            return;
        }

        onSubmit(value);
        resetInput();
    }

    const resetInput = () => {
        setValue('');
    }


    
    return (
        <CurrentForm onSubmit={handleSubmit}>
            <Input type='text' value={value} onChange={handleInputValue}/>
            <Button type='submit'> Search</Button>
            <Toaster/>
        </CurrentForm>
    )
    
};
