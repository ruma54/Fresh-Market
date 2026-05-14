// ================== ДАНІ ПРОДУКТІВ ==================
    const mockProducts = [
    // Фрукти (30 товарів)
    { id: 1, name: "Яблука червоні", price: 45, weight: "1 кг", category: "fruits", stock: 100 },
    { id: 2, name: "Банани", price: 35, weight: "1 кг", category: "fruits", stock: 80 },
    { id: 15, name: "Апельсини", price: 50, weight: "1 кг", category: "fruits", stock: 90 },
    { id: 16, name: "Груші", price: 55, weight: "1 кг", category: "fruits", stock: 75 },
    { id: 17, name: "Виноград", price: 85, weight: "500 г", category: "fruits", stock: 60 },
    { id: 18, name: "Полуниця", price: 120, weight: "250 г", category: "fruits", stock: 45 },
    { id: 19, name: "Кавун", price: 25, weight: "1 кг", category: "fruits", stock: 55 },
    { id: 20, name: "Ананас", price: 95, weight: "1 шт", category: "fruits", stock: 40 },
    { id: 21, name: "Лимони", price: 60, weight: "500 г", category: "fruits", stock: 70 },
    { id: 22, name: "Персики", price: 75, weight: "1 кг", category: "fruits", stock: 50 },
    { id: 61, name: "Яблука зелені", price: 42, weight: "1 кг", category: "fruits", stock: 95 },
    { id: 62, name: "Манго", price: 110, weight: "1 шт", category: "fruits", stock: 35 },
    { id: 63, name: "Киві", price: 65, weight: "500 г", category: "fruits", stock: 55 },
    { id: 64, name: "Черешня", price: 135, weight: "500 г", category: "fruits", stock: 30 },
    { id: 65, name: "Нектарини", price: 78, weight: "1 кг", category: "fruits", stock: 45 },
    { id: 66, name: "Сливи", price: 58, weight: "1 кг", category: "fruits", stock: 60 },
    { id: 67, name: "Абрикоси", price: 72, weight: "1 кг", category: "fruits", stock: 50 },
    { id: 68, name: "Гранат", price: 85, weight: "1 шт", category: "fruits", stock: 40 },
    { id: 69, name: "Авокадо", price: 95, weight: "2 шт", category: "fruits", stock: 55 },
    { id: 70, name: "Грейпфрут", price: 55, weight: "1 кг", category: "fruits", stock: 65 },
    { id: 71, name: "Мандарини", price: 48, weight: "1 кг", category: "fruits", stock: 80 },
    { id: 72, name: "Малина", price: 145, weight: "250 г", category: "fruits", stock: 25 },
    { id: 73, name: "Чорниця", price: 155, weight: "250 г", category: "fruits", stock: 30 },
    { id: 74, name: "Смородина", price: 98, weight: "300 г", category: "fruits", stock: 35 },
    { id: 75, name: "Ожина", price: 125, weight: "250 г", category: "fruits", stock: 28 },
    { id: 76, name: "Диня", price: 28, weight: "1 кг", category: "fruits", stock: 60 },
    { id: 77, name: "Айва", price: 52, weight: "1 кг", category: "fruits", stock: 40 },
    { id: 78, name: "Хурма", price: 88, weight: "1 кг", category: "fruits", stock: 35 },
    { id: 79, name: "Інжир", price: 165, weight: "300 г", category: "fruits", stock: 20 },
    { id: 80, name: "Кокос", price: 75, weight: "1 шт", category: "fruits", stock: 45 },
    
    // Овочі (30 товарів)
    { id: 3, name: "Помідори", price: 55, weight: "1 кг", category: "vegetables", stock: 60 },
    { id: 4, name: "Огірки", price: 40, weight: "1 кг", category: "vegetables", stock: 70 },
    { id: 23, name: "Морква", price: 28, weight: "1 кг", category: "vegetables", stock: 95 },
    { id: 24, name: "Капуста біла", price: 32, weight: "1 кг", category: "vegetables", stock: 80 },
    { id: 25, name: "Картопля", price: 22, weight: "1 кг", category: "vegetables", stock: 120 },
    { id: 26, name: "Цибуля ріпчаста", price: 25, weight: "1 кг", category: "vegetables", stock: 100 },
    { id: 27, name: "Перець болгарський", price: 65, weight: "500 г", category: "vegetables", stock: 55 },
    { id: 28, name: "Баклажани", price: 48, weight: "1 кг", category: "vegetables", stock: 45 },
    { id: 29, name: "Броколі", price: 58, weight: "500 г", category: "vegetables", stock: 50 },
    { id: 30, name: "Салат листковий", price: 35, weight: "пучок", category: "vegetables", stock: 65 },
    { id: 81, name: "Помідори чері", price: 75, weight: "500 г", category: "vegetables", stock: 50 },
    { id: 82, name: "Кабачки", price: 38, weight: "1 кг", category: "vegetables", stock: 55 },
    { id: 83, name: "Гарбуз", price: 20, weight: "1 кг", category: "vegetables", stock: 70 },
    { id: 84, name: "Буряк", price: 24, weight: "1 кг", category: "vegetables", stock: 85 },
    { id: 85, name: "Редис", price: 32, weight: "пучок", category: "vegetables", stock: 45 },
    { id: 86, name: "Часник", price: 95, weight: "300 г", category: "vegetables", stock: 60 },
    { id: 87, name: "Цибуля зелена", price: 28, weight: "пучок", category: "vegetables", stock: 75 },
    { id: 88, name: "Петрушка", price: 22, weight: "пучок", category: "vegetables", stock: 80 },
    { id: 89, name: "Кріп", price: 20, weight: "пучок", category: "vegetables", stock: 85 },
    { id: 90, name: "Шпинат", price: 42, weight: "200 г", category: "vegetables", stock: 40 },
    { id: 91, name: "Руккола", price: 38, weight: "150 г", category: "vegetables", stock: 35 },
    { id: 92, name: "Цвітна капуста", price: 48, weight: "1 шт", category: "vegetables", stock: 45 },
    { id: 93, name: "Кукурудза", price: 35, weight: "1 шт", category: "vegetables", stock: 60 },
    { id: 94, name: "Спаржа", price: 125, weight: "300 г", category: "vegetables", stock: 25 },
    { id: 95, name: "Артишок", price: 145, weight: "1 шт", category: "vegetables", stock: 20 },
    { id: 96, name: "Селера", price: 45, weight: "1 шт", category: "vegetables", stock: 40 },
    { id: 97, name: "Пекінська капуста", price: 38, weight: "1 шт", category: "vegetables", stock: 50 },
    { id: 98, name: "Перець чілі", price: 85, weight: "200 г", category: "vegetables", stock: 35 },
    { id: 99, name: "Імбир", price: 115, weight: "200 г", category: "vegetables", stock: 30 },
    { id: 100, name: "Батат", price: 65, weight: "1 кг", category: "vegetables", stock: 40 },
    
    // М'ясо (30 товарів)
    { id: 5, name: "Курка ціла", price: 120, weight: "1 кг", category: "meat", stock: 50 },
    { id: 6, name: "Яловичина", price: 250, weight: "1 кг", category: "meat", stock: 40 },
    { id: 31, name: "Свинина", price: 180, weight: "1 кг", category: "meat", stock: 45 },
    { id: 32, name: "Індичка", price: 140, weight: "1 кг", category: "meat", stock: 35 },
    { id: 33, name: "Ковбаса варена", price: 95, weight: "500 г", category: "meat", stock: 60 },
    { id: 34, name: "Сосиски", price: 78, weight: "400 г", category: "meat", stock: 70 },
    { id: 35, name: "Лосось", price: 320, weight: "1 кг", category: "meat", stock: 30 },
    { id: 36, name: "Креветки", price: 280, weight: "500 г", category: "meat", stock: 25 },
    { id: 101, name: "Куряче філе", price: 145, weight: "1 кг", category: "meat", stock: 55 },
    { id: 102, name: "Крила курячі", price: 98, weight: "1 кг", category: "meat", stock: 60 },
    { id: 103, name: "Стегна курячі", price: 110, weight: "1 кг", category: "meat", stock: 65 },
    { id: 104, name: "Свиняча вирізка", price: 220, weight: "1 кг", category: "meat", stock: 35 },
    { id: 105, name: "Свинячі ребра", price: 165, weight: "1 кг", category: "meat", stock: 40 },
    { id: 106, name: "Яловичий стейк", price: 340, weight: "500 г", category: "meat", stock: 25 },
    { id: 107, name: "Фарш яловичий", price: 185, weight: "1 кг", category: "meat", stock: 50 },
    { id: 108, name: "Фарш свинячий", price: 145, weight: "1 кг", category: "meat", stock: 55 },
    { id: 109, name: "Фарш змішаний", price: 155, weight: "1 кг", category: "meat", stock: 60 },
    { id: 110, name: "Телятина", price: 290, weight: "1 кг", category: "meat", stock: 30 },
    { id: 111, name: "Баранина", price: 265, weight: "1 кг", category: "meat", stock: 25 },
    { id: 112, name: "Качка", price: 175, weight: "1 кг", category: "meat", stock: 30 },
    { id: 113, name: "Ковбаса копчена", price: 125, weight: "500 г", category: "meat", stock: 50 },
    { id: 114, name: "Шинка", price: 155, weight: "500 г", category: "meat", stock: 45 },
    { id: 115, name: "Бекон", price: 135, weight: "300 г", category: "meat", stock: 55 },
    { id: 116, name: "Салямі", price: 145, weight: "400 г", category: "meat", stock: 40 },
    { id: 117, name: "Форель", price: 285, weight: "1 кг", category: "meat", stock: 28 },
    { id: 118, name: "Тунець", price: 295, weight: "500 г", category: "meat", stock: 25 },
    { id: 119, name: "Дорадо", price: 265, weight: "1 кг", category: "meat", stock: 22 },
    { id: 120, name: "Мідії", price: 185, weight: "500 г", category: "meat", stock: 30 },
    { id: 121, name: "Кальмари", price: 195, weight: "500 г", category: "meat", stock: 28 },
    { id: 122, name: "Краби", price: 385, weight: "500 г", category: "meat", stock: 15 },
    
    // Молочні продукти (30 товарів)
    { id: 7, name: "Молоко 2.5%", price: 35, weight: "1 л", category: "dairy", stock: 90 },
    { id: 8, name: "Сир твердий", price: 85, weight: "200 г", category: "dairy", stock: 65 },
    { id: 37, name: "Йогурт натуральний", price: 28, weight: "300 г", category: "dairy", stock: 80 },
    { id: 38, name: "Кефір 2.5%", price: 32, weight: "1 л", category: "dairy", stock: 75 },
    { id: 39, name: "Сметана 20%", price: 45, weight: "400 г", category: "dairy", stock: 70 },
    { id: 40, name: "Масло вершкове 82%", price: 95, weight: "200 г", category: "dairy", stock: 55 },
    { id: 41, name: "Сир кисломолочний", price: 52, weight: "250 г", category: "dairy", stock: 60 },
    { id: 42, name: "Вершки 33%", price: 48, weight: "500 мл", category: "dairy", stock: 50 },
    { id: 123, name: "Молоко 3.2%", price: 38, weight: "1 л", category: "dairy", stock: 85 },
    { id: 124, name: "Молоко знежирене", price: 32, weight: "1 л", category: "dairy", stock: 70 },
    { id: 125, name: "Ряжанка", price: 30, weight: "500 мл", category: "dairy", stock: 65 },
    { id: 126, name: "Йогурт полуничний", price: 32, weight: "300 г", category: "dairy", stock: 75 },
    { id: 127, name: "Йогурт чорничний", price: 32, weight: "300 г", category: "dairy", stock: 70 },
    { id: 128, name: "Сметана 15%", price: 38, weight: "400 г", category: "dairy", stock: 80 },
    { id: 129, name: "Сметана 30%", price: 52, weight: "300 г", category: "dairy", stock: 45 },
    { id: 130, name: "Вершки 10%", price: 35, weight: "500 мл", category: "dairy", stock: 60 },
    { id: 131, name: "Сир моцарела", price: 95, weight: "250 г", category: "dairy", stock: 50 },
    { id: 132, name: "Сир пармезан", price: 145, weight: "200 г", category: "dairy", stock: 35 },
    { id: 133, name: "Сир брі", price: 165, weight: "200 г", category: "dairy", stock: 25 },
    { id: 134, name: "Сир фета", price: 98, weight: "200 г", category: "dairy", stock: 45 },
    { id: 135, name: "Сир козячий", price: 125, weight: "200 г", category: "dairy", stock: 30 },
    { id: 136, name: "Сирки глазуровані", price: 42, weight: "3 шт", category: "dairy", stock: 70 },
    { id: 137, name: "Пудинг", price: 35, weight: "200 г", category: "dairy", stock: 55 },
    { id: 138, name: "Масло топлене", price: 85, weight: "200 г", category: "dairy", stock: 40 },
    { id: 139, name: "Сир плавлений", price: 48, weight: "200 г", category: "dairy", stock: 60 },
    { id: 140, name: "Маскарпоне", price: 115, weight: "250 г", category: "dairy", stock: 30 },
    { id: 141, name: "Рікота", price: 95, weight: "250 г", category: "dairy", stock: 35 },
    { id: 142, name: "Молоко згущене", price: 52, weight: "400 г", category: "dairy", stock: 65 },
    { id: 143, name: "Протеїновий йогурт", price: 45, weight: "250 г", category: "dairy", stock: 50 },
    { id: 144, name: "Греецький йогурт", price: 58, weight: "400 г", category: "dairy", stock: 45 },
    
    // Випічка (30 товарів)
    { id: 9, name: "Хліб білий", price: 25, weight: "500 г", category: "bakery", stock: 120 },
    { id: 10, name: "Круасани", price: 45, weight: "4 шт", category: "bakery", stock: 55 },
    { id: 43, name: "Хліб чорний", price: 28, weight: "600 г", category: "bakery", stock: 100 },
    { id: 44, name: "Батон", price: 22, weight: "400 г", category: "bakery", stock: 95 },
    { id: 45, name: "Булочки", price: 35, weight: "6 шт", category: "bakery", stock: 75 },
    { id: 46, name: "Тістечка асорті", price: 65, weight: "4 шт", category: "bakery", stock: 50 },
    { id: 47, name: "Торт шоколадний", price: 180, weight: "1 кг", category: "bakery", stock: 30 },
    { id: 48, name: "Печиво", price: 42, weight: "400 г", category: "bakery", stock: 85 },
    { id: 151, name: "Хліб житній", price: 30, weight: "500 г", category: "bakery", stock: 90 },
    { id: 152, name: "Багет", price: 32, weight: "300 г", category: "bakery", stock: 70 },
    { id: 153, name: "Чіабатта", price: 38, weight: "350 г", category: "bakery", stock: 55 },
    { id: 154, name: "Пончики", price: 48, weight: "6 шт", category: "bakery", stock: 60 },
    { id: 155, name: "Маффіни", price: 52, weight: "4 шт", category: "bakery", stock: 55 },
    { id: 156, name: "Еклери", price: 68, weight: "4 шт", category: "bakery", stock: 40 },
    { id: 157, name: "Макарони", price: 85, weight: "6 шт", category: "bakery", stock: 35 },
    { id: 158, name: "Тарталетки", price: 58, weight: "6 шт", category: "bakery", stock: 45 },
    { id: 159, name: "Пиріг яблучний", price: 95, weight: "800 г", category: "bakery", stock: 40 },
    { id: 160, name: "Пиріг вишневий", price: 98, weight: "800 г", category: "bakery", stock: 38 },
    { id: 161, name: "Чізкейк", price: 125, weight: "600 г", category: "bakery", stock: 25 },
    { id: 162, name: "Тірамісу", price: 135, weight: "500 г", category: "bakery", stock: 20 },
    { id: 163, name: "Наполеон", price: 145, weight: "800 г", category: "bakery", stock: 22 },
    { id: 164, name: "Медовик", price: 155, weight: "1 кг", category: "bakery", stock: 18 },
    { id: 165, name: "Штрудель", price: 75, weight: "500 г", category: "bakery", stock: 35 },
    { id: 166, name: "Плюшки з корицею", price: 42, weight: "6 шт", category: "bakery", stock: 65 },
    { id: 167, name: "Хачапурі", price: 68, weight: "350 г", category: "bakery", stock: 40 },
    { id: 168, name: "Піца міні", price: 58, weight: "4 шт", category: "bakery", stock: 50 },
    { id: 169, name: "Самса", price: 52, weight: "4 шт", category: "bakery", stock: 45 },
    { id: 170, name: "Печиво вівсяне", price: 38, weight: "300 г", category: "bakery", stock: 70 },
    { id: 171, name: "Пряники", price: 35, weight: "400 г", category: "bakery", stock: 75 },
    { id: 172, name: "Бісквітний рулет", price: 48, weight: "400 г", category: "bakery", stock: 55 },
    
    // Напої (30 товарів)
    { id: 11, name: "Сік апельсиновий", price: 48, weight: "1 л", category: "drinks", stock: 75 },
    { id: 12, name: "Мінеральна вода", price: 18, weight: "1.5 л", category: "drinks", stock: 150 },
    { id: 49, name: "Кава зернова", price: 220, weight: "500 г", category: "drinks", stock: 40 },
    { id: 50, name: "Чай чорний", price: 85, weight: "100 г", category: "drinks", stock: 60 },
    { id: 51, name: "Кола", price: 32, weight: "2 л", category: "drinks", stock: 90 },
    { id: 52, name: "Сік яблучний", price: 42, weight: "1 л", category: "drinks", stock: 70 },
    { id: 53, name: "Лимонад", price: 28, weight: "1.5 л", category: "drinks", stock: 65 },
    { id: 54, name: "Енергетик", price: 35, weight: "0.5 л", category: "drinks", stock: 55 },
    { id: 173, name: "Сік мультифрукт", price: 45, weight: "1 л", category: "drinks", stock: 70 },
    { id: 174, name: "Сік томатний", price: 38, weight: "1 л", category: "drinks", stock: 60 },
    { id: 175, name: "Сік ананасовий", price: 52, weight: "1 л", category: "drinks", stock: 50 },
    { id: 176, name: "Сік виноградний", price: 48, weight: "1 л", category: "drinks", stock: 55 },
    { id: 177, name: "Морс журавлинний", price: 42, weight: "1 л", category: "drinks", stock: 45 },
    { id: 178, name: "Квас", price: 28, weight: "1.5 л", category: "drinks", stock: 65 },
    { id: 179, name: "Компот", price: 32, weight: "1 л", category: "drinks", stock: 55 },
    { id: 180, name: "Чай зелений", price: 95, weight: "100 г", category: "drinks", stock: 50 },
    { id: 181, name: "Чай фруктовий", price: 88, weight: "100 г", category: "drinks", stock: 55 },
    { id: 182, name: "Чай трав'яний", price: 105, weight: "50 г", category: "drinks", stock: 40 },
    { id: 183, name: "Кава молота", price: 165, weight: "500 г", category: "drinks", stock: 45 },
    { id: 184, name: "Кава розчинна", price: 125, weight: "200 г", category: "drinks", stock: 60 },
    { id: 185, name: "Какао", price: 78, weight: "250 г", category: "drinks", stock: 55 },
    { id: 186, name: "Цикорій", price: 68, weight: "200 г", category: "drinks", stock: 45 },
    { id: 187, name: "Спрайт", price: 30, weight: "2 л", category: "drinks", stock: 85 },
    { id: 188, name: "Фанта", price: 30, weight: "2 л", category: "drinks", stock: 80 },
    { id: 189, name: "Пепсі", price: 30, weight: "2 л", category: "drinks", stock: 75 },
    { id: 190, name: "Вода негазована", price: 15, weight: "1.5 л", category: "drinks", stock: 160 },
    { id: 191, name: "Вода газована", price: 16, weight: "1.5 л", category: "drinks", stock: 140 },
    { id: 192, name: "Айс-ті персик", price: 26, weight: "1.5 л", category: "drinks", stock: 70 },
    { id: 193, name: "Айс-ті лимон", price: 26, weight: "1.5 л", category: "drinks", stock: 68 },
    { id: 194, name: "Смузі", price: 58, weight: "330 мл", category: "drinks", stock: 45 },
    
    // Заморожені (30 товарів)
    { id: 13, name: "Овочева суміш", price: 65, weight: "500 г", category: "frozen", stock: 45 },
    { id: 14, name: "Морозиво пломбір", price: 38, weight: "500 г", category: "frozen", stock: 85 },
    { id: 55, name: "Пельмені", price: 72, weight: "800 г", category: "frozen", stock: 70 },
    { id: 56, name: "Вареники з картоплею", price: 68, weight: "800 г", category: "frozen", stock: 65 },
    { id: 57, name: "Піца заморожена", price: 95, weight: "450 г", category: "frozen", stock: 50 },
    { id: 58, name: "Ягоди заморожені", price: 85, weight: "400 г", category: "frozen", stock: 55 },
    { id: 59, name: "Риба заморожена", price: 145, weight: "1 кг", category: "frozen", stock: 40 },
    { id: 60, name: "Картопля фрі", price: 52, weight: "750 г", category: "frozen", stock: 75 },
    { id: 195, name: "Морозиво шоколадне", price: 42, weight: "500 г", category: "frozen", stock: 80 },
    { id: 196, name: "Морозиво ескімо", price: 48, weight: "6 шт", category: "frozen", stock: 70 },
    { id: 197, name: "Вареники з вишнею", price: 72, weight: "800 г", category: "frozen", stock: 60 },
    { id: 198, name: "Вареники з сиром", price: 75, weight: "800 г", category: "frozen", stock: 58 },
    { id: 199, name: "Хінкалі", price: 85, weight: "600 г", category: "frozen", stock: 45 },
    { id: 200, name: "Чебуреки", price: 68, weight: "600 г", category: "frozen", stock: 50 },
    { id: 201, name: "Голубці", price: 78, weight: "600 г", category: "frozen", stock: 42 },
    { id: 202, name: "Креветки очищені", price: 295, weight: "500 г", category: "frozen", stock: 30 },
    { id: 203, name: "Кальмар кільця", price: 165, weight: "400 г", category: "frozen", stock: 35 },
    { id: 204, name: "Морепродукти мікс", price: 245, weight: "500 г", category: "frozen", stock: 28 },
    { id: 205, name: "Філе курки", price: 125, weight: "1 кг", category: "frozen", stock: 55 },
    { id: 206, name: "Крила курячі", price: 95, weight: "1 кг", category: "frozen", stock: 60 },
    { id: 207, name: "Наггетси", price: 88, weight: "500 г", category: "frozen", stock: 65 },
    { id: 208, name: "Котлети", price: 92, weight: "600 г", category: "frozen", stock: 55 },
    { id: 209, name: "Полуниця заморожена", price: 125, weight: "400 г", category: "frozen", stock: 45 },
    { id: 210, name: "Малина заморожена", price: 135, weight: "300 г", category: "frozen", stock: 40 },
    { id: 211, name: "Чорниця заморожена", price: 145, weight: "300 г", category: "frozen", stock: 38 },
    { id: 212, name: "Овочі для супу", price: 58, weight: "600 г", category: "frozen", stock: 50 },
    { id: 213, name: "Овочі по-китайськи", price: 68, weight: "500 г", category: "frozen", stock: 48 },
    { id: 214, name: "Броколі заморожена", price: 55, weight: "400 г", category: "frozen", stock: 52 },
    { id: 215, name: "Гриби заморожені", price: 75, weight: "400 г", category: "frozen", stock: 45 },
    { id: 216, name: "Кукурудза заморожена", price: 48, weight: "400 г", category: "frozen", stock: 58 }
];

