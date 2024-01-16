
let toastBox =document.getElementById('toastBox');
let successMsg ='<i></i>You clicked Successfully!';

function show(msg){
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  setTimeout(()=>{
    toast.remove();
  },3000)
}

