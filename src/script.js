var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// selecting elements
var head = document.getElementsByClassName("head")[0];
var inputBtns = document.querySelectorAll(".input-Btn");
// our api key / global varibales
var requestCount = 10;
var API_KEY = "https://pokeapi.co/api/v2/pokemon?limit=".concat(requestCount, "&offset=0");
//our data fetch api function
function getData(Key) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, resultsData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(Key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    resultsData = data.results;
                    listData(resultsData);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// our fucntions
var listData = function (data) { return __awaiter(_this, void 0, void 0, function () {
    var _i, data_1, item, pokeIds, pokieRes, pokieData, pokieTypes, pokeCard, pokeImg, pokeIfoCard, pokeIdWrap, pokeName, pokeType;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, data_1 = data;
                _a.label = 1;
            case 1:
                if (!(_i < data_1.length)) return [3 /*break*/, 5];
                item = data_1[_i];
                pokeIds = "https://pokeapi.co/api/v2/pokemon/".concat(item.name, "/");
                return [4 /*yield*/, fetch(pokeIds)];
            case 2:
                pokieRes = _a.sent();
                return [4 /*yield*/, pokieRes.json()];
            case 3:
                pokieData = _a.sent();
                pokieTypes = pokieData.types[0].type.name;
                pokeCard = document.createElement("div");
                pokeCard.classList.add("poke-Card");
                // if else the type of pokie should have its own color
                if (pokieTypes === "grass") {
                    pokeCard.style.backgroundColor = "#C1F2B0";
                }
                else if (pokieTypes === "fire") {
                    pokeCard.style.backgroundColor = "#FFCD4B";
                }
                else if (pokieTypes === "water") {
                    pokeCard.style.backgroundColor = "#80B3FF";
                }
                else if (pokieTypes === "bug") {
                    pokeCard.style.backgroundColor = "#B2533E";
                }
                else if (pokieTypes === "normal") {
                    pokeCard.style.backgroundColor = "#CDFAD5";
                }
                else if (pokieTypes === "poison") {
                    pokeCard.style.backgroundColor = "#E4E4D0";
                }
                else if (pokieTypes === "ground") {
                    pokeCard.style.backgroundColor = "#CEE6F3";
                }
                else if (pokieTypes === "fairy") {
                    pokeCard.style.backgroundColor = "#AED8CC";
                }
                else if (pokieTypes === "electric") {
                    pokeCard.style.backgroundColor = "#F0DE36";
                }
                else if (pokieTypes === "ghost") {
                    pokeCard.style.backgroundColor = "#0174BE";
                }
                else if (pokieTypes === "psychic") {
                    pokeCard.style.backgroundColor = "#FFE4A7";
                }
                else if (pokieTypes === "rock") {
                    pokeCard.style.backgroundColor = "#A4907C";
                }
                else {
                    pokeCard.style.backgroundColor = "white";
                }
                pokeImg = document.createElement("img");
                pokeImg.src = "".concat(pokieData.sprites.front_default);
                pokeImg.classList.add("poke-Img");
                pokeCard.appendChild(pokeImg);
                pokeIfoCard = document.createElement("div");
                pokeIfoCard.classList.add("poke-Ifo-Card");
                pokeCard.appendChild(pokeIfoCard);
                pokeIdWrap = document.createElement("div");
                pokeIdWrap.classList.add("poke-Id-Wrap");
                pokeIdWrap.textContent = "##".concat(pokieData.id);
                pokeIfoCard.appendChild(pokeIdWrap);
                pokeName = document.createElement("h1");
                pokeName.classList.add("poke-Name");
                pokeName.textContent = item.name;
                pokeIfoCard.appendChild(pokeName);
                pokeType = document.createElement("div");
                pokeType.classList.add("poke-Type");
                pokeType.textContent = pokieTypes;
                pokeIfoCard.appendChild(pokeType);
                pokeCard.appendChild(pokeIfoCard);
                head.appendChild(pokeCard);
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 1];
            case 5: return [2 /*return*/];
        }
    });
}); };
// our change request Count
var updateRequestCount = function (valNum) {
    console.log(valNum);
};
// our eventlisnters
getData(API_KEY);
inputBtns.forEach(function (el) {
    el.addEventListener("click", function (e) {
        var valNum = e.target.value;
        updateRequestCount(valNum);
    });
});