// ================== ГЛОБАЛЬНІ ЗМІННІ ==================
let cart = [];
let favorites = [];

// ================== УПРАВЛІННЯ СТОРІНКАМИ ==================
function showStorePage() {
    document.getElementById('storePage').style.display = 'block';
    document.getElementById('registerPage').style.display = 'none';
    initStore();
}

function showRegisterPage() {
    document.getElementById('storePage').style.display = 'none';
    document.getElementById('registerPage').style.display = 'block';
    initRegister();
}

// ================== ІНІЦІАЛІЗАЦІЯ СТОРІНОК ==================
function initStore() {
    checkAuth();
    loadFavoritesFromStorage();
    renderSales();
    renderProductsByCategories();
    setupSearch();
    setupCart();
    setupFavorites();
    setupProfile();
    setupNavigation();
    
    // Кнопка "Почати покупки"
    document.getElementById("startShoppingBtn").addEventListener("click", () => {
        window.scrollTo({
            top: document.getElementById("fruitsSection").offsetTop - 100,
            behavior: "smooth"
        });
    });
}

function initRegister() {
    const registerForm = document.getElementById('registerForm');
    const loginLink = document.getElementById('loginLink');
    const phoneInput = document.getElementById('phone');
    
    // Обробник форми реєстрації
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Валідація паролів
        if (password !== confirmPassword) {
            alert('Паролі не співпадають!');
            return;
        }
        
        if (password.length < 6) {
            alert('Пароль повинен містити мінімум 6 символів!');
            return;
        }
        
        // Збираємо дані форми
        const userData = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            password: password,
            address: formData.get('address'),
            registrationDate: new Date().toISOString()
        };
        
        // Зберігаємо дані користувача
        localStorage.setItem('freshmarket_user', JSON.stringify(userData));
        localStorage.setItem('freshmarket_loggedIn', 'true');
        
        // Показуємо повідомлення про успіх
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = ' Реєстрація успішна! Перенаправляємо до магазину...';
        registerForm.before(successMessage);
        
        // Перехід на головну сторінку через 2 секунди
        setTimeout(() => {
            showStorePage();
        }, 2000);
    });

    // Маска для телефону
    phoneInput.addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
        e.target.value = '+380 (' + x[2] + ') ' + x[3] + '-' + x[4] + '-' + x[5];
    });

    // Посилання "Увійти"
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        showStorePage();
    });

    // Перевірка, чи користувач вже авторизований
    const isLoggedIn = localStorage.getItem('freshmarket_loggedIn') === 'true';
    if (isLoggedIn) {
        if (confirm('Ви вже авторизовані. Бажаєте перейти до магазину?')) {
            showStorePage();
        }
    }
}

