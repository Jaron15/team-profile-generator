const Intern = require('../lib/Intern');

test("Sets school in object", () => {
    const school = "uofa";
    const intern = new Intern("Jon", "24", "email@email", school);
    expect(intern.school).toBe(school);
})

 test("getSchool() returns the school", () => {
     const school = "uofa";
     const intern = new Intern("Jon", "24", "email@email", school);
     expect(intern.getSchool()).toBe("uofa");
 })

 test("getRole() returns Intern", () => {
    const role = "Intern";
    const intern = new Intern("Jon", "24", "email@email");
    expect(intern.getRole()).toBe(role)
})
