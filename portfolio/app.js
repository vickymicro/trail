const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
//searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");

const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))
function linkAction(){
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  const navMenu = document.getElementById('menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

//searchBtn.addEventListener("click" , () =>{
  //  sidebar.classList.remove("close");
//})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: {gradient: ['#a445b2', '#fa4299']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.70
  });
  $(".react .bar").circleProgress({
    value: 0.60
  });
