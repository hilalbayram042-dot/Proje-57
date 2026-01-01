document.addEventListener('DOMContentLoaded', () => {
    const ticketList = document.getElementById('ticketList');
    const purchasedTickets = JSON.parse(localStorage.getItem('purchasedTickets')) || [];

    if (purchasedTickets.length > 0) {
        ticketList.innerHTML = ''; // Clear the "no tickets" message
        purchasedTickets.forEach(ticket => {
            const passengerNames = ticket.passengers.map(p => `${p.name} ${p.surname}`).join(', ');
            const ticketItem = document.createElement('div');
            ticketItem.classList.add('ticket-item');
            ticketItem.innerHTML = `
                <h3>Uçuş Numarası: ${ticket.flightNumber}</h3>
                <p><strong>Nereden:</strong> ${ticket.from}</p>
                <p><strong>Nereye:</strong> ${ticket.to}</p>
                <p><strong>Gidiş Tarihi:</strong> ${ticket.departureDate}</p>
                <p><strong>Kalkış Saati:</strong> ${ticket.departureTime}</p>
                <p><strong>Varış Saati:</strong> ${ticket.arrivalTime}</p>
                ${ticket.isRoundTrip ? `<p><strong>Dönüş Tarihi:</strong> ${ticket.returnDate}</p>` : ''}
                <p><strong>Yolcular:</strong> ${passengerNames}</p>
                <p><strong>Koltuk No:</strong> ${ticket.selectedSeats.join(', ')}</p>
                <p><strong>PNR:</strong> ${ticket.pnr}</p>
            `;
            ticketList.appendChild(ticketItem);
        });
    } else {
        ticketList.innerHTML = `<p data-translate="no_tickets_found">Henüz alınmış biletiniz bulunmamaktadır.</p>`;
    }
});