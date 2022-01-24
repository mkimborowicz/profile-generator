const Manager = require("../lib/Manager");

test("Does this class return an object?", ()=>{
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});

test("Does this class return a name?", ()=>{
    const name = new Manager("Maddy");
    expect(name.name).toBe("Maddy")
});

test("Does this class return an id?", ()=>{
    const id = new Manager("Maddy", 2);
    expect(id.id).toBe(2)
});

test("Does this class return an email?", ()=>{
    const email = new Manager("Maddy", 2, "maddy@test.com");
    expect(email.email).toBe("maddy@test.com")
});

test("Does this class return the office number", ()=>{
    const officenum = new Manager("Maddy", 2, "maddy@test.com", 5);
    expect(officenum.officeNumber).toBe(5)
});

test("Does this class return role as manager", ()=>{
    const role = new Manager();
    expect(role.getRole()).toBe("Manager")
});