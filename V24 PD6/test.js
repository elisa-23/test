
function test(data) {
    data
        .filter((set) => set.cardCount.total >= 200)
        .forEach((set) => {
            console.log(set.name, set.cardCount.total);
        })
}

test(data);