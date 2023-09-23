const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
app.use(cors({
    origin: '*'
}));

// Middleware para análise de dados no formato JSON
app.use(express.json());

// Middleware para análise de dados no formato application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware para exibir logs de requisição no console
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('API de envio de email');
});

app.post('/enviar-email', async (req, res) => {
  try {
    // Configurações do transporte de email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'gabriellerodriguesworks@gmail.com',
        pass: 'utfa huwp uhsx cpkl',
      },
    });

    const myEmail = 'gabriellerodriguesmd@gmail.com';
    const subject = 'Contato através do portifolio.';

    // Construir a mensagem de email
    const message = `
      Nome: ${req.body.name}
      Email: ${req.body.email}
      Projeto: ${req.body.project}
      Mensagem: ${req.body.message}
    `;

    // Informações do email a ser enviado (pode ser personalizado)
    const mailOptions = {
      from: req.body.remetente,
      to: myEmail,
      subject: subject,
      text: message,
    };

    // Enviar o email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ mensagem: 'Seu email foi enviado com sucesso! Obrigada por entrar em contato comigo. Em breve entrarei em contato.' });
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
    res.status(500).json({ erro: 'Erro ao enviar o email', detalhes: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
