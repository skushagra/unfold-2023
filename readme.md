# Spheron Deploy Extension Documentation

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Usage](#usage)
   - [Configuration](#configuration)
   - [Uploading a Project](#uploading-a-project)

## 1. Overview

The Spheron Deploy extension for Visual Studio Code is a powerful tool that simplifies the process of uploading your project to the Spheron Network and deploying it on the web. With this extension, you can easily share your projects and collaborate with others.

## 2. Installation

To install the Spheron Deploy extension, follow these steps:

1. The extension is currently only in developer mode.
2. To use the extension, download the source code and start an instance of VS Code with the extension compiled.
3. Press `Ctrl`+`Shift`+`P` to open the Command Pallet and run the command `Deploy on Spheron`.

## 3. Usage

### Configration
Before using the extension, you need to configure it with your Spheron Network API key. Follow these steps to configure the extension:

1. When you run the `Deploy on Spheron` command for the first time it will ask you for the personal access token that has to be created on the Spheron User Dashboard.
2. Enter the access token in the input box and press enter to start the upload.
3. From the next time the `Deploy on Sphereon` command will straight away upload the project.

### Uploading a Project

To upload your project to the Spheron Network, follow these steps:

1. Open the project you want to upload in VS Code.
2. Run the deploy command and that will upload the project.