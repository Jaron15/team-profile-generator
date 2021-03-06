function htmlGenerator(teamArr) {

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header>
     <div class="header-text">
         <h1>My Team</h1>
     </div>
 </header>
    <div class="container">

        ${teamArr.map(employee => {
                if (employee.getRole() === 'Manager') {
                    return `<div class="card employee-card" style="width: 18rem;">
                    <div class="card-head">
                        <h1 class="card-title">${employee.name}</h1>
                        <h2 class="card-subtitle mb-2 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16">
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
                      </svg> Manager</h2>
                    </div>
                    <div class="card-body">
                        <div class="body-info">
                            <p class="card-text">ID: ${employee.id}</p>
                            <p class="card-text">Email: ${employee.email}</p>
                            <p class="card-text">Office Number: ${employee.officeNumber}</p>
                        </div>
                    </div>
                </div>`
                } else if (employee.getRole() === 'Engineer'){
                    return `<div class="card employee-card" style="width: 18rem;">
                    <div class="card-head">
                        <h1 class="card-title">${employee.name}</h1>
                        <h2 class="card-subtitle mb-2 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                      </svg> Engineer</h2>
                    </div>
                    <div class="card-body">
                        <div class="body-info">
                            <p class="card-text">ID: ${employee.id}</p>
                            <p class="card-text">Email: ${employee.email}</p>
                            <p class="card-text">GitHub username: ${employee.github}</p>
                        </div>
                    </div>
                </div>`
                } else if (employee.getRole() === 'Intern') {
                    return `<div class="card employee-card" style="width: 18rem;">
                    <div class="card-head">
                        <h1 class="card-title">${employee.name}</h1>
                        <h2 class="card-subtitle mb-2 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ladder" viewBox="0 0 16 16">
                        <path d="M4.5 1a.5.5 0 0 1 .5.5V2h6v-.5a.5.5 0 0 1 1 0v14a.5.5 0 0 1-1 0V15H5v.5a.5.5 0 0 1-1 0v-14a.5.5 0 0 1 .5-.5zM5 14h6v-2H5v2zm0-3h6V9H5v2zm0-3h6V6H5v2zm0-3h6V3H5v2z"/>
                      </svg> Intern</h2>
                    </div>
                    <div class="card-body">
                        <div class="body-info">
                            <p class="card-text">ID: ${employee.id}</p>
                            <p class="card-text">Email: ${employee.email}</p>
                            <p class="card-text">School: ${employee.school}</p>
                        </div>
                    </div>
                </div>`
                }
        }
        )}

    </div>

</body>
</html>`

return html;
}

module.exports = htmlGenerator;