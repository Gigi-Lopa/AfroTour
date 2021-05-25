/*function passData(){
 
    let rep_title = document.getElementById("selectedOption").value
    let rep_name = document.getElementById("rep-name").value;
    let rep_contact =  document.getElementById("rep-number").value;
    let com_name =  document.getElementById("com-name").value
    let com_email = document.getElementById("com-email").value
    let hq_location = document.getElementById("hq-location").value
    let com_number = document.getElementById("com-number").value
    let reg_number = document.getElementById("reg-number").value
    let com_service = document.getElementById("com-service").value
    let com_password = document.getElementById("com-password").value
    let com_confirm_password = document.getElementById("com-password2").value

    if (com_password === com_confirm_password ){
        data = {
            rep_title,
            rep_name,
            rep_contact,
            com_name,
            com_email,
            hq_location,
            com_number,
            reg_number,
            com_service,
            com_password
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            };
        fetch("/route/r3g_p@rtn3r",options)
        .then((res) => res.json())
        .then(status => {
            console.log(status)
        })
    }   
    else{
        let err_card = `<div class="alert alert-danger" role="alert">
        <strong>Password don't match</strong>
      </div>`
        $("#err-message").append(err_card)
    }

}*/
//VARIABLES 

//FUNCTIONS$
$("document").ready(function(){
    $(".item_card").owlCarousel({
        items: 3,
        navigation:true,
        margin:0
    })
})
function fluid_promotion(){
    fetch("/fluid-promotions")
    .then((res) =>{ return res.json()})
    .then((data) => {
        let card = ``
        data.forEach((item) => {
            card += `
            <div class="card-item">
            <div class="image" style= "background-image: url(${item.image_source});">

            </div>
            <div class="information">
                <h3>${item.name} <span>${item.subtitle}</span></h3>
            <div class="star">
            <h5>5 STars</h5> 
            </div>
             <div class="desc">
                ${item.desc}
             </div>
             <h5>
                 <span style = "color:#3c763d">${item.date_start}</span> - <span style = "color:#a94442">${item.date_end}</span>
             </h5>
             <button type="button" class="read-more">Read More</button>
             </div>
           </div>

            `
        });

        $(".promotion-cards").append(card)
    })
}
function addItems(){
    $("#preloader").fadeOut(400,function(){
        $(this).remove()
    })
   
}
function removeDiv(){
    $(".errMssg").hide()
}