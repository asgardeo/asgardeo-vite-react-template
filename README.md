# Asgardeo Vite React Template

This template enables you to create a **Vite React** application integrated with [**`@asgardeo/react`**](https://wso2.com/asgardeo/docs/sdks/react/overview/) for authentication, built for modern web development. It leverages [**tmplr**](https://github.com/loreanvictor/tmplr) to streamline project initialization, offering a customizable and scalable setup.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Asgardeo Configuration](#asgardeo-configuration)
- [Running the Recipe](#running-the-recipe)
- [License](#license)

## Features

- **Vite**: Super-fast build tool for modern web development.
- **React**: A popular JavaScript library for building user interfaces.
- **Asgardeo**: Managed Identity as a Service (IDaaS) for secure user authentication.
- **tmplr**: Template management to easily bootstrap and configure your project.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** (v14 or later)
- **npm** or **yarn**
- An Asgardeo Account to configure OAuth2 authentication.

## Getting Started

### 1. Configure Asgardeo Application

- Log in to your Asgardeo Console.
- On the Asgardeo Console, go to Applications.
- Click `New Application` and select `React`.
- Enter the following details when creating the application:

    | Field Name                       | Description                                                                                             |
   |-------------------------------|---------------------------------------------------------------------------------------------------------|
   | Name                          | Give a unique name to identify your application.                                                         |
   | Authorized redirect URLs      | The URL to which the user is redirected after a successful login.<br>Use the following URL for this app:</br>**<http://localhost:5173>** |

- Click **Create** to complete the registration.
- On the **Guide** tab, take note of the **Client ID** & **Base URL**. You will need it to configure the application later.

## Folder Structure

```bash
asgardeo-vite-react-template/
├── template/
│   ├── assets/             # Static assets (images, styles)
│   ├── components/         # Reusable React components
│   ├── pages/              # Page-level components
│   ├── App.jsx             # Main App component
│   └── main.jsx            # Entry point for Vite and React
|   ├── vite.config.js      # Vite configuration file
|   └── package.json        # Project dependencies and scripts
├── public/                 # Static files served by Vite
├── .tmplr.yaml/            # tmplr recipe file
```

## Running the Recipe

1. To create a new Vite React application using **Asgardeo Vite React Template** run the following command.

```bash
npx tmplr --dir my-vite-react-app asgardeo/asgardeo-vite-react-template
```

2. Input the necessary details when you are prompted in the CLI.

3. Install the dependencies by running the following command from the root directory.

```bash
cd my-vite-react-app 
npm install
```

4. To start the application run the following command.

```bash
npm run dev
```

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
