// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.onload = function() {

    setTimeout(function() {
        let preloader = document.getElementById("preloader_malc")
        if (preloader) {
            document.getElementById("preloader_malc").style.display = "none";
        }
        

    }, 400);

};