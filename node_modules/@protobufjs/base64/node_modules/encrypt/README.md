#Requirements 

1. [node.js](http://nodejs.org/) is installed the correct way. Read next item to accomplish this. 
2. [npm](https://github.com/isaacs/npm) is [installed the correct way](https://gist.github.com/579814).

#Installation

    npm install email-verificationtoken
    
#Example

An email address needs to be encrypted to create an email verification token. 
In this example `alfredwesterveld@gmail.com` is getting encrypted using `KEY = 123`.
This key needs to be updated to create a different(your) email verification token.

    // To create secret token for email adress.
    var email = require('email-verificationtoken');
    var KEY = '123'; // Needs to be updated.
    var EMAIL_TO_ENCRYPT = 'alfredwesterveld@gmail.com'; // Email to encrypt.
    var encryptEmail = email.create(KEY);
    var encrypted = encryptEmail.encrypt(EMAIL_TO_ENCRYPT); 
    var decrypted = encryptEmail.decrypt(encrypted);
    console.log(encrypted); // 1fb70bd0756ac12c496bcdd4b48586b027b89164850af100e0d50e80103cf367
    console.log(decrypted); // alfredwesterveld@gmail.com
