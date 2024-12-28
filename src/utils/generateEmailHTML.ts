export const generateEmailHTML = ({
  recipient,
  name,
  email,
  phone,
  caseType,
  msg,
}: {
  recipient: 'user' | 'laooi';
  name: string;
  email: string;
  phone: string;
  caseType: string;
  msg: string;
}) =>
  recipient === 'user'
    ? `
<!doctype html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
    rel="stylesheet" />

  <style>
    * {
      box-sizing: border-box;
    }

    h1,
    h2,
    p {
      margin: 0;
      padding: 0;
    }

    img {
      display: block;
      max-width: 100%;
    }

    body {
      font-family: Arial, sans-serif;
      padding: 40px;
    }

    .container {
      max-width: 688px;
    }

    .title {
      margin-bottom: 24px;
      color: #000;
      font-family: 'Nunito', serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .logo-link {
      display: inline-flex;
      text-decoration: none;
      margin-bottom: 24px;
    }

    .logo {
      width: 80px;
      height: 80px;
      object-fit: contain;
      flex-shrink: 0;
      margin-right: 12px;
    }

    .logo-text {
      color: #039;
      font-family: 'Nunito', serif;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.4;
      word-break: break-word;
      white-space: normal;
      overflow-wrap: break-word;
      max-width: 100%;
      margin-top: auto;
      margin-bottom: auto;
    }

    .data {
      margin-bottom: 24px;
    }

    .subtitle {
      margin-bottom: 8px;
      color: #051d35;
      font-family: 'Nunito', serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.43;
    }

    .data-text {
      color: #051d35;
      font-family: 'Nunito', serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.43;
    }

    .notice {
      color: #000;
      font-family: 'Nunito', serif;
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1 class="title">
      Доброго дня, <br />
      <br />
      Дякуємо, що звернулися до Луганської Асоцiацiї органiзацiй осіб з інвалiднiстю. Ми отримали ваш запит і розглянемо
      його
      в найкоротші терміни. Наш спеціаліст зв’яжеться з вами, щоб надати подальшу інформацію.
      <br />
      <br />
      З повагою, команда ЛАООІ
    </h1>

    <a href="https://laooi.org/" class="logo-link">
      <img src="https://res.cloudinary.com/dlphgiw4o/image/upload/v1735375844/logo_emh2hg.png" alt="logo" width="80"
        height="80" class="logo" />

      <p class="logo-text">
        Луганська Асоцiацiя органiзацiй осіб з інвалiднiстю
      </p>
    </a>

    <div class="data">
      <h2 class="subtitle">Дані, які ви залишили:</h2>

      <p class="data-text">Ім’я: ${name}</p>
      <p class="data-text">Номер телефону: ${phone}</p>
      <p class="data-text">Емейл: ${email}</p>
      <p class="data-text">Тип звернення: ${caseType}</p>
      <p class="data-text">Повідомлення: ${msg}</p>
    </div>

    <p class="notice">
      Ви отримали цей лист, оскільки залишили запит на сайті laooi.org
    </p>
  </div>
</body>

</html>
`
    : `
    <!doctype html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
    rel="stylesheet" />

  <style>
    * {
      box-sizing: border-box;
    }

    h1,
    h2,
    p {
      margin: 0;
      padding: 0;
    }

    img {
      display: block;
      max-width: 100%;
    }

    body {
      font-family: Arial, sans-serif;
      padding: 40px;
    }

    .container {
      max-width: 688px;
    }

    .title {
      margin-bottom: 24px;
      color: #000;
      font-family: 'Nunito', serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .logo-link {
      display: inline-flex;
      text-decoration: none;
      margin-bottom: 24px;
    }

    .logo {
      width: 80px;
      height: 80px;
      object-fit: contain;
      flex-shrink: 0;
      margin-right: 12px;
    }

    .logo-text {
      color: #039;
      font-family: 'Nunito', serif;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.4;
      word-break: break-word;
      white-space: normal;
      overflow-wrap: break-word;
      max-width: 100%;
      margin-top: auto;
      margin-bottom: auto;
    }

    .data {
      margin-bottom: 24px;
    }

    .subtitle {
      margin-bottom: 8px;
      color: #051d35;
      font-family: 'Nunito', serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.43;
    }

    .data-text {
      color: #051d35;
      font-family: 'Nunito', serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.43;
    }

    .notice {
      color: #000;
      font-family: 'Nunito', serif;
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1 class="title">
 ${name} створив нову заявку
    </h1>

    <a href="https://laooi.org/" class="logo-link">
      <img src="https://res.cloudinary.com/dlphgiw4o/image/upload/v1735375844/logo_emh2hg.png" alt="logo" width="80"
        height="80" class="logo" />

      <p class="logo-text">
        Луганська Асоцiацiя органiзацiй осіб з інвалiднiстю
      </p>
    </a>

    <div class="data">
      <h2 class="subtitle">Дані, користувача:</h2>

      <p class="data-text">Ім’я: ${name}</p>
      <p class="data-text">Номер телефону: ${phone}</p>
      <p class="data-text">Емейл: ${email}</p>
      <p class="data-text">Тип звернення: ${caseType}</p>
      <p class="data-text">Повідомлення: ${msg}</p>
    </div>

    <p class="notice">Ви отримали цей лист, оскільки подали заявку на сайті laooi.org</p>
  </div>
</body>

</html>
        `;
