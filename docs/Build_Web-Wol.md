# Build Web-Wol

## Step 1: Install Node.js
To build Web-Wol, you need to install the following dependencies:
- [nodejs](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

Install NodeJS:
```
apt install nodejs
```

## Step 2: Modify the configuration
You need to modify the `nuxt.config.js` file.
By default you should see something like that:
```js
// Global server configuration
server: {
    // Default port for the Nuxt server
    port: <your-port>,
},

// Axios module configuration: https://go.nuxtjs.dev/config-axios
axios: {
    // Used as fallback if no runtime config is provided
    baseURL: 'http://localhost:<your-port>',
},

// Runtime configuration accessible both by the client and the server
publicRuntimeConfig: {
    axios: {
        // Public URL to target the server API
        browserBaseURL: process.env.NODE_ENV === 'production' ? '<your-production-url>' : 'http://localhost:<your-port>',
    }
},

// Runtime configuraton accessible by the server
privateRuntimeConfig: {
    axios: {
        baseURL: 'http://localhost:<your-port>',
    }
},
```
By default the port is 3000. **⚠️ It's mandatory to modify the production URL.**

## Step 3: Install Web-Wol
Go in your Web-Wol directory and install the NPM dependencies:
```
npm install
```
It will install all the dependencies needed by Web-Wol to run.

Then, let's build Web-Wol! Run the folliwing command: 
```
npm run build
```

**⚠️ Sometimes you can have the follwing error:** 
```
FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
```

The problem is due to NuxtJS that use a lot of memory to build Web-Wol. As a workaround you can build it in your PC and then copy the files to your Web-Wol directory.

## Step 4: Add an user and a device
To add an user and a device you need to use [Web-Wol CLI](https://github.com/SteezCram/Web-Wol-CLI).

Simply run the following commands:
```
./web-wol <path to the web-wol.db file> user -m a
./web-wol <path to the web-wol.db file> user -m a
```

Each command will ask all the information to setup correctly an user or a device.

For more details about this tool you can read the [documentation]().

## Step 5: Run Web-Wol
To start manually Web-Wol run the following command:
```
npm run start
```

Open your browser and type the following URL: `http://localhost:<your-port>`.

Congratulations 😀! You have build Web-Wol. 

You can now read the [deploy Web-Wol](docs/Deploy_Web-Wol.md) guide.