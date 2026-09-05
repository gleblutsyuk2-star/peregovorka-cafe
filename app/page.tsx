import { ArrowDownRight, ArrowUpRight, Coffee, MapPin, Star } from 'lucide-react';

const drinks = [
  { name: 'Кофе с халвой', note: 'Плотный, мягкий, без сиропов', price: '340 ₽' },
  { name: 'Вишнёвый колд брю', note: 'Кофе и лёгкая ягодная кислинка', price: '390 ₽' },
  { name: 'Лимонная матча', note: 'Цитрус, свежесть и мягкая кислинка', price: '320 ₽' },
  { name: 'Облепиха яблоко мёд', note: 'Тёплый витаминный чай', price: '320 ₽' },
];

const photos = [
  { src: '/images/eclairs.webp', alt: 'Эклеры с кремом и ягодами', label: 'свежая выпечка' },
  { src: '/images/pink-latte.webp', alt: 'Розовый латте и круассан', label: 'напитки с характером' },
  { src: '/images/facade.webp', alt: 'Интерьер кофейни Переговорка', label: 'место для своих' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Переговорка — наверх">
          <span className="brand-mark"><Coffee size={20} strokeWidth={1.8} /></span>
          <span>переговорка</span>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#menu">Меню</a>
          <a href="#about">О месте</a>
          <a href="#gallery">Фото</a>
        </nav>
        <a className="route-link" href="https://yandex.ru/maps/org/peregovorka/182807030250/" target="_blank" rel="noreferrer">
          Как добраться <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Кофе · выпечка · разговоры</p>
          <h1>Есть о чём<br /><em>поговорить</em></h1>
          <p className="lead">
            Небольшая кофейня на Радио, где удобно встретиться,
            выдохнуть между делами и взять любимый кофе с собой.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#menu">Что в меню <ArrowDownRight size={18} /></a>
            <a className="button button-light" href="tel:+79106386396">Позвонить</a>
          </div>
          <div className="hero-meta" aria-label="Краткая информация">
            <div><strong>4,5</strong><span><Star size={14} fill="currentColor" /> 97 оценок</span></div>
            <div><strong>08–18</strong><span>пн — пт</span></div>
            <div><strong>Радио, 24</strong><span>корпус 1</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src="/images/interior.webp" alt="Тёплый интерьер кофейни Переговорка" />
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Особенности кофейни">
        <span>спешелти кофе</span><i>✦</i><span>свежая выпечка</span><i>✦</i><span>с собой</span><i>✦</i><span>без лишнего официоза</span>
      </section>

      <section className="agenda section" id="about">
        <div className="section-heading">
          <p className="eyebrow">Повестка встречи</p>
          <h2>На час на пять минут<br />или до закрытия</h2>
        </div>
        <div className="agenda-grid">
          <article className="agenda-card agenda-card-accent">
            <span>01 / место</span>
            <h3>Сесть у окна</h3>
            <p>Свет, дерево и несколько спокойных мест для разговора или ноутбука.</p>
          </article>
          <article className="agenda-card">
            <span>02 / вкус</span>
            <h3>Попробовать новое</h3>
            <p>Классика и авторские сочетания — от кофе с халвой до лимонной матчи.</p>
          </article>
          <article className="agenda-card agenda-card-photo">
            <img src="/images/coffee-set.webp" alt="Кофе, круассан и десерт на деревянном столе" />
            <span>03 / пауза</span>
            <h3>Не торопиться</h3>
          </article>
        </div>
      </section>

      <section className="menu-section section" id="menu">
        <div className="menu-intro">
          <p className="eyebrow">Выбор бариста</p>
          <h2>С чего начнём</h2>
          <p>Понятные вкусы, сезонные идеи и выпечка, которая хорошо умеет быть поводом для встречи.</p>
          <span className="menu-note">Меню и цены могут меняться</span>
        </div>
        <div className="menu-list">
          {drinks.map((drink, index) => (
            <article className="menu-item" key={drink.name}>
              <span className="menu-index">0{index + 1}</span>
              <div>
                <h3>{drink.name}</h3>
                <p>{drink.note}</p>
              </div>
              <strong>{drink.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section section">
        <div className="quote-score"><span>100%</span><p>положительных отзывов<br />об атмосфере и персонале</p></div>
        <blockquote>«Место, где разговор начинается ещё до первого глотка»</blockquote>
      </section>

      <section className="gallery section" id="gallery">
        <div className="section-heading horizontal-heading">
          <div>
            <p className="eyebrow">В деталях</p>
            <h2>Атмосфера<br />Переговорки</h2>
          </div>
          <p>Тёплый свет, дерево, кофе и выпечка — всё, что нужно, чтобы ненадолго выключить шум города.</p>
        </div>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <figure key={photo.src} className={`photo photo-${index + 1}`}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="visit section" id="visit">
        <div className="visit-copy">
          <p className="eyebrow">Назначить встречу</p>
          <h2>Москва<br />улица Радио 24<br />корпус 1</h2>
          <p><MapPin size={18} /> 1,45 км от метро «Бауманская»</p>
        </div>
        <div className="visit-card">
          <div><span>Будни</span><strong>08:00 — 18:00</strong></div>
          <div><span>Телефон</span><a href="tel:+79106386396">+7 910 638-63-96</a></div>
          <a className="button button-rust" href="https://yandex.ru/maps/org/peregovorka/182807030250/" target="_blank" rel="noreferrer">
            Построить маршрут <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><Coffee size={20} /></span><span>переговорка</span></a>
        <p>Кофе, с которого начинается разговор.</p>
        <span>Фото: карточка организации на Яндекс Картах</span>
      </footer>
    </main>
  );
}
