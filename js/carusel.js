
// insta.forEach((item) => {
//   if (item.media.length > 1) {

//   }
// })







// insta.forEach((item,index) =>{
//   let li = document.createElement("li");
//   li.className = "main-item item";
//   li.setAttribute("data-bs-toggle","modal");
//   li.setAttribute("data-bs-target",`#exampleModal${idxx}`);
//   let div = document.createElement("div")
//   if(item.media[0].includes('.mp4')){
    
//     div.innerHTML = `
//     <div class="modal fade" id="exampleModal${idxx}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog"> 
//       <div class="modal-content">
//         <div class="modal-body">
//         <div class="fathermodal-img">
//           <video class="modal-img" controls >
//             <source src="${item.media}" type="video/mp4" >
//             <div class="hower-heart"><i class='bx bxs-heart'></i></div>
//           </video>
//         </div>
//           <div class="modal-info">
//             <div class="modal-info-el">
//               <div class="modal-info-cont">
//                 <img class="modal-info-img" src="img/content-img.jpg" alt="">
//                 <h2 class="modal-info-title">cristiano</h2>
//                 <button class="modal-subcribe-btn">subcribe</button>
//               </div>
//               <button class="modal-dotsbtn"><i class='bx bx-dots-horizontal-rounded'></i></button>
//             </div>
//             <div class="modal-info-body">
//               <ul class="modal-info-list">
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
//                   <h2 class="modal-info-title">cnzburak</h2>
//                   <p class="modal-body-text">Factoss 👍👍👍 siiiiiiiiiiuuuuuu</p>
//                   <div class="modal-body-res">
//                     <span>1 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>2</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/ulimg1-modal.jpg" alt="">
//                   <h2 class="modal-info-title">ali98</h2>
//                   <p class="modal-body-text">Kiki brat cel zivot navivam za tebe ama utre nemozam .. izvini brat 🙌 @zmejko14</p>
//                   <div class="modal-body-res">
//                     <span>3 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>1</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/ul-modal-img3.jpg" alt="">
//                   <h2 class="modal-info-title">maxdi-sm</h2>
//                   <p class="modal-body-text">Vamos Portugal 🇵🇹🇵🇹 , Vamos Cristiano </p>
//                   <div class="modal-body-res">
//                     <span>3 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>6</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
//                   <h2 class="modal-info-title">osana-najin</h2>
//                   <p class="modal-body-text">falta usar mais a tesoura de desbaste que achas bro?🤣🤣🤣</p>
//                   <div class="modal-body-res">
//                     <span>4 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>87</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
//                   <h2 class="modal-info-title">mustafa12</h2>
//                   <p class="modal-body-text">@cristiano ko paise khatam howe hai bache ko bola lee insta py koye pix upload kr paisa aajaye ga😂<p>
//                   <div class="modal-body-res">
//                     <span>5 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>13</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/ul-modal-img4n.jpg" alt="">
//                   <h2 class="modal-info-title">cnzburak</h2>
//                   <p class="modal-body-text">بااع جمال كرستيانوو ويكولك الواحد ليش تشجع ريال😂😂😩</p>
//                   <div class="modal-body-res">
//                     <span>7 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>3</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/]ul-modal-img3.jpg" alt="">
//                   <h2 class="modal-info-title">bursa__</h2>
//                   <p class="modal-body-text">❤️❤️❤️❤️ world best footballer</p>
//                   <div class="modal-body-res">
//                     <span>7 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>53</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//             <div class="modal-info-foter">
//               <div class="modal-footerr">
//                 <div class="modal-info-fc">
//                   <div>
//                     <button class="modal-info-btns modal-info-buttom"><i class='bx bx-heart'></i></button>
//                     <button class="modal-info-btns modal-info-activ"><i class='bx bx-comment'></i></button>
//                     <button class="modal-info-btns modal-info-activ"><i class='bx bx-send' ></i></button>
//                   </div>
//                   <button id="modal-info-btn" class="modal-info-btns modal-info-btn">
//                     <i class='bx bx-bookmark'></i>
//                   </button>
//                 </div>
//                 <div  class="modal-info-likes"><span id="${idbtn}" class="me-2 btn-sum">${item.like}</span><p class="m-0">"Likes"</p></div>
//                 <p class="modal-day-text">one day ego</p>
//               </div>
//               <div class="modal-send-message">
//                 <div>
//                   <span class="modal-emoji">😊</span>
//                   <input class="modal-add-comment" type="text" placeholder="add message" required >
//                 </div>
//                 <button class="modal-send-btn">send</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     `
//   }
//   else {
//     div.innerHTML = `
//     <div class="modal fade" id="exampleModal${idxx}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-body">
  
