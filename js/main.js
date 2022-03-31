
let insta = [
  {
    id:0,
    media:[
      
       "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/06/24/cf9d675c-b1fe-11ea-953d-a7ecc5cbd229_image_hires_144326.jpg"
      
    ],
    desc:`One of the world's most marketable and famous athletes`,
    like:1,
    comment:2,
    save:false,
  },
  {
    id:1,
    media:[
    
       "https://phantom-marca.unidadeditorial.es/17efa053312db15875d3e701e4af9686/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/07/16466366688435.jpg"
      
    ],
    desc:`Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation; born 5 February 1985)`,
    like:0,
    comment:2,
    save:false,
  },
  {
    id:2,
    media:[
      
        // "https://besthqwallpapers.com/Uploads/23-3-2018/45486/thumb2-cr7-goal-cristiano-ronaldo-football-stars-real-madrid.jpg",
        "../../videos/video1.mp4",
      
    ],
    desc:`Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation; born 5 February 1985) `,
    like:1,
    comment:2,
    save:false,
  },
  {
    id:3,
    media:[
      
      "https://images.beinsports.com/EcFZNJY8579FhTk5YJi4nwfbbP8=/full-fit-in/1000x0/ronaldo-cropped_1r634btzjoddx1aa49ghivwo7f.jpg",
      
    ],
    desc:`He has played in and scored at 11 major tournaments `,
    like:1,
    comment:2,
    save:false,
  },
  {
    id:4,
    media:[
      
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F08%2F27%2Fchristiano-ronaldo-2.jpg&q=60.jpg",
      
    ],
    desc:`Cristiano Ronaldo dos Santos Aveiro GOIH ComM `,
    like:1,
    comment:2,
    save:false,
  },
  {
    id:5,
    media:[
      
      "https://as01.epimg.net/en/imagenes/2019/06/22/football/1561194508_818748_1561196404_noticia_normal_recorte1.jpg",
        // '../videos/video1.mp4',
    
    ],
    desc:`Ronaldo made his senior international debut for Portugal in 2003`,
    like:1,
    comment:2,
    save:false,
  },
  {
    id:6,
    media:[
    
      "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2020/06/05/143417-untitled-design-54.jpg",
        // "../videos/video1.mp4",
    
    ],
    desc:`Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation; born 5 February 1985)`,
    like:1,
    comment:2,
    save:false,
  },
  {
    id:7,
    media:[
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article21470519.ece/ALTERNATES/s615/0_Untitled-4.png",

    ],
    desc:`He won back-to-back Ballons d'Or in 2013 and 2014`,
    like:1,
    comment:2,
    save:false,
  },
  {
    id:8,
    media:[
      
      // "https://media.istockphoto.com/videos/children-holding-hands-looking-at-the-universe-on-some-distant-alien-video-id1358219568",
        "../videos/video2.mp4",
     
    ],
    desc:`Born and raised in Madeira, Ronaldo began his senior club career playing for Sporting CP`,
    like:1,
    comment:2,
    save:false,
  },
]




let elList = document.querySelector("#list")

