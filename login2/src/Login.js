import React from 'react';
import './Login.css'

function Login(props) {

  function validar(){
      if(document.getElementsByClassName('e')[0].value == ''){
        alert(' Por favor verifique se todos os dados foram preenchidos.');
        document.getElementsByClassName('e')[0].focus();
    }
    else if(document.getElementsByClassName('e')[1].value == ''){
      alert(' Por favor, verifique se todos os dados foram preenchidos.');
      document.getElementsByClassName('e')[1].focus();
  }
  else{
    alert(' Sua mensagem foi enviada!');
  }
  }


    return (
      <div className="App">
        <form className="form">
            <img src='https://proeduc.com.br/public/img/login.png' className='img'/>
            <h1>Member Login</h1>
            <fieldset>
                <input className='e' name='email' placeholder="Digite seu Email" type="email" autofocus />
            </fieldset>

            <fieldset>
                <input className='e' name='senha' placeholder="Digite seu Senha" type="password" />
            </fieldset>  

            <fieldset>
                <button className='botao' nome= "submit" type="submit" onClick={() => validar()}>Enviar</button> 
            </fieldset>
            <p>Esqueceu sua senha? <a target="_blank" href="http://google.com">Clique Aqui</a> {props.icon}</p>
  
        </form>
  
      </div>
    );
  }
  
  export default Login;