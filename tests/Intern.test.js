const Intern = require("../lib/Intern")

test("Does this class return an object?", ()=>{
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});

test("Does this class return a name?", ()=>{
    const name = new Intern("Maddy");
    expect(name.name).toBe("Maddy")
});

test("Does this class return an id?", ()=>{
    const id = new Intern("Maddy", 2);
    expect(id.id).toBe(2)
});

test("Does this class return an email?", ()=>{
    const email = new Intern("Maddy", 2, "maddy@test.com");
    expect(email.email).toBe("maddy@test.com")
})

test("Does this class return the interns school?", ()=>{
    const school = new Intern("Maddy", 2, "maddy@test.com", "University of Washington");
    expect(school.school).toBe("University of Washington")
});

test("Does this class return role as intern", ()=>{
    const role = new Intern();
    expect(role.getRole()).toBe("Intern")
});