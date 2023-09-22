// 1. use the inquirer npm package to get user input.
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';



inquirer
  .prompt([
    {
        message : "type your URL",
        name:"URL",
    },
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    // Use user feedback for... whatever!!
    fs.writeFile("URL.txt",url,(err) =>{
        if (err) throw err;
        console.log("the file has been saved!");
    });
    
    })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  // 2. use the qr-image package to turn the user entered url into a QR code image.
// 3. get the user input
 
