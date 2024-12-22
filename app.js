const timeEl = document.querySelector(".time")
const btnToggle = document.querySelector(".toggle")

function setTime(){
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds() 
    timeEl.innerHTML = 
    `${hours<10 ? `0${hours}`: hours}:
    ${minutes<10 ? `0${minutes}`: minutes}: 
    ${seconds<10 ? `0${seconds}`: seconds}` //`` เครื่องหมายนี้คือการเอา String มาทำงานคู่กับตัวแปร
}
btnToggle.addEventListener("click", (e) =>{
    const html = document.querySelector("html")
    if(html.classList.contains("dark")){ //การทำงานของโหมดกลางวัน
        html.classList.remove("dark")
        e.target.innerHTML="โหมดกลางคืน"
    }else{ //การทำงานของโหมดกลางคืน จะเพิ่ม dark class และเปลี่ยนข้อความปุ่ม
        html.classList.add("dark")
        e.target.innerHTML = "โหมดกลางวัน"
    }
})

setTime()
setInterval(setTime,1000) //เรียกใช้ setTime Function ทุกๆ 1 วิ

