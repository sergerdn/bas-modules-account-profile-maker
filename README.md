[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Note: This library is currently in active development, and its API may undergo changes without notice at any time.**

## AccountProfileMaker: Simplify Account Creation and User Profiles

### What is AccountProfileMaker?

`AccountProfileMaker` is a `BAS` module that simplifies the often complex task of creating user accounts and generating
user data.

It offers developers a comprehensive set of tools to easily generate user data, saving time and effort in the
development process.

### Key Features

- **User Data Generation:** With `AccountProfileMaker`, you can effortlessly generate a wide range of user-related data,
  including usernames, passwords, email addresses, and realistic names.
- **Configurability:** The module offers extensive customization options, allowing you to tailor the generated data to
  match your specific project requirements.
- **Time Efficiency:** Save valuable development time by implementing `AccountProfileMaker`, which automates the process
  of creating user accounts and profiles.

### Screenshots

![](./docs/images/main_menu.png)
![](./docs/images/randomFirstNameByCountry.png)

### TODO:

- [ ] randomUsername: Generate random usernames.
- [ ] randomUserData: Generate random user data for profiles, including name, address, phone number(fake),
  email(fake), and more.

### Join the Conversation

`AccountProfileMaker` can make a big difference in your development work, making user account management easier
and more user-friendly. Join in and let's see how this module can help with your projects.

If you have questions, ideas, or success stories, please feel free to share. We're eager to hear from you!

Happy coding!

Other similar projects:

- https://community.bablosoft.com/topic/21385/fakepersongenerator-module-for-creating-a-fake-person
- https://www.npmjs.com/package/@faker-js/faker

### Integrating AccountProfileMaker into Your BAS Project:

#### Download the Latest Release:

- Visit the [Releases](https://github.com/sergerdn/bas-modules-account-profile-maker/releases) section of the GitHub
  repository.
- Download the latest release of the `AccountProfileMaker` module by clicking on the desired version.

#### Install the Downloaded Module to BAS:

- Begin by opening your BAS project.
- Access the "Module Manager" tab within the BAS interface.

  ![](./docs/images/install_1.png)

- Locate and click the "Install Module" button.

  ![](./docs/images/install_2.png)

- Next, find and select the downloaded `AccountProfileMaker.zip` module file.
- If you are updating the module, kindly confirm your intent to overwrite the currently installed version when prompted.

You've successfully integrated `AccountProfileMaker` into your BAS project. Now you can use its features to simplify
account creation and user profile generation. Happy automating!

### How to develop BAS module

#### Prerequisites

Before proceeding, make sure you have the following installed on your machine:

- [BAS (Browser Automation Studio)](https://bablosoft.com/shop/BrowserAutomationStudio)
- [make](https://community.chocolatey.org/packages/make)
- [Node.js](https://nodejs.org/en/download)

#### Prepare

- Clone this project to your local machine using the following command:
  ```bash
  git clone git@github.com:sergerdn/bas-modules-account-profile-maker.git 
  ``` 
- Open BAS (Browser Automation Studio).
- Click on "Open" and choose [AccountProfileMakerModuleSrc.xml](bas_scripts/AccountProfileMakerModuleSrc.xml)
- Make the required modifications to the module.
- Save project
- Access the "Module Manager" tab within the BAS interface.

  ![](./docs/images/install_1.png)

- Locate and click the "Create new Module" button:

  ![](./docs/images/install_2.png)
- Proceed with the necessary steps.

### Pre-Release Module Steps

To prepare for the release, follow these steps:

- Run the following command to copy the contents from the BAS created folder to the project directory and unzip it:
  ```bash
  make copy_and_unzip_build
  ```
- Add/change auto-generated source code
  in [AccountProfileMaker](bas_scripts/modules/compiled/AccountProfileMaker/AccountProfileMaker)
- Run the following command to create a release `AccountProfileMaker.zip` zip file:
  ```bash
  make zip_build
  ```
- Commit your changes and push them to the repository.

### How to Make a New Release on GitHub

To create a new release, follow these steps:

- Ensure you are on the `master` branch. Release creation is only allowed from the `master` branch.
- To create a new release, run the following command:
  ```bash
  make release
  ```
- Commit your changes and push them to the repository.

You have successfully released your BAS module on GitHub. Please remember to follow any specific release guidelines or
conventions for your project.
