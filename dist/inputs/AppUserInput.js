"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewAppUserInput = exports.GetAppUserByIdInput = void 0;
var type_graphql_1 = require("type-graphql");
var class_validator_1 = require("class-validator");
var GetAppUserByIdInput = /** @class */ (function () {
    function GetAppUserByIdInput() {
    }
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        __metadata("design:type", String)
    ], GetAppUserByIdInput.prototype, "id", void 0);
    GetAppUserByIdInput = __decorate([
        type_graphql_1.InputType()
    ], GetAppUserByIdInput);
    return GetAppUserByIdInput;
}());
exports.GetAppUserByIdInput = GetAppUserByIdInput;
var CreateNewAppUserInput = /** @class */ (function () {
    function CreateNewAppUserInput() {
    }
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        __metadata("design:type", String)
    ], CreateNewAppUserInput.prototype, "name", void 0);
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        __metadata("design:type", String)
    ], CreateNewAppUserInput.prototype, "email", void 0);
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        class_validator_1.MinLength(6),
        __metadata("design:type", String)
    ], CreateNewAppUserInput.prototype, "password", void 0);
    CreateNewAppUserInput = __decorate([
        type_graphql_1.InputType()
    ], CreateNewAppUserInput);
    return CreateNewAppUserInput;
}());
exports.CreateNewAppUserInput = CreateNewAppUserInput;
