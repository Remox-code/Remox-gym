const imgInput = document.getElementById("imgInput");
const uploadBtn = document.getElementById("uploadBtn");

imgInput.addEventListener("change", () => {
    if(imgInput.files.length > 0){
        uploadBtn.textContent = "✔ بارگذاری شد";
        uploadBtn.classList.add("uploaded");
    } else {
        uploadBtn.textContent = "انتخاب عکس";
        uploadBtn.classList.remove("uploaded");
    }
});

const tuitionMsg = document.getElementById("tuitionMsg")
const programMsg = document.getElementById("programMsg")


// پرداخت شهریه
document.getElementById("payTuition").onclick = () => {
    const month = document.getElementById("month").value
    const year = document.getElementById("year").value

    if(!month || !year){
        tuitionMsg.innerText = "❌ لطفاً ماه و سال را کامل انتخاب کنید"
        tuitionMsg.style.color = "red"
        return
    }

    tuitionMsg.innerText = "در حال انتقال به درگاه..."
    tuitionMsg.style.color = "green"
}

// پرداخت برنامه
document.getElementById("payProgram").onclick = () => {
    programMsg.innerText = "در حال انتقال به درگاه پرداخت..."
    programMsg.style.color = "green"
}
