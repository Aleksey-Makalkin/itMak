var loadMore = document.getElementsByName("loadMore")[0];
var load = 4;


// Создаем блоки, которые будем показывать при нажатии на кнопку
var oldLanguage = '<div class="artic"><div class="artic-img" style="background: no-repeat center url(media/oldLanguage.jpg); background-size: 100%"></div><div class="tag">Устаревшие языки, которые уже не стоит изучать</div><p>Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.</p><div class="bottom"><input type="button" value="Читать дальше"></div></div>';

var csharpVsCpp  = '<div class="artic"><div class="artic-img" style="background: no-repeat center url(media/csharpVsCpp.jpg); background-size: 100%"></div><div class="tag">Что выбрать C++ или C#? С чего лучше начать?</div><p>Между собой оба языка очень похожи. Статья поможет расставить всё по своим местам.</p><div class="bottom"><input type="button" value="Читать дальше"></div></div>';

var rustLang = '<div class="artic"><div class="artic-img" style="background: no-repeat center url(media/rustLang.jpg); background-size: 100%"></div><div class="tag">Зачем нужен язык программирования Rust?</div><p>Rust набирает популярнось, но при этом многие до сих пор не понимают его ценности и функции. Мы расскажем про основные преимущества языка программирования Rust.</p><div class="bottom"><input type="button" value="Читать дальше"></div></div>';

var threeLogWork = '<div class="artic"><div class="artic-img" style="background: no-repeat center url(media/threeLogWork.jpg); background-size: 100%"></div><div class="tag">3 логические задачи для настоящего программиста</div><p>Компании любят проверять молодых специалистов на различные логические задачи. Мы подобрали три интересных задачи, которые заставят вас задуматься.</p><div class="bottom"><input type="button" value="Читать дальше"></div></div>';


var criptValue = '<div class="artic"><div class="artic-img" style="background: no-repeat center url(media/criptValue.jpg); background-size: 100%"></div><div class="tag">Как создать свою криптовалюту?</div><p>Создание собственной криптовалюты это сложная задача, на которую уйдет не мало сил и времени. Мы расскажем вам общий алгоритм!</p><div class="bottom"><input type="button" value="Читать дальше"></div></div>'

var ceoProd = '<div class="artic"><div class="artic-img" style="background: no-repeat center url(media/ceoProd.jpg); background-size: 100%"></div><div class="tag">СЕО-продвижение - верный способ улучшить свой бизнес</div><p>Продвижение сайта это сложная работа, требующая вложений как денег, так и времени. Мы расскажем про верные способы СЕО-продвижения, позволяющие раскрутить сайт!</p><div class="bottom"><input type="button" value="Читать дальше"></div></div>'

var topTen = '<div class="artic"><div class="artic-img" style="background: no-repeat center url(media/topTen.jpg); background-size: 100%"></div><div class="tag">Топ 10: Подборка хобби для программистов</div><p>Мы подобрали 10 хороших хобби, чтобы можно было с удовольствием провести врем вне работы, а также улучшить логические и креативные способности мозга.</p><div class="bottom"><input type="button" value="Читать дальше"></div></div>'

var tenDjango = '<div class="artic"><div class="artic-img" style="background: no-repeat center url(media/tenDjango.jpg); background-size: 100%"></div><div class="tag">10 самых популярных сайтов написанных на Django</div><p>Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.</p><div class="bottom"><input type="button" value="Читать дальше"></div></div>'


// Загружаем все блоки в массив
var arrayNews = [oldLanguage, csharpVsCpp, rustLang, threeLogWork, criptValue, ceoProd, topTen, tenDjango]


// Выбираем столбцы в HTML, куда будем вносить блоки при нажатии на кнопку
var one = document.getElementById("one-colum");
var two = document.getElementById("two-colum");
var three = document.getElementById("three-colum");
var four = document.getElementById("four-colum");



// Функция выполняет показывание блоков при нажатии на кнопку "Подгрузить больше"
loadMore.onclick = function() {
    if (load == 4) {
        one.innerHTML += arrayNews[0] + arrayNews[1];
        two.innerHTML += arrayNews[2] + arrayNews[3];

        load = 8
    }

    else if (load == 8) {
        three.innerHTML += arrayNews[4] + arrayNews[5];
        four.innerHTML += arrayNews[6] + arrayNews[7];

        loadMore.style.display = "none";
    }
}
