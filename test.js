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

function getTime(timeFrame1, timeFrame2) {
    let [start, finish] = timeFrame1.split(" - ", 2);
    console.log(start, finish);
    let [hours, minutes] = start.split(":", 2);
    let minutesFinal = minutes.split(" ", 1);
    hours = parseInt(hours);
    minutes = parseInt(minutesFinal);
    console.log(hours, minutes);
    start = hours + (minutes / 60);
    let [hours1, minutes1] = finish.split(":", 2);
    let minutesFinal1 = minutes1.split(" ", 1);
    hours1 = parseInt(hours1);
    minutes1 = parseInt(minutesFinal1);
    console.log(hours1, minutes1);
    finish = hours1 + (minutes1 / 60);
    let [start2, finish2] = timeFrame2.split(" - ", 2);
    console.log(start2);
    let [hours3, minutes3] = start2.split(":", 2);
    let minutesFinal3 = minutes3.split(" ", 1);
    hours3 = parseInt(hours3);
    minutes3 = parseInt(minutesFinal3);
    console.log(hours3, minutes3);
    start2 = hours3 + (minutes3 / 60);
    console.log("hi", start, start2, finish);
    if (start2 >= start && start2 <= finish) {
        return false;
    } else {
        return true;
    }
}

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
                            const time = ride.time;
                            let a = false;
                            console.log(1, time, bookedRides);
                            bookedRides.forEach((ride1) => {
                                console.log(ride1.time);
                                let b = getTime(ride1.time, time);
                                console.log(b);
                                if (b === true) {
                                    a = true;
                                }
                            })
                            if (bookedRides.length === 0) {
                                a = true;
                            }
                            if (a === true) {
                                bookedRides.push({ name: ride.name, time: ride.time });
                                rides++;
                                console.log(rides);
                                console.log(bookedRides);
                                ride.availableSpots = ride.availableSpots - guest.partySize;
                            }
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

booking(guestQueue);