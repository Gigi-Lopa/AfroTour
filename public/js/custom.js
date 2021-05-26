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
// CONFIG TOUR USER SECTION
function configUser(){
    $(".errMssg").hide()
    $(".errMssg_ptn").hide()
}
function disableBtn(){
    $(".submit_btn").attr("disabled","disabled")
   let  btn_css = {
       "background-color":"rgb(179, 179, 179)",
       "box-shadow":" rgb(179, 179, 179) 0px 0px 15px ",
       "border":"1px solid rgb(179, 179, 179)"
   }
    $(".submit_btn").css(btn_css)
}

function showErr(fieldClass, mssgClass){
    let form_group_css = {
        "border-bottom":"1px solid red"
    }
    $(fieldClass).css(form_group_css)
    $(mssgClass).show()
    
}
function activate_btn(fieldClass, mssgClass,btnClass){
    let form_group_css = {
        "border-bottom":"1px solid #4db6ac"
    }
    $(fieldClass).css(form_group_css)
    $(mssgClass).hide()
    let btn_css = {
        "border": "none",
        "background-color": "#4db6ac",
        "color": "#ffff",
       " border-radius": "25px",
        "transition": "all 0.3s",
        "box-shadow": "#4db6ac 0px 0px 15px",
    }
$(btnClass).attr("disabled",false)
$(btnClass).css(btn_css)
}

$("document").ready(function(){
$("#tourist-password2").keyup(function(){
    let password = $("#tourist-password").val()
    let confirmed_password = $("#tourist-password2").val()
    let fieldClass =".errPassword"
    let mssgClass = ".errMssg"
    let btnClass = ".submit_btn"
    if (password === confirmed_password){
        activate_btn(fieldClass,mssgClass,btnClass)
    }
    else{
       disableBtn()
        showErr(fieldClass,mssgClass)

    }
})
$("#com-password2").keyup(function (){
    let password_ptn = $("#com-password").val()
    let confirmed_password_ptn = $("#com-password2").val()
    let fieldClass =".errPassword_ptn";
    let mssgClass = ".errMssg_ptn";
    let btnClass = ".submit_btn";
    if(password_ptn === confirmed_password_ptn){
        activate_btn(fieldClass,mssgClass,btnClass) 
    }
    else{
        disableBtn()
        showErr(fieldClass,mssgClass)
    }
})

})

// CONFIG PARTNER SECTION
