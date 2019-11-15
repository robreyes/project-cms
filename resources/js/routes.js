import Login from './pages/auth/Login' 

export const routes = [
    { 
        path: '/', 
        redirect: '/login' 
    },
    { 
        path: '',  
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    }
]


