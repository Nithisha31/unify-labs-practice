
document.querySelector('.auth-form').addEventListener('submit',function(e){
if(!this.checkValidity()){
e.preventDefault();
alert('Please fill all fields correctly.');
}
});
