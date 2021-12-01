# Deploy Web-Wol

## Step 1: Create a service
To start Web-Wol at each start of the server you need to create a service.

Run the following command:
```
nano /lib/systemd/system/web-wol.service
```

Write in the file:
```conf
[Unit]
Description=Web-WOL service
After=syslog.target network.target

[Service]
Type=simple
User=root
WorkingDirectory=<your-web-wol-directory>
ExecStart=<your-web-wol-directory>/scripts/linux/start.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

Also you need to make the file executable:
```
chmod +x <your-web-wol-directory>/scripts/linux/start.sh
```

Apply the changes to the systemctl:
```
systemctl daemon-reload
systemctl start web-wol
systemctl enable web-wol
```

You can check the status of the service if everything is OK:
```
systemctl status web-wol
```

If everything is correct you should see something like this:
```
web-wol.service - Web-WOL service
   Loaded: loaded (/lib/systemd/system/web-wol.service; enabled; vendor preset: 
   Active: <a time>
 Main PID: 441 (start.sh)
    Tasks: 24 (limit: 2088)
   CGroup: /system.slice/web-wol.service
```

## Step 2: Nginx
First you need to install Nginx:
```
apt install nginx
```

Now we will create the configuration file for Web-Wol:
```
nano /etc/nginx/conf.d/web-wol.conf
```

Write this in the file:
```nginx
upstream backend {
   server 127.0.0.1:3000;
   keepalive 32;
}
server {
   listen 80;
   server_name <your-domain-name>;
   location / {
       client_max_body_size 50M;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_http_version 1.1;
       proxy_pass http://backend;
   }
}
```

Apply the configuration:
```
nginx -t
```

If everything is fine, you should see:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Restart Nginx to apply the changes:
```
service nginx restart
```

Congratulations 😀! You have deploy Web-Wol. 

You can now read the [use HTTPS](Use_HTTPS.md) guide.