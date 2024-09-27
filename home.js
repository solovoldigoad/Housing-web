/* login function */
document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector(".Wrapper");
    const loginLink = document.querySelector(".logIn-link");
    const registerLink = document.querySelector(".register-link");
    const pop = document.querySelector("#LogIn");
    const close = document.querySelector(".icon-close");

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });
pop.addEventListener('click',()=> {
wrapper.classList.toggle('active-pop');
});
close.addEventListener('click',()=> {
wrapper.classList.remove('active-pop');
});
window.addEventListener('click', function(e){
if(e.target === wrapper){
wrapper.classList.remove('active-pop');
}
});

});


/* HOUSE 1*/
document.addEventListener("DOMContentLoaded", function() {
    const mainImgs = document.getElementById("House1");
    const changingBtns = document.getElementById("changeBtn");
    const changingBtnsPrev = document.getElementById("changePrevBtn");
    const images = [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://luxurylifestyleawards.com/wp-content/uploads/2022/04/@aak_fotografy-1.jpg",
        "https://cedreo.com/wp-content/uploads/cloudinary/industrial_bedroom_at2ekq.jpg",
        "https://img.staticmb.com/mbcontent/images/uploads/2021/5/luxury-kitchen-design.jpg",
        "https://www.porcelanosa.com/trendbook/app/uploads/2022/01/Luxury-bathroom-ideas-1280x720.jpg"
    ];

    let index =0;
    function  UpdateImg(){
        mainImgs.src = images[index];
    }
    changingBtnsPrev.addEventListener("click" , function(){
            index= (index -1 +images.length)%images.length;
            UpdateImg();
    });
    changingBtns.addEventListener("click", function(){
        index = (index+1)%images.length;
        UpdateImg();
    });
});

/*HOUSE 2 */
document.addEventListener("DOMContentLoaded", function() {
    const mainImgs = document.getElementById("House2");
    const changingBtns = document.getElementById("changeBtn2");
    const changingBtnsPrev = document.getElementById("changePrevBtn2");
    const images = [
        "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://media.designcafe.com/wp-content/uploads/2020/03/21012616/luxury-living-room-furniture-design.jpg",
        "https://st.hzcdn.com/simgs/pictures/bedrooms/leaside-master-bedroom-laura-stein-interiors-img~1e2154d201d84d17_14-6282-1-5185fcc.jpg",
        "https://images.unsplash.com/photo-1611095210561-67f0832b1ca3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5JTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://housing.com/news/wp-content/uploads/2023/03/Luxury-bathroom-designs-1200x700-compressed.jpg",
    ];
    let index =0;
    function  UpdateImg(){
        mainImgs.src = images[index];
    }
    changingBtnsPrev.addEventListener("click" , function(){
            index= (index -1 +images.length)%images.length;
            UpdateImg();
    });
    changingBtns.addEventListener("click", function(){
        index = (index+1)%images.length;
        UpdateImg();
    });
});
/*HOUSE 3 */
document.addEventListener("DOMContentLoaded", function() {
    const mainImgs = document.getElementById("House3");
    const changingBtns = document.getElementById("changeBtn3");
    const changingBtnsPrev = document.getElementById("changePrevBtn3");
    
    const images = [
        "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/spaces/living-rooms/luxury-living-room-design-ideas-you-hadnt-thought-of-yet/modern-luxury-living-room.jpg",
        "https://res.cloudinary.com/castlery/image/upload/v1673235198/blogs/Choosing%20The%20Perfect%20Furniture%20Sets%20For%20Your%20Bedroom/Seb_Bedroom_Set.jpg",
        "https://www.thespruce.com/thmb/f1yD3StI2A3xW5WwQVhhlF98IRU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KMINovDec2020_017-792b89dd46874fd18c2efd1c47b0ef1d.jpg",
        "https://media.istockphoto.com/id/1367378067/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=VR1uhmqEJ6Q65-0yxYqaETAyisbveGsSur3CW8734Uw="    
    ];
    let index =0;
    function  UpdateImg(){
        mainImgs.src = images[index];
    }
    changingBtnsPrev.addEventListener("click" , function(){
            index= (index -1 +images.length)%images.length;
            UpdateImg();
    });
    changingBtns.addEventListener("click", function(){
        index = (index+1)%images.length;
        UpdateImg();
    });
});

/*HOUSE 4 */
document.addEventListener("DOMContentLoaded", function() {
    const mainImgs = document.getElementById("House4");
    const changingBtns = document.getElementById("changeBtn4");
    const changingBtnsPrev = document.getElementById("changePrevBtn4");
    const images = [
        "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
        "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/11/24120505/luxury-living-room-interiors.jpg",
        "https://cdn.homedit.com/wp-content/uploads/2020/12/How-to-decorate-an-average-bedroom.jpg",
        "https://i.pinimg.com/736x/ff/a2/28/ffa228713831baa996b1f52db4f1c253.jpg",
        "https://img.freepik.com/free-photo/small-bathroom-with-modern-style-ai-generated_23-2150694968.jpg"
    ];
    let index =0;
    function  UpdateImg(){
        mainImgs.src = images[index];
    }
    changingBtnsPrev.addEventListener("click" , function(){
            index= (index -1 +images.length)%images.length;
            UpdateImg();
    });
    changingBtns.addEventListener("click", function(){
        index = (index+1)%images.length;
        UpdateImg();
    });
});