insta.forEach((item,index) =>{
  let li = document.createElement("li");
  li.className = "main-item item";
  li.setAttribute("data-bs-toggle","modal");
  li.setAttribute("data-bs-target","#exampleModal");
  // li.setAttribute("data-bs-toggle","modal");
  // li.setAttribute("data-bs-target","#exampleModal");
  if(item.media[0].includes('.mp4')){
    
    li.innerHTML = `
    <video class="item-video" controls>
    <source src="${item.media[0]}" type="video/mp4">
  </video>
    <div class="like-comment">
      <div class="likes">
        <button id="likesbtn" class="likes__btn"><i class='bx bxs-heart'></i></button>
        <span id="likes-sum" class="likes__sum">0</span>
      </div>
      <div class="comments">
        <button class="comments__btn"><i class='bx bxs-comment'></i></button>
        <span class="comments__sum">${item.comment}</span>
      </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div class="fathermodal-img">
          <img class="modal-img" src="${item.media[0]}" alt="">
        </div>
        <div class="modal-info">
          <div class="modal-info-el">
            <div class="modal-info-cont">
              <img class="modal-info-img" src="img/content-img.jpg" alt="">
              <h2 class="modal-info-title">cristiano</h2>
              <button class="modal-subcribe-btn">subcribe</button>
            </div>
            <button class="modal-dotsbtn"><i class='bx bx-dots-horizontal-rounded'></i></button>
          </div>
          <div class="modal-info-body">
            <ul class="modal-info-list">
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
                <h2 class="modal-info-title">cnzburak</h2>
                <p class="modal-body-text">Factoss 👍👍👍 siiiiiiiiiiuuuuuu</p>
                <div class="modal-body-res">
                  <span>1 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>2</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/ulimg1-modal.jpg" alt="">
                <h2 class="modal-info-title">ali98</h2>
                <p class="modal-body-text">Kiki brat cel zivot navivam za tebe ama utre nemozam .. izvini brat 🙌 @zmejko14</p>
                <div class="modal-body-res">
                  <span>3 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>1</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/ul-modal-img3.jpg" alt="">
                <h2 class="modal-info-title">maxdi-sm</h2>
                <p class="modal-body-text">Vamos Portugal 🇵🇹🇵🇹 , Vamos Cristiano </p>
                <div class="modal-body-res">
                  <span>3 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>6</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
                <h2 class="modal-info-title">osana-najin</h2>
                <p class="modal-body-text">falta usar mais a tesoura de desbaste que achas bro?🤣🤣🤣</p>
                <div class="modal-body-res">
                  <span>4 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>87</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
                <h2 class="modal-info-title">mustafa12</h2>
                <p class="modal-body-text">@cristiano ko paise khatam howe hai bache ko bola lee insta py koye pix upload kr paisa aajaye ga😂<p>
                <div class="modal-body-res">
                  <span>5 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>13</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/ul-modal-img4n.jpg" alt="">
                <h2 class="modal-info-title">cnzburak</h2>
                <p class="modal-body-text">بااع جمال كرستيانوو ويكولك الواحد ليش تشجع ريال😂😂😩</p>
                <div class="modal-body-res">
                  <span>7 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>3</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/]ul-modal-img3.jpg" alt="">
                <h2 class="modal-info-title">bursa__</h2>
                <p class="modal-body-text">❤️❤️❤️❤️ world best footballer</p>
                <div class="modal-body-res">
                  <span>7 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>53</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-info-foter">
            <div class="modal-footerr">
              <div class="modal-info-fc">
                <div>
                  <button class="modal-info-btns"><i class='bx bx-heart' ></i></button>
                  <button class="modal-info-btns modal-info-activ"><i class='bx bx-comment'></i></button>
                  <button class="modal-info-btns modal-info-activ"><i class='bx bx-send' ></i></button>
                </div>
                <button id="modal-info-btn" class="modal-info-btns">
                  <i class='bx bx-message-alt' ></i>
                </button>
              </div>
              <div  class="modal-info-likes"><span id="modal-info-like" class="me-2">0 </span><p class="m-0">"Likes"</p></div>
              <p class="modal-day-text">one day ego</p>
            </div>
            <div class="modal-send-message">
              <div>
                <span class="modal-emoji">😊</span>
                <input class="modal-add-comment" type="text" placeholder="add message" required >
              </div>
              <button class="modal-send-btn">send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    `;
  }
  else {
    li.innerHTML = `
    <img class="item__img" src="${item.media[0]}" alt="cr7">
    <div class="like-comment">
      <div class="likes">
        <button id="likesbtn" class="likes__btn"><i class='bx bxs-heart'></i></button>
        <span id="likes-sum" class="likes__sum">0</span>
      </div>
      <div class="comments">
        <button class="comments__btn"><i class='bx bxs-comment'></i></button>
        <span class="comments__sum">${item.comment}</span>
      </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div class="fathermodal-img">
          <img class="modal-img" src="${item.media[index]}" alt="">
        </div>
        <div class="modal-info">
          <div class="modal-info-el">
            <div class="modal-info-cont">
              <img class="modal-info-img" src="img/content-img.jpg" alt="">
              <h2 class="modal-info-title">cristiano</h2>
              <button class="modal-subcribe-btn">subcribe</button>
            </div>
            <button class="modal-dotsbtn"><i class='bx bx-dots-horizontal-rounded'></i></button>
          </div>
          <div class="modal-info-body">
            <ul class="modal-info-list">
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
                <h2 class="modal-info-title">cnzburak</h2>
                <p class="modal-body-text">Factoss 👍👍👍 siiiiiiiiiiuuuuuu</p>
                <div class="modal-body-res">
                  <span>1 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>2</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/ulimg1-modal.jpg" alt="">
                <h2 class="modal-info-title">ali98</h2>
                <p class="modal-body-text">Kiki brat cel zivot navivam za tebe ama utre nemozam .. izvini brat 🙌 @zmejko14</p>
                <div class="modal-body-res">
                  <span>3 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>1</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/ul-modal-img3.jpg" alt="">
                <h2 class="modal-info-title">maxdi-sm</h2>
                <p class="modal-body-text">Vamos Portugal 🇵🇹🇵🇹 , Vamos Cristiano </p>
                <div class="modal-body-res">
                  <span>3 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>63</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
                <h2 class="modal-info-title">osana-najin</h2>
                <p class="modal-body-text">falta usar mais a tesoura de desbaste que achas bro?🤣🤣🤣</p>
                <div class="modal-body-res">
                  <span>4 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>87</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
                <h2 class="modal-info-title">mustafa12</h2>
                <p class="modal-body-text">@cristiano ko paise khatam howe hai bache ko bola lee insta py koye pix upload kr paisa aajaye ga😂<p>
                <div class="modal-body-res">
                  <span>5 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>13</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/ul-modal-img4n.jpg" alt="">
                <h2 class="modal-info-title">cnzburak</h2>
                <p class="modal-body-text">بااع جمال كرستيانوو ويكولك الواحد ليش تشجع ريال😂😂😩</p>
                <div class="modal-body-res">
                  <span>7 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>3</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
              <li class="modal-info-item">
                <img class="modal-info-img" src="./img/]ul-modal-img3.jpg" alt="">
                <h2 class="modal-info-title">bursa__</h2>
                <p class="modal-body-text">❤️❤️❤️❤️ world best footballer</p>
                <div class="modal-body-res">
                  <span>7 day ego</span>
                  <span class="me-2 ms-2">"Likes": <span>53</span></span>
                  <span class="modal-body-respont">respond</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-info-foter">
            <div class="modal-footerr">
              <div class="modal-info-fc">
                <div>
                  <button class="modal-info-btns"><i class='bx bx-heart' ></i></button>
                  <button class="modal-info-btns modal-info-activ"><i class='bx bx-comment'></i></button>
                  <button class="modal-info-btns modal-info-activ"><i class='bx bx-send' ></i></button>
                </div>
                <button id="modal-info-btn" class="modal-info-btns">
                  <i class='bx bx-message-alt' ></i>
                </button>
              </div>
              <div  class="modal-info-likes"><span id="modal-info-like" class="me-2">0 </span><p class="m-0">"Likes"</p></div>
              <p class="modal-day-text">one day ego</p>
            </div>
            <div class="modal-send-message">
              <div>
                <span class="modal-emoji">😊</span>
                <input class="modal-add-comment" type="text" placeholder="add message" required >
              </div>
              <button class="modal-send-btn">send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    `;
  }
  elList.appendChild(li);
}) 




