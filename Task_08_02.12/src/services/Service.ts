import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://forum-dev-girls.onrender.com'
})

export const cadastrarUsuario = async(url:any, dados:any, setDado:any) => {
    const resposta = await api.post(url, dados)
        setDado(resposta.data)
}

export const login = async(url:any, dados:any, setDado:any) => {
    const resposta = await api.post(url, dados)
        setDado(resposta.data.token)
}
