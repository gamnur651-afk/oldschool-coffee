// Данные меню Old School Coffee
const menuData = {
  classics: [
    {
      name: "Капучино",
      price: "190 / 240 ₽",
      desc: "Идеальный баланс насыщенного эспрессо и шелковистой молочной пены. 250 / 350 мл.",
      tag: "Хит продаж"
    },
    {
      name: "Флэт Уайт",
      price: "230 ₽",
      desc: "Двойной шот спешелти-эспрессо с тонким слоем бархатистого молока. Для тех, кто ценит кофейный вкус.",
      tag: "Выбор бариста"
    },
    {
      name: "Фильтр-кофе (Batch Brew)",
      price: "180 ₽",
      desc: "Чистый, яркий вкус спешелти-арабики со светлой обжаркой. Меняем сорт зерна каждую неделю.",
      tag: "Specialty"
    },
    {
      name: "Латте Макиато",
      price: "210 / 260 ₽",
      desc: "Нежный, сливочный кофейный напиток с мягким вкусом. 300 / 400 мл.",
      tag: "Нежный вкус"
    },
    {
      name: "Эспрессо / Доппио",
      price: "130 / 170 ₽",
      desc: "Основа всей кофейной карты. Плотное тело, орехово-шоколадный профиль и стойкая крема.",
      tag: "Классика"
    },
    {
      name: "Американо",
      price: "150 / 190 ₽",
      desc: "Эспрессо с добавлением горячей фильтрованной воды. 200 / 300 мл.",
      tag: "Традиции"
    }
  ],
  author: [
    {
      name: "Олдскульный Кедровый Раф",
      price: "290 ₽",
      desc: "Нежные сливки, спешелти-эспрессо, натуральная кедровая паста и дробленый орех.",
      tag: "Фирменный"
    },
    {
      name: "Сырный Латте с солью",
      price: "280 ₽",
      desc: "Сливочный сырный крем, розовая гималайская соль и насыщенный двойной шот.",
      tag: "Авторский"
    },
    {
      name: "Цитрусовый Раф",
      price: "270 ₽",
      desc: "Сливочный раф с натуральной цедрой апельсина и тростниковым сахаром.",
      tag: "Любимое"
    },
    {
      name: "Бамбл (Bumble Coffee)",
      price: "280 ₽",
      desc: "Слоистый освежающий напиток: карамельный сироп, охлажденный апельсиновый фреш и эспрессо.",
      tag: "Cold Brew"
    },
    {
      name: "Лавандовый Раф",
      price: "270 ₽",
      desc: "Мягкий кофейный напиток с деликатным цветочным ароматом крымской лаванды.",
      tag: "Ароматный"
    }
  ],
  tea: [
    {
      name: "Облепиховый чай с розмарином",
      price: "250 ₽",
      desc: "Натуральное облепиховое пюре, веточка свежего розмарина, апельсин и мёд. 500 мл.",
      tag: "Витаминный"
    },
    {
      name: "Матча Латте (Церемониальная)",
      price: "260 ₽",
      desc: "Японский зелёный чай высшего грейда на взбитом овсяном или кокосовом молоке.",
      tag: "Superfood"
    },
    {
      name: "Пряный Глинтвейн (б/а)",
      price: "260 ₽",
      desc: "Вишневый сок, корица, бадьян, гвоздика, дольки апельсина и яблока. Отлично согревает.",
      tag: "Зимний уют"
    },
    {
      name: "Какао с маршмеллоу",
      price: "230 ₽",
      desc: "Густое какао из отборных какао-бобов с пушистой шапкой поджаренного маршмеллоу.",
      tag: "Сладкое"
    }
  ],
  desserts: [
    {
      name: "Чизкейк Сан-Себастьян",
      price: "290 ₽",
      desc: "Обожженный баскский чизкейк с нежнейшей кремовой текстурой внутри и карамельной корочкой.",
      tag: "Must have"
    },
    {
      name: "Миндальный круассан",
      price: "210 ₽",
      desc: "Французский слоеный круассан с щедрой начинкой из миндального франжипана и лепестками миндаля.",
      tag: "Свежая выпечка"
    },
    {
      name: "Брауни с соленой карамелью",
      price: "190 ₽",
      desc: "Тягучий шоколадный брауни из бельгийского тёмного шоколада с домашней солёной карамелью.",
      tag: "Шоколад"
    },
    {
      name: "Сэндвич с индейкой и песто",
      price: "320 ₽",
      desc: "Хрустящая чиабатта, нежное филе индейки, вяленые томаты, сыр моцарелла и соус песто.",
      tag: "Сытный перекус"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Рендер меню
  const menuGrid = document.getElementById("menuGrid");
  const tabButtons = document.querySelectorAll(".tab-btn");

  function renderMenu(category) {
    const items = menuData[category] || [];
    menuGrid.innerHTML = items.map(item => `
      <div class="menu-item-card">
        <div>
          <div class="item-header">
            <h3 class="item-name">${item.name}</h3>
            <span class="item-price">${item.price}</span>
          </div>
          <p class="item-desc">${item.desc}</p>
        </div>
        <div class="item-footer">
          <span class="item-tag">${item.tag}</span>
        </div>
      </div>
    `).join("");
  }

  // Первоначальный рендер
  renderMenu("classics");

  // Переключение вкладок
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderMenu(category);
    });
  });

  // 2. Мобильное меню (бургер)
  const burgerBtn = document.getElementById("burgerBtn");
  const navLinks = document.getElementById("navLinks");

  burgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Закрывать бургер при клике на ссылку
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  // 3. Подсветка активного пункта навигации при скролле
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const navItem = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
      
      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add("active");
        } else {
          navItem.classList.remove("active");
        }
      }
    });
  });
});
