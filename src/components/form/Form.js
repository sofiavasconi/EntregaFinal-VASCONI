import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { baseDeDatos } from '../../services/firebaseConfig';


const Form = ()=> {

    const [name, setName] = useState('');
    const [dni, setDni] = useState ('');
    const [phone, setPhone] = useState ('');
    const [email, setEmail] = useState ('');
    const [checkEmail, setCheckEmail] = useState ('');

    const [cargando, setCargando] = useState(false);

    const [ordenId, setOrdenId] = useState('')

    const {cart, precioTotal, borrarTodo} = useContext(CartContext);



    const handleSubmit = (e) => {
        setCargando(true);
        e.preventDefault();
        const orden = {
            comprador: {name, dni, phone, email, checkEmail},
            items: cart,
            total: precioTotal(),
            fecha: serverTimestamp(),
        };


        
        const ordenColeccion = collection(baseDeDatos, 'ordenes')
        addDoc(ordenColeccion, orden)
            .then((res) => {
                setOrdenId(res.id);
                borrarTodo();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setCargando(false));

    };


    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeDni = (e) => {
        setDni(e.target.value);
    };

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeCheckEmail = (e) => {
        setCheckEmail(e.target.value);
    };




    const handleMouseMove = (e) => {
        console.log(e.clientX, e.clientY);
    }

    useEffect (() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    })


    if(ordenId) {
        return (
        <h3 className="seguimiento">Tu compra fue realizada con éxito! Tu número de seguimiento es "{ordenId}"</h3>
        )
    };


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

                

                <button className="botonEnviar">{cargando ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </div>
    );
};

export default Form;