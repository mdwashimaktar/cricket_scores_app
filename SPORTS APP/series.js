API = "https://api.cricapi.com/v1/series?apikey=a1097500-f9ff-4b77-8683-275f2a408381&offset=0"
rec=document.getElementById("rec")
let series=""
const xhr = new XMLHttpRequest();
xhr.open('GET', API, true);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText)
    let data = json.data
    console.log(data)
    data.forEach((element, index) => {    
      let currentSeries =
      `<div class="col">
      <div class="box">
        <div class="heading">
        ${element["name"]}
        </div>
        <div class="date">from ${element["startDate"]} to ${element["endDate"]}</div>
        <div class="matches">
        TEST-${element["test"]}
        ODI=${element["odi"]}
        T20=${element["t20"]}
        </div>
      </div>
    </div>`

       
       
        series+=currentSeries       
    });
    rec.innerHTML = series
  
  }
}

xhr.send()