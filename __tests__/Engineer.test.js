const Engineer = require('../lib/Engineer');

test("Sets github account in object", () => {
    const ghub = "user15";
    const engineer = new Engineer("Jon", "24", "email@email", ghub);
    expect(engineer.github).toBe(ghub);
})

test("getRole returns Engineer", () => {
    const role = "Engineer";
    const engineer = new Engineer("Jon", "24", "email@email")
})