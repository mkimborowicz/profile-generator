const Engineer = require ("../lib/Engineer")

test("Does this class return an object?", ()=>{
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});

test("Does this class return a name?", ()=>{
    const name = new Engineer("Maddy");
    expect(name.name).toBe("Maddy")
});

test("Does this class return an id?", ()=>{
    const id = new Engineer("Maddy", 2);
    expect(id.id).toBe(2)
});

test("Does this class return an email?", ()=>{
    const email = new Engineer("Maddy", 2, "maddy@test.com");
    expect(email.email).toBe("maddy@test.com")
});

test("Does this class return the user's github?", ()=>{
    const github = new Engineer("Maddy", 2, "maddy@test", "maddyk1234");
    expect(github.github).toBe("maddyk1234")
});

test("Does this class return role as engineer", ()=>{
    const role = new Engineer();
    expect(role.getRole()).toBe("Engineer")
});