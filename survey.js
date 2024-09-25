const readline = require("readline");

const userData = {
    name: "",
    favActivity: "",
    favMusic: "",
    favMeal: "",
    favFood: "",
    favSport: "",
    superpower: ""
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
    userData.name = name;
    console.log(`Nice to meet you, ${name}`);

    rl.question("What's an activity you like doing? ", (activity) => {
        userData.favActivity = activity;
        console.log(`${activity} sounds like fun!`);

        rl.question(`What do you listen to while ${userData.favActivity}? `, (music) => {
            userData.favMusic = music;
            console.log(`I've never listened to ${music}`);
            
            rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)? `, (meal) => {
                userData.favMeal = meal;
                console.log(`${meal} is good, my favourite is dessert!`);
                
                rl.question(`What's your favourite thing to eat for ${userData.favMeal}? `, (food) => {
                    userData.favFood = food;
                    console.log(`Yum ${food}!`);
                    
                    rl.question(`Which sport is your absolute favourite? `, (sport) => {
                        userData.favSport = sport;
                        console.log(`${sport.toLowerCase() !== 'softball'? "is cool, but softball is even better" : 'I agree, softball is the best :D'} `);
                        
                        rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superpower) => {
                            userData.superpower = superpower;
                            console.log(`Thats a pretty cool superpower. Me? I wish I could fly... or maybe teleport.. hmmm `);

                            console.log("\n==========================================================================================\nThanks for telling me about yourself! Here's what we learned:")
                            console.log(`Your name is ${userData.name}, you like to ${userData.favActivity} while listening to ${userData.favMusic}. Your favourite meal is ${userData.favMeal}, especially ${userData.favFood}. Your favourite sport is ${userData.favSport} and your superpower is ${userData.superpower}`)                            
                            rl.close();
                    
                        })
                
                    })
            
                })
        
            })
    
        })

    })
});

