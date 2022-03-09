let validate = (email) => {
    let input = document.getElementById('email')
    let value = input.value
    input.value = '';

    if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)){
        swal("Validation Successfull!", "Your Email is Valid!", "success");
        return
    }
    else{
        swal({
            title: "Entered Email is inValid",
            text: "Email you have been entered is not valid",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
    }
}


