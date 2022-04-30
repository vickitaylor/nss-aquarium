// database to hold the fish in the aquarium 

const database = { 
    fish: [
        {
            id: 2, 
            name: "Nemo", 
            food: "Coral", 
            size: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Vl6K2JrUwf54uxmhgneDyDoNuElpuE5yew&usqp=CAU",
            species: "Coral Fish",
            location: "Great Barrier Reef",
        },
        {
            id: 3, 
            name: "Squirt", 
            food: "Algae", 
            size: 8,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnlcdxDdAVSioQY3McoZtXsPkMVlZgYkwZg&usqp=CAU", 
            species: "Green Sea Turtle",
            location: "East Australian Current",
        },
        {
            id: 4, 
            name: "Dory", 
            food: "Small Fish", 
            size: 5,
            image: "https://i.pinimg.com/originals/54/4e/cd/544ecd93f61ddec6e0e5d47fd116effb.jpg",
            species: "Blue Tang",
            location: "Indian Ocean",
        },
        {
            id: 5, 
            name: "Bruce", 
            food: "Not Fish", 
            size: 25, 
            image: "https://paladone.com/blog/wp-content/uploads/2017/07/finding_nemo_fanfiction___breaking_bruce_by_jesus_ish-d9u20xy.jpg", 
            species: "Great White Shark",
            location: "Florida",
        },
        {
            id: 1, 
            name: "Bart", 
            food: "Crustacean", 
            location: "Springfield, USA",
            size: 3,
            image: "https://i.dailymail.co.uk/i/pix/2015/11/10/00/2E48C67200000578-0-image-m-31_1447114400618.jpg", 
            species: "Blinky",
        }
    ]
}

// defined a function to export the database to other modules 
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}