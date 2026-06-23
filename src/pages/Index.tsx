import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const menu = [
  { cat: 'Завтраки', items: [
    { name: 'Сырники с малиной', desc: 'нежные, на топлёном масле', price: '480' },
    { name: 'Шакшука по-неаполитански', desc: 'томаты, перец, два яйца', price: '590' },
    { name: 'Гранола с йогуртом', desc: 'мёд, орехи, сезонные ягоды', price: '420' },
  ]},
  { cat: 'Паста', items: [
    { name: 'Качо э пепе', desc: 'пекорино, чёрный перец', price: '720' },
    { name: 'Тальятелле с рагу', desc: 'говядина 6 часов томления', price: '890' },
    { name: 'Равиоли с тыквой', desc: 'шалфей, бурата', price: '760' },
  ]},
  { cat: 'Кофе и десерты', items: [
    { name: 'Фисташковый тирамису', desc: 'фирменный рецепт Miuccia', price: '460' },
    { name: 'Флэт уайт', desc: 'обжарка недели', price: '290' },
    { name: 'Какао на меду', desc: 'тёмный шоколад 70%', price: '320' },
  ]},
];

const gallery = [
  'https://cdn.poehali.dev/projects/9ff283e3-51ca-49bc-9ebc-c0bbe623a8a8/files/7fb28ef9-cba8-44f8-a3c2-00118edaf890.jpg',
  'https://cdn.poehali.dev/projects/9ff283e3-51ca-49bc-9ebc-c0bbe623a8a8/files/bb637bc8-d0ac-4041-a298-e0fb0984c9ca.jpg',
];

