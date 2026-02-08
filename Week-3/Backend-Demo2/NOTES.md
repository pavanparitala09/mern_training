pay the 

### steps for user authentication
1.after reciving user credienticial object api will verify the user name
2. if user name is matched then it compares the password with hashed password
3.if password is matched the it creates JWTocken and sends to user

### Storage of token in browser

1.local
2.session
3.cookies

local and session stored token can be accessed by browser
normal cookie can also be accessed by js of browser
"http" only cookies cannot be accessed by js of browser.so this is the safest place to store jwt token after authentication