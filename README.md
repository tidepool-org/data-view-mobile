# Tidepool RN Data View -- IN PROGRESS

This is the repo for the Tidepool Data View React Native application for the Grace Hopper Celebration Open Source Day.


## About Tidepool

Tidepool is a nonprofit organization whose mission is to make diabetes data more accessible, meaningful, and actionable for people with diabetes, their care teams, and researchers.

We believe that connected data leads to better decision-making. Tidepool is designed to help you discover insights and bring context to diabetes management. And, to help make diabetes data more actionable, we make it easy to share data with anyone you choose: caregivers, clinicians, endocrinologists, friends, researchers — anyone. With that in mind we are looking for ways to share the reality of diabetes with people beyond the diabetic community.


## Project Description

For the GHC 19 Open Source Day we will be focusing on creating a prototype react-native application that utilizes available data to show an average user what it means to have diabetes. This application will:

- Visually display diabetes data

Stretch goals for this application would include:

- Education about diabetes

- the ability to share data and/or insights over social media (Twitter, Instagram, etc.)

While it will be helpful if you are comfortable writing javascript, we will be walking through the life cycle of a product so there will be plenty to do for all skill levels.

Helpful Skills: Git, Node/NPM, Javascript

Bonus Skills: React, React-Native, Product Development, UI/UX


## Expectations for GHC OSD

We are so excited to be participating in the Grace Hopper Celebration Open Source Day! We want everyone to get the most out of their participation -- to be setup for success we ask that each participant come prepared having completed the following steps: 

- Carefully review this README.md and [CONTRIBUTING.md](https://github.com/tidepool-org/data-view-mobile/blob/master/CONTRIBUTING.md)
- Complete Dev Environment Setup (as outlined below)
- [PRODUCT TASKS]


## Setup

**Github Setup.** Make sure that you have your GitHub account setup and that you are comfortable with [Git Basics](https://git-scm.com/book/en/v1/Git-Basics). You should feel comfortable fork and cloning a repo, making code changes, and pushing those code changes back to the repo. Beyond the basics, it is important to understand how to contribute to a project using the GitHub Flow, which is outlined further in [CONTRIBUTING.md](https://github.com/tidepool-org/data-view-mobile/blob/master/CONTRIBUTING.md)


**React Native Setup.** In preparation to contribute to this project you will need to have the react native development environment setup on your computer. We recommend using the setup documentation on the react-native site found [here](https://facebook.github.io/react-native/docs/getting-started). We will be using Expo tools, so make sure that you can create and run a react native application following the Expo CLI Quickstart instructions all the way through to seeing the app on either an iOS or Android device. 

If you feel comfortable setting up a local (on computer) iOS simulator, we highly recommend it, as it is a faster workflow compared to refreshing a physical device. This is not required, just a nice to have. You can find the documentation for adding an iOS simulator [here](https://docs.expo.io/versions/latest/workflow/ios-simulator/). WARNING: Xcode takes a long time to download, plan to complete this when you have a solid internet connection and 30-45 minutes to allow the download to complete.

While both Android and iOS local (on computer) simulators are available, we highly recommend using the iOS simulator unless you are not using a Mac. In our experience the Android simulator tends to run into more configuration errors and we will not have time to troubleshoot environment errors for individual participants.


**Project Setup.** Fork and clone this repo and get it running on your local machine using the directions below.

From the directory you would like to place the project repo in...

```git clone [YOUR FORKED REPO LINK HERE]```

```cd data-view-mobile```

```yarn install```

```yarn start```


At this point the react native project will be running and you should see the chrome development tools. In the left hand sidebar you will see options to open the app in Expo on a physical device, or to run the app on the emulator of your choice (if you setup a local iOS or android emulator).

For troubleshooting with Expo, see the documentation [here](https://docs.expo.io/versions/latest/)


## How to Contribute to this Repo

You can contribute to this repo by submitting PRs, reporting bugs, or submitting feature requests.

Find the specific documentation for contributing [here](https://github.com/tidepool-org/data-view-mobile/blob/master/CONTRIBUTING.md)


## Other Documentation that will be helpful when contributing to this project

- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://docs.expo.io/versions/latest/)
- [Native Base](https://docs.nativebase.io)
- [React Navigation](https://reactnavigation.org)