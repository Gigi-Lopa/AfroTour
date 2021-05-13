function register(){
    alert("email")

    var title = document.getElementById("title").value
    var first_name = document.getElementById("first_name").value
    var last_name = document.getElementById("last_name").value
    var company = document.getElementById("company_name").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone_n").value
    var password = document.getElementById("password").value
    var password_veryfication = document.getElementById("password2").value

    alert(email)

    var data = {
        title,
        first_name,
        last_name,
        company,
        email,
        phone,
        password,
        password_veryfication
    }


    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/register_tourist', options).then(response => response.json()).then(status => {
        console.log(status);

        alert(status);

        
    })
}


function register_patner(){
    alert("email")

    var title = document.getElementById("title_patner").value
    var first_name = document.getElementById("first_name_patner").value
    var last_name = document.getElementById("last_name_patner").value
    var company = document.getElementById("company_name_patner").value
    var email = document.getElementById("email_patner").value
    var phone = document.getElementById("phone_patner").value
    var password = document.getElementById("password_patner").value
    var password_veryfication = document.getElementById("password2_patner").value
    

    if(password.length > 8 ){
        if(password == password_veryfication){
            alert(email)

            var data = {
                title,
                first_name,
                last_name,
                company,
                email,
                phone,
                password,
                password_veryfication
            }
        
        
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            fetch('/register_patner', options).then(response => response.json()).then(status => {
                console.log(status);
        
                alert(status);
        
            })
        }else{
            alert("Passwords provided do not match")
        }
    }else{
        alert("please Enter a password  of at least 8 characters")
    }
}
function addItems(){
    fetch("/fluid-attraction")
    .then((res) =>{ return res.json()})
    .then((data) => {
        let item_card = ``
        let attr = ""
        data.forEach((item) => {
            item_card += `
            <div class="item">
            <div class="image">
                <img src = "${item.image_src}">
                <div class="featured-button button">
                    <a href="#projects">Continue Reading</a>
                </div>
            </div>
            <div class="text-content">
                <h4>${item.location_name} </h4>
                <span id="subTitle">${item.review}</span>
                <p>${item.desc}</p>
                </div>
            </div>
            `
        });
        $("#Items").append(item_card)
    })
}