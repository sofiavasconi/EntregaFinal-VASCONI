import { useState } from "react";

const Form = ()=> {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState ('');


    const handleSubmit = (e) => {
        e.preventDefault();
    };


    const handleChangeName = (e) => {
        setName(e.taget.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.taget.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="nombre" onChange={handleChangeName} value
                ={name} />
                <input type="text" name="apellido" onChange={handleChangeLastName} value
                ={lastName} />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;