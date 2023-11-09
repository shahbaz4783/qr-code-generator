import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
	.prompt([
		{
			message: 'Enter Your URL',
			name: 'URL',
		},
	])
	.then((answers) => {
		const url = answers.URL;
        const qr_svg = qr.image(url);
		qr_svg.pipe(fs.createWriteStream('qr_code.png'));
	})
    .catch((error) => {
		console.log(error);
	});
