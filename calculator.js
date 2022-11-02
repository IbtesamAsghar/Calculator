
function getInput(value) {


    document.querySelector(".text").value += value

}
function clearScreen() {
    document.querySelector(".text").value = ""

}
function result(value) {
    let a = document.querySelector(".text").value
    let b = eval(a)
    document.querySelector(".text").value = b



}