let data = [
    {
      "id": 0,
      "name": "綠島自由行套裝行程",
      "imgUrl":"./public/images/travel_1.png",
      "area": "台北",
      "description": "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
      "group": "8",
      "price": 1280,
      "rate": 8.6
    },
    {
      "id": 1,
      "name": "清境高空觀景步道二日遊",
      "imgUrl":"./public/images/travel_4.png",
      "area": "台北",
      "description": "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
      "group": "12",
      "price": 2580,
      "rate": 8.2
    },
    {
      "id": 2,
      "name": "南庄度假村露營車二日遊",
      "imgUrl":"./public/images/travel_6.png",
      "area": "台中",
      "description": "南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！<br>一泊一食，輕鬆享受露營車樂趣。獨立衛浴與私人戶外露臺。<br>入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
      "group": "2",
      "price": 2480,
      "rate": 9.2
    },
    {
        "id": 3,
        "name": "山林悠遊雙人套票",
        "imgUrl":"./public/images/travel_3.png",
        "area": "台中",
        "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。<br>（含雙龍瀑布入場券 x2）",
        "group": "20",
        "price": 880,
        "rate": 9.3
    },
    {
        "id": 4,
        "name": "漁樂碼頭釣魚體驗套票",
        "imgUrl":"./public/images/travel_2.png",
        "area": "台中",
        "description": "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
        "group": "5",
        "price": 1280,
        "rate": 8.2
    },
    {
        "id": 5,
        "name": "熊森公園親子二日遊套票",
        "imgUrl":"./public/images/travel_5.png",
        "area": "高雄",
        "description": "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
        "group": "3",
        "price": 2480,
        "rate": 8.6
    },
    
  ];

// ticketResult 篩選後的全部結果
const ticketResult = document.querySelector(".ticketResult");

// locationFilter 篩選的按鈕;
const locationFilter = document.querySelector(".locationFilter");

// 初始預設格式 start
function init(){
    let str = "";
data.forEach(function(item){
    let content = `<li class="col-md-6 col-lg-4">
    <a class="h-100 card  border shadow" href="#"> 
        <div >
            <div class="position-relative">
                <p class="position-absolute top-m12p start-0 bg-secondary fs-4 text-white py-2 px-4 rounded-end">${item.area}</p>
                <img class="object-cover w-100 h-45n" src="${item.imgUrl}" alt="綠島自由行套行程">
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
                         剩下最後 ${item.group} 組
                    </p>
                    <p class="d-flex align-items-center gap-1 text-primary">TWD <span class="font-roboto fs-2">$${item.price}</span></p>
                </div>
            </div>
        </div>
        </a>
    </li>`;
   str += content;
});
ticketResult.innerHTML= str;
const searchResultNum = ticketResult.getElementsByTagName("li").length;
console.log(searchResultNum);

const searchResultTotal = document.querySelector(".searchResultTotal");
searchResultTotal.innerHTML = `<p>本次搜尋共${searchResultNum}筆資料</p>`;

//搜尋總數量 end

}// 初始預設格式 end
init();



// 地區篩選 start
locationFilter.addEventListener("change",function(e){
    let str = "";
    let select = e.target.value;
    data.forEach(function(item,index){
        let content = `<li class="col-md-6 col-lg-4">
    <a class="h-100 card  border shadow" href="#"> 
        <div >
            <div class="position-relative">
                <p class="position-absolute top-m12p start-0 bg-secondary fs-4 text-white py-2 px-4 rounded-end">${item.area}</p>
                <img class="object-cover w-100 h-45n" src="${item.imgUrl}" alt="綠島自由行套行程">
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
                         剩下最後 ${item.group} 組
                    </p>
                    <p class="d-flex align-items-center gap-1 text-primary">TWD <span class="font-roboto fs-2">$${item.price}</span></p>
                </div>
            </div>
        </div>
        </a>
    </li>`;
        if(select == "全部地區"){
        str += content;
        }else if(select == item.area){
         str += content;
        }
        console.log(index);
})
ticketResult.innerHTML = str;
//搜尋總數量 start


const searchResultNum = ticketResult.getElementsByTagName("li").length;
// 計算有幾個li
const searchResultTotal = document.querySelector(".searchResultTotal");
searchResultTotal.innerHTML = `<p>本次搜尋共${searchResultNum}筆資料</p>`;

//搜尋總數量 end


});// 地區篩選 end


//新增套票 start
const ticketName = document.querySelector("#ticketName");
const ticketAddress = document.querySelector("#ticketAddress");
const ticketLocation = document.querySelector("#ticketLocation");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketScore = document.querySelector("#ticketScore");
const ticketDescription = document.querySelector("#ticketDescription");
const btnAddTicket = document.querySelector("#btnAddTicket");

btnAddTicket.addEventListener("click",function(e){

    //放新資料的空物件
    let obj = {};
    obj.id = data.length;
    obj.rate = ticketScore.value;
    obj.name = ticketName.value;
    obj.imgUrl = ticketAddress.value;
    obj.area = ticketLocation.value;
    obj.description = ticketDescription.value;
    obj.group = ticketNum.value;
    obj.price = ticketPrice.value;
    
    data.push(obj);
    init();
    // 送出資料後清空
    ticketScore.value = "";
    ticketName.value = "";
    ticketAddress.value = "";
    ticketLocation.value = "";
    ticketDescription.value = "";
    ticketNum.value = "";
    ticketPrice.value = "";
       
})//新增套票 end





