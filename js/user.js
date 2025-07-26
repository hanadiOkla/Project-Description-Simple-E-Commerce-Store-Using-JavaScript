let user_info =  document.querySelector('#user_info')

let userData =  document.querySelector('#user')

let links =  document.querySelector('#links')

if( localStorage.getItem('username')){
    links.remove()
    user_info.style.display = "flex";
    userData.innerHTML = localStorage.getItem('username')
}
let logOutBtn =  document.querySelector('#logout')
logOutBtn.addEventListener('click',function(){
    localStorage.clear();
    setTimeout(() => {
        window.location = 'login.html'
    } ,1500)
})