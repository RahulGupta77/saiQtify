import axios from 'axios';

export const config = {
    endpoint: 'https://qtify-backend-labs.crio.do'
};

export const fetchAllData = async () => {
    try {
        const [topAlbums, newAlbums, songs] = await Promise.all([
            axios.get (`${config.endpoint}/albums/top`),
            axios.get (`${config.endpoint}/albums/new`),
            axios.get (`${config.endpoint}/songs`)
        ]);

        return {
            topAlbums: topAlbums.data,
            newAlbums: newAlbums.data,
            songs: songs.data
        }
    } catch (error) {
        console.log(error);
        return {
            topAlbums: null,
            newAlbums: null,
            songs: null
        }
    }
}

export const songs = [
    {
        "id": "2cab9cf9-c602-4e8d-9f3e-a83db643ead9",
        "title": "Dreams",
        "artists": [
            "Tim Cassin"
        ],
        "genre": {
            "key": "rock",
            "label": "Rock"
        },
        "likes": 43401,
        "image": "https://images.pexels.com/photos/356286/pexels-photo-356286.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 56622
    },
    {
        "id": "f4377d17-eef9-4e2f-80a5-0658fa095017",
        "title": "Lady",
        "artists": [
            "Sean Schroeder",
            "Sherman Doyle"
        ],
        "genre": {
            "key": "blues",
            "label": "Blues"
        },
        "likes": 16091,
        "image": "https://images.pexels.com/photos/15379/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 43802
    },
    {
        "id": "18714d85-1147-4f4b-87a1-c5c3256551d8",
        "title": "All Shook Up",
        "artists": [
            "Carroll Stracke"
        ],
        "genre": {
            "key": "pop",
            "label": "Pop"
        },
        "likes": 24518,
        "image": "https://images.pexels.com/photos/264594/pexels-photo-264594.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 43824
    },
    {
        "id": "3b9a80b5-48cc-484f-aef9-086e81ef368b",
        "title": "My Eyes Adored You",
        "artists": [
            "Thomas Senger"
        ],
        "genre": {
            "key": "jazz",
            "label": "Jazz"
        },
        "likes": 72416,
        "image": "https://images.pexels.com/photos/1118866/pexels-photo-1118866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 48458
    },
    {
        "id": "25b5010b-7007-4c08-b8ac-9a887472815b",
        "title": "Tears in Heaven",
        "artists": [
            "Rosalie Marquardt"
        ],
        "genre": {
            "key": "blues",
            "label": "Blues"
        },
        "likes": 62649,
        "image": "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 34052
    },
    {
        "id": "303bdffb-a6ec-4a1a-8c70-fc15030bea5b",
        "title": "Somebody to Love",
        "artists": [
            "Ms. Steven Herman",
            "Morris Buckridge"
        ],
        "genre": {
            "key": "pop",
            "label": "Pop"
        },
        "likes": 21658,
        "image": "https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 45242
    },
    {
        "id": "f1b58ab0-da78-4a93-869a-29d0feb6594e",
        "title": "Just Dance",
        "artists": [
            "Kristin Rodriguez",
            "Kyle Halvorson"
        ],
        "genre": {
            "key": "pop",
            "label": "Pop"
        },
        "likes": 33840,
        "image": "https://images.pexels.com/photos/783243/pexels-photo-783243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 57447
    },
    {
        "id": "311eb0a1-9f2d-44e1-a37e-f84566f1cc96",
        "title": "I'll Take You There",
        "artists": [
            "Dr. Lora Fadel",
            "Nathan Monahan V"
        ],
        "genre": {
            "key": "rock",
            "label": "Rock"
        },
        "likes": 96931,
        "image": "https://images.pexels.com/photos/10519583/pexels-photo-10519583.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 55143
    },
    {
        "id": "dfd2ad77-e1ac-4ae0-bde0-6b50ddec3783",
        "title": "Rosanna",
        "artists": [
            "Carl Pouros",
            "Ms. Zachary Kuhlman",
            "Jesus Wisoky I"
        ],
        "genre": {
            "key": "jazz",
            "label": "Jazz"
        },
        "likes": 56356,
        "image": "https://images.pexels.com/photos/159884/pexels-photo-159884.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 57576
    },
    {
        "id": "e6e2ac6c-ddd3-44fa-b326-73dd2619d9d5",
        "title": "Say My Name",
        "artists": [
            "Timmy Ortiz",
            "Dr. Wilson Hodkiewicz Sr."
        ],
        "genre": {
            "key": "rock",
            "label": "Rock"
        },
        "likes": 69021,
        "image": "https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 36642
    },
    {
        "id": "b532ca8b-27cc-4be2-aec9-4507ac48d3ef",
        "title": "My Girl",
        "artists": [
            "Lana Will",
            "Clayton Welch",
            "Cornelius Rogahn"
        ],
        "genre": {
            "key": "rock",
            "label": "Rock"
        },
        "likes": 32515,
        "image": "https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 33809
    },
    {
        "id": "f49f060a-441e-4d66-bace-32b6b6c77297",
        "title": "I Want to Hold Your Hand",
        "artists": [
            "Joanna Hahn",
            "Lucy Legros",
            "Arnold Altenwerth DDS"
        ],
        "genre": {
            "key": "blues",
            "label": "Blues"
        },
        "likes": 26272,
        "image": "https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 37047
    },
    {
        "id": "ec2bc867-8ca3-41e2-b1eb-2639477436b9",
        "title": "Stop! in the Name of Love",
        "artists": [
            "Lonnie Blanda"
        ],
        "genre": {
            "key": "rock",
            "label": "Rock"
        },
        "likes": 84763,
        "image": "https://images.pexels.com/photos/312997/pexels-photo-312997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 31377
    },
    {
        "id": "c237c4ac-55e6-462c-b979-11b3ea853792",
        "title": "Like a Virgin",
        "artists": [
            "Allan Kuhlman"
        ],
        "genre": {
            "key": "pop",
            "label": "Pop"
        },
        "likes": 25636,
        "image": "https://images.pexels.com/photos/164583/pexels-photo-164583.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 50541
    },
    {
        "id": "29f97706-c1f7-4e83-af40-7ce040e6d61d",
        "title": "Da Doo Ron Ron (When He Walked Me Home)",
        "artists": [
            "Lester Block"
        ],
        "genre": {
            "key": "jazz",
            "label": "Jazz"
        },
        "likes": 38006,
        "image": "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 50239
    },
    {
        "id": "58fa683e-2cfe-45ee-b0aa-e50f453b5b3a",
        "title": "Incense & Peppermints",
        "artists": [
            "Kellie Altenwerth",
            "Lawrence Jerde",
            "Janice Bergstrom"
        ],
        "genre": {
            "key": "jazz",
            "label": "Jazz"
        },
        "likes": 16214,
        "image": "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 24844
    },
    {
        "id": "f8b4be6d-7a10-4c22-ba36-230378a2fe1f",
        "title": "Fantasy",
        "artists": [
            "Jay Leuschke",
            "Rose Dach V",
            "Irene Kilback"
        ],
        "genre": {
            "key": "rock",
            "label": "Rock"
        },
        "likes": 96101,
        "image": "https://images.pexels.com/photos/1662406/pexels-photo-1662406.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 40351
    },
    {
        "id": "45f22a7b-cdc5-45bf-96fc-4e4eca8d9886",
        "title": "Be My Baby",
        "artists": [
            "Aubrey Howell"
        ],
        "genre": {
            "key": "rock",
            "label": "Rock"
        },
        "likes": 50522,
        "image": "https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 41060
    },
    {
        "id": "dcbda844-0b32-4567-b375-eb53ed8a72a0",
        "title": "Bye",
        "artists": [
            "Ms. Kristin Howell",
            "Phyllis Braun"
        ],
        "genre": {
            "key": "blues",
            "label": "Blues"
        },
        "likes": 87980,
        "image": "https://images.pexels.com/photos/1592119/pexels-photo-1592119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 24567
    },
    {
        "id": "e5a47df5-6e22-489b-a30f-12fbc4348897",
        "title": "Use Somebody",
        "artists": [
            "Tommy Mohr"
        ],
        "genre": {
            "key": "blues",
            "label": "Blues"
        },
        "likes": 75999,
        "image": "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 25193
    },
    {
        "id": "d992e5d3-feb7-4415-afdb-fee036f695bd",
        "title": "Private Eyes",
        "artists": [
            "Amy Crooks",
            "Neil Wilderman",
            "Nettie Hessel"
        ],
        "genre": {
            "key": "blues",
            "label": "Blues"
        },
        "likes": 23089,
        "image": "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 49049
    },
    {
        "id": "d4c2bb42-eb2c-4044-adcf-c3add1d94734",
        "title": "The End of the World",
        "artists": [
            "Marjorie Moore MD",
            "Jermaine Morar",
            "Angelo Goodwin"
        ],
        "genre": {
            "key": "jazz",
            "label": "Jazz"
        },
        "likes": 52119,
        "image": "https://images.pexels.com/photos/2414918/pexels-photo-2414918.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 34650
    },
    {
        "id": "dcf5d93b-47b1-41fb-827d-16cf9e6ff662",
        "title": "Hello",
        "artists": [
            "Guadalupe Kilback",
            "Florence Ernser",
            "Karla Bechtelar"
        ],
        "genre": {
            "key": "rock",
            "label": "Rock"
        },
        "likes": 94814,
        "image": "https://images.pexels.com/photos/5326904/pexels-photo-5326904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 38390
    },
    {
        "id": "4f16859c-9fca-4021-b5cf-2c6d357fa38c",
        "title": "Hey There Delilah",
        "artists": [
            "Lester Cartwright"
        ],
        "genre": {
            "key": "pop",
            "label": "Pop"
        },
        "likes": 66527,
        "image": "https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 53522
    },
    {
        "id": "6fa17a52-b889-46dd-9174-fa7e8fd16591",
        "title": "Sweet Home Alabama",
        "artists": [
            "Marta Rolfson III",
            "Shari Schamberger"
        ],
        "genre": {
            "key": "pop",
            "label": "Pop"
        },
        "likes": 23700,
        "image": "https://images.pexels.com/photos/2223082/pexels-photo-2223082.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 40763
    },
    {
        "id": "79c811f3-056d-4197-83c3-adcaa0c04d8f",
        "title": "Yakety Yak",
        "artists": [
            "Mrs. Fred Farrell",
            "Victoria Bernier DVM",
            "Ms. Pat Lang"
        ],
        "genre": {
            "key": "pop",
            "label": "Pop"
        },
        "likes": 35052,
        "image": "https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 47953
    },
    {
        "id": "7cfdf053-ef76-4ce4-8051-8ddc2534003e",
        "title": "Jump",
        "artists": [
            "Beth Farrell"
        ],
        "genre": {
            "key": "rock",
            "label": "Rock"
        },
        "likes": 95096,
        "image": "https://images.pexels.com/photos/2832048/pexels-photo-2832048.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 25370
    },
    {
        "id": "27142ee9-4380-49a5-9e0a-aa9b0d6571b1",
        "title": "Will You Love Me Tomorrow",
        "artists": [
            "Kristin Romaguera",
            "Matt Runolfsson PhD"
        ],
        "genre": {
            "key": "pop",
            "label": "Pop"
        },
        "likes": 33452,
        "image": "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 33274
    },
    {
        "id": "b71e0a8a-1af9-4117-998e-41aa503b10dd",
        "title": "Since U Been Gone",
        "artists": [
            "Jim Hermiston",
            "Sherry Schneider"
        ],
        "genre": {
            "key": "blues",
            "label": "Blues"
        },
        "likes": 17978,
        "image": "https://images.pexels.com/photos/1293551/pexels-photo-1293551.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 28972
    },
    {
        "id": "a910732b-9866-4e81-83a4-39ba0204ec6e",
        "title": "Rock the Boat",
        "artists": [
            "Sammy Berge",
            "Jasmine Erdman",
            "Marion O'Hara"
        ],
        "genre": {
            "key": "pop",
            "label": "Pop"
        },
        "likes": 69610,
        "image": "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 50327
    },
    {
        "id": "d483d463-de53-4319-9ce8-74fe77751630",
        "title": "Single Ladies (Put A Ring On It)",
        "artists": [
            "Geoffrey Hilll",
            "Beverly Bruen"
        ],
        "genre": {
            "key": "jazz",
            "label": "Jazz"
        },
        "likes": 51062,
        "image": "https://images.pexels.com/photos/2125422/pexels-photo-2125422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 28789
    },
    {
        "id": "1c7b46de-147d-4bc6-b261-fb6e18ea6770",
        "title": "Hot Child In The City",
        "artists": [
            "Alonzo Johns"
        ],
        "genre": {
            "key": "rock",
            "label": "Rock"
        },
        "likes": 36919,
        "image": "https://images.pexels.com/photos/2770933/pexels-photo-2770933.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 47517
    },
    {
        "id": "7ebf0c17-c5b8-4a04-89e4-964830803e27",
        "title": "I Write the Songs",
        "artists": [
            "Angela Wuckert"
        ],
        "genre": {
            "key": "pop",
            "label": "Pop"
        },
        "likes": 77778,
        "image": "https://images.pexels.com/photos/434139/pexels-photo-434139.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 26891
    },
    {
        "id": "9dd9e4ba-00e4-46e3-a454-701970f0d0a7",
        "title": "Weak",
        "artists": [
            "Lynda Kerluke",
            "Rhonda Schaefer",
            "Daisy West"
        ],
        "genre": {
            "key": "jazz",
            "label": "Jazz"
        },
        "likes": 27058,
        "image": "https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 30352
    },
    {
        "id": "a670efaf-dccd-40e8-bdea-caae6454c0e6",
        "title": "Working My Way Back to You",
        "artists": [
            "Dr. Oscar Douglas",
            "Juana Schaefer"
        ],
        "genre": {
            "key": "jazz",
            "label": "Jazz"
        },
        "likes": 19390,
        "image": "https://images.pexels.com/photos/2886268/pexels-photo-2886268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 42033
    },
    {
        "id": "d6966e65-1f04-4de1-a2f3-df542390dfd1",
        "title": "Rock Your Baby",
        "artists": [
            "Darrell McCullough",
            "Andy Corwin Jr."
        ],
        "genre": {
            "key": "rock",
            "label": "Rock"
        },
        "likes": 82700,
        "image": "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 34165
    },
    {
        "id": "3316ed2f-795f-4bfa-a1b2-5d76e2240139",
        "title": "Stayin' Alive",
        "artists": [
            "Jose Heidenreich",
            "Minnie Kuhlman",
            "Abel Zieme"
        ],
        "genre": {
            "key": "jazz",
            "label": "Jazz"
        },
        "likes": 97600,
        "image": "https://images.pexels.com/photos/534174/pexels-photo-534174.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 42905
    },
    {
        "id": "b9dad35a-b2eb-4c70-9490-b8ec4533c134",
        "title": "Firework",
        "artists": [
            "Katrina McKenzie"
        ],
        "genre": {
            "key": "jazz",
            "label": "Jazz"
        },
        "likes": 28722,
        "image": "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 58648
    },
    {
        "id": "183f2981-5abe-411f-afc3-894031f7ad80",
        "title": "Besame Mucho",
        "artists": [
            "Lorene Treutel",
            "Brett Gutkowski",
            "Courtney Bins"
        ],
        "genre": {
            "key": "pop",
            "label": "Pop"
        },
        "likes": 14681,
        "image": "https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 42143
    },
    {
        "id": "625ba915-2e85-45d0-9af1-dac745305edc",
        "title": "One More Try",
        "artists": [
            "Eloise Schroeder",
            "Mrs. Kristy Block",
            "Flora Johnston"
        ],
        "genre": {
            "key": "rock",
            "label": "Rock"
        },
        "likes": 89203,
        "image": "https://images.pexels.com/photos/33779/hand-microphone-mic-hold.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 54079
    },
    {
        "id": "296021a3-42fa-4003-bde6-4afbfe89aab9",
        "title": "Gimme Some Lovin'",
        "artists": [
            "Rochelle Schowalter"
        ],
        "genre": {
            "key": "blues",
            "label": "Blues"
        },
        "likes": 89845,
        "image": "https://images.pexels.com/photos/685458/pexels-photo-685458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 49187
    },
    {
        "id": "ce99115f-389f-4dcf-ba8e-e241edb61be3",
        "title": "Stranger On the Shore",
        "artists": [
            "Natalie Lynch III",
            "Delores Kohler"
        ],
        "genre": {
            "key": "jazz",
            "label": "Jazz"
        },
        "likes": 78298,
        "image": "https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 37750
    },
    {
        "id": "a19c874f-56cd-4467-bebe-a501887e9f06",
        "title": "Hungry Heart",
        "artists": [
            "Allison Bergnaum",
            "Dewey Bartoletti",
            "Donald Deckow"
        ],
        "genre": {
            "key": "pop",
            "label": "Pop"
        },
        "likes": 26646,
        "image": "https://images.pexels.com/photos/6843561/pexels-photo-6843561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 47062
    }
  ]

export const fetchGenre = async () => {
    try {
        const response = await axios.get(`${config.endpoint}/genres`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}