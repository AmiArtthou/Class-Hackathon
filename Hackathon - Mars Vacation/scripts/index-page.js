
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
const bodyEL = document.querySelector("body");
const galleryEL = document.querySelector(".mars__Photos");
// const galleryImage1EL = document.querySelector(".div__whiteBackground");
// const galleryImage2EL = document.querySelector(".div__Photo-Gallery");
// const galleryImage3EL = document.querySelector(".div__third");
// const galleryImagesEL = [ galleryImage1EL, galleryImage2EL, galleryImage3EL]
const buttonEL = document.querySelector(".mars__Button");
buttonEL.addEventListener('click', event => {
    galleryEL.innerHTML = "";
    const randomIndex = Math.floor(Math.random() * 3950);
    const getPromise = getdata(randomIndex);
    getPromise
        .then((response) => {
            // Success
            // Update likes
            // console.log("test");
            marsPhotos = response.photos;
            // let indexI = 1;
            for (let i=0; i<15;i++) {
                if (i === marsPhotos.length) {
                    break;
                }
                console.log(i);
                const imageEL = document.createElement("img");
                imageEL.classList.add("img__1");
                imageEL.src = marsPhotos[i].img_src;
                console.log(imageEL);
                galleryEL.appendChild(imageEL);
            }
            // galleryImagesEL.forEach((image) => {
                // if (indexI >= 15) {
                //     break;
                // }
                // const marsImageEL = makeChildElement("img", bodyEL, "img1", "");
                // console.log(marsPhotos[indexI].img_src);
                // image.src = marsPhotos[index].img_src;
                // image.style.backgroundImage = `url(${marsPhotos[indexI].img_src})`;
                // image.style.color = "green";
            //     // image.style.backgroundSize = "cover";
            //     indexI++;
            // });
        })
        .catch((error) => {
            // Failed
            console.log(error);
        });
    
});
// console.log(galleryEL)
const getPromise = getdata(82);
getPromise
    .then((response) => {
        // Success
        // Update likes
        console.log("test");
        marsPhotos = response.photos;
        // let indexI = 1;
        for (let i=0; i<15;i++) {
            if (i === marsPhotos.length) {
                break;
            }
            console.log(i);
            const imageEL = document.createElement("img");
            imageEL.classList.add("img__1");
            imageEL.src = marsPhotos[i].img_src;
            console.log(imageEL);
            galleryEL.appendChild(imageEL);
        }
        // galleryImagesEL.forEach((image) => {
            // if (indexI >= 15) {
            //     break;
            // }
            // const marsImageEL = makeChildElement("img", bodyEL, "img1", "");
            // console.log(marsPhotos[indexI].img_src);
            // image.src = marsPhotos[index].img_src;
            // image.style.backgroundImage = `url(${marsPhotos[indexI].img_src})`;
            // image.style.color = "green";
        //     // image.style.backgroundSize = "cover";
        //     indexI++;
        // });
    })
    .catch((error) => {
        // Failed
        console.log(error);
    });


    //https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0

//     async function getdata(sol) {
//         // Gets the data from the API
//         const requestURL = `${marsRoverBaseURL}?sol=${sol}&api_key=${apiKey}`;
//         try {
//             const response = await axios.get(requestURL);
//             return response.data;
//         } catch (error) {
//             console.log(`There was an error with retrieving comments\n${error}`);
//         }
//     }
//     bodyEL = document.querySelector("body");
//     // const getPromise = getdata(2000);
//     getPromise
//         .then((response) => {
//             // Success
//             // Update likes
//             marsPhotos = response.photos;
//             marsPhotos.forEach((photo) => {
//                 const marsImageEL = makeChildElement("img", bodyEL, "img1", "");
//                 console.log(photo.img_src);
//                 marsImageEL.src = photo.img_src;
//             });
//         })
//         .catch((error) => {
//             // Failed
//             console.log("error");
//         });



document.addEventListener('DOMContentLoaded', function () {
    const commentList = document.getElementById('comment-list');
    const commentForm = document.getElementById('comment-form');

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const commentText = document.getElementById('comment').value;

        if (name && commentText) {
            const commentItem = document.createElement('li');
            commentItem.innerHTML = `<strong>${name}:</strong> ${commentText}`;
            commentList.appendChild(commentItem);

            document.getElementById('name').value = '';
            document.getElementById('comment').value = '';
        }
    });
});


//images

const robotEL = document.querySelector(".AndroidTourguide");
const robotArr = [
    "/assets/images/android-logo-png-transparent.png",
    "/assets/images/megaman.png",
    "/assets/images/r2d2.png"
]
const randomRobot = Math.floor((Math.random() - 0.001) * 3);
const robotImageEL = document.createElement("img");
robotImageEL.classList.add("img__1");
robotImageEL.src = robotArr[randomRobot];
robotEL.appendChild(robotImageEL);