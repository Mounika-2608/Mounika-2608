// Form Validation
const form = document.querySelector('#appointment-form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const service = document.querySelector('#service').value;
    const appointmentDate = document.querySelector('#appointment-date').value;
    const message = document.querySelector('#message').value;

    if (name === '' || email === '' || phone === '' || service === '' || appointmentDate === '') {
        alert('Please fill out all required fields.');
        return; // Exit the function
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate phone number (optional - 10 digits for simplicity)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // If all validations pass
    document.querySelector('#confirmation-message').innerHTML = `
        <h2>Appointment Booked Successfully!</h2>
        <p>Thank you, ${name}. Your appointment for ${service} on ${appointmentDate} has been booked.</p>
    `;
});

// To-Do List Logic
const addTaskButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add a delete button to each task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        li.appendChild(deleteButton);

        // Append the list item to the to-do list
        todoList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';

        // Task deletion
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
    } else {
        alert('Please enter a task!');
    }
});
