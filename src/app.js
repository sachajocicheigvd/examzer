import {User} from "./User";

let main = document.querySelector("main");


let tabUser = [];

async function getUsers() { //
    const response = await fetch(`https://randomuser.me/api/?results=20`); // Execution is paused here until the Promise returned by fetch is resolved
    return response.json();
}

getUsers()
    .then(user => {
        for (let i = 0; i < 20; i++) {
            tabUser.push(new User([user.results[i]['name'].title,
                user.results[i]['name'].first
                , user.results[i]['name'].last
                , user.results[i]['location'].city
                , user.results[i]['location'].country
                , user.results[i]['dob'].age
                , user.results[i]['email']
                , user.results[i]['picture'].large]))
            //allUserTab[i]= new User(allUser[i])

        }


    }) //
    .catch(err => console.log(err)); //


console.log(tabUser)

//document.querySelector("body > main > div:nth-child(1)").setAttribute("present","false")
let nbPresent = 0;
main.addEventListener("click", e => {
    console.log(e.target)

    if ((e.target.closest('.user').getAttribute('data-present')) == 'false') {
        nbPresent++;
        e.target.closest('.user').setAttribute("data-present", "true")
        document.querySelector("body > header > p").innerHTML = `${nbPresent}/20 people are here`;
    } else {
        nbPresent--;

        e.target.closest('.user').setAttribute("data-present", "false")
        document.querySelector("body > header > p").innerHTML = `${nbPresent}/20 people are here`;


    }

})