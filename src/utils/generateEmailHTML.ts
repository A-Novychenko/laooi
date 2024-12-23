export const generateEmailHTML = ({
  name,
  email,
  phone,
  caseType,
  msg,
}: {
  name: string;
  email: string;
  phone: string;
  caseType: string;
  msg: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .title {
      background-color: #007BFF;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <h1 class="title">Запит із сайту!</h1>
  <p>Користувач ${name}!</p>
  <p>Пошта: ${email}!</p>
  <p>Телефон: ${phone}!</p>
  <p>Тип звернення: ${caseType}!</p>
  <p>Повідомлення ${msg}!</p>

</body>
</html>
`;
