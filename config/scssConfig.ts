// максимальная ширина мобильной версии без учета отступов
const mobile_width = 600;

// отступы слева и справа в мобильной версии
const mobile_gap = 20;

// отступы слева и справа в версии для десктопа
const desktop_gap = 50;

// базовый и самый важный размер ячейки, от него зависит ширина контентного поля
const cell_size = 240;

// Размер контентной aside колонки
const cell_size_large = 300;

// расстояние между ячейками, тоже важный параметр
const cell_gap = 40;

// минимальная ширина контентного поля - это cell_size * 4,
// плюс расстояние между ячейками (cell_gap * 3)
const main_width = cell_size * 4 + cell_gap * 3;

// ширина новостной ленты плюс 18px возможная ширина скролл-бара (с запасом 1px)
const aside_size = 318;

// desktop1 - брейкпоинт. Контентная ширина сайта без вертикальной ленты новостей.
// Это минимальная ширина контентного поля, плюс отступы слева и справа в десктопе,
// плюс 18px возможная ширина скролл-бара (с запасом 1px)
const desktop1 = main_width + desktop_gap * 2 + 18;

// desktop3 - брейкпоинт. Контентная ширина сайта с вертикальной лентой новостей.
// Это минимальная ширина контентного поля, плюс отступы слева и справа в десктопе,
// плюс 18px возможная ширина скролл-бара (с запасом 1px)
let desktop3 = main_width + aside_size + desktop_gap * 2 + 18;

// desktop_content - ширина контентной области без правой колонки с баннером
const desktop_content = main_width - aside_size - cell_gap;

// Дополнительное условие! Даже если ширина с лентой и отступами
// получается меньше 1600, то ленту новостей мы показываем
// только начиная с этого разрешения.
if (main_width + aside_size + desktop_gap * 2 < 1600) {
  desktop3 = 1600;
}

// modal window
// WARNING! it's REM units! not px
const modal_width = 79.9375;
const modal_aside_width = 30;
const modal_outer_horizontal_gap = 8;
const modal_inner_horizontal_gap = 3;
const modal_outer_vertical_gap = 3;
const modal_scroll_width = 1;


const scssConfig = {
  // $envColor: 'yellow',
  // $platform: process.env.PLATFORM_NAME || 'platform2',
  mobile_width,
  mobile_gap,
  desktop_gap,
  cell_size,
  cell_size_large,
  cell_gap,
  main_width,
  aside_size,
  desktop1,
  desktop3,
  desktop_content,
  modal_width,
  modal_aside_width,
  modal_outer_horizontal_gap,
  modal_inner_horizontal_gap,
  modal_scroll_width,
  modal_outer_vertical_gap,
}

export default scssConfig
