# Use HTTPS

First you need to install certbot for Nginx:
```
apt install certbot python3-certbot-nginx
```

Now you need to create a certificate for the domain:
```
certbot --nginx -d <your-production-domain>
```

**⚠️ Your production domain is your production URL without the http://.**

Follow the process to create a certificate.

Once you have your certificate you need to make some modifications to the `nuxt.config.js` file:
- You need to allow HTTPS by modifying the `axios.https` property to:
```
process.env.NODE_ENV === 'production' ? true : false
```
- You need to use https:// on your production URL

Now, you need to rebuild Web-Wol:
```
service web-wol stop
npm run build
service web-wol start
```

**⚠️ If you skip this it will not work.**

Congratulations 😀! Web-Wol is now fully installed and ready to use.