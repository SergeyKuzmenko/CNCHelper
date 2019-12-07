var FANUC_MILLING_G = [
  {
    "code": "G00",
    "name": "Позиционирование",
    "description": "Код G00 используется для выполнения ускоренного перемещения Ускоренное перемещение или позиционирование необходимо для быстрого перемещения режущего инструмента к позиции обработки или безопасной позиции. Ускоренное перемещение никогда не используется для выполнения обработки, так как скорость движения исполнительного органа станка очень высока и непостоянна. Код G00 отменяется при программировании следующих кодов: G01, G02, G03."
  },
  {
    "code": "G01",
    "name": "Линейная интерполяция",
    "description": "Код G01 - это команда линейной интерполяции, обеспечивающая перемещение инструмента по прямой линии с заданной скоростью. Скорость перемещения указывается F словом данных. Код G01 отменяется с помощью кодов G00, G02 и G03."
  },
  {
    "code": "G02",
    "name": "Круговая интерполяция/винтовая интерполяция по часовой стрелке",
    "description": "Код G02 предназначен для выполнения круговой интерполяции, то есть для перемещения инструмента по дуге (окружности) в направлении часовой стрелки с заданной скоростью. Скорость перемещения указывается F словом данных. Код G02 отменяется с помощью кодов G00, G01 и G03."
  },
  {
    "code": "G03",
    "name": "Круговая интерполяция/винтовая интерполяция против часовой",
    "description": "Код G03 предназначен для выполнения круговой интерполяции, то есть для перемещения инструмента по дуге (окружности) против часовой стрелки с заданной скоростью. Скорость перемещения указывается F словом данных. Код G03 отменяется с помощью кодов G00, G01 и G02."
  },
  {
    "code": "G04",
    "name": "Задержка, точный останов",
    "description": "Код G04 – это команда на выполнение выдержки (паузы) с заданным временем. Этот немодальный код программируется вместе с X или P адресом, который указывает длительность времени выдержки. Обычно, это время составляет от 0.001 до 99999.999  секунд. Код G04, Х или P слово данных программируются вместе в одном кадре, который не содержит никаких перемещений."
  },
  {
    "code": "G09",
    "name": "Точный останов",
    "description": "Немодальный код G09 (точный останов) предназначен для согласования фактической траектории инструмента с запрограммированной траекторией. То есть при переходе от одного движения к другому СЧПУ выполнит “незаметную на глаз” выдержку, обеспечит законченное и точное перемещение в указанную координату."
  },
  {
    "code": "G10",
    "name": "Ввод программируемых данных",
    "description": "Команда G10 позволяет устанавливать или смещать рабочую систему координат и вводить определенные значения в регистры коррекции инструмента памяти СЧПУ при помощи управляющей программы или специальной (отдельной) программы."
  },
  {
    "code": "G11",
    "name": "Отмена режима ввода программируемых данных",
    "description": "При помощи команды G11 отменяется команда G10 для включения режима ввода данных в СЧПУ."
  },
  {
    "code": "G15",
    "name": "Отмена команды в полярных координатах",
    "description": "При помощи команды G15 вы отменяете режим работы в полярной системе координат и возвращаетесь к программированию в прямоугольной системе координат."
  },
  {
    "code": "G16",
    "name": "Команда в полярных координатах",
    "description": "Подготовительная функция G16 позволяет работать в полярной системе координат. При этом запрограммированная позиция определяется углом и расстоянием от нулевой точки рабочей системы координат или от текущей действительной позиции."
  },
  {
    "code": "G17",
    "name": "Выбор плоскости XpYpXp: ОсьХ или параллельная ей ось",
    "description": "Подготовительная функция G17 предназначена для выбора плоскости XY в качестве рабочей. Плоскость XY становится определяющей при использовании круговой интерполяции, вращении системы координат и постоянных циклов сверления."
  },
  {
    "code": "G18",
    "name": "Выбор плоскости ZpXpYp: Ось У или параллельная ей ось",
    "description": "Подготовительная функция G18 предназначена для выбора плоскости XZ в качестве рабочей. Плоскость XZ становится определяющей при использовании круговой интерполяции, вращении системы координат и постоянных циклов сверления."
  },
  {
    "code": "G19",
    "name": "Выбор плоскости YpZpZp: OcbZ или параллельная ей ось",
    "description": "Подготовительная функция G19 предназначена для выбора плоскости YZ в качестве рабочей. Плоскость YZ становится определяющей при использовании круговой интерполяции, вращении системы координат и постоянных циклов сверления."
  },
  {
    "code": "G20",
    "name": "Ввод в дюймах",
    "description": "Код G20 активизирует режим работы с дюймовыми данными. Пока действует этот режим, все вводимые данные воспринимаются как дюймовые."
  },
  {
    "code": "G21",
    "name": "Ввод в мм",
    "description": "Код G21 активизирует режим работы с метрическими данными. Пока действует этот режим, все вводимые данные воспринимаются как метрические."
  },
  {
    "code": "G22",
    "name": "Функция проверки сохраненного шага вкл",
    "description": "Код G22 активизирует установленный предел перемещений. В этом случае инструмент не может выйти за пределы ограничивающей области. Эта область, как правило, устанавливается с помощью параметров СЧПУ."
  },
  {
    "code": "G23",
    "name": "Функция проверки сохраненного шага вык",
    "description": "При выполнении команды G23 установленные пределы перемещений не действуют. То есть код G23 отменяет действие кода G22 и позволяет инструменту перемещаться в любую точку рабочей зоны станка."
  },
  {
    "code": "G27",
    "name": "Проверка возврата в референтное положение",
    "description": "Код G27 (проверка возврата к исходной позиции) работает аналогично коду G28. Единственная разница заключается в том, что если позиция к которой произошло перемещение исполнительного органа, не соответствует исходной позиции, то в случае с G27 система ЧПУ станка выдает аварийное сообщение или сигнал, а при работе с G28 сообщений и сигналов не будет."
  },
  {
    "code": "G28",
    "name": "Возврат в референтное положение",
    "description": "Команда G28 предназначена для возврата станка в исходную позицию. Под этим понимается ускоренное перемещение исполнительных органов в нулевую точку станка. Возврат в исходную позицию предназначен, прежде всего, для возможности проверки размеров и качества обрабатываемой детали в середине программы обработки. Иногда код G28 ставят в конец управляющей программы, чтобы после ее завершения рабочий стол переместился в положение удобное для съема обработанной детали."
  },
  {
    "code": "G29",
    "name": "Возврат из референтной позиции",
    "description": ""
  },
  {
    "code": "G31",
    "name": "Функция пропуска",
    "description": "В некоторых станках можно использовать функцию пропуска с реакцией на внешний сигнал. При помощи немодального кода G31 программист программирует линейную интерполяцию, аналогично G01, но скомбинированную с возможной реакцией на внешний сигнал. Внешний сигнал подается при нажатии на определенную клавишу панели УЧПУ, например, на клавишу “Старт цикла”."
  },
  {
    "code": "G33",
    "name": "Нарезание резьбы",
    "description": ""
  },
  {
    "code": "G37",
    "name": "Автоматическое измерение длины инструмента",
    "description": ""
  },
  {
    "code": "G39",
    "name": "Круговая интерполяция угловой коррекции",
    "description": ""
  },
  {
    "code": "G40",
    "name": "Отмена коррекции на режущий инструмент/отмена трехмерной коррекции",
    "description": "Автоматическая коррекция радиуса инструмента отменяется программированием команд G40 и D00. Обычно код G40 находится в кадре с командой прямолинейного холостого перемещения от контура детали."
  },
  {
    "code": "G41",
    "name": "Коррекция на режущий инструмент слева /трехмерная коррекция",
    "description": "Код G41 применяется для включения автоматической коррекции радиуса инструмента находящегося слева от детали. Направление смещения определяется, если смотреть на траекторию сверху вниз, то есть со стороны “+Z” в направлении ”–Z”."
  },
  {
    "code": "G42",
    "name": "Коррекция на резец справа",
    "description": "Код G42 применяется для включения автоматической коррекции радиуса инструмента находящегося справа от детали. Направление смещения определяется, если смотреть на траекторию сверху вниз, то есть со стороны “+Z” в направлении ”–Z”."
  },
  {
    "code": "G43",
    "name": "Коррекция на длину инструмента «+» направление",
    "description": "Компенсация длины инструмента осуществляется путем программирования команды G43 и H слова данных. Обычно компенсация длины активируется совместно с холостым перемещением по оси Z."
  },
  {
    "code": "G44",
    "name": "Коррекция на длину инструмента «-» направление",
    "description": ""
  },
  {
    "code": "G45",
    "name": "Увеличение коррекции на инструмент",
    "description": ""
  },
  {
    "code": "G46",
    "name": "Уменьшение коррекции на инструмент",
    "description": ""
  },
  {
    "code": "G47",
    "name": "Двойное увеличение коррекции на инструмент",
    "description": ""
  },
  {
    "code": "G48",
    "name": "Двойное уменьшение коррекции на инструмент",
    "description": ""
  },
  {
    "code": "G49",
    "name": "Отмена коррекции на длину инструмента",
    "description": "Компенсация длины инструмента отменяется путем программирования команды G49 или H00."
  },
  {
    "code": "G50",
    "name": "Отмена масштабирования",
    "description": "Код G50 предназначен для выключения режима масштабирования G51."
  },
  {
    "code": "G51",
    "name": "Масштабирование",
    "description": "В этом режиме программист может изменять коэффициент масштаба для координатных осей станка. Режим активируется при помощи модального кода G51 и отменяется кодом G50."
  },
  {
    "code": "G50.1",
    "name": "Отмена программируемого зеркального отображения",
    "description": ""
  },
  {
    "code": "G51.1",
    "name": "Программируемое зеркальное отображение",
    "description": ""
  },
  {
    "code": "G52",
    "name": "Установка локальной системы координат",
    "description": "Код G52 используется для определения подчиненной системы координат в пределах действующей рабочей системы (G54-G59)."
  },
  {
    "code": "G53",
    "name": "Установка системы координат станка",
    "description": ""
  },
  {
    "code": "G54-G59",
    "name": "Выбор системы координат заготовки 1, 2, 3,4 ,5,6",
    "description": "При помощи кодов G54, G55, G56, G57, G58 и G59 определяется, в какой рабочей системе координат будет производиться обработка детали."
  },
  {
    "code": "G54.1",
    "name": "Установка дополнительной системы координат заготовки",
    "description": ""
  },
  {
    "code": "G60",
    "name": "Позиционирование в одном направлении",
    "description": "С помощью команды G60 ко всем запрограммированным позициям по каждой оси можно перемещаться из определенного направления (“+” или “-“). Благодаря этому появляется возможность исключить ошибки позиционирования, которые могут возникать из-за мертвого хода в системах сервопривода. Чаще всего, направление и величина перемещения задаются параметрами СЧПУ."
  },
  {
    "code": "G61",
    "name": "Режим точного останова",
    "description": "Команда G61 предназначена для включения режима точного останова. Функция точного останова подробно описана в характеристике кода G09. Единственная разница между кодами G61 и G09 заключается в том, что G09 является немодальной командой, то есть действует только в определенном кадре. Модальный код G61 остается активным, пока не будет запрограммирована команда на изменение этого режима, например, с помощью кода G63 для включения режима нарезания резьбы метчиком или кода G64 режима резания"
  },
  {
    "code": "G62",
    "name": "Автоматическая угловая коррекция",
    "description": ""
  },
  {
    "code": "G63",
    "name": "Режим нарезания резьбы",
    "description": "Режим нарезания резьбы метчиком активируется при помощи кода G63 и используется в циклах нарезания резьбы. В этом режиме невозможна корректировка скорости подачи при помощи специальной рукоятки на панели УЧПУ станка. Режим отменяется программированием команды режима резания G64."
  },
  {
    "code": "G64",
    "name": "Режим резания",
    "description": "Стандартный режим резания активируется кодом G64. С помощью этого кода отменяются другие специальные режимы - режим нарезания резьбы метчиком и режим точного останова"
  },
  {
    "code": "G65",
    "name": "Вызов макропрограммы",
    "description": "Код G65 позволяет выполнить макропрограмму, находящуюся в памяти СЧПУ."
  },
  {
    "code": "G66",
    "name": "Модальный вызов макропрограммы",
    "description": "Команда G66 предназначена для вызова макропрограммы, как и команда G65. Единственная разница между двумя этими кодами заключается в том, что G66 является модальным кодом и макропрограмма выполняется при каждом перемещении, пока не будет запрограммирована команда G67."
  },
  {
    "code": "G67",
    "name": "Отмена модального вызова макропрограммы",
    "description": "При помощи кода G67 отменяется режим модального вызова макропрограммы G66."
  },
  {
    "code": "G68",
    "name": "Поворот координат/трехмерное преобразование координат",
    "description": "Модальная команда G68 позволяет выполнить поворот координатной системы на определенный угол. Для выполнения такого поворота требуется указать плоскость вращения, центр вращения и угол поворота."
  },
  {
    "code": "G69",
    "name": "Отмена поворота координат/отмена трехмерного преобразования координат",
    "description": "При помощи кода G69 отменяется режим вращения координат."
  },
  {
    "code": "G73",
    "name": "Цикл сверления с периодическим выводом сверла",
    "description": ""
  },
  {
    "code": "G74",
    "name": "Цикл встречного нарезания резьбы",
    "description": "G74 Цикл нарезания левой резьбы."
  },
  {
    "code": "G76",
    "name": "Цикл чистового растачивания",
    "description": ""
  },
  {
    "code": "G80",
    "name": "Отмена постоянного цикла/отмена функции внешней операции",
    "description": ""
  },
  {
    "code": "G81",
    "name": "Цикл сверления, цикл засверливания или функция внешней операции",
    "description": "G81 Стандартный цикл сверления"
  },
  {
    "code": "G82",
    "name": "Цикл сверления или цикл встречного растачивания",
    "description": "Цикл сверления с выдержкой вызывается при помощи команды G82. Функционирует этот цикл аналогично стандартному циклу сверления, с единственной разницей в том, что при G82 на дне отверстия запрограммировано время ожидания (выдержка). Цикл сверления с выдержкой часто применяется для сверления глухих отверстий, так как запрограммированное время ожидания позволяет выполнить лучшее удаление стружки со дна отверстия."
  },
  {
    "code": "G83",
    "name": "Цикл сверления с периодическим выводом сверла",
    "description": "G83 Цикл прерывистого сверления"
  },
  {
    "code": "G84",
    "name": "Цикл нарезания резьбы",
    "description": ""
  },
  {
    "code": "G85",
    "name": "Цикл растачивания",
    "description": ""
  },
  {
    "code": "G86",
    "name": "Цикл растачивания",
    "description": ""
  },
  {
    "code": "G87",
    "name": "Цикл обратного растачивания",
    "description": ""
  },
  {
    "code": "G88",
    "name": "Цикл растачивания",
    "description": ""
  },
  {
    "code": "G89",
    "name": "Цикл растачивания",
    "description": ""
  },
  {
    "code": "G90",
    "name": "Команда абсолютного перемещения",
    "description": "В режиме абсолютного позиционирования G90 перемещения исполнительных органов производятся относительно нулевой точки станка или относительно нулевой точки рабочей системы координат G54-G59. Код G90 является модальным и отменяется при помощи кода относительного позиционирования G91."
  },
  {
    "code": "G91",
    "name": "Инкрементная команда",
    "description": "При помощи кода G91 активируется режим относительного (инкрементального) позиционирования. При относительном способе отсчета за нулевое положение каждый раз принимается положение исполнительного органа, которое он занимал перед началом перемещения к следующей опорной точке."
  },
  {
    "code": "G92",
    "name": "Установка для рабочей системы координат или зажим при максимальной скорости шпинделя.",
    "description": ""
  },
  {
    "code": "G92.1",
    "name": "Предварительная установка системы координат заготовки",
    "description": "Код G92.1 используют для сдвига текущего положения нулевой точки путем изменения значений в регистрах рабочих смещений. Когда СЧПУ выполнит команду G92, то значения в регистрах смещений изменятся и станут равными значениям, которые определены X, Y и Z словами данных"
  },
  {
    "code": "G94",
    "name": "Подача за минуту",
    "description": "При помощи команды G94 указанная скорость подачи устанавливается в дюймах за 1 минуту или в миллиметрах за 1 минуту. Если действует дюймовый режим G20, то скорость подачи F определяется как подача в дюймах за 1 минуту. Если же активен метрический режим G21, то скорость подачи F определяется как подача в миллиметрах за 1 минуту."
  },
  {
    "code": "G95",
    "name": "Подача за оборот",
    "description": "При помощи команды G95 указанная скорость подачи устанавливается в дюймах на 1 оборот шпинделя или в миллиметрах на 1 оборот шпинделя. То есть скорость подачи F синхронизируется со скоростью вращения шпинделя S. При одном и том же значении F, скорость подачи будет увеличиваться, при увеличении числа оборотов шпинделя."
  },
  {
    "code": "G96",
    "name": "Постоянное управление скоростью перемещения поверхности.",
    "description": ""
  },
  {
    "code": "G97",
    "name": "Отмена контроля постоянства скорости резания",
    "description": ""
  },
  {
    "code": "G98",
    "name": "Возврат к исходной точке в постоянном цикле",
    "description": "Если постоянный цикл станка работает совместно с кодом G98, то инструмент возвращается к исходной плоскости в конце каждого цикла и между всеми обрабатываемыми отверстиями. Исходная плоскость – это координата по оси Z (уровень), в которой находится инструмент перед вызовом постоянного цикла. Команда G98 отменяется при помощи команды G99."
  },
  {
    "code": "G99",
    "name": "Возврат к точке R в постоянном цикле",
    "description": "Если цикл сверления работает совместно с кодом G99, то инструмент возвращается к плоскости отвода между всеми обрабатываемыми отверстиями. Плоскость отвода – это координата по оси Z (уровень), с которой начинается сверление на рабочей подаче, и в которую возвращается инструмент, после того, как он достиг дна обрабатываемого отверстия. Плоскость отвода обычно устанавливается в кадре цикла с помощью R слова данных. Команда G99 отменяется при помощи команды G98."
  }
];