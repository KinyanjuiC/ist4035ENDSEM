// Grade to GPA point conversion
const gradePoints = {
    'A': 4,
    'B': 3,
    'C': 2,
    'D': 1,
    'F': 0
};

// Function to create a new course row
function createCourseRow() {
    const row = document.createElement('div');
    row.className = 'course-row';
    
    const courseNameInput = document.createElement('input');
    courseNameInput.type = 'text';
    courseNameInput.placeholder = 'Course Name';
    courseNameInput.required = true;
    
    const gradeSelect = document.createElement('select');
    gradeSelect.required = true;
    
    // Add grade options
    const grades = ['A', 'B', 'C', 'D', 'F'];
    grades.forEach(grade => {
        const option = document.createElement('option');
        option.value = grade;
        option.textContent = grade;
        gradeSelect.appendChild(option);
    });
    
    row.appendChild(courseNameInput);
    row.appendChild(gradeSelect);
    
    return row;
}

// Initialize the form with 3 course rows
function initializeForm() {
    const courseRowsContainer = document.getElementById('courseRows');
    for (let i = 0; i < 3; i++) {
        courseRowsContainer.appendChild(createCourseRow());
    }
}

// Calculate GPA
function calculateGPA() {
    const courseRows = document.querySelectorAll('.course-row');
    let totalPoints = 0;
    let validEntries = 0;
    
    courseRows.forEach(row => {
        const courseName = row.querySelector('input[type="text"]').value.trim();
        const grade = row.querySelector('select').value;
        
        if (courseName && grade) {
            totalPoints += gradePoints[grade];
            validEntries++;
        }
    });
    
    if (validEntries === 0) {
        alert('Please enter at least one course with a grade');
        return;
    }
    
    const gpa = totalPoints / validEntries;
    document.getElementById('gpaValue').textContent = gpa.toFixed(2);
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeForm();
    
    // Add course button
    document.getElementById('addCourse').addEventListener('click', () => {
        const courseRowsContainer = document.getElementById('courseRows');
        courseRowsContainer.appendChild(createCourseRow());
    });
    
    // Calculate GPA button
    document.getElementById('calculateGPA').addEventListener('click', calculateGPA);
}); 