document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('back-btn');
    const ticketBuyerInfoDiv = document.getElementById('ticket-buyer-info');

    backBtn.addEventListener('click', () => {
        window.location.href = 'welcome.html';
    });

    const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));

    if (bookingDetails && bookingDetails.passengers && bookingDetails.passengers.length > 0) {
        const passenger = bookingDetails.passengers[0]; // Assuming the first passenger is the buyer

        if (passenger.email) {
            const nameElement = document.createElement('p');
            const nameLabel = document.createElement('strong');
            nameLabel.setAttribute('data-translate', 'full_name_label');
            nameLabel.textContent = 'İsim Soyisim:';
            nameElement.appendChild(nameLabel);
            nameElement.append(` ${passenger.name} ${passenger.surname}`);
            
            const emailElement = document.createElement('p');
            const emailLabel = document.createElement('strong');
            emailLabel.setAttribute('data-translate', 'email_label');
            emailLabel.textContent = 'Email:';
            emailElement.appendChild(emailLabel);
            emailElement.append(` ${passenger.email}`);

            ticketBuyerInfoDiv.appendChild(nameElement);
            ticketBuyerInfoDiv.appendChild(emailElement);
        } else {
            ticketBuyerInfoDiv.style.display = 'none';
        }
    } else {
        ticketBuyerInfoDiv.style.display = 'none';
    }
});