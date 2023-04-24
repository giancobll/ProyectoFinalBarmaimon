import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function FormCheckout({onCheckout})
{
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        phone: ''
    });
    console.log('User Data', userData);

    function handleInputChange(evt)
    {
        const inputText = evt.target.value;
        const inputName = evt.target.name;
        const newUserData = {...userData};
        newUserData[inputName] = inputText;
        setUserData(newUserData);
    }

    const navigateTo = useNavigate();

    function onSubmit(evt)
    {
        evt.preventDefault();
        onCheckout(userData);
        setUserData({
            username: '',
            email: '',
            phone: ''
        });        
        navigateTo('/');
    }

    function clearFormData(evt)
    {
        evt.preventDefault();
        setUserData({
            username: '',
            email: '',
            phone: ''
        });
    }

    return(
        <>
            <div>
                <h1>Ingresa tus datos para completar la compra 🛒</h1>
            </div>            
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title" style={{color:'black'}}>Formulario de Registro</h5>
                    <form>
                    <div className="form-group">
                        <label for="username" className="label-input" style={{color:'black'}}>Nombre</label>
                        <input
                        id="username"
                        name="username"
                        type="text"
                        className="form-control"
                        value={userData.username}
                        required
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="email" className="label-input" style={{color:'black'}}>Email</label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        value={userData.email}
                        required
                        onChange={handleInputChange}
                        />
                    </div>
                    <div class="form-group">
                        <label for="phone" className="label-input" style={{color:'black'}}>Teléfono</label>
                        <input
                        id="phone"
                        name="phone"
                        type="number"
                        className="form-control"
                        value={userData.phone}
                        required
                        onChange={handleInputChange}
                        />
                    </div>
                    <button
                        onClick={onSubmit}
                        type="button"
                        className="btn btn-success"
                        style={{ margin: "0 10px" , marginTop: '20px'}}
                    >
                        Crear Orden
                    </button>
                    <button
                        onClick={clearFormData}
                        type="button"
                        className="btn btn-danger"
                        style={{ margin: "0 10px" , marginTop: '20px'}}
                    >
                        Cancelar
                    </button>
                    </form>
                </div>
            </div>          
        </>
    )
}