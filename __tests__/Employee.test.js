const Employee = require('../lib/Employee');
 

test("Can create employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Sets the name in the object", () => {
    const name = "Jon";
    const employee = new Employee(name);
    expect(employee.name).toBe("Jon");
})

test("Sets the ID in the object", () => {
    const id = "24";
    const employee = new Employee("Jon", id);
    expect(employee.id).toBe(id);
});

test("Sets the email in the object", () => {
    const email = "email@email.com";
    const employee = new Employee("Jon", "24", email);
    expect(employee.email).toBe(email);
})

test("Gets 'Employee' from getRole()", () => {
    const role = "Employee";
    const employee = new Employee("Jon", "24", "email@email");
    expect(employee.getRole()).toBe(role);
})
test("getName() returns the name", () => {
    const name = "Jon";
    const employee = new Employee(name);
    expect(employee.getName()).toBe("Jon");
})
test("getId() returns the id", () => {
    const id = "24";
    const employee = new Employee("Jon", id);
    expect(employee.getId()).toBe(id);
});

test("getEmail returns the email", () => {
    const email = "email@email.com";
    const employee = new Employee("Jon", "24", email);
    expect(employee.getEmail()).toBe(email);
})