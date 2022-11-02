
function answer() {
    let name = prompt("Как Вас зовут?");
    if(name === "Вячеслав") {
        console.log("Привет, " + name)
    }
    else {
        console.log("Нет такого имени")
    }
}

answer();