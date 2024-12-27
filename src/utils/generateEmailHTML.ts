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
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
        rel="stylesheet">

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
            font-family: "Nunito", serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        .logo-link {
            display: block;
            text-decoration: none;
            margin-bottom: 24px;
        }

        .logo-box {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo {
            width: 80px;
            height: 80px;
            object-fit: contain;
            flex-shrink: 0;
        }

        .logo-text {
            color: #039;
            font-family: "Nunito", serif;
            font-size: 18px;
            font-weight: 600;
            line-height: 1.4;
            word-break: break-word;
            white-space: normal;
            overflow-wrap: break-word;
            max-width: 100%;
        }

        .subtitle {
            margin-bottom: 8px;
            color: #051D35;
            font-family: "Nunito", serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 1.43;
        }

        .data-text {
            color: #051D35;
            font-family: "Nunito", serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.43;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1 class="title">Доброго дня,
            <br /> <br />
            Дякуємо, що звернулися до Луганська Асоцiацiя органiзацiй осіб з інвалiднiстю, ми розглянемо ваш запит і
            звʼяжемося з вами.
            <br /> <br />
            З повагою, команда ЛАООІ
        </h1>

        <a href="https://laooi.org/" class="logo-link">
            <div class="logo-box">
                <img src="./public/logo.png" alt="logo" width="80" height="80" class="logo">

                <div>
                    <p class="logo-text">Луганська Асоцiацiя органiзацiй осіб з інвалiднiстю</p>
                </div>
            </div>
        </a>

        <div>
            <h2 class="subtitle">Дані, які ви залишили:</h2>

            <p class="data-text">Ім’я: ${name}</p>
            <p class="data-text">Номер телефону: ${phone}</p>
            <p class="data-text">Емейл: ${email}</p>
            <p class="data-text">Тип звернення: ${caseType}</p>
            <p class="data-text">Повідомлення: ${msg}</p>
        </div>
    </div>

</body>

</html>
`;
