/* ******************
Coding Challenge #3
*********************
Your tasks:
PART 1
1. Write an async function 'loadNPause' that recreates Challenge #2, this time
using async/await (only the part where the promise is consumed, reuse the
'createImage' function from before)
2. Compare the two versions, think about the big differences, and see which one
you like more
3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
in the dev tools Network tab
PART 2
1. Create an async function 'loadAll' that receives an array of image paths
'imgArr'
2. Use .map to loop over the array, to load all the images with the
'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array �
5. Add the 'parallel' class to all the images (it has some CSS styles)
Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']. To test, turn off the 'loadNPause' function
GOOD LUCK
*/

// createImage('img/img-1.jpg')
//   .then(img => {
//     globalImage = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     globalImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     globalImage = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     globalImage.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// PART 1
async function loadNPause() {
  try {
    let image = await createImage("img/img-1.jpg");
    await wait2(2);
    image.style.display = "none";
    image = await createImage("img/img-2.jpg");

    await wait(2);
    image.style.display = "none";
  } catch (err) {
    console.error(err);
  }
}
// loadNPause();

// PART 2
async function loadAll(imgArr) {
  try {
    const imgs = imgArr.map(async (item) => await createImage(item));
    const element = await Promise.all(imgs);
    console.log(imgsEl);
    element.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
}
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
