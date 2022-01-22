const Employee =  require('../lib/Employee');

test("Does this class return an object?", ()=>{
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Does this class return a name?", ()=>{
    const name = new Employee("Maddy");
    expect(name.name).toBe("Maddy")
});