let ellikesbtn = document.querySelector("#likesbtn")
let ellikesbclass = document.querySelectorAll(".likes__btn")
let likessum = document.querySelectorAll(".likes__sum")
let elmodalinfolike = document.querySelector("#modal-info-like")

// ellikesbtn.parentElement
// console.log(ellikesbtn);

let count = 1
let count2 = 0

// ellikesbtn.addEventListener("click", () => {
//   for (let i = 0 ; i < likessum.length; i++) {
//     // likessum[0].textContent = 1
//     // likessum[0].textContent.toggle("1");
//     likessum[i].textContent.add(count)
//   }
// })



ellikesbtn.addEventListener("click" , (e) => {
  count++
  count2++
  // e.target.parentElement.textContent = count2
  console.log(e.target.parentElement);
  for (let i = 0 ; i < likessum.length; i++) {
    likessum[0].textContent = 1
    elmodalinfolike.textContent = likessum[0].textContent
    // e.target.parentElement.textContent = count
  }
})



// ellikesbtn.addEventListener("click" , (e) => {
//   for (let i = 0 ; i < likessum.length; i++) {
//     if (likessum[0].innerHTML == "0") {
//       likessum[i].textContent == 1
//       elmodalinfolike.textContent = 1
//     }
//   }
// })




// let elitem = document.querySelectorAll(".item")
// let ellikecomment = document.querySelectorAll(".like-comment")
// elitem.forEach((item,index) => {
//   item.addEventListener("mouseenter" , hower)
  
