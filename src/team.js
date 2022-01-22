function createTeam(answers) {
    //generateManager

    //generateEngineer

    //generateintern

    const html = [];

    html.push(answers
        .filter(role=> role.getRole()==="Manager")
        .map(manager => generateManager(manager))
        )

        return html.join('')


}
    module.exports = teamData =>{

        return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team</title>
            </head>
            <body>
                    ${createTeam(teamData)}
            </body>
            </html>
        `
    };