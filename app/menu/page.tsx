'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Coffee } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type Category = 'coffee' | 'signature' | 'food' | 'dessert';

type MenuItem = {
  id: string;
  name: string;
  category: Category;
  categoryLabel: string;
  price: number;
  serving: string;
  description: string;
  ingredients: string[];
  image: string;
  position?: string;
};

const filters: Array<{ id: 'all' | Category; label: string }> = [
  { id: 'all', label: 'Всё меню' },
  { id: 'coffee', label: 'Кофе' },
  { id: 'signature', label: 'Авторские напитки' },
  { id: 'food', label: 'Еда' },
  { id: 'dessert', label: 'Десерты' },
];

const menu: MenuItem[] = [
  {
    id: 'espresso',
    name: 'Эспрессо',
    category: 'coffee',
    categoryLabel: 'Кофе',
    price: 190,
    serving: '40 мл',
    description: 'Насыщенный и сладкий шот с шоколадным послевкусием',
    ingredients: ['Эспрессо', 'Вода'],
    image: '/images/menu-coffee.png',
    position: 'left center',
  },
  {
    id: 'americano',
    name: 'Американо',
    category: 'coffee',
    categoryLabel: 'Кофе',
    price: 220,
    serving: '250 мл',
    description: 'Чистый вкус кофе в более лёгкой и долгой чашке',
    ingredients: ['Двойной эспрессо', 'Горячая вода'],
    image: '/images/menu-coffee.png',
    position: 'left center',
  },
  {
    id: 'cappuccino',
    name: 'Капучино',
    category: 'coffee',
    categoryLabel: 'Кофе',
    price: 290,
    serving: '250 мл',
    description: 'Баланс эспрессо и шелковистой молочной текстуры',
    ingredients: ['Эспрессо', 'Молоко'],
    image: '/images/menu-coffee.png',
    position: '25% center',
  },
  {
    id: 'flat-white',
    name: 'Флэт уайт',
    category: 'coffee',
    categoryLabel: 'Кофе',
    price: 320,
    serving: '200 мл',
    description: 'Двойной эспрессо и тонкий слой молочной микропены',
    ingredients: ['Двойной эспрессо', 'Молоко'],
    image: '/images/menu-coffee.png',
    position: '25% center',
  },
  {
    id: 'latte',
    name: 'Латте',
    category: 'coffee',
    categoryLabel: 'Кофе',
    price: 310,
    serving: '350 мл',
    description: 'Мягкий молочный кофе для неспешного разговора',
    ingredients: ['Эспрессо', 'Молоко'],
    image: '/images/coffee-set.webp',
  },
  {
    id: 'filter',
    name: 'Фильтр кофе',
    category: 'coffee',
    categoryLabel: 'Кофе',
    price: 300,
    serving: '300 мл',
    description: 'Сезонное зерно с чистым и выразительным профилем',
    ingredients: ['Кофе светлой обжарки', 'Вода'],
    image: '/images/menu-coffee.png',
    position: 'right center',
  },
  {
    id: 'halva',
    name: 'Кофе с халвой',
    category: 'signature',
    categoryLabel: 'Авторский напиток',
    price: 340,
    serving: '300 мл',
    description: 'Плотный ореховый вкус и натуральная сладость без сиропов',
    ingredients: ['Эспрессо', 'Молоко', 'Халва', 'Кунжут'],
    image: '/images/coffee-set.webp',
  },
  {
    id: 'cherry-cold-brew',
    name: 'Вишнёвый колд брю',
    category: 'signature',
    categoryLabel: 'Авторский напиток',
    price: 390,
    serving: '350 мл',
    description: 'Холодный кофе с сочной ягодной кислинкой',
    ingredients: ['Колд брю', 'Вишнёвый кордиал', 'Содовая', 'Лёд'],
    image: '/images/menu-cold-drinks.png',
    position: '24% center',
  },
  {
    id: 'lemon-matcha',
    name: 'Лимонная матча',
    category: 'signature',
    categoryLabel: 'Авторский напиток',
    price: 320,
    serving: '350 мл',
    description: 'Свежая матча с цитрусом и лёгкой кислинкой',
    ingredients: ['Матча', 'Лимонный кордиал', 'Содовая', 'Лёд'],
    image: '/images/menu-cold-drinks.png',
    position: '78% center',
  },
  {
    id: 'sea-buckthorn-tea',
    name: 'Облепиха яблоко мёд',
    category: 'signature',
    categoryLabel: 'Авторский напиток',
    price: 320,
    serving: '450 мл',
    description: 'Согревающий ягодный чай с мягкой медовой сладостью',
    ingredients: ['Облепиха', 'Яблоко', 'Мёд', 'Апельсин', 'Горячая вода'],
    image: '/images/pink-latte.webp',
  },
  {
    id: 'cocoa',
    name: 'Какао',
    category: 'signature',
    categoryLabel: 'Авторский напиток',
    price: 340,
    serving: '350 мл',
    description: 'Густой шоколадный напиток с нежной пеной',
    ingredients: ['Какао', 'Молоко', 'Тростниковый сахар'],
    image: '/images/pink-latte.webp',
    position: 'center 38%',
  },
  {
    id: 'chicken-croissant',
    name: 'Круассан с курицей',
    category: 'food',
    categoryLabel: 'Еда',
    price: 450,
    serving: '210 г',
    description: 'Сытный хрустящий круассан со свежей зеленью',
    ingredients: ['Круассан', 'Куриное филе', 'Сливочный сыр', 'Томат', 'Салат', 'Горчичный соус'],
    image: '/images/menu-croissant.png',
  },
  {
    id: 'cheese-croissant',
    name: 'Круассан с сыром',
    category: 'food',
    categoryLabel: 'Еда',
    price: 390,
    serving: '180 г',
    description: 'Тёплый круассан с двумя видами сыра и зеленью',
    ingredients: ['Круассан', 'Моцарелла', 'Чеддер', 'Томат', 'Руккола', 'Соус песто'],
    image: '/images/menu-croissant.png',
    position: '56% center',
  },
  {
    id: 'classic-croissant',
    name: 'Классический круассан',
    category: 'food',
    categoryLabel: 'Еда',
    price: 260,
    serving: '90 г',
    description: 'Воздушная слоёная выпечка с хрустящей корочкой',
    ingredients: ['Пшеничная мука', 'Сливочное масло', 'Молоко', 'Яйцо', 'Сахар'],
    image: '/images/coffee-set.webp',
    position: 'center 65%',
  },
  {
    id: 'basque-cheesecake',
    name: 'Баскский чизкейк',
    category: 'dessert',
    categoryLabel: 'Десерт',
    price: 390,
    serving: '130 г',
    description: 'Нежная сливочная середина и карамельная корочка',
    ingredients: ['Творожный сыр', 'Сливки', 'Яйцо', 'Сахар', 'Ваниль'],
    image: '/images/menu-dessert.png',
    position: '28% center',
  },
  {
    id: 'chocolate-cookie',
    name: 'Шоколадное печенье',
    category: 'dessert',
    categoryLabel: 'Десерт',
    price: 230,
    serving: '85 г',
    description: 'Мягкое внутри печенье с шоколадом и ягодным кремом',
    ingredients: ['Пшеничная мука', 'Шоколад', 'Сливочное масло', 'Яйцо', 'Ягодный крем'],
    image: '/images/menu-dessert.png',
    position: '76% center',
  },
  {
    id: 'berry-eclair',
    name: 'Ягодный эклер',
    category: 'dessert',
    categoryLabel: 'Десерт',
    price: 340,
    serving: '110 г',
    description: 'Заварное тесто с лёгким кремом и свежими ягодами',
    ingredients: ['Заварное тесто', 'Сливочный крем', 'Малина', 'Голубика', 'Фисташка'],
    image: '/images/eclairs.webp',
  },
];

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | Category>('all');
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const visibleItems = useMemo(
    () => (activeFilter === 'all' ? menu : menu.filter((item) => item.category === activeFilter)),
    [activeFilter],
  );

  return (
    <main className="catalog-page">
      <header className="site-header catalog-header">
        <a className="brand" href="/" aria-label="Переговорка — главная">
          <span className="brand-mark"><Coffee size={20} strokeWidth={1.8} /></span>
          <span>переговорка</span>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="/">Главная</a>
          <a href="/#about">О месте</a>
          <a href="/#gallery">Фото</a>
        </nav>
        <a className="route-link" href="https://yandex.ru/maps/org/peregovorka/182807030250/" target="_blank" rel="noreferrer">
          Как добраться <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="catalog-intro">
        <div>
          <a className="back-link" href="/"><ArrowLeft size={16} /> На главную</a>
          <p className="eyebrow">Кофе еда десерты</p>
          <h1>Меню</h1>
        </div>
        <p className="catalog-lead">Проверенная классика и несколько поводов попробовать новое</p>
      </section>

      <div className="filter-bar" aria-label="Фильтры меню">
        <div className="filters">
          {filters.map((filter) => (
            <button
              className={`filter-button ${activeFilter === filter.id ? 'is-active' : ''}`}
              key={filter.id}
              type="button"
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <span>{visibleItems.length} позиций</span>
      </div>

      <section className="catalog-grid" aria-live="polite">
        {visibleItems.map((item) => (
          <button className="catalog-card" type="button" key={item.id} onClick={() => setSelected(item)}>
            <span className="catalog-image-wrap">
              <img src={item.image} alt={item.name} style={{ objectPosition: item.position }} />
              <span className="card-category">{item.categoryLabel}</span>
            </span>
            <span className="catalog-card-copy">
              <span className="catalog-card-heading">
                <strong>{item.name}</strong>
                <b>{item.price} ₽</b>
              </span>
              <span>{item.description}</span>
              <small>{item.serving}</small>
            </span>
          </button>
        ))}
      </section>

      <section className="catalog-note">
        <p className="eyebrow">Важно знать</p>
        <h2>Готовим с вниманием</h2>
        <p>Уточняйте наличие и сообщайте бариста об аллергиях перед заказом</p>
        <span>Цены и состав могут меняться</span>
      </section>

      <footer className="catalog-footer">
        <a className="brand footer-brand" href="/"><span className="brand-mark"><Coffee size={20} /></span><span>переговорка</span></a>
        <p>Есть о чём поговорить</p>
        <span>Часть изображений создана специально для портфолио</span>
      </footer>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent className="menu-dialog">
            <div className="dialog-image">
              <img src={selected.image} alt={selected.name} style={{ objectPosition: selected.position }} />
            </div>
            <div className="dialog-copy">
              <DialogHeader>
                <p className="eyebrow">{selected.categoryLabel}</p>
                <DialogTitle>{selected.name}</DialogTitle>
                <DialogDescription>{selected.description}</DialogDescription>
              </DialogHeader>
              <div className="dialog-price"><strong>{selected.price} ₽</strong><span>{selected.serving}</span></div>
              <div className="ingredients">
                <h3>Состав</h3>
                <div>{selected.ingredients.map((ingredient) => <span key={ingredient}>{ingredient}</span>)}</div>
              </div>
              <p className="allergy-note">Возможны следы орехов глютена и молочных продуктов</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}
