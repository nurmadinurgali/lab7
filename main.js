const hello = document.getElementById('hello')
hello.remove()

const h1 = document.createElement("h1")
h1.innerText = "Lab7 Assignment"
h1.style.color = "blue"
document.body.appendChild(h1)

const hr_1 = document.createElement('hr')
document.body.appendChild(hr_1)

const h2_1 = document.createElement("h2")
h2_1.innerText = "Task"
h2_1.style.color = "red"
document.body.appendChild(h2_1)

const p_1 = document.createElement("p")
p_1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p_1)

const ul_1 = document.createElement("ul")
document.body.appendChild(ul_1)

function add_li(text, ul, flag) {
    let li = document.createElement('li')
    li.innerHTML = text
    if(flag == 'odd') {
        li.style.color = 'green'
    }
    else if(flag == 'even') {
        li.style.color = 'purple'
    }
    ul.appendChild(li)
}

add_li('find elements in the DOM (<b>5 points</b>);', ul_1, 'odd')
add_li('create/add/remove elements (<b>5 points</b>);', ul_1, 'even')
add_li('change content of the elements (<b>5 points</b>);', ul_1, 'odd')
add_li('change styles of the elements (<b>5 points</b>);', ul_1, 'even')
add_li('change attributes of the elements (<b>5 points</b>);', ul_1, 'odd')
add_li('change classes of the elements (<b>5 points</b>);', ul_1, 'even')

const hr_2 = document.createElement('hr')
document.body.appendChild(hr_2)

const h2_2 = document.createElement("h2")
h2_2.innerText = "Submission"
h2_2.style.color = "red"
document.body.appendChild(h2_2);

const p_2 = document.createElement("p")
p_2.innerText = "To submit your work, follow these instructions:"
document.body.appendChild(p_2)
console.log(document)

const ul_2 = document.createElement("ul")
document.body.appendChild(ul_2)

add_li('Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).', ul_2, 'odd')
add_li("Clone this repository to your local machine and work inside it.",ul_2, 'even');
add_li("Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).",ul_2, 'odd');
add_li("Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).",ul_2, 'even');
add_li("Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).",ul_2, 'odd');
add_li("Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).",ul_2, 'even');
add_li("After you finish your work, submit it to the Github (<b>2 points</b>).",ul_2, 'odd');


const hr_3 = document.createElement('hr')
document.body.appendChild(hr_3)