// ================== ВІДОБРАЖЕННЯ ТОВАРІВ ПО КАТЕГОРІЯХ ==================
function renderProductsByCategories() {
    const categories = {
        'fruits': 'fruitsGrid',
        'vegetables': 'vegetablesGrid',
        'meat': 'meatGrid',
        'dairy': 'dairyGrid',
        'bakery': 'bakeryGrid',
        'drinks': 'drinksGrid',
        'frozen': 'frozenGrid'
    };

    // Спочатку приховуємо всі секції
    Object.keys(categories).forEach(category => {
        const section = document.getElementById(category + 'Section');
        if (section) {
            section.style.display = 'none';
        }
    });

    // Показуємо тільки активну категорію
    const activeCategory = document.querySelector('.nav-item.active').dataset.category;
    const activeSection = document.getElementById(activeCategory + 'Section');
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // Рендеримо товари для кожної категорії
    Object.entries(categories).forEach(([category, gridId]) => {
        const filteredProducts = mockProducts.filter(p => p.category === category);
        renderProductsToGrid(filteredProducts, gridId);
    });
}

function renderProductsToGrid(products, gridId) {
    const productsGrid = document.getElementById(gridId);
    if (!productsGrid) return;
    
    productsGrid.innerHTML = "";
    
    if (products.length === 0) {
        productsGrid.innerHTML = "<p style='text-align: center; color: #777; padding: 40px;'>Немає товарів у цій категорії.</p>";
        return;
    }

    products.forEach(p => {
        const isFavorite = favorites.some(fav => fav.id === p.id);
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${p.id}">
                ${isFavorite ? '️' : ''}
            </button>
            <div class="product-image"></div>
            <div class="product-info">
                <div class="product-name">${p.name}</div>
                <div class="product-weight">${p.weight}</div>
                <div class="product-footer">
                    <div class="product-price">${p.price} ₴</div>
                    <button class="add-to-cart" data-id="${p.id}">+</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    // Додаємо обробники подій для кнопок додавання в кошик
    document.querySelectorAll(`#${gridId} .add-to-cart`).forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            const productId = parseInt(button.dataset.id);
            addToCart(productId);
        });
    });

    // Додаємо обробники подій для кнопок обраного
    document.querySelectorAll(`#${gridId} .favorite-btn`).forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            const productId = parseInt(button.dataset.id);
            toggleFavorite(productId);
        });
    });
}

