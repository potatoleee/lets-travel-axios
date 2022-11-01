let data = [
    {
      "id": 0,
      "name": "綠島自由行套裝行程",
      "imgUrl":"./public/images/travel_1.png",
      "area": "台北",
      "description": "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
      "group": "剩下最後8組",
      "price": 1280,
      "rate": 8.6
    },
    {
      "id": 1,
      "name": "清境高空觀景步道二日遊",
      "imgUrl":"./public/images/travel_4.png",
      "area": "台北",
      "description": "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
      "group": "剩下最後12組",
      "price": 2580,
      "rate": 8.2
    },
    {
      "id": 2,
      "name": "南庄度假村露營車二日遊",
      "imgUrl":"./public/images/travel_6.png",
      "area": "台中",
      "description": "南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！<br>一泊一食，輕鬆享受露營車樂趣。獨立衛浴與私人戶外露臺。<br>入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
      "group": "剩下最後2組",
      "price": 2480,
      "rate": 9.2
    },
    {
        "id": 3,
        "name": "山林悠遊雙人套票",
        "imgUrl":"./public/images/travel_3.png",
        "area": "台中",
        "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。<br>（含雙龍瀑布入場券 x2）",
        "group": "限時搶購",
        "price": 880,
        "rate": 9.3
    },
    {
        "id": 4,
        "name": "漁樂碼頭釣魚體驗套票",
        "imgUrl":"./public/images/travel_2.png",
        "area": "台中",
        "description": "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
        "group": "剩下最後5組",
        "price": 1280,
        "rate": 8.2
    },
    {
        "id": 5,
        "name": "熊森公園親子二日遊套票",
        "imgUrl":"./public/images/travel_5.png",
        "area": "高雄",
        "description": "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
        "group": "剩下最後3組",
        "price": 2480,
        "rate": 8.6
    },
    
  ];


const ticketResult = document.querySelector(".ticketResult");
function init(){
    let str = "";
data.forEach(function(item){
    str += `<li class="col-md-6 col-lg-4">
    <div class="card h-100 border shadow">
        <div class="position-relative">
            <p class="position-absolute top-m12p start-0 bg-secondary fs-4 text-white py-2 px-4 rounded-end">${item.area}</p>
            <img src="${item.imgUrl}" alt="綠島自由行套行程">
            <p class="position-absolute bottom-m12p start-0 bg-primary  text-white py-1 px-2 rounded-end">${item.rate}</p>
        </div>
        <div class="bg-white px-5 pt-5 pb-4">
            <h3 class="fw-medium fs-3 mb-4 pb-1 border-bottom border-2 border-primary text-primary ">${item.name}</h3>
            <p class="mb-7 pb-7">${item.description}</p>
            <div class="d-flex align-items-center justify-content-between position-absolute bottom-16p start-0 w-100 px-5">
                <p class="d-flex align-items-center gap-1 text-primary">
                    <span class="material-symbols-outlined icon-fill text-primary">
                        error
                        </span>
                    ${item.group}
                </p>
                <p class="d-flex align-items-center gap-1 text-primary">TWD <span class="font-roboto fs-2">$${item.price}</span></p>
            </div>
        </div>
    </div>
</li>`
});
ticketResult.innerHTML= str;

}
init();

const locationFilter = document.querySelector(".locationFilter");
function updateList(e){
    let str = "";
    let select = e.target.value;
    data.forEach(function(item,index){
        if(select == item.area){
            let content = `
            <li class="col-md-6 col-lg-4">
            <div class="card h-100 border shadow">
                <div class="position-relative">
                    <p class="position-absolute top-m12p start-0 bg-secondary fs-4 text-white py-2 px-4 rounded-end">${item.area}</p>
                    <img src="${item.imgUrl}" alt="綠島自由行套行程">
                    <p class="position-absolute bottom-m12p start-0 bg-primary  text-white py-1 px-2 rounded-end">${item.rate}</p>
                </div>
                <div class="bg-white px-5 pt-5 pb-4">
                    <h3 class="fw-medium fs-3 mb-4 pb-1 border-bottom border-2 border-primary text-primary ">${item.name}</h3>
                    <p class="mb-7 pb-7">${item.description}</p>
                    <div class="d-flex align-items-center justify-content-between position-absolute bottom-16p start-0 w-100 px-5">
                        <p class="d-flex align-items-center gap-1 text-primary">
                            <span class="material-symbols-outlined icon-fill text-primary">
                                error
                                </span>
                            ${item.group}
                        </p>
                        <p class="d-flex align-items-center gap-1 text-primary">TWD <span class="font-roboto fs-2">$${item.price}</span></p>
                    </div>
                </div>
            </div>
        </li>`;
        str += content;
        ticketResult.innerHTML = str;
        }
    })
    console.log(str);
}
// locationFilter.addEventListener("change",function(e){
    
// });

// 在「下拉式選單」做監聽事件
locationFilter.addEventListener('change',updateList,false);

