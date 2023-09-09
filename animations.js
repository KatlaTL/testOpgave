//The function takes a list of element ID's and a optional starting index
//Each time the function is called it scrolls into view of the next element in the list
//TODO change the index if the user automatically scroll to next or previous section
let index = 0;
let startIndexUsed = false;
function scrollToNextSection(elements, startIndex) {
    if (typeof elements == Array && elements[0] == undefined) {
        return;
    }
    if (startIndex && !startIndexUsed) {
        index = startIndex;
        startIndexUsed = true;
    }

    const element = document.getElementById(elements[index]);
    index++;
    if (index == elements.length) {
        index = 0;
    }
    if (!element) {
        return;
    }
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
}


//Add function for scroll animation too elements with the class "reveal"
document.addEventListener("scroll", function(){
    const reveal = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveal.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveal[i].getBoundingClientRect().top;
        const elementVisable = 20;
        if (elementTop < windowHeight - elementVisable) {
            reveal[i].classList.add("active");
        } else {
            reveal[i].classList.remove("active");
        }
    }
});
