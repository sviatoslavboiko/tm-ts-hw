"use strict";
// task 1
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
        while (_) try {
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
var container = document.querySelector('.container');
var url = 'https://jsonplaceholder.typicode.com/posts';
var query = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url)
                    .then(function (res) {
                    if (res.ok) {
                        return res.json();
                    }
                    else {
                        throw new Error("" + res.status);
                        ;
                    }
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var fetchUsers = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, query(url)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
var renderUsers = function (users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        container === null || container === void 0 ? void 0 : container.insertAdjacentHTML('beforeend', "\n    <div class=\"d-inline-flex\">\n    <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 17rem; min-height: 25rem\">\n    <div class=\"card-header\">id:" + user.id + " userId: " + user.userId + "</div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">" + user.title + "</h5>\n      <p class=\"card-text\">" + user.body + "</p>\n    </div>\n    </div>\n  </div>");
    }
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetchUsers()];
            case 1:
                users = _a.sent();
                renderUsers(users);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
main();
// test values for task2
var initialArray = [
    { id: 1, title: 'first', body: 'object' },
    { id: 2, title: 'second', body: 'object' },
    { id: 3, title: 'third', body: 'object' },
    { id: 4, title: '4th', body: 'object' },
    { id: 5, title: '5th', body: 'object' },
    { id: 6, title: '6th', body: 'object' },
    { id: 7, title: '7th', body: 'object' },
    { id: 8, title: '8th', body: 'object' },
    { id: 9, title: '9th', body: 'object' }
];
var keyToFind = 'title';
var keyValueToFind = '6th';
var patch = { title: 'now is 5th' };
var updateObjectInArray = function (initialArray, keyToFind, keyValueToFind, patch) {
    var clonedArray = JSON.parse(JSON.stringify(initialArray));
    for (var _i = 0, clonedArray_1 = clonedArray; _i < clonedArray_1.length; _i++) {
        var obj = clonedArray_1[_i];
        if (obj[keyToFind] === keyValueToFind) {
            for (var key in patch) {
                obj[key] = patch[key];
            }
        }
    }
    return clonedArray;
};
console.log(updateObjectInArray(initialArray, keyToFind, keyValueToFind, patch));
//# sourceMappingURL=index.js.map