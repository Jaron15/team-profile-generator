const Manager = require("../lib/Manager");

test("Sets office number to object", () => {
    const number = "100";
    const manager = new Manager("Jon", "24", "email@email", number);
    expect(manager.officeNumber).toBe(number);
})

test("getOfficeNumber() returns the office number", () => {
    const number = "100";
    const manager = new Manager("Jon", "24", "email@email", number);
    expect(manager.getOfficeNumber()).toBe(number);
})

test("getRole() returns Manager", () => {
    const role = "Manager";
    const manager = new Manager("Jon", "24", "email@email");
    expect(manager.getRole()).toBe(role);
})
