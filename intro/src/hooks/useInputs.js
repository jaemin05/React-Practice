import { useState, useCallback } from "react";

function useInputs(initisalForm) {
    const [form, setForm] = useState(initisalForm);

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);

    const reset = useCallback(() => setForm(initisalForm), [initisalForm]);
    return [form, onChange, reset];
}

export default useInputs;