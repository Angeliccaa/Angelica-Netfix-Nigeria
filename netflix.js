function myFunction() {
  document.getElementById("para1").style.padding = '30px'
  document.getElementById("para1").style.color = "#ffffff"
  document.getElementById('para1').style.backgroundColor = 'grey'
  document.getElementById('para1').style.width = '79.7%'
  document.getElementById('para1').style.marginLeft = '6px'
  document.getElementById('para1').style.fontSize = '27px'
  document.getElementById("para1").innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows,movies,anime, documentaries,and more on thousands of internet-connected devices.<p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>";
  var para = document.getElementById("para1");
  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
}
function myFunctio() {
  document.getElementById("para2").style.padding = '30px'
  document.getElementById("para2").style.color = "#ffffff"
  document.getElementById('para2').style.backgroundColor = 'grey'
  document.getElementById('para2').style.width = '79.7%'
  document.getElementById('para2').style.marginLeft = '6px'
  document.getElementById('para2').style.fontSize = '25px'
  var par = document.getElementById("para2");
  if (par.style.display === "none") {
    par.style.display = "block";
  } else {
    par.style.display = "none";
  }
  document.getElementById("para2").innerHTML = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,200 to ₦7,000 a month. No extra costs, no contracts.";
}
function myFuncti() {
  document.getElementById("para3").style.padding = '30px'
  document.getElementById("para3").style.color = "#ffffff"
  document.getElementById('para3').style.backgroundColor = 'grey'
  document.getElementById('para3').style.width = '79.7%'
  document.getElementById('para3').style.marginLeft = '6px'
  document.getElementById('para3').style.fontSize = '27px'
  var para = document.getElementById("para3");
  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
  document.getElementById("para3").innerHTML = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br> <br>You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.";
}
function myFunctionn() {
  document.getElementById("para4").style.padding = '30px'
  document.getElementById("para4").style.color = "#ffffff"
  document.getElementById('para4').style.backgroundColor = 'grey'
  document.getElementById('para4').style.width = '79.7%'
  document.getElementById('para4').style.marginLeft = '6px'
  document.getElementById('para4').style.fontSize = '25px'
  var para = document.getElementById("para4");
  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
  document.getElementById("para4").innerHTML = "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
}
function myFunctiono() {
  document.getElementById("para5").style.padding = '30px'
  document.getElementById("para5").style.color = "#ffffff"
  document.getElementById('para5').style.backgroundColor = 'grey'
  document.getElementById('para5').style.width = '79.7%'
  document.getElementById('para5').style.marginLeft = '6px'
  document.getElementById('para5').style.fontSize = '25px'
  var para = document.getElementById("para5");
  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
  document.getElementById("para5").innerHTML = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";
}
function myFunctionp() {
  document.getElementById("para6").style.padding = '30px'
  document.getElementById("para6").style.color = "#ffffff"
  document.getElementById('para6').style.backgroundColor = 'grey'
  document.getElementById('para6').style.width = '79.7%'
  document.getElementById('para6').style.marginLeft = '6px'
  document.getElementById('para6').style.fontSize = '27px'
  var para = document.getElementById("para6");
  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
  document.getElementById("para6").innerHTML = "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. <br> <br> Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.";
}


let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.gallery .productt').forEach(productt => {
    productt.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = productt.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});
