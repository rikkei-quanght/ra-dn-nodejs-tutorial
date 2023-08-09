import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());

// Cấu hình express session
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'rikkei-academy',
    cookie: { maxAge: 60000 }
}));

// Cấu hình body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Cấu hình EJS template
app.set('view engine', 'ejs');

app.get('/get-cookies', (request, response) => {
    response.render('index', {
        message: JSON.stringify(request.cookies)
    });
})

app.get('/set-session', (request, response) => {
    request.session.User = {
        username: 'anhtai',
        sex: 'male',
        age: 22
    }

    response.render('index', {
        message: 'Set session'
    });
});

app.get('/get-session', (request, response) => {
    const user = request.session.User;

    response.send(user);
});

app.get('/unset-session', (request, response) => {
    request.session.User = null;

    response.send({
        status: 'OK'
    });
});

app.listen(8000, () => {
    console.log('Server Started');
});
