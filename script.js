document.addEventListener('DOMContentLoaded', () => {
    const doctors = [
        { id: 1, name: 'Dr. Smith', totalSlots: 10, bookedSlots: [2, 4] },
        { id: 2, name: 'Dr. Johnson', totalSlots: 8, bookedSlots: [1, 5, 7] }
    ];

    const appointments = [];

    const doctorSelect = document.getElementById('doctor-select');
    const appointmentTimeSelect = document.getElementById('appointment-time');
    const doctorsList = document.getElementById('doctors-list');
    const appointmentsList = document.getElementById('appointments-list');

    function populateDoctorOptions() {
        doctorSelect.innerHTML = '<option value="">Select a doctor</option>';
        doctors.forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.id;
            option.textContent = doctor.name;
            doctorSelect.appendChild(option);
        });
    }

    function populateDoctorCards() {
        doctorsList.innerHTML = '';
        doctors.forEach(doctor => {
            const card = document.createElement('div');
            card.className = 'doctor-card';
            card.innerHTML = `
                <p>Name: ${doctor.name}</p>
                <p>Total Slots: ${doctor.totalSlots}</p>
                <p>Available Slots: ${doctor.totalSlots - doctor.bookedSlots.length}</p>
                <p>Booked Slots: ${doctor.bookedSlots.length}</p>
            `;
            doctorsList.appendChild(card);
        });
    }

    function populateTimeSlots(doctorId) {
        const doctor = doctors.find(doc => doc.id == doctorId);
        if (doctor) {
            appointmentTimeSelect.innerHTML = '';
            for (let i = 1; i <= doctor.totalSlots; i++) {
                if (!doctor.bookedSlots.includes(i)) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = `Slot ${i}`;
                    appointmentTimeSelect.appendChild(option);
                }
            }
        }
    }

    document.getElementById('booking-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('patient-name').value;
        const doctorId = doctorSelect.value;
        const date = document.getElementById('appointment-date').value;
        const time = appointmentTimeSelect.value;

        if (name && doctorId && date && time) {
            const appointmentId = appointments.length + 1;
            appointments.push({ appointmentId, name, doctorId, date, time });
            alert('Appointment booked successfully!');
        } else {
            alert('Please fill in all fields.');
        }
    });

    document.getElementById('cancellation-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const appointmentId = document.getElementById('appointment-id').value;
        const index = appointments.findIndex(appt => appt.appointmentId == appointmentId);

        if (index !== -1) {
            appointments.splice(index, 1);
            alert('Appointment canceled successfully!');
            displayAppointments();
        } else {
            alert('Invalid appointment ID.');
        }
    });

    document.getElementById('view-appointments').addEventListener('click', displayAppointments);

    function displayAppointments() {
        appointmentsList.innerHTML = '';
        appointments.forEach(appt => {
            const div = document.createElement('div');
            div.innerHTML = `
                <p>Appointment ID: ${appt.appointmentId}</p>
                <p>Patient Name: ${appt.name}</p>
                <p>Doctor ID: ${appt.doctorId}</p>
                <p>Date: ${appt.date}</p>
                <p>Time: ${appt.time}</p>
            `;
            appointmentsList.appendChild(div);
        });
    }

    doctorSelect.addEventListener('change', (e) => {
        populateTimeSlots(e.target.value);
    });

    populateDoctorOptions();
    populateDoctorCards();
});
