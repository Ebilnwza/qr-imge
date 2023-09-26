import inq from "inquirer";
import qr from 'qr-image';
import fs from 'fs';
inq
  .prompt([
    {
        message:"Type in your URL:",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL
    console.log(`your url ${url}`);
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-imge.png'));
    fs.writeFile("URL",url,(err)=>{
        if(err) throw err;
        console.log('the file has been saved!!')
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment

    } else {
      // Something else went wrong
    }
  });