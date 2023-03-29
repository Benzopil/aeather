const express = require('express');
const config = require('config')
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = config.get('port') || 5000

app.post('/mail', (req, res) => {
    const { email } = req.body;

    // создаем объект транспорта для отправки почты
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'aether.receiver',
            pass: 'ggbhmmjxlxrdznrl',
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // настройки электронного письма
    const mailOptions = {
        from: 'aether.receiver@gmail.com',
        to: 'razinkin.s.v@gmail.com, stnslvmukhin@gmail.com',
        subject: 'Заполнена форма "Subscribe to news" с сайта Æther',
        text: `Заполнена форма "Subscribe to news" с сайта Æther\nEmail: ${email}
        `,
    };

    // отправка электронного письма
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Something went wrong');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

async function start() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
        console.log('MongoDB is Connected...');
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start();