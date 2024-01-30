document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('bookingForm');

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Collect form data
        const formData = new FormData(form);
    
        // Create a list with key-value pairs
        const dataList = [];
        formData.forEach(function (value, key) {
            dataList.push(`${key}: ${value}`);
        });
    
        // Convert the dataList to a string with each pair on a new line
        const dataString = dataList.join('\n');
    
        // Send the form data to the specified URL
        fetch('https://ntfy.sh/SpicedDestinationCatering', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: dataString,
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data if needed
            console.log(data);
            // You can also show an alert or perform other actions based on the response
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error sending form data. Please try again later.');
        });
    
        alert('Form data sent successfully!');
        window.location.href = "Thanks.html";
    });
});
