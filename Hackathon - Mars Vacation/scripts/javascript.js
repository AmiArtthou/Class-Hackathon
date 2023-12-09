let apiKey="gd71iHKlh534vvXmmv4mSzGWK6YbDINmMNA1eXDc";
marsRoverBaseURL="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";

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
    });


    //https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0

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
        });