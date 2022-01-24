function createTeam(answers) {
  function generateManager(manager) {
    return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="card-text">ID: ${manager.id}</p>
    <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>
  </div>
</div>`;
  }

  function generateEngineer(engineer) {
    return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    <p class="card-text">ID: ${engineer.id}</p>
    <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a>
    <a href="github.com/${engineer.github}" class="card-link">Github</a>
  </div>
</div>`;
  }

  function generateIntern(intern) {
    return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <p class="card-text">ID: ${intern.id}</p>
    <p class="card-text">School: ${intern.school}</p>
    <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>
    
  </div>
</div>`;
  }

  const html = [];

  html.push(
    answers
      .filter((role) => role.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );

  html.push(
    answers
      .filter((role) => role.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );

  html.push(
    answers
      .filter((role) => role.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );

  return html.join("");
}
module.exports = (teamData) => {
  return `
        
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
<link rel="stylesheet" href="./src/style.css">
        <title>Meet The Team</title>
    </head>
    <header>
        Meet The Team!
    </header>
    <body>
       <section class = "members">
        ${createTeam(teamData)}
</section>
</div>
</div>
    </body>
    </html>
        `;
};
