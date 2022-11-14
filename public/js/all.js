// import axios, {isCancel, AxiosError} from '../../node_modules/axios/dist/axios';


let data =[];
function init(){
    axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
      .then(function (response) {
        data = response.data.data
        renderData(data);
        renderC3();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });// axios 可以加上 .catch() ，若呼叫 API 發生錯誤時，可以執行處理或印出錯誤的程式
}
 
// ticketResult 篩選後的全部結果
const ticketResult = document.querySelector(".ticketResult");

// locationFilter 篩選的按鈕;
const locationFilter = document.querySelector(".locationFilter");

// 顯示當前搜尋到幾筆資料
const searchResultTotal = document.querySelector(".searchResultTotal");


//渲染卡片、顯示當前幾筆資料
function renderData(renderData){
    let str = "";
    renderData.forEach(function(item){
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
    })
    ticketResult.innerHTML = str;
    searchResultTotal.innerHTML=`<p>本次搜尋共${renderData.length}筆資料</p>`;
}


// 監聽select標籤 地區篩選 start
locationFilter.addEventListener("change",function(e){
    const select = e.target.value;

        if(select === "全部地區"){
            renderData(data)
        }else{
            // 放暫存資料的變數，用來放被篩選過的資料
            let tempData = [];
            data.forEach(function(item){
                if(item.area === select){
                    renderData(data)
                    tempData.push(item)
                }
            })
            renderData(tempData);
        }
        
});// 地區篩選 end


// 新增套票 dom元素 start
const ticketForm = document.querySelector(".ticketForm");
const ticketName = document.querySelector("#ticketName");
const ticketAddress = document.querySelector("#ticketAddress");
const ticketLocation = document.querySelector("#ticketLocation");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketScore = document.querySelector("#ticketScore");
const ticketDescription = document.querySelector("#ticketDescription");
const btnAddTicket = document.querySelector("#btnAddTicket");
// 新增套票 dom元素 end


//新增套票按鈕 start
btnAddTicket.addEventListener("click",function(e){
     //表單沒填寫完整判斷
     if(ticketName.value == "" || ticketAddress.value == "" || ticketLocation.value == "" || ticketPrice.value == "" || ticketNum.value == "" || ticketScore.value == "" || ticketDescription.value == "" ){
        alert("表請格填寫完整");
        return
    }else{
        //都有填寫的話把，把新資料的push進obj
        let obj = {};
        obj.id = data.length;
        obj.rate = Number(ticketScore.value); //由於input 取得的值，預設都會是字串型別，所以這邊把它轉為數字型別
        obj.name = ticketName.value;
        obj.imgUrl = ticketAddress.value;
        obj.area = ticketLocation.value;
        obj.description = ticketDescription.value;
        obj.group = Number(ticketNum.value); //由於input 取得的值，預設都會是字串型別，所以這邊把它轉為數字型別
        obj.price = Number(ticketPrice.value); //由於input 取得的值，預設都會是字串型別，所以這邊把它轉為數字型別
        data.push(obj);
        renderData(data);
        //將新的data再執行renderC3()
        renderC3();
        //送出資料後清空
        ticketForm.reset();
    }
})//新增套票按鈕 end


// c3圖表渲染
function renderC3(){
    // STEP1 篩選地區並累加數字成 {"高雄":1，"台北":1，"台中":1}之格式
    let locationNumObj = {};
    data.forEach(function(item){
        //if(locationNumObj["高雄"]) == undefined 
        //上方這段的原理
        // const obj = {};
        // obj.a == undefined;

        if(locationNumObj[item.area] == undefined){
            locationNumObj[item.area] = 1;
        }else {
            locationNumObj[item.area] += 1;
        }
    })

    // STEP2 將物件格式轉換為下方的c3.js規定的陣列格式
    //[ ['高雄', 2],
    //  ['台中', 1],
    //  ['台北',1] 
    //]
    const locationNumAry = Object.keys(locationNumObj);    //['高雄', '台北', '台中']

    // locationNumAry.forEach(function(item){
    //     let ary = {};
    //     ary.area = item;
    //     ary.num = locationNumObj[item];
    //     newData.push(ary);
    // })
    // console.log(newData);
    // {area: '高雄', num: 1}
    // {area: '台北', num: 1} 
    // {area: '台中', num: 1}

    let newData = []
    locationNumAry.forEach(function(item){
        let ary =[];
        ary.push(item);
        ary.push(locationNumObj[item]);//這段因為上方註解而來
        newData.push(ary);
    })
    console.log(newData);
    

    let chart = c3.generate({
        bindto: '#chart', // HTML 元素綁定
        data: {
            columns: newData,
            type : 'donut',
            colors:{
                "高雄":"#E68618",
                "台中":"#5151D3",
                "台北":"#26C0C7",
              }
        },
        donut: {
            title: "套票地區比重"
        }
    });
}

init();//初次渲染
   





