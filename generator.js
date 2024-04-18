// If you're wondering why the json has temperature values,
// I was gonna make this more dynamic but decided
// to go fully random and didnt change it

// Setup
const project = document.getElementById("project")
const project_sub = document.getElementById("project_subtitle")
let ideas = {}

// Functions
async function get_ideas() {
    const response = await fetch("ideas.json");
    const idea_object = await response.json();
    ideas = idea_object
}
function random_array(array) {
    const random = array[(Math.random() * array.length) | 0]
    return random
}

function new_project() {
    var project_details = []
    project_details.push(random_array(ideas['app']).content)
    project_details.push(random_array(ideas['descriptor']).content)
    project_details.push(random_array(ideas['modifier']).content)
    var title_string = project_details.slice(0, 2).join(' ')
    var sub_string = project_details.slice(2).join(' ')
    project.innerHTML = `${title_string}`
    project_sub.innerHTML = `${sub_string}`
    project.style.animation = "none"
    project_sub.style.animation = "none"
    setTimeout(() => {
        project.style.animation = ""
        project_sub.style.animation = ""
    }, 1);
}

function info_clear() {
    const info = document.querySelector('.info')
    info.remove()
}

function why() {
    const info = document.createElement('article')
    document.body.appendChild(info)
    info.classList.add('info')
    info.innerHTML = "Sometimes its hard to come up with Web Project Ideas, so I made this awful generator out of bordem.<br>Yes it's supposed to bad.<button class='small' onclick='info_clear()'>X</button>"

}

// Calls
get_ideas()
setTimeout(() => {
    new_project()
}, 300);