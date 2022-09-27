import { useState, useEffect } from 'react';
import * as C from './styles';

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginState, setLoginState] = useState({
        email: '',
        password: ''
    })

    const [search, setSearch] = useState('')

    const handleSignupForm = (e) => {
        e.preventDefault()
        
        console.log({name, email, password})
    }

    const handleOnChangeLogin = (event, key) => {
        setLoginState({...loginState, [key]: event.target.value})
    }

    const handleLoginForm = (event) => {
        event.preventDefault()
        console.log(loginState)
    }

    useEffect( () => {
        if(search.length > 2) {
            console.log(`Realizando busca para  '${search}'`)
        }
    }, [search])

 return (
   <C.Container>
        <C.Form onSubmit={handleSignupForm}>
            <h1>Formulário de Cadastro</h1>
            <input 
            type="text" 
            placeholder="Nome Completo" 
            required 
            value={name}
            onChange={(event) => setName(event.target.value)}
            />

            <input 
            type="email" 
            placeholder="E-mail" 
            required 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />

            <input 
            type="password" 
            placeholder="Senha" 
            required 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />

            <button type='submit'>Enviar</button>
        </C.Form>

        <C.Form onSubmit={handleLoginForm}>
            <h1>Formulário de Login</h1>
            <input 
            type="email" 
            placeholder="E-mail" 
            required 
            value={loginState.email}
            onChange={(event) => handleOnChangeLogin(event, 'email')}
            />

            <input 
            type="password" 
            placeholder="Senha" 
            required 
            value={loginState.password}
            onChange={(event) => handleOnChangeLogin(event, 'password')}
            />

            <button type='submit'>Entrar</button>
        </C.Form>

        <C.Form>
            <h1>Buscar</h1>
            <input 
            type="text"
            placeholder="Digite sua busca"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />
        </C.Form>
    </C.Container>
 );
}
