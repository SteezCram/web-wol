# Web-Wol
Web-Wol is a simple website to start remotely a device using Wake-On-Lan. It's a personal project that I publish for fun.

By design, this project is very simple. It use NuxtJS and everything is store in a SQLite database. It's so simple that you don't have a way to add a new device in the website or a new user. You need to use a command line tool to do it 😂.

## How it works?
It's not a new protocol, but a simple way to Wake-On-Lan remotely. I mean, this is not a remotely, but you have a remote access to do it!

## Limitations
This project have some limitations that you need to know:
- It only works on Linux. I have a plan to port it on Windows, and later MacOS.
- It only works with devices that are connected through Ethernet.
- At last, but not least: it only works with devices that support Wake-On-Lan (it seems logic...).

## What the future holds?
As I wrote previously, I have a plan to port it on Windows, and later MacOS. I'm also planning to add a way to remotely get the status of the device (Online or Offline). I will also provide a way to put the device in hibernate mode or shutdown it.

Of course, I will also add the support for admin users and the ability to add a new device. But I will only do it if I have the time. It's on my priority since you have the CLI to do it and CLI is cool 😎.