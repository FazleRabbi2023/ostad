import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import router from '../router';

const authStore = defineStore('authenticate', () => {

    let user = reactive({})
    const errorRegiMsg = reactive({
        emptypass: 'passwords cannot be empty !!',
        emptyusername: 'username cannot be empty !!',
        notUnique: 'username has already been taken !!',
        missmatch:'password does not match !!'
    })

    const LoginErrMsg = reactive({
        state: false,
        msg:'Credentials not Matched'
    }
    );

    const isAuthenticated = ref(localStorage.getItem('token'));

    // const isAuthenticated = () => {
    //     if (null == localStorage.getItem('token')) {
    //         localStorage.setItem('token',true)
    //     }
    //     return localStorage.getItem('token')=='true'
    // }

    // const isNotAuthenticated = () => {
    //     if (null == localStorage.getItem('token')) {
    //         localStorage.setItem('token',false)
    //     }
    //     return localStorage.getItem('token')=='false'
    // }

    

    const login = (pass,email) => {

    // Retrieve the serialized data from localStorage
        let users = JSON.parse(localStorage.getItem('users'));
        
        if (null === users) {
            activeClass.value = 'notMatched';
        }
        else {
            const checkUser = users.find(user => user.email === email);
            const checkPass = users.find(user => user.password === pass);

            if (checkUser && checkPass)
            {
                
                user = checkUser;
                localStorage.setItem('token', true);
                isAuthenticated.value = localStorage.getItem('token');
                router.push('/dashboard');
                
            }
            else
            {
                LoginErrMsg.state = true;
            }
        }

    }

    const logout = () => {
        localStorage.setItem('token', false);
        isAuthenticated.value = localStorage.getItem('token');
        router.push('/login');
    }


    return {errorRegiMsg,LoginErrMsg,isAuthenticated,logout,login}
})


export {authStore}