// })
// function hower (e) {
//   ellikecomment.forEach((el,idx) => {
//    el.style.display = "flex"
//    console.log(e.target);
//   })
// }




let elmainlist  = document.querySelectorAll(".main-list")
let ellist1 = document.querySelector("#list")
let ellist2 = document.querySelector("#list2")
let elInfoPublication = document.querySelector(".info__pub") 
let elInfoSaved = document.querySelector(".info__saved")

ellist1.classList.add("shouw")
elInfoPublication.addEventListener("click",() => {
  ellist2.classList.remove("shouw")
  ellist1.classList.add("shouw")
})

elInfoSaved.addEventListener("click",() => {
  ellist1.classList.remove("shouw")
  ellist2.classList.add("shouw")
})









let elmodalinfobtn = document.querySelector("#modal-info-btn")
console.log(elmodalinfobtn);


elmodalinfobtn.addEventListener("click" , (e) => {
  e.preventDefault()
  // console.log(elmodalinfobtn);
insta.forEach((item,index) =>{
  // console.log(index);
  // console.log(item.id);
  if (item.id == index) {
    let li = document.createElement("li");
    li.className = "main-item item";
    li.setAttribute("data-bs-toggle","modal");
    li.setAttribute("data-bs-target","#exampleModal");
    if(item.media[0].includes('.mp4')){
      
      li.innerHTML = `
      <video class="item-video" controls>
      <source src="${item.media[0]}" type="video/mp4">
    </video>
      <div class="like-comment">
        <div class="likes">
          <button id="likesbtn" class="likes__btn"><i class='bx bxs-heart'></i></button>
          <span id="likes-sum" class="likes__sum">0</span>
        </div>
        <div class="comments">
          <button class="comments__btn"><i class='bx bxs-comment'></i></button>
          <span class="comments__sum">${item.comment}</span>
        </div>
      </div>
  
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="fathermodal-img">
            <img class="modal-img" src="${item.media[0]}" alt="">
          </div>
          <div class="modal-info">
            <div class="modal-info-el">
              <div class="modal-info-cont">
                <img class="modal-info-img" src="img/content-img.jpg" alt="">
                <h2 class="modal-info-title">cristiano</h2>
                <button class="modal-subcribe-btn">subcribe</button>
              </div>
              <button class="modal-dotsbtn"><i class='bx bx-dots-horizontal-rounded'></i></button>
            </div>
            <div class="modal-info-body">
              <ul class="modal-info-list">
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
                  <h2 class="modal-info-title">cnzburak</h2>
                  <p class="modal-body-text">Factoss 👍👍👍 siiiiiiiiiiuuuuuu</p>
                  <div class="modal-body-res">
                    <span>1 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>2</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/ulimg1-modal.jpg" alt="">
                  <h2 class="modal-info-title">ali98</h2>
                  <p class="modal-body-text">Kiki brat cel zivot navivam za tebe ama utre nemozam .. izvini brat 🙌 @zmejko14</p>
                  <div class="modal-body-res">
                    <span>3 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>1</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/ul-modal-img3.jpg" alt="">
                  <h2 class="modal-info-title">maxdi-sm</h2>
                  <p class="modal-body-text">Vamos Portugal 🇵🇹🇵🇹 , Vamos Cristiano </p>
                  <div class="modal-body-res">
                    <span>3 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>63</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
                  <h2 class="modal-info-title">osana-najin</h2>
                  <p class="modal-body-text">falta usar mais a tesoura de desbaste que achas bro?🤣🤣🤣</p>
                  <div class="modal-body-res">
                    <span>4 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>87</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
                  <h2 class="modal-info-title">mustafa12</h2>
                  <p class="modal-body-text">@cristiano ko paise khatam howe hai bache ko bola lee insta py koye pix upload kr paisa aajaye ga😂<p>
                  <div class="modal-body-res">
                    <span>5 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>13</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/ul-modal-img4n.jpg" alt="">
                  <h2 class="modal-info-title">cnzburak</h2>
                  <p class="modal-body-text">بااع جمال كرستيانوو ويكولك الواحد ليش تشجع ريال😂😂😩</p>
                  <div class="modal-body-res">
                    <span>7 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>3</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/]ul-modal-img3.jpg" alt="">
                  <h2 class="modal-info-title">bursa__</h2>
                  <p class="modal-body-text">❤️❤️❤️❤️ world best footballer</p>
                  <div class="modal-body-res">
                    <span>7 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>53</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="modal-info-foter">
              <div class="modal-footerr">
                <div class="modal-info-fc">
                  <div>
                    <button class="modal-info-btns"><i class='bx bx-heart' ></i></button>
                    <button class="modal-info-btns modal-info-activ"><i class='bx bx-comment'></i></button>
                    <button id="modal-info-btn" class="modal-info-btns modal-info-activ"><i class='bx bx-send' ></i></button>
                  </div>
                  <button class="modal-info-btns">
                    <i class='bx bx-message-alt' ></i>
                  </button>
                </div>
                <div  class="modal-info-likes"><span id="modal-info-like" class="me-2">0 </span><p class="m-0">"Likes"</p></div>
                <p class="modal-day-text">one day ego</p>
              </div>
              <div class="modal-send-message">
                <div>
                  <span class="modal-emoji">😊</span>
                  <input class="modal-add-comment" type="text" placeholder="add message" required >
                </div>
                <button class="modal-send-btn">send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
      `;
    }
    else {
      li.innerHTML = `
      <img class="item__img" src="${item.media[0]}" alt="cr7">
      <div class="like-comment">
        <div class="likes">
          <button id="likesbtn" class="likes__btn"><i class='bx bxs-heart'></i></button>
          <span id="likes-sum" class="likes__sum">${item.like}</span>
        </div>
        <div class="comments">
          <button class="comments__btn"><i class='bx bxs-comment'></i></button>
          <span class="comments__sum">${item.comment}</span>
        </div>
      </div>
  
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="fathermodal-img">
            <img class="modal-img" src="${item.media[0]}" alt="">
          </div>
          <div class="modal-info">
            <div class="modal-info-el">
              <div class="modal-info-cont">
                <img class="modal-info-img" src="img/content-img.jpg" alt="">
                <h2 class="modal-info-title">cristiano</h2>
                <button class="modal-subcribe-btn">subcribe</button>
              </div>
              <button class="modal-dotsbtn"><i class='bx bx-dots-horizontal-rounded'></i></button>
            </div>
            <div class="modal-info-body">
              <ul class="modal-info-list">
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
                  <h2 class="modal-info-title">cnzburak</h2>
                  <p class="modal-body-text">Factoss 👍👍👍 siiiiiiiiiiuuuuuu</p>
                  <div class="modal-body-res">
                    <span>1 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>2</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/ulimg1-modal.jpg" alt="">
                  <h2 class="modal-info-title">ali98</h2>
                  <p class="modal-body-text">Kiki brat cel zivot navivam za tebe ama utre nemozam .. izvini brat 🙌 @zmejko14</p>
                  <div class="modal-body-res">
                    <span>3 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>1</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/ul-modal-img3.jpg" alt="">
                  <h2 class="modal-info-title">maxdi-sm</h2>
                  <p class="modal-body-text">Vamos Portugal 🇵🇹🇵🇹 , Vamos Cristiano </p>
                  <div class="modal-body-res">
                    <span>3 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>63</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
                  <h2 class="modal-info-title">osana-najin</h2>
                  <p class="modal-body-text">falta usar mais a tesoura de desbaste que achas bro?🤣🤣🤣</p>
                  <div class="modal-body-res">
                    <span>4 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>87</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
                  <h2 class="modal-info-title">mustafa12</h2>
                  <p class="modal-body-text">@cristiano ko paise khatam howe hai bache ko bola lee insta py koye pix upload kr paisa aajaye ga😂<p>
                  <div class="modal-body-res">
                    <span>5 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>13</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/ul-modal-img4n.jpg" alt="">
                  <h2 class="modal-info-title">cnzburak</h2>
                  <p class="modal-body-text">بااع جمال كرستيانوو ويكولك الواحد ليش تشجع ريال😂😂😩</p>
                  <div class="modal-body-res">
                    <span>7 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>3</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
                <li class="modal-info-item">
                  <img class="modal-info-img" src="./img/]ul-modal-img3.jpg" alt="">
                  <h2 class="modal-info-title">bursa__</h2>
                  <p class="modal-body-text">❤️❤️❤️❤️ world best footballer</p>
                  <div class="modal-body-res">
                    <span>7 day ego</span>
                    <span class="me-2 ms-2">"Likes": <span>53</span></span>
                    <span class="modal-body-respont">respond</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="modal-info-foter">
              <div class="modal-footerr">
                <div class="modal-info-fc">
                  <div>
                    <button class="modal-info-btns"><i class='bx bx-heart' ></i></button>
                    <button class="modal-info-btns modal-info-activ"><i class='bx bx-comment'></i></button>
                    <button id="modal-info-btn" class="modal-info-btns modal-info-activ"><i class='bx bx-send' ></i></button>
                  </div>
                  <button class="modal-info-btns">
                    <i class='bx bx-message-alt' ></i>
                  </button>
                </div>
                <div class="modal-info-likes"><span id="modal-info-like" class="me-2">0 </span><p class="m-0">"Likes"</p></div>
                <p class="modal-day-text">one day ego</p>
              </div>
              <div class="modal-send-message">
                <div>
                  <span class="modal-emoji">😊</span>
                  <input class="modal-add-comment" type="text" placeholder="add message" required >
                </div>
                <button class="modal-send-btn">send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
      `;
    }
    ellist2.appendChild(li);
  }

}) 

})





