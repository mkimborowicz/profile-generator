const Employee =  require('../lib/Employee');

test("Does this class return an object?", ()=>{
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Does this class return a name?", ()=>{
    const name = new Employee("Maddy");
    expect(name.name).toBe("Maddy")
});

test("Does this class return an id?", ()=>{
    const id = new Employee("Maddy", 2);
    expect(id.id).toBe(2)
});

test("Does this class return an email?", ()=>{
    const email = new Employee("Maddy", 2, "maddy@test.com");
    expect(email.email).toBe("maddy@test.com")
});

test("Does this class return role as employee", ()=>{
    const role = new Employee();
    expect(role.getRole()).toBe("Employee")
});