// ================== ОБРАНЕ ==================
function setupFavorites() {
    const favoritesBtn = document.getElementById("favoritesBtn");
    const closeFavorites = document.getElementById("closeFavorites");
    
    favoritesBtn.addEventListener("click", openFavorites);
    closeFavorites.addEventListener("click", closeFavoritesModal);
    
    // Закриття модального вікна при кліку поза ним
    window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("favoritesModal")) {
            closeFavoritesModal();
        }
    });
}

function loadFavoritesFromStorage() {
    const savedFavorites = localStorage.getItem('freshmarket_favorites');
    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
        updateFavoritesUI();
    }
}

function saveFavoritesToStorage() {
    localStorage.setItem('freshmarket_favorites', JSON.stringify(favorites));
}

function toggleFavorite(productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = favorites.findIndex(item => item.id === productId);
    
    if (existingIndex !== -1) {
        // Видаляємо з обраного
        favorites.splice(existingIndex, 1);
        showNotification(`${product.name} видалено з обраного`);
    } else {
        // Додаємо в обране
        favorites.push(product);
        showNotification(`${product.name} додано в обране!`);
    }
    
    updateFavoritesUI();
    saveFavoritesToStorage();
    
    // Оновлюємо відображення товарів
    renderProductsByCategories();
}

function updateFavoritesUI() {
    // Оновлюємо кількість обраних товарів
    document.getElementById("favoritesCount").textContent = favorites.length;

    // Оновлюємо вміст модального вікна обраного
    const favoritesItems = document.getElementById("favoritesItems");
    
    if (favorites.length === 0) {
        favoritesItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">️</div>
                <p>У вас немає обраних товарів</p>
            </div>
        `;
        return;
    }

    favoritesItems.innerHTML = `
        <div class="products-grid">
            ${favorites.map(item => {
                const isFavorite = favorites.some(fav => fav.id === item.id);
                return `
                <div class="product-card">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${item.id}">
                        ${isFavorite ? '️' : ''}
                    </button>
                    <div class="product-image"></div>
                    <div class="product-info">
                        <div class="product-name">${item.name}</div>
                        <div class="product-weight">${item.weight}</div>
                        <div class="product-footer">
                            <div class="product-price">${item.price} ₴</div>
                            <button class="add-to-cart" data-id="${item.id}">+</button>
                        </div>
                    </div>
                </div>
            `}).join("")}
        </div>
    `;

    // Додаємо обробники подій для кнопок додавання в кошик в модальному вікні
    document.querySelectorAll("#favoritesItems .add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            const productId = parseInt(button.dataset.id);
            addToCart(productId);
        });
    });

    // Додаємо обробники подій для кнопок обраного в модальному вікні
    document.querySelectorAll("#favoritesItems .favorite-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            const productId = parseInt(button.dataset.id);
            toggleFavorite(productId);
        });
    });
}

function openFavorites() {
    document.getElementById("favoritesModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeFavoritesModal() {
    document.getElementById("favoritesModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// ================== ПРОФІЛЬ ==================
function setupProfile() {
    const profileBtn = document.getElementById("profileBtn");
    const closeProfile = document.getElementById("closeProfile");
    const goToRegisterFromProfile = document.getElementById("goToRegisterFromProfile");
    
    profileBtn.addEventListener("click", openProfile);
    closeProfile.addEventListener("click", closeProfileModal);
    goToRegisterFromProfile.addEventListener("click", () => {
        closeProfileModal();
        showRegisterPage();
    });
    
    // Закриття модального вікна при кліку поза ним
    window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("profileModal")) {
            closeProfileModal();
        }
    });
}

function openProfile() {
    const isLoggedIn = localStorage.getItem('freshmarket_loggedIn') === 'true';
    const userData = JSON.parse(localStorage.getItem('freshmarket_user') || '{}');
    
    if (isLoggedIn && userData.fullName) {
        // Показуємо інформацію профілю
        document.getElementById("profileInfo").style.display = "block";
        document.getElementById("profileNotLoggedIn").style.display = "none";
        
        // Заповнюємо дані профілю
        document.getElementById("profileName").textContent = userData.fullName;
        document.getElementById("profileEmail").textContent = userData.email;
        document.getElementById("profilePhone").textContent = userData.phone;
        document.getElementById("profileAddress").textContent = userData.address;
        
        // Форматуємо дату реєстрації
        const regDate = new Date(userData.registrationDate);
        document.getElementById("profileDate").textContent = regDate.toLocaleDateString('uk-UA');
    } else {
        // Показуємо повідомлення про необхідність реєстрації
        document.getElementById("profileInfo").style.display = "none";
        document.getElementById("profileNotLoggedIn").style.display = "block";
    }
    
    document.getElementById("profileModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeProfileModal() {
    document.getElementById("profileModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// ================== АКЦІЙНІ ТОВАРИ ==================
function renderSales() {
    let salesProducts = getSalesProducts();
    
    const categoriesGrid = document.getElementById("categoriesGrid");
    categoriesGrid.innerHTML = salesProducts.map(product => `
        <div class="category-card sales-card" data-id="${product.id}">
            <div class="category-icon"></div>
            <div class="category-name">${product.name}</div>
            <div class="sales-price">
                <span class="original-price">${product.originalPrice} ₴</span>
                <span class="discount-price">${product.price} ₴</span>
            </div>
            <div class="product-weight">${product.weight}</div>
        </div>
    `).join("");

    // Додаємо обробники подій для акційних товарів
    document.querySelectorAll(".sales-card").forEach(card => {
        card.addEventListener("click", () => {
            const productId = parseInt(card.dataset.id);
            addToCart(productId);
        });
    });
}

function getSalesProducts() {
    const savedSales = localStorage.getItem('freshmarket_sales');
    const lastVisit = localStorage.getItem('freshmarket_last_visit');
    const today = new Date().toDateString();
    
    if (!savedSales || lastVisit !== today) {
        // Генеруємо нові акційні товари
        const shuffledProducts = [...mockProducts].sort(() => 0.5 - Math.random());
        const newSalesProducts = shuffledProducts.slice(0, 8);
        
        // Застосовуємо знижку 20% до акційних товарів
        const salesWithDiscount = newSalesProducts.map(product => ({
            ...product,
            originalPrice: product.price,
            price: Math.round(product.price * 0.8),
            discount: 20
        }));
        
        // Зберігаємо нові акційні товари
        localStorage.setItem('freshmarket_sales', JSON.stringify(salesWithDiscount));
        localStorage.setItem('freshmarket_last_visit', today);
        
        return salesWithDiscount;
    }
    
    // Повертаємо збережені акційні товари
    return JSON.parse(savedSales);
}

// ================== АВТОРИЗАЦІЯ ==================
function checkAuth() {
    const isLoggedIn = localStorage.getItem('freshmarket_loggedIn') === 'true';
    const userData = JSON.parse(localStorage.getItem('freshmarket_user') || '{}');
    
    if (isLoggedIn && userData.fullName) {
        // Користувач авторизований
        document.getElementById('profileBtn').querySelector('.action-label').textContent = userData.fullName.split(' ')[0];
        document.getElementById('logoutBtn').style.display = 'flex';
        
        // Додаємо обробник для виходу
        document.getElementById('logoutBtn').addEventListener('click', function() {
            if (confirm('Ви впевнені, що хочете вийти?')) {
                localStorage.removeItem('freshmarket_loggedIn');
                alert('Ви вийшли з акаунту');
                window.location.reload();
            }
        });
        
        // Показуємо вітання для нового користувача
        const registrationDate = new Date(userData.registrationDate);
        const today = new Date();
        const timeDiff = today - registrationDate;
        const daysDiff = timeDiff / (1000 * 3600 * 24);
        
        if (daysDiff < 1) {
            showNotification(` Ласкаво просимо, ${userData.fullName.split(' ')[0]}! Раді бачити вас у ФрешМаркет!`);
        }
    } else {
        // Користувач не авторизований - показуємо кнопку реєстрації
        const profileBtn = document.getElementById('profileBtn');
        profileBtn.querySelector('.action-label').textContent = 'Увійти';
        profileBtn.addEventListener('click', function() {
            if (confirm('Для повного доступу до функцій магазину потрібна реєстрація. Бажаєте зареєструватися?')) {
                showRegisterPage();
            }
        });
    }
}

// ================== ФІЛЬТРАЦІЯ ТОВАРІВ ==================
function filterProductsByCategory(category) {
    // Приховуємо всі секції
    const allSections = document.querySelectorAll('.products');
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Показуємо тільки обрану категорію
    const targetSection = document.getElementById(category + 'Section');
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    
    // Оновлюємо активний пункт меню
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });
    const activeItem = document.querySelector(`.nav-item[data-category="${category}"]`);
    if (activeItem) {
        activeItem.classList.add("active");
    }
}

// ================== ПОШУК ==================
function setupSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    
    searchBtn.addEventListener("click", performSearch);
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            performSearch();
        }
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function performSearch() {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        // Якщо пошук пустий, повертаємо нормальний вигляд
        const activeCategory = document.querySelector('.nav-item.active').dataset.category;
        filterProductsByCategory(activeCategory);
        return;
    }

    // Приховуємо всі секції
    const allSections = document.querySelectorAll('.products');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    // Шукаємо товари по всіх категоріях
    const filtered = mockProducts.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    
    if (filtered.length === 0) {
        // Якщо нічого не знайдено, показуємо повідомлення
        const firstSection = document.getElementById('fruitsSection');
        firstSection.style.display = 'block';
        document.getElementById('fruitsGrid').innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #777;">
                <p>Не знайдено товарів за запитом: "${query}"</p>
            </div>
        `;
    } else {
        // Групуємо знайдені товари по категоріях
        const categories = {};
        filtered.forEach(product => {
            if (!categories[product.category]) {
                categories[product.category] = [];
            }
            categories[product.category].push(product);
        });

        // Показуємо знайдені товари в їх категоріях
        Object.keys(categories).forEach(category => {
            const section = document.getElementById(category + 'Section');
            if (section) {
                section.style.display = 'block';
                renderProductsToGrid(categories[category], category + 'Grid');
            }
        });
    }
    
    // Скидаємо активний пункт навігації при пошуку
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });
}

