
function answer() {
    let name = prompt("Как Вас зовут?");
    if(name === "Вячеслав") {
        alert("Привет, " + name);
        console.log("Привет, " + name)
    }
    else {
        alert("Нет такого имени");
        console.log("Нет такого имени")
    }
}

answer();