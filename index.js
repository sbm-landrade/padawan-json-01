const jwt = require("jsonwebtoken");
const secretKey = "skljaksdj9983498327453lsldkjf";

const nossoToken = jwt.sign(
  {
    email: "nome@alura.com.br",
    password: "HuEKW489!j445*",
  },
  secretKey,
  {
    expiresIn: "1y",
    subject: "1",
  }
);

//console.log(nossoToken); para visualizar o token

//verificar se o JWT é valido
try {
  const decoded = jwt.verify(nossoToken, secretKey);
  console.log(decoded);
} catch (err) {
  console.error("Token inválido", err);
}
