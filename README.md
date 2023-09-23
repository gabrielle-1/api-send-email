# api-send-email
This project is a simple API to send email using Node.js.

## Method

This API has only one method, which is a `POST` request to the endpoint `/enviar-email`.

### Request Parameters

The `POST` request expects the following parameters in the request body:

- `name` (string): The name of message.
- `email` (string): The email of message.
- `project` (string): The project of message.
- `message` (string): The message.

### Response

The API returns a message if sends in the response body.

## Getting Started

To use this API, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the server by running `npm start`.
4. Send a `POST` request to `http://localhost:3000/enviar-email` with the `name`, `email`, `project` and `message` parameters in the request body.

## Example Request

POST /imc HTTP/1.1
Host: http://localhost:3000/enviar-email
Content-Type: application/json

{
  "name": "Gabrielle Rodrigues",
  "email": "example@email.com",
  "project": "Name sugestion project",
  "message": "Example message"
}

## Example Response

{
  "message": "Seu email foi enviado com sucesso! Obrigada por entrar em contato comigo. Em breve entrarei em contato."
}


## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