//           <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
//             <div class="carousel-inner">
//               <div class="carousel-item active fathermodal-img">
//                 <img class="modal-img" src="${item.media[0]}" alt="...">
//               </div>
//               <div class="carousel-item fathermodal-img">
//                 <img class="modal-img" src="${item.media[1]}" alt="...">
//               </div>
//               <div class="carousel-item fathermodal-img">
//                 <img class="modal-img" src="${item.media[2]}" alt="...">
//               </div>
//             </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
//               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span class="visually-hidden">Previous</span>
//             </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
//               <span class="carousel-control-next-icon" aria-hidden="true"></span>
//               <span class="visually-hidden">Next</span>
//             </button>
//           </div>
//           <div class="modal-info">
//             <div class="modal-info-el">
//               <div class="modal-info-cont">
//                 <img class="modal-info-img" src="img/content-img.jpg" alt="">
//                 <h2 class="modal-info-title">cristiano</h2>
//                 <button class="modal-subcribe-btn">subcribe</button>
//               </div>
//               <button class="modal-dotsbtn"><i class='bx bx-dots-horizontal-rounded'></i></button>
//             </div>
//             <div class="modal-info-body">
//               <ul class="modal-info-list">
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
//                   <h2 class="modal-info-title">cnzburak</h2>
//                   <p class="modal-body-text">Factoss 👍👍👍 siiiiiiiiiiuuuuuu</p>
//                   <div class="modal-body-res">
//                     <span>1 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>2</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/ulimg1-modal.jpg" alt="">
//                   <h2 class="modal-info-title">ali98</h2>
//                   <p class="modal-body-text">Kiki brat cel zivot navivam za tebe ama utre nemozam .. izvini brat 🙌 @zmejko14</p>
//                   <div class="modal-body-res">
//                     <span>3 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>1</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/ul-modal-img3.jpg" alt="">
//                   <h2 class="modal-info-title">maxdi-sm</h2>
//                   <p class="modal-body-text">Vamos Portugal 🇵🇹🇵🇹 , Vamos Cristiano </p>
//                   <div class="modal-body-res">
//                     <span>3 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>6</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
//                   <h2 class="modal-info-title">osana-najin</h2>
//                   <p class="modal-body-text">falta usar mais a tesoura de desbaste que achas bro?🤣🤣🤣</p>
//                   <div class="modal-body-res">
//                     <span>4 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>87</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/ul-modal-img.jpg" alt="">
//                   <h2 class="modal-info-title">mustafa12</h2>
//                   <p class="modal-body-text">@cristiano ko paise khatam howe hai bache ko bola lee insta py koye pix upload kr paisa aajaye ga😂<p>
//                   <div class="modal-body-res">
//                     <span>5 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>13</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/ul-modal-img4n.jpg" alt="">
//                   <h2 class="modal-info-title">cnzburak</h2>
//                   <p class="modal-body-text">بااع جمال كرستيانوو ويكولك الواحد ليش تشجع ريال😂😂😩</p>
//                   <div class="modal-body-res">
//                     <span>7 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>3</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//                 <li class="modal-info-item">
//                   <img class="modal-info-img" src="./img/]ul-modal-img3.jpg" alt="">
//                   <h2 class="modal-info-title">bursa__</h2>
//                   <p class="modal-body-text">❤️❤️❤️❤️ world best footballer</p>
//                   <div class="modal-body-res">
//                     <span>7 day ego</span>
//                     <span class="me-2 ms-2">"Likes": <span>53</span></span>
//                     <span class="modal-body-respont">respond</span>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//             <div class="modal-info-foter">
//               <div class="modal-footerr">
//                 <div class="modal-info-fc">
//                   <div>
//                     <button class="modal-info-btns modal-info-buttom"><i class='bx bx-heart' ></i></button>
//                     <button class="modal-info-btns modal-info-activ"><i class='bx bx-comment'></i></button>
//                     <button class="modal-info-btns modal-info-activ"><i class='bx bx-send' ></i></button>
//                   </div>
//                   <button id="modal-info-btn" class="modal-info-btns modal-info-btn">
//                     <i class='bx bx-bookmark'></i>
//                   </button>
//                 </div>
//                 <div  class="modal-info-likes"><span id="${idbtn}" class="me-2 btn-sum">${item.like}</span><p class="m-0">"Likes"</p></div>
//                 <p class="modal-day-text">one day ego</p>
//               </div>
//               <div class="modal-send-message">
//                 <div>
//                   <span class="modal-emoji">😊</span>
//                   <input class="modal-add-comment" type="text" placeholder="add message" required >
//                 </div>
//                 <button class="modal-send-btn">send</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     `
//   }

//   modaladd.appendChild(div)

//   if(item.media[0].includes('.mp4')){
    
//     li.innerHTML = `
//     <video class="item-video" controls>
//       <source src="${item.media[0]}" type="video/mp4">
//    </video>
//     <div class="like-comment">
//       <div class="likes">
//         <button id="likesbtn" class="likes__btn"><i class='bx bxs-heart'></i></button>
//         <span id="likes-sum" class="likes__sum">0</span>
//       </div>
//       <div class="comments">
//         <button class="comments__btn"><i class='bx bxs-comment'></i></button>
//         <span class="comments__sum">${item.comment}</span>
//       </div>
//     </div>

//     `;
//   }
//   else {
//     li.innerHTML = `
//     <img class="item__img" src="${item.media[0]}" alt="cr7">
//     <div class="like-comment">
//       <div class="likes">
//         <button id="likesbtn" class="likes__btn"><i class='bx bxs-heart'></i></button>
//         <span id="likes-sum" class="likes__sum">0</span>
//       </div>
//       <div class="comments">
//         <button class="comments__btn"><i class='bx bxs-comment'></i></button>
//         <span class="comments__sum">${item.comment}</span>
//       </div>
//     </div>
//     `;
//   }
//   idxx++
//   idbtn++
//   elList.appendChild(li);
// }) 















// // ====================== HEART DOUBLE CLICK ===================//
// let hisob = 2
// let sum2 = 1
// let count6 = 0
// let elDoubleClick = document.querySelectorAll(".fathermodal-img")
// let elHeartClick = document.querySelectorAll(".hower-heart")
// elDoubleClick.forEach(item => {
//   item.addEventListener("dblclick", () => {
//     elHeartClick.forEach(el => {
//       el.classList.toggle("doubeclick");

//       modalinfobuttom.forEach((item5 , indexx) => {
//         console.log(indexx);
//         item5.innerHTML = `<i class='bx bxs-heart'></i>`

//         item5.addEventListener("click", () => {
//           if (count6 % 2 == 0) {
//             item5.innerHTML = `<i class='bx bxs-heart'></i>`
//             elspansum.forEach(element => {
//               let elsum = eval(element.textContent)
//               elsum += sum
//               element.textContent = elsum 
//             })
//           }
//           else if (count6 % 2 != 0) {
//             item5.innerHTML = `<i class='bx bx-heart' ></i>`
//             elspansum.forEach(element => {
//               let elsum2 = eval(element.textContent)
//               elsum2 -= sum
//               element.textContent = elsum2
//             })
//           }
//           count6++
      
//       })  
        
//       //   elspansum.forEach(element => {
//       //    let elsumm = eval(element.textContent)
//       //     console.log(element.textContent);
//       //     // elsumm += sum2
//       //     // element.textContent = elsumm
//       //   })
//       })
//     })
//   })
// })

