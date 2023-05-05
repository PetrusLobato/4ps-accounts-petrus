
import './styleHeader.css';

export default function Header({setEntrar}){

    function login(){
        setEntrar(true)
    }

    return(

        <header>
            <div className='blocoHeader'>
                <h1> 4Ps accounts</h1>
                <button onClick={() => login()} className='sair' type="button">Inicio</button>
            </div>
        </header>

    )

}

