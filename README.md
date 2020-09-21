# TemplateBuddy

[![GitHub](https://img.shields.io/github/license/Documentive/TemplateBuddy)](https://github.com/Documentive/TemplateBuddy/blob/master/LICENSE)  ![GitHub stars](https://img.shields.io/github/stars/Documentive/TemplateBuddy?style=plastic)  ![GitHub contributors](https://img.shields.io/github/contributors/Documentive/TemplateBuddy)  ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)  ![GitHub last commit](https://img.shields.io/github/last-commit/Documentive/TemplateBuddy)

TemplateBuddy is a free platform where the users can create their resumes and research papers from a variety of templates that we have to offer.   
The data once fed by the user is saved in his account and the user can just change the template and adjust the information he/she has to show.

## Steps to install

- Before moving on to the installation, make sure you have python3 installed. If you don't have python then you can do so from here - <a href="https://python.org">Python</a>.

1) Clone the repository:-

```bash
user@programmer~:$ git clone https://github.com/Documentive/TemplateBuddy
```

2) Install all the requirements (for the backend):-

```bash
user@programmer~:$ pip install -r requirements.txt
```

3) Create database:- 

```bash
user@programmer~:$ python setup.py 
```

4) To run

	4.1) In linux and macOS

	```bash
	user@programmer~:$ ./run.sh
	```

	4.2) In windows

	```bash
	user@programmer~:$ set FLASK_APP=app.py
	user@programmer~:$ flask run
	```

5) Open localhost:5000 in any browser.

- For steps 2 - 5make sure you are inside TemplateBuddy directory.

## Contributing

The following resources are a good place to get to know more about simC:-

1) Get to know about TemplateBuddy <a href="https://dev.to/documentive/get-to-know-about-templatebuddy-2ooi">Dev.to</a>, <a href="https://medium.com/oss-build/get-to-know-about-templatebuddy-7717aea13bcf">Medium</a>.

Before moving further please go through the rules in [CONTRIBUTING.md](./CONTRIBUTING.md)  

## License

Pygeneses is licensed under GNU GPL v3 [LICENSE](./LICENSE)
