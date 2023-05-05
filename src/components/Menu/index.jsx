
import kenzie2 from '../../img/Group262.png';
import './styleMenu.css';

export default function Menu({children}){

   

    return(

        <section className='menu'>
            <div className='div1'>
                <h2>Centralize o controle das suas finanças</h2>
                <p>de forma rápida e segura</p>
                {children}
            </div>

            <div>
                <img className='foto' src={kenzie2} alt="" />
            </div>

        </section>
    )


}