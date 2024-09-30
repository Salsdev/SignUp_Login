const container=document.querySelector('.container');
const LoginLink=document.querySelector('.SignInLink');
const RegisterLink=document.querySelector('.SignUpLink');


if(RegisterLink && LoginLink && container){
    RegisterLink.addEventListener('click',(e)=>{
        e.preventDefault();
        container.classList.add('active');

    }) 

    LoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove('active');
    });    
} else {
    console.error('Required elements not found in the DOM')
}
