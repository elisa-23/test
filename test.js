const lightningLaneRides = [
    { name: "Space Mountain", time: "9:00 AM - 10:00 AM", availableSpots: 8 },
    { name: "Big Thunder Mountain", time: "10:30 AM - 11:30 AM", availableSpots: 5 },
    { name: "Splash Mountain", time: "12:00 PM - 1:00 PM", availableSpots: 4 },
    { name: "Pirates of the Caribbean", time: "1:30 PM - 2:30 PM", availableSpots: 6 },
    { name: "Haunted Mansion", time: "3:00 PM - 4:00 PM", availableSpots: 7 },
    { name: "Seven Dwarfs Mine Train", time: "4:30 PM - 5:30 PM", availableSpots: 3 },
    { name: "Jungle Cruise", time: "5:30 PM - 6:30 PM", availableSpots: 10 },
    { name: "Peter Pan's Flight", time: "7:00 PM - 8:00 PM", availableSpots: 5 },
    { name: "Tower of Terror", time: "8:30 PM - 9:30 PM", availableSpots: 4 },
    { name: "Guardians of the Galaxy: Cosmic Rewind", time: "10:00 PM - 11:00 PM", availableSpots: 6 }
];

const guestQueue = [
    { name: "Elisa", partySize: 4, rideChoices: ["Space Mountain", "Big Thunder Mountain", "Splash Mountain"] },
    { name: "Jason", partySize: 2, rideChoices: ["Haunted Mansion", "Pirates of the Caribbean", "Jungle Cruise"] },
    { name: "Ava", partySize: 5, rideChoices: ["Seven Dwarfs Mine Train", "Space Mountain", "Tower of Terror"] },
    { name: "Ryan", partySize: 3, rideChoices: ["Peter Pan's Flight", "Splash Mountain", "Guardians of the Galaxy: Cosmic Rewind"] }
];

function booking(guestQueue) {
    let bookings = [];
    const max = 3;
    guestQueue.forEach((guest) => {
        let name = guest.name;
        let bookedRides = [];
        let rides = 1;
        while (rides < max) {
            guest.rideChoices.forEach((guestRide) => {
                lightningLaneRides.forEach((ride) => {
                    if (ride.name === guestRide) {
                        if (ride.availableSpots >= guest.partySize) {
                            bookedRides.push({ name: ride.name, time: ride.time });
                            ride.availableSpots = ride.availableSpots - guest.partySize;
                        }
                    }
                })
            });
            rides++;
        }
        let guestBooking = { name: name, bookedRides: bookedRides };
        bookings.push(guestBooking);
    })
    console.log(bookings);
}

booking(guestQueue);