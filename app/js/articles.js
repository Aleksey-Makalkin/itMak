document.querySelector("input[value='Главная']").onclick = function() {
        location.href = "index.html";
}




// Переменная маленького окна поиска
var search = document.querySelector(".search");

// При клике на окно поиска выскакивает окно поиска на весь экран
search.onclick = function() {
    search.style.visibility = "hidden";
    document.querySelector(".searchFullScrin").style.display = "block";
}

// При клике на кнопку "Закрыть" под большим окном поиска, это окно закрывается
document.querySelector(".search-input-full input").onclick = function() {
    search.style.visibility = "visible";
    document.querySelector(".searchFullScrin").style.display = "none";
    document.querySelector('[name="searchFull"]').value = "";
}
