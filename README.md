# Web-Wol
Web-Wol is a simple website to start remotely a device using Wake-On-Lan. It's a personal project that I publish for fun.

By design, this project is very simple. It use NuxtJS <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1280px-Nuxt_logo.svg.png" height="16" alt="NuxtJS logo"/> and everything is store in a SQLite database <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg" height="16" alt="SQLite logo"/>. To add a new device or a new user you need to use a command line tool to do it.

## How it works?
It's not a new protocol, but a simple way to Wake-On-Lan remotely. I mean, this is not remotely, but you have a remote access to do it!

## Limitations
This project have some limitations that you need to know:
- It only works on Linux <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/374px-Tux.svg.png" height="16" alt="Linux logo"/>. I have a plan to port it on Windows <img src="https://preview.redd.it/ne6ukkej06t71.png?auto=webp&s=fbdc1cb1d60306fba3098f7b75a8e01812a97ada" height="16" alt="Windows logo"/>, and later on MacOS <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png" height="16" alt="Finder logo"/>.
- It only works with devices that are connected through Ethernet.
- At last, but not least: it only works with devices that support Wake-On-Lan (it seems logic...).

## What the future holds?
As I wrote previously, I have a plan to port it on Windows, and later MacOS. I'm also planning to add a way to remotely get the status of the device (Online or Offline). I will also provide a way to put the device in hibernate mode or shutdown it.

Of course, I will also add the support for admin users and the ability to add a new device. But I will only do it if I have the time. It's not on my priority since you have the CLI to do it.

## Use cases
This project can do Wake-On-Lan to any device through an Ethernet cable connected to yoyr server. Therefore, it's useful to wake up a device that is connected to internet through WiFi.

Also it can be a "hub" to wake up a lot of devices at once. It can be useful when you use multiple servers.

The best way to implement this setup is by using a RaspberryPI <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/Raspberry_Pi_logo.svg/langfr-800px-Raspberry_Pi_logo.svg.png" height="16" alt="Raspberry logo"/>. It has enough power to run the project and has a Ethernet port to connect at least one device.

## How to use it?
You have access to a full documentation 📖. The first guide to read is [get Web-Wol](docs/Get_Web-Wol.md).