const Index = () => {
  return (
    <div className="min-h-screen bg-miuccia-cream text-miuccia-ink overflow-x-hidden md:px-12">
      {/* Окантовка-ромб по всему периметру */}
      <div className="border-harlequin border-harlequin-left hidden md:block" />
      <div className="border-harlequin border-harlequin-right hidden md:block" />
      <div className="border-harlequin-top hidden md:block" />
      <div className="border-harlequin-bottom hidden md:block" />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b-2 border-miuccia-ink bg-miuccia-cream/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-display text-3xl font-bold tracking-tight">Miuccia</a>
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em]">
            <a href="#menu" className="hover:text-miuccia-red transition-colors">Меню</a>
            <a href="#about" className="hover:text-miuccia-red transition-colors">О нас</a>
            <a href="#gallery" className="hover:text-miuccia-red transition-colors">Интерьер</a>
            <a href="#contact" className="hover:text-miuccia-red transition-colors">Контакты</a>
          </nav>
          <Button className="bg-miuccia-red hover:bg-miuccia-ink text-white rounded-none uppercase tracking-widest text-xs h-10 px-5">
            Бронь
          </Button>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="bg-miuccia-ink text-miuccia-cream py-2 overflow-hidden border-b-2 border-miuccia-ink">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center text-sm uppercase tracking-[0.3em]">
              {['Свежая паста каждое утро','Авторский кофе','Атмосфера маленькой Италии','Завтраки до 14:00'].map((t) => (
                <span key={t} className="flex items-center">
                  <span className="px-6">{t}</span>
                  <span className="text-miuccia-red">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section id="hero" className="relative">
        <div className="absolute inset-0 pattern-grid opacity-90" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <p className="text-miuccia-cream uppercase tracking-[0.4em] text-xs mb-5">Кафе · с 2014 года</p>
            <h1 className="font-display text-white text-6xl md:text-8xl leading-[0.9] font-bold">
              Вкус<br/>
              <span className="italic text-miuccia-beige">маленькой</span><br/>
              Италии
            </h1>
            <p className="mt-7 text-miuccia-cream/90 max-w-md text-lg">
              Уютное кафе в сердце города, где каждое блюдо — это история, а кофе наливают как обнимают.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button className="bg-miuccia-red hover:bg-white hover:text-miuccia-ink text-white rounded-none uppercase tracking-widest h-12 px-8">
                Забронировать столик
              </Button>
              <a href="#menu">
                <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-miuccia-ink rounded-none uppercase tracking-widest h-12 px-8">
                  Смотреть меню
                </Button>
              </a>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -top-5 -left-5 w-28 h-28 pattern-harlequin border-2 border-white z-10 hidden md:block" />
            <img src={gallery[1]} alt="Интерьер Miuccia" className="w-full aspect-[4/5] object-cover border-4 border-white shadow-2xl" />
            <div className="absolute -bottom-6 -right-4 bg-miuccia-red text-white px-6 py-4 border-2 border-white">
              <span className="font-display text-4xl font-bold leading-none">4.9</span>
              <span className="block text-[10px] uppercase tracking-widest mt-1">2 300 отзывов</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-miuccia-beige relative">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="pattern-harlequin h-72 md:h-96 border-4 border-miuccia-ink" />
            <img src={gallery[0]} alt="Блюдо Miuccia" className="absolute -bottom-8 -right-6 w-2/3 aspect-square object-cover border-4 border-miuccia-ink shadow-xl" />
          </div>
          <div>
            <p className="text-miuccia-red uppercase tracking-[0.4em] text-xs mb-4">Наша история</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              Концепция, рождённая на кухне бабушки
            </h2>
            <p className="text-miuccia-ink/80 text-lg mb-4">
              Miuccia началась с одной мечты — перенести тёплую неаполитанскую кухню в наш город.
              Мы готовим пасту вручную каждое утро, обжариваем кофе сами и встречаем гостей как родных.
            </p>
            <p className="text-miuccia-ink/80 text-lg">
              Ромбы, клетка, насыщенный красный — наш визуальный язык, такой же характерный, как и вкус блюд.
            </p>
            <div className="mt-8 flex gap-10">
              <div><span className="font-display text-5xl font-bold text-miuccia-red">12</span><p className="uppercase text-xs tracking-widest mt-1">лет вместе</p></div>
              <div><span className="font-display text-5xl font-bold text-miuccia-red">48</span><p className="uppercase text-xs tracking-widest mt-1">блюд в меню</p></div>
              <div><span className="font-display text-5xl font-bold text-miuccia-red">9</span><p className="uppercase text-xs tracking-widest mt-1">сортов кофе</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 bg-miuccia-ink text-miuccia-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-miuccia-red uppercase tracking-[0.4em] text-xs mb-4">Что мы готовим</p>
            <h2 className="font-display text-6xl md:text-7xl font-bold">Меню</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {menu.map((block) => (
              <div key={block.cat} className="border border-miuccia-cream/20 p-7 hover:border-miuccia-red transition-colors">
                <h3 className="font-display text-3xl font-bold mb-6 text-miuccia-beige flex items-center gap-3">
                  <span className="text-miuccia-red">◆</span>{block.cat}
                </h3>
                <ul className="space-y-5">
                  {block.items.map((it) => (
                    <li key={it.name}>
                      <div className="flex justify-between items-baseline gap-2">
                        <span className="font-medium uppercase tracking-wide text-sm">{it.name}</span>
                        <span className="flex-1 border-b border-dotted border-miuccia-cream/30 mx-1" />
                        <span className="text-miuccia-red font-semibold">{it.price} ₽</span>
                      </div>
                      <p className="text-miuccia-cream/50 text-sm mt-1 italic font-display">{it.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-miuccia-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="font-display text-6xl md:text-7xl font-bold">Атмосфера</h2>
            <p className="text-miuccia-ink/60 max-w-sm">Загляните внутрь — мрамор, тёплый свет и фирменный ромбовый пол.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={gallery[1]} alt="" className="col-span-2 row-span-2 w-full h-full object-cover border-4 border-miuccia-ink aspect-square" />
            <div className="pattern-harlequin aspect-square border-4 border-miuccia-ink" />
            <img src={gallery[0]} alt="" className="w-full aspect-square object-cover border-4 border-miuccia-ink" />
            <div className="pattern-grid aspect-square border-4 border-miuccia-ink" />
            <div className="bg-miuccia-red text-white border-4 border-miuccia-ink aspect-square flex items-center justify-center p-4 text-center">
              <span className="font-display text-2xl font-bold italic">Buon appetito!</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT + RESERVATION */}
      <section id="contact" className="py-24 pattern-grid relative">
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="font-display text-6xl font-bold mb-8">Найти нас</h2>
            <ul className="space-y-6 text-lg">
              <li className="flex items-start gap-4">
                <Icon name="MapPin" className="text-miuccia-beige mt-1" />
                <span>ул. Тверская, 18<br/>Москва</span>
              </li>
              <li className="flex items-start gap-4">
                <Icon name="Clock" className="text-miuccia-beige mt-1" />
                <span>Пн–Пт 08:00–23:00<br/>Сб–Вс 09:00–00:00</span>
              </li>
              <li className="flex items-center gap-4">
                <Icon name="Phone" className="text-miuccia-beige" />
                <span>+7 (495) 123-45-67</span>
              </li>
            </ul>
          </div>
          <div className="bg-miuccia-cream border-4 border-miuccia-ink p-8">
            <h3 className="font-display text-4xl font-bold mb-2">Бронь столика</h3>
            <p className="text-miuccia-ink/60 mb-6 text-sm uppercase tracking-widest">Ответим в течение 15 минут</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Имя" className="rounded-none border-2 border-miuccia-ink bg-white h-12" />
              <Input placeholder="Телефон" className="rounded-none border-2 border-miuccia-ink bg-white h-12" />
              <div className="grid grid-cols-2 gap-4">
                <Input type="date" className="rounded-none border-2 border-miuccia-ink bg-white h-12" />
                <Input type="time" className="rounded-none border-2 border-miuccia-ink bg-white h-12" />
              </div>
              <Input placeholder="Гостей" className="rounded-none border-2 border-miuccia-ink bg-white h-12" />
              <Button className="w-full bg-miuccia-red hover:bg-miuccia-ink text-white rounded-none uppercase tracking-widest h-12">
                Забронировать
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-miuccia-ink text-miuccia-cream py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-3xl font-bold">Miuccia</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-miuccia-red transition-colors"><Icon name="Instagram" /></a>
            <a href="#" className="hover:text-miuccia-red transition-colors"><Icon name="Send" /></a>
            <a href="#" className="hover:text-miuccia-red transition-colors"><Icon name="Facebook" /></a>
          </div>
          <p className="text-miuccia-cream/50 text-sm">© 2026 Miuccia · с любовью к Италии</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;