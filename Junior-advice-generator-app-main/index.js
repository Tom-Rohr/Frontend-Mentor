"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const adviceButton = document.getElementById("getAdviceButton");
const adviceContainer = document.getElementById("advice");
const adviceNumber = document.getElementById("advice-id");
const url = "https://api.adviceslip.com/advice";
adviceButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const jokeData = yield fetch(url);
    const { slip: { id, advice } } = yield jokeData.json();
    adviceNumber.innerText = id;
    adviceContainer.innerText = advice;
}));
