function clearForm(id) {
    const form = document.getElementById(id);

    // Find all input and textarea elements inside the form
    const inputElements = form.querySelectorAll('input, textarea');

    // Clear the value of each input element, excluding buttons
    inputElements.forEach(input => {
        // Check if the element is an input or textarea and not a button
        if ((input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') && (input.type !== 'button' && input.type !== 'submit')) {
            input.value = '';
        }
    });
}
