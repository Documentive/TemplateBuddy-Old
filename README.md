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

The following resources are a good place to get to know more about TemplateBuddy:-

1) Get to know about TemplateBuddy <a href="https://dev.to/documentive/get-to-know-about-templatebuddy-2ooi">Dev.to</a>, <a href="https://medium.com/oss-build/get-to-know-about-templatebuddy-7717aea13bcf">Medium</a>.   

#### Instructions for first time contributors/ beginner level contributors for template related issues (both HTML and LATEX)    

- Start working on the issues once you are assigned to them. Head over to the issue and comment that you want it to be assigned to you. Once the maintainer assigns the issue to you, start working on it.
- Once the issue is assigned, you have one week (7 Days) to submit the PR. Failing to do so will get the issue reassigned to someone else. As each issue related to questions are being assigned to single contributor at a time, we sincerely hope that you cooperate with us.
- If you create a PR without the issue being assigned to you, the PR will be marked spam as you are not adhering to the rules.   


Before moving further please go through the rules in [CONTRIBUTING.md](./CONTRIBUTING.md)  

## License

Pygeneses is licensed under GNU GPL v3 [LICENSE](./LICENSE)

## The Team

- [Dhairya Jain](https://github.com/dhairyaj)
- [Siddhartha Dhar Choudhury](https://github.com/frankhart2018)