// let elstorisright = document.querySelector(".storis-right ")
// let elstorisleft = document.querySelector(".storis-left")
// elstorisright.addEventListener("click", () => {
  //   elstorislist.style.transform = "translate(-100px)"
  // })
  
  
  
  
  
let elstorislist = document.querySelector(".storis-list")
let carBtnleft = document.querySelectorAll('.storis-left');
let carBtnright = document.querySelectorAll('.storis-right');
let count1 = 0;

carBtnright.forEach((el, index) => {
  let n = index
  if (n == 0) {
    el.addEventListener('click', () => {
      count1++;
      if (count1 == 1) {
        elstorislist.style.transform = 'translateX(-20%)';
      } else if (count1 == 2) {
        elstorislist.style.transform = 'translateX(-40%)';
      } else if (count1 == 3) {
        elstorislist.style.transform = 'translateX(-60%)';
      } else if (count1 == 4) {
        elstorislist.style.transform = 'translateX(-80%)';
      }
      else if (count1 == 4) {
        elstorislist.style.transform = 'translateX(-100%)';
      }
      else {
        elstorislist.style.transform = 'translateX(0)';
        count1 = 0
      }
    })
  }
})



// carBtnright.forEach((el, index) => {
//   let n = index
//   if (n == 0) {
//     el.addEventListener('click', () => {
//       count1++;
//       if (count1 == 1) {
//         elstorislist.style.transform = 'translateX(-20%)';
//       }
//       else {
//         elstorislist.style.transform = 'translateX(0)';
//         count1 = 0
//       }
//       carBtnleft.style.transform =  'translateX(20%)'
//     })
//   }
// })