// ================== КОШИК ==================
function setupCart() {
    // Завантажуємо кошик з localStorage
    loadCartFromStorage();
    
    // Обробники подій для кошика
    const cartBtn = document.getElementById("cartBtn");
    const closeCart = document.getElementById("closeCart");
    const checkoutBtn = document.getElementById("checkoutBtn");
    
    cartBtn.addEventListener("click", openCart);
    closeCart.addEventListener("click", closeCartModal);
    checkoutBtn.addEventListener("click", checkout);
    
    // Закриття модального вікна при кліку поза ним
    window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("cartModal")) {
            closeCartModal();
        }
    });
    
    // Закриття модального вікна по ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && document.getElementById("cartModal").style.display === "block") {
            closeCartModal();
        }
    });
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('freshmarket_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

function saveCartToStorage() {
    localStorage.setItem('freshmarket_cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveCartToStorage();
    showNotification(`${product.name} додано в кошик!`);
    
    // Анімація кнопки кошика
    const cartBtn = document.getElementById("cartBtn");
    cartBtn.style.transform = "scale(1.1)";
    setTimeout(() => {
        cartBtn.style.transform = "scale(1)";
    }, 200);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToStorage();
    showNotification("Товар видалено з кошика");
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
        saveCartToStorage();
    }
}

function updateCartUI() {
    // Оновлюємо кількість товарів у кошику
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cartCount").textContent = totalCount;

    // Оновлюємо вміст кошика
    const cartItems = document.getElementById("cartItems");
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon"></div>
                <p>Ваш кошик порожній</p>
            </div>
        `;
        document.getElementById("cartTotal").textContent = "0 ₴";
        return;
    }

    let totalPrice = 0;
    cartItems.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} ₴ / ${item.weight}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Видалити</button>
            </div>
        `;
    }).join("");

    document.getElementById("cartTotal").textContent = `${totalPrice} ₴`;
}

