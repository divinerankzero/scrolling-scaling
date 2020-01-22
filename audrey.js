const audrey = document.getElementById("audrey")

const adjustAudrey = (event) => {
    if (window.scrollY / 3 > 50){
        audrey.style.width = `${window.scrollY / 3}px`;
    } else {
        audrey.style.widows = "50px";
    }
    if (window.scrollY / 4 > 100) {
        audrey.style.height = `${window.scrollY / 4}px`;
    } else {
        audrey.style.height = "100px";
    }
    
} 

document.addEventListener("scroll", adjustAudrey)

    