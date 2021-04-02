// using JS to change the background color of the page

// defining page elements to be called later
let page = document.querySelector('body')
let button = document.getElementById('mybutton')

// building a function to return a random hexidecimal color code
function rndmColor() {
    let color = '#' //hex codes begin with #
    // for loop to uild the color code, hex code is 6 digits long.
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16); //16 is the radix for hex code, therefor the outout will be transferred into hexideciaml digits.
    }
    return color
}

// adding event listener to execute something on an action
// in this case, we are adding it to the button 'click' with a mouse
button.addEventListener('click', () => {
    page.style.backgroundColor = rndmColor()
})