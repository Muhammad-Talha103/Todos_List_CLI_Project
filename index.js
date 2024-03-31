#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let addmore = true;
while (addmore) {
    const list = await inquirer.prompt([
        {
            type: "input",
            name: "userList",
            message: "What you want todos?",
        },
        {
            type: "confirm",
            name: "useradd",
            message: "What you want todos?",
        }
    ]);
    todoList.push(list.userList);
    addmore = list.useradd;
    console.log(todoList);
}
