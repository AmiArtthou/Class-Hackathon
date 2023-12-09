# Mars Vacation - Hackathon

#Goal
Each pairing of students had to come up with an idea and implement it from scratch, using any API of our choosing, and then present it to the class. 

#Contributors
Ami 
& 
Saisudan 

#Instructions: 
Click on 'Excursions' at the top, and scroll down to discover your pop culture inspired robo guide for your Mars tour. When you refresh the page, the randomized tour guide changes. 
Then, click on the pink 'check out the locales!' button, to generate pictures of Mars taken by the Mars Rover, rendered from the Mars Rover NASA API. Clicking the button randomizes a curated selection of photos. At the bottom you will see pop culture influenced staff members of the Mars Tour team. At the top, click on 'Booking' to book your tour. 

#Challenges: 
We tried implementing the NASA Mars weather API as a nice addition to the vacation website's customer information (to notify them about the weather conditions of past trips and possibly a pretend forecast of any future tours) but the 'sol' cycles used for times and other technical jargon was too hard to navigate, understand and implement into our app! 

Redacted code: 

"   //https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0

    async function getdata(sol) {
        // Gets the data from the API
        const requestURL = `${marsRoverBaseURL}?sol=${sol}&api_key=${apiKey}`;
        try {
            const response = await axios.get(requestURL);
            return response.data;
        } catch (error) {
            console.log(`There was an error with retrieving comments\n${error}`);
        }
    }
    bodyEL = document.querySelector("body");
    const getPromise = getdata(2000);
    getPromise
        .then((response) => {
            // Success
            // Update likes
            marsPhotos = response.photos;
            marsPhotos.forEach((photo) => {
                const marsImageEL = makeChildElement("img", bodyEL, "img1", "");
                console.log(photo.img_src);
                marsImageEL.src = photo.img_src;
            });
        })
        .catch((error) => {
            // Failed
            console.log("error");
        });"