function openCart() {
    document.getElementById("cartModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeCartModal() {
    document.getElementById("cartModal").style.display = "none";
    document.body.style.overflow = "auto";
}

function checkout() {
    if (cart.length === 0) {
        alert("Кошик порожній!");
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Перевіряємо авторизацію
    const isLoggedIn = localStorage.getItem('freshmarket_loggedIn') === 'true';
    
    if (!isLoggedIn) {
        if (confirm('Для оформлення замовлення потрібна реєстрація. Бажаєте зареєструватися?')) {
            closeCartModal();
            showRegisterPage();
            return;
        } else {
            return;
        }
    }
    
    const userData = JSON.parse(localStorage.getItem('freshmarket_user') || '{}');
    
    alert(`Замовлення на суму ${total} ₴ оформлено!\nДоставка за адресою: ${userData.address}\nДякуємо за покупку, ${userData.fullName.split(' ')[0]}! `);
    
    // Очищаємо кошик
    cart = [];
    updateCartUI();
    saveCartToStorage();
    closeCartModal();
}

// ================== ПРЕМІАЛЬНІ ПЛАНИ ==================
function selectPlan(planId, price, planName) {
    const isLoggedIn = localStorage.getItem('freshmarket_loggedIn') === 'true';

    if (!isLoggedIn) {
        if (confirm('Для оформлення підписки потрібна реєстрація. Бажаєте зареєструватися?')) {
            showRegisterPage();
        }
        return;
    }

    const modal = document.getElementById('premiumModal');
    const body = document.getElementById('premiumModalBody');

    body.innerHTML = `
        <div class="premium-confirm-info">
            <h3>${planName}</h3>
            <div class="price-big">${price} ₴</div>
            <p>Натисніть «Підтвердити», щоб оформити підписку/послугу.</p>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    document.getElementById('confirmPremiumBtn').onclick = function() {
        const userData = JSON.parse(localStorage.getItem('freshmarket_user') || '{}');
        const name = userData.fullName ? userData.fullName.split(' ')[0] : 'клієнт';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        showNotification(` «${planName}» успішно оформлено! Дякуємо, ${name}!`);
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('closePremium');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            document.getElementById('premiumModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
});

// ================== СПОВІЩЕННЯ ==================
function showNotification(message) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.animation = 'slideInRight 0.3s ease-out';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ================== НАВІГАЦІЯ ==================
function setupNavigation() {
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const category = item.dataset.category;

            if (category === 'premium') {
                // Знімаємо активний клас з усіх, ставимо на premium
                document.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
                item.classList.add("active");
                // Скролимо до секції підписок
                const premiumSection = document.getElementById('premiumSection');
                if (premiumSection) {
                    window.scrollTo({
                        top: premiumSection.offsetTop - 80,
                        behavior: "smooth"
                    });
                }
                return;
            }

            filterProductsByCategory(category);

            // Плавний скрол до товарів на мобільних пристроях
            if (window.innerWidth < 768) {
                const targetSection = document.getElementById(category + 'Section');
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
}

// ================== АДАПТИВНІ ФУНКЦІЇ ==================
function setupMobileOptimizations() {
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    document.addEventListener('touchstart', function() {}, {passive: true});
    
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        document.body.style.cursor = 'pointer';
    }
}

function handleResize() {
    const searchInput = document.getElementById("searchInput");
    
    if (window.innerWidth > 768) {
        searchInput.removeEventListener("input", performSearch);
        searchInput.addEventListener("input", debounce(performSearch, 300));
    } else {
        searchInput.removeEventListener("input", performSearch);
    }
}

// ================== ПОЧАТКОВА ІНІЦІАЛІЗАЦІЯ ==================
window.addEventListener('DOMContentLoaded', function() {
    setupMobileOptimizations();
    
    window.addEventListener('resize', debounce(handleResize, 250));
    
    const isLoggedIn = localStorage.getItem('freshmarket_loggedIn') === 'true';
    if (isLoggedIn) {
        showStorePage();
    } else {
        showRegisterPage();
    }
});

// Робимо функції глобальними для використання в HTML
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.toggleFavorite = toggleFavorite;
window.showRegisterPage = showRegisterPage;
window.showStorePage = showStorePage;
window.selectPlan = selectPlan;
