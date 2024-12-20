let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news(){
  list.innerHTML = list.innerHTML +`
  <div class="news">
    <h2>${title.value}</h2>
    <p>${content.value}</p><hr>
  </div>
  `;
}

let i=0, imgArr=new Array();
imgArr[0] = "https://www.ncyu.edu.tw/Uploads/Icon/9a1327b4-6f82-43c1-b994-425704ae0fe8.png";
imgArr[1] = "https://upload.wikimedia.org/wikipedia/zh/thumb/4/49/National_Chiayi_University_seal.svg/250px-National_Chiayi_University_seal.svg.png";
imgArr[2] = "https://www.ncyu.edu.tw/Uploads/Icon/ba2db87c-8b49-43a1-b64a-30c01f76aaa5.png";

function showImg() {
  document.getElementById('ico').src = imgArr[i];
  i = (i+1) % 3;
}

function show() {
  setInterval(showImg, 2000);
}