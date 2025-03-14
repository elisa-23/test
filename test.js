const lightningLaneRides = [
    { name: "Space Mountain", time: "9:00 AM - 10:00 AM", availableSpots: 8 },
    { name: "Big Thunder Mountain", time: "10:00 AM - 11:30 AM", availableSpots: 5 },
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

function getTime(timeFrame1) {
    let [start, finish] = timeFrame1.split(" - ", 2);
    console.log(start, finish);
    let [hours, minutes] = start.split(":", 2);
    let minutesFinal = minutes.split(" ", 1);
    hours = parseInt(hours);
    minutes = parseInt(minutesFinal);
    console.log(hours, minutes);
    start = [hours, minutes];
}

getTime("10:00 PM - 11:00 PM")

function booking(guestQueue) {
    let bookings = [];
    const max = 3;
    guestQueue.forEach((guest) => {
        let name = guest.name;
        let bookedRides = [];
        console.log(name, bookedRides);
        let guestBooking = { name: name, bookedRides: bookedRides };
        console.log(guestBooking);
        let rides = 0;
        guest.rideChoices.forEach((guestRide) => {
            lightningLaneRides.forEach((ride) => {
                if (ride.name === guestRide) {
                    if (ride.availableSpots >= guest.partySize) {
                        if (rides < max) {
                            bookedRides.push({ name: ride.name, time: ride.time });
                            rides++;
                            console.log(rides);
                            console.log(bookedRides);
                            ride.availableSpots = ride.availableSpots - guest.partySize;
                        }
                    } else { };
                } else { };
            });
        });
        guestBooking = { name: name, bookedRides: bookedRides };
        bookings.push(guestBooking);
        console.log(guestBooking);
    });
    console.log(bookings);
}
