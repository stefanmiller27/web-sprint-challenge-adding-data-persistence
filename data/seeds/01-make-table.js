const projects = [   
    { project_name: "Create an API", project_description: "make a backend using node and express", project_completed: true},
    { project_name: "Make a React App", project_description: "make a front end", project_completed: false}
  ]

  const resources = [   
    { resource_name: "Tailwind CSS", resource_description: "style using a library"},
    { resource_name: "Global State Management", resource_description: "Redux vs. Hooks"},
    { resource_name: "RDBMS", resource_description: "relational database management sytems"},
    { resource_name: "JavaScript: The Definitive Guide", resource_description: "classes, promises, generators, & more"},
    { resource_name: "SQL", resource_description: "how to query a database"},
  ]

  const tasks = [   
    { task_description: "Write Endpoints", task_notes: "don't forget to reformat data", task_completed: true, project_id: 2},
    { task_description: "Host on Heroku", task_notes: "make sure to add env variables", task_completed: true, project_id: 2},
    { task_description: "Host on Vercel", task_notes: "create a Vercel account", task_completed: false, project_id: 1},
]

const project_resources = [   
    { project_id: 2, resource_id: 1},
    { project_id: 2, resource_id: 2},
    { project_id: 1, resource_id: 3},
    { project_id: 2, resource_id: 4},
    { project_id: 1, resource_id: 5},
    { project_id: 1, resource_id: 4},
  ]


exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}