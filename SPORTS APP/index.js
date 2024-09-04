console.log("jegfjs")
key1 = "a1097500-f9ff-4b77-8683-275f2a408381"
key2 = "6a46f692-26a5-4bfe-ba8d-e03431028a0f"
//0b1660b4-7a16-46cc-8df6-17ac9e3df6b9
API = "https://api.cricapi.com/v1/currentMatches?apikey=a1097500-f9ff-4b77-8683-275f2a408381&offset=0"
let matchCard = ""
let scorecard=""
let part3=""
let part4=""
let c=0
cards = document.getElementById("box")
const xhr = new XMLHttpRequest();
xhr.open('GET', API, true);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText)
    let data = json.data
    console.log(data)
    data.forEach((element, index) => {
      length=0
        length = Object.keys(element["score"]).length
       // console.log(length)
        // for(let i=0;i<length;i++){
        //    scorecard=`${element.score[i]["inning"]} -${element.score[i]["r"]}/${element.score[i]["w"]}(${element.score[i]["o"]})`
          
        //  }
        //  console.log(scorecard)
       c=0
       scorecard=""
if((index===1)||(index===2)||(index===4)){
  return;
}
if(index!==3){
console.log(element)
       
      let currentMatches =

        `<div class="col ps-1 my-3">
        <div class="cards">`
       
        let part1=`
        <div class="title ml-1 mb-2">${element["name"]}--<span class="badge bg-secondary">${element["matchType"]}</span> on ${element["date"]}</div>
            <div class="team1 mb-2">
                <div class="team1pic show">
                <img src="${element.teamInfo[0]["img"]}"  class="img-fluid rounded-start" alt="" style="height:7vh">
                </div>
                <div class="team1info mb-1 show">`
                for(let i=0;i<length;i++)
                {
               part3=` <div> ${element.score[i]["inning"]} -${element.score[i]["r"]}/${element.score[i]["w"]}(${element.score[i]["o"]})</div>`
            scorecard+= "     "+part3
                }
            let part2=`
            <div class="team2 mb-1">
                <div class="team2pic show">
                <img src="${element.teamInfo[1]["img"]}"  class="img-fluid rounded-start" alt="" style="height:7vh">
                </div>
                <div class="team2info show">
                ${element["status"]}
                </div>
            </div>
       <div class="footer mb-2">
       ${element["venue"]} 
       </div>
    </div>
    </div>
        `
        part4=` </div>
            </div>`
        scorecard+=part4
        currentMatches=currentMatches+part1+scorecard+part2
      matchCard += currentMatches
              }   
    });
    cards.innerHTML = matchCard
  
  }
}

xhr.send()

//<img src="${element.teamInfo[0]["img"]}"  class="img-fluid rounded-start" alt="" style="height:7vh">
//