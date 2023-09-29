import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import router from '../router';
import { useToast } from "vue-toastification";

const toast = useToast();

const authStore = defineStore('authenticate', () => {

    const user = ref(JSON.parse(localStorage.getItem('loggedUser')));
    const errorRegiMsg = reactive({
        emptypass: 'passwords cannot be empty !!',
        emptyusername: 'username cannot be empty !!',
        notUnique: 'Email has already been taken !!',
        missmatch:'password does not match !!'
    })

    const LoginErrMsg = reactive({
        state: false,
        msg:'Credentials not Matched'
    }
    );

    const isAuthenticated = ref(localStorage.getItem('token'));

    const login = (pass,email) => {

    // Retrieve the serialized data from localStorage
        let users = JSON.parse(localStorage.getItem('users'));
        
        if (null === users) {
            //LoginErrMsg.state = true;
            toast.error("Credentials not Matched!");
        }
        else {
            const checkUser = users.find(user => user.email === email);
            const checkPass = users.find(user => user.password === pass);

            if (checkUser && checkPass)
            {
                
                //
                localStorage.setItem('token', true);
                isAuthenticated.value = localStorage.getItem('token');
                LoginErrMsg.state = false;
                localStorage.setItem('loggedUser', JSON.stringify(checkUser));
                user.value = JSON.parse(localStorage.getItem('loggedUser'));
                console.log(user);
                router.push('/dashboard');

                toast.success('Login Successfull !!');
            }
            else
            {
                //LoginErrMsg.state = true;
                toast.error("Credentials not Matched!");
            }
        }

    }

    const logout = () => {
        localStorage.setItem('token', false);
        localStorage.setItem('loggedUser', false);
        user.value = null;
        isAuthenticated.value = localStorage.getItem('token');
        router.push('/login');
    }


    return {errorRegiMsg,LoginErrMsg,isAuthenticated,logout,login,user}
})


export {authStore}
