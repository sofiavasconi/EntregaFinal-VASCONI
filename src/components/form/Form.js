import { useEffect, useState } from "react";

const Form = ()=> {

    const [name, setName] = useState('');
    const [dni, setDni] = useState ('');
    const [phone, setPhone] = useState ('');
    const [email, setEmail] = useState ('');
    const [checkEmail, setCheckEmail] = useState ('');


    const handleSubmit = (e) => {
        e.preventDefault();
    };


    const handleChangeName = (e) => {
        setName(e.taget.value);
    };

    const handleChangeDni = (e) => {
        setDni(e.taget.value);
    };

    const handleChangePhone = (e) => {
        setPhone(e.taget.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.taget.value);
    };

    const handleChangeCheckEmail = (e) => {
        setCheckEmail(e.taget.value);
    };




    const handleMouseMove = (e) => {
        console.log(e.clientX, e.clientY);
    }

    useEffect (() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            //clean up function
            window.removeEventListener('mousemove', handleMouseMove);
        }
    })



    return (
        <div>
            <form onSubmit={handleSubmit} action="" className="formulario">
                <h3 className="formTitulo">TERMINAR COMPRA</h3>
                <h6>NOMBRE:</h6>
                <input type="text" className="nombre" placeholder="NOMBRE" name="NOMBRE" onChange={handleChangeName} value
                ={name} />
                <h6>DNI:</h6>
                <input type="text" className="dni" placeholder="DNI" name="DNI" onChange={handleChangeDni} value
                ={dni} />
                <h6>TELÉFONO:</h6>
                <input type="text" className="tel" placeholder="TELÉFONO" name="TELEFONO" onChange={handleChangePhone} value
                ={phone} />
                <h6>EMAIL:</h6>
                <input type="email" className="email1" placeholder="EMAIL" name="EMAIL" onChange={handleChangeEmail} value
                ={email} />
                <h6>CONFIRMAR EMAIL:</h6>
                <input type="email" className="email2" placeholder="CONFIRMAR EMAIL" name="CONFIRMAR EMAIL" onChange={handleChangeCheckEmail} value
                ={checkEmail} />
                </form>
                <button className="botonEnviar">Enviar</button>
            
        </div>
    );
};

export default Form;