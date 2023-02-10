// Model
var tasks = [
    { description: 'Handle til middag', isDone: false, personName: 'Bob', frist: '', gjort: ''},
    { description: 'Lage middag', isDone: false, personName: 'Samantha', frist: '', gjort: ''},
    { description: 'Spise middag', isDone: false, personName: 'Larry', frist: '', gjort: ''},
];

// Controller
var taskDescriptionInput = document.getElementById('taskDescription');
var personNameInput = document.getElementById('personName');

function addTask() {
    tasks.push({
        description: taskDescriptionInput.value,
        isDone: false,
        personName: personNameInput.value,
    });
    taskDescriptionInput.value = '';
    personNameInput.value = '';
    show();
}

// View
var tasksTable = document.getElementById('tasksTable');
show();

function show() {
    let html = `
                    <tr>
                        <th>Oppgave</th>
                        <th>Gjort</th>
                        <th>Person</th>
                        <th>Frist</th>
                        <th>Gjort</th>
                        <th></th>
                    </tr>`;
    for (let i = 0; i < tasks.length; i++) {
        html += createHtmlRow(i);
    }
    tasksTable.innerHTML = html;
}

function createHtmlRow(i) {
    const task = tasks[i];
    const checkedHtml = task.isDone ? 'checked="checked"' : '';
    if (!task.editMode)
        return /* HTML */`<tr>
                        <td>${task.description}</td>
                        <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                        <td>${task.personName ? task.personName : 'No Name'}</td>
                        <td>${task.frist ? task.frist : 'Ingen Frist Satt'}</td>
                        <td>${task.gjort ? task.gjort : 'Ikke Blitt Utført'}</td>
                        <td>
                            <button onclick="deleteTask(${i})">Slett</button>
                            <button onclick="editTask(${i})">Rediger</button>
                    </tr>
                    `;
    return /* HTML */`<tr>
                        <td><input id="editDescription${i}" type="text" value="${task.description}"/></td>
                        <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                        <td><input id="editPersonName${i}" type="text" value="${task.personName}"></td>
                        <td><input id="editDateInput${i}" type="date" value="${task.frist}"></td>
                        <td>${task.gjort ? task.gjort : 'Ikke Blitt Utført'}</td>
                        <td>
                            <button onclick="updateTask(${i})">Lagre</button>
                        </td>
                    </tr>
                    `;
}

function changeIsDone(checkbox, index) {
    console.log('test');
    tasks[index].isDone = checkbox.checked;
    checkbox.checked ? tasks[index].gjort = new Date().toLocaleDateString() : tasks[index].gjort = '';
    show();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    show();
}

function editTask(index) {
    tasks[index].editMode = true;
    show();
}

function updateTask(index) {
    const txtid = `editDescription${index}`;
    const nameid = `editPersonName${index}`;
    const fristid = `editDateInput${index}`;

    const txtidTag = document.getElementById(txtid);
    const nameidTag = document.getElementById(nameid);
    const fristidTag = document.getElementById(fristid);

    const task = tasks[index];
    task.description = txtidTag.value;
    task.editMode = false;
    task.personName = nameidTag.value;
    task.frist = fristidTag.value;

    show();
}