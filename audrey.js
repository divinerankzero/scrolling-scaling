const audrey = document.getElementById("audrey")

/*
    [x] Add an event listener to the `document` object to listen
    for the "scroll" event.
*/

const adjustAudrey = (event) => {
    audrey.style.width = `${window.scrollY / 3}px`;
    audrey.style.height = `${window.scrollY / 4}px`;
} 

document.addEventListener("scroll", adjustAudrey)
    /*
        [x] Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. 
        [ ] No lower than 50px, though.
    */



    /*
        [x] Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. 
        [ ] No lower than 100px, though.
    */

    