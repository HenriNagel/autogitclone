# Autogitclone
Automatically clone a GitHub repository into a desiered directory on your local machine or server when it gets modified
## Installation
Download latest package (autogitclone-0.1.1.tar) and run:
```bash
npm -g install autogitclone-0.1.1.tar
```
The filename may vary
## Usage 
```bash
autogc -u <username> -r <name of repository> -d <directory> &
```
This will print a [localtunnel](https://www.npmjs.com/package/localtunnel) Url that has to be used as a Webhook (with standart settings) in the GitHub Repository. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
