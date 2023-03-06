import React, { useRef } from "react";
import raseArr from "../../mockData/campfire.json";
import { IClass } from "../../Types/Types";

interface IClassItem {
  // characterClass: IClass;
  setCharacterClass: (v: string) => void;
  active: boolean;
  onToggle: () => void;
}
/**
 *
 * ячейка выбора класса Варвар
 */
export function ClassBarbarian({
  setCharacterClass,
  active,
  onToggle,
}: IClassItem) {
  const contentEl = useRef<HTMLDivElement>(null);

  const openItemHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setCharacterClass("Barbarian");
  };

  return (
    <div className="class__item">
      <div className="class-item__heading" onClick={onToggle}>
        <span
          className={`class-item__span ${
            active ? "class-item__span_active" : ""
          } `}
        />
        <h3 className="class-item__title">Варвар</h3>
        <button className="class-item__submit-button" onClick={openItemHandler}>
          Выбрать
        </button>
      </div>
      <div
        className="class-item__body"
        style={
          active
            ? { height: contentEl.current?.scrollHeight, marginTop: "10px" }
            : { height: "0px", marginTop: "0" }
        }
        ref={contentEl}
      >
        <p className="class-item__text">Описание</p>
        <p className="class-item__text">
          Несмотря на разнообразие, всех варваров объединяет одно — их ярость.
          Для каждого варвара ярость — это источник не только боевого безумия,
          но и невероятных рефлексов, стойкости, а также непревзойдённой силы.
        </p>
        <p className="class-item__text">Совет</p>
        <p className="class-item__text">
          Во-первых, у вашей Силы должно быть наивысшее значение. Следующим по
          величине должно быть Телосложение.
        </p>

        <p className="class-item__text">Кость хитов</p>
        <p className="class-item__text">1к12 за каждый уровень варвара.</p>

        <p className="class-item__text">Хиты на уровень</p>
        <p className="class-item__text">
          На 1 уровне 12 + модификатор Телосложения и 7 + модификатор
          Телосложения на каждом последующем.
        </p>

        <p className="class-item__text">Доспехи</p>
        <p className="class-item__text">
          Лёгкие доспехи, Средние доспехи и Щиты.
        </p>

        <p className="class-item__text">Оружие</p>
        <p className="class-item__text">Простое оружие, воинское оружие.</p>

        <p className="class-item__text">Навыки</p>
        <p className="class-item__text">
          На старте выберите два навыка из следующих: Атлетика, Восприятие,
          Выживание, Запугивание, Природа, Уход за животными.
        </p>

        <p className="class-item__text">Развитие варвара</p>
        <div className="race-item__abilities">
          <div className="class-item__items">
            <p className="class-item__main-item">Уровень</p>
            <p className="class-item__main-item">
              БМ{" "}
              <span>
                Бонус мастерства - количество очков добавляемых при броске на
                атаку
              </span>{" "}
            </p>
            <p className="class-item__main-item">
              Ярость{" "}
              <span>
                Сколько раз можете впадать в ярость и дополнительный урон при
                атаке
              </span>{" "}
            </p>
            <p className="class-item__main-item">Умения</p>

            <p className="class-item__item">1</p>
            <p className="class-item__item">+2</p>
            <p className="class-item__item">2 (+2)</p>
            <p className="class-item__item">Защита без доспехов, Ярость</p>

            <p className="class-item__item">2</p>
            <p className="class-item__item">+2</p>
            <p className="class-item__item">2 (+2)</p>
            <p className="class-item__item">
              Безрассудная атака, Чувство опасности
            </p>

            <p className="class-item__item">3</p>
            <p className="class-item__item">+2</p>
            <p className="class-item__item">3 (+2)</p>
            <p className="class-item__item">Путь дикости</p>

            <p className="class-item__item">4</p>
            <p className="class-item__item">+2</p>
            <p className="class-item__item">3 (+2)</p>
            <p className="class-item__item">Увеличение характеристик</p>

            <p className="class-item__item">5</p>
            <p className="class-item__item">+3</p>
            <p className="class-item__item">3 (+2)</p>
            <p className="class-item__item">
              Быстрое передвижение, Дополнительная атака
            </p>
            {/* <div>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">1</p> */}
          </div>
        </div>
        <p className="class-item__text">Умения</p>
        <div className="race-item__items">
          <div>
            <p className="race-item__item">Защита без доспехов</p>
            <p className="race-item__item">Доступно с 1 уровня</p>
          </div>
          <p className="race-item__item">
            Если Вы не носите доспехов, Ваш Класс Доспеха равен 10 + модификатор
            Ловкости + модификатор Телосложения. Вы можете использовать щит, не
            теряя этого преимущества.
          </p>

          <div>
            <p className="race-item__item">Ярость</p>
            <p className="race-item__item">Доступно с 1 уровня</p>
          </div>
          <p className="race-item__item">
            В свой ход Вы можете бонусным действием войти в состояние Ярости и
            получить преимущества, если не носите тяжёлую броню (преимущество в
            проверках и испытаниях Силы, в рукопашной атаке оружием, используя
            Силу, бонус к броску урона (+2 с 1 по 9 уровень), сопротивление
            дробящему, колющему и рубящему урону. Ярость длится 1 минуту и
            прекращается раньше, если потеряли сознание, закончили ход, не
            атаковав враждебное по отношению к Вам существо с момента окончания
            прошлого хода, или если с момента окончания прошлого хода не
            получили урон. Также Вы можете прекратить свою Ярость бонусным
            действием. Если Вы впадали в состояние ярости максимальное для
            Вашего уровня количество раз (2 раза на 1-2 уровне, 3 раза на 3-5
            уровне и 4 раза на 6-11 уровне), то требуется совершить длинный
            отдых, прежде чем сможете использовать Ярость ещё раз.
          </p>

          <div>
            <p className="race-item__item">Безрассудная атака</p>
            <p className="race-item__item">Доступно с 2 уровня</p>
          </div>
          <p className="race-item__item">
            Способность отбросить любую заботу о защите, чтобы атаковать
            ожесточённо и безрассудно. Когда Вы совершаете первую атаку в свой
            ход, Вы можете решить, что будете атаковать безрассудно. Решившись
            на это, Вы в этом ходу совершаете рукопашные атаки оружием,
            использующие Силу, с преимуществом, но все броски атаки по Вам до
            Вашего следующего хода тоже совершаются с преимуществом.
          </p>

          <div>
            <p className="race-item__item">Чувство опасности</p>
            <p className="race-item__item">Доступно с 2 уровня</p>
          </div>
          <p className="race-item__item">
            Вы получаете обострённое ощущение происходящего вокруг, помогающее
            Вам избегать опасности. Вы совершаете с преимуществом испытания
            Ловкости от эффектов, которые Вы можете видеть, такие как заклинания
            и ловушки. Для использования этого преимущества Вы не должны быть
            ослеплены, оглушены и не должны быть недееспособны
          </p>

          <div>
            <p className="race-item__item">Путь дикости</p>
            <p className="race-item__item">Доступно с 3 уровня</p>
          </div>
          <p className="race-item__item">
            Вы выбираете путь, определяющий природу Вашей ярости.
          </p>

          <div>
            <p className="race-item__item">Первобытное знание</p>
            <p className="race-item__item">Доступно с 3 уровня</p>
          </div>
          <p className="race-item__item">
            Вы получаете владение одним дополнительным навыком по выбору из
            навыков, доступных для выбора варвару на 1 уровне
          </p>

          <div>
            <p className="race-item__item">Увеличение характеристик</p>
            <p className="race-item__item">Доступно с 4 уровня</p>
          </div>
          <p className="race-item__item">
            Вы можете повысить значение одной из Ваших характеристик на 2 или
            двух характеристик на 1. Как обычно, значение характеристики при
            этом не должно превысить 20.
          </p>

          <div>
            <p className="race-item__item">Быстрое передвижение</p>
            <p className="race-item__item">Доступно с 5 уровня</p>
          </div>
          <p className="race-item__item">
            Ваша скорость передвижения увеличивается на 10 футов, если Вы не
            носите тяжёлые доспехи
          </p>

          <div>
            <p className="race-item__item">Дополнительная атака</p>
            <p className="race-item__item">Доступно с 5 уровня</p>
          </div>
          <p className="race-item__item">
            Если в свой ход совершаете действие Атака, то можете совершить две
            атаки вместо одной
          </p>
        </div>

        <p className="class-item__text">Пути дикости</p>
        <div className="class-item__abilities">
          <p className="race-item__item">Путь берсерка</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Для некоторых варваров ярость это способ достижения цели, и этой
              целью является насилие. Путь берсерка это путь, залитый кровью,
              путь несдерживаемой ярости. Впадая в ярость берсерка, вы бросаете
              себя в хаос боя, не заботясь более о собственном здоровье.
            </p>
            <div>
              <p className="race-item__item">Бешенство</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Находясь в состоянии Ярости, Вы можете впасть в Бешенство. В этом
              случае, пока Ваша Ярость не прекратилась, Вы можете в каждый свой
              ход после текущего совершать бонусным действием одну рукопашную
              атаку оружием. После окончания Ярости Вы получаете один уровень
              усталости
            </p>
            <div>
              <p className="race-item__item">Бездумная ярость</p>
              <p className="race-item__item">Доступно с 6 уровня</p>
            </div>
            <p className="race-item__item">
              Вы не можете быть испуганы или очарованы, пока находитесь в
              состоянии Ярости. Если Вы были испуганы или очарованы до того, как
              впали в состояние Ярости, эти эффекты приостанавливаются до
              окончания Вашей Ярости.
            </p>
          </div>

          <p className="race-item__item">Путь тотемного воина</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Путь тотемного воина — духовный путь, в котором дух зверя
              становится для варвара наставником, защитником и вдохновителем. В
              бою дух тотема дарует вам сверхъестественную мощь, наполняя вашу
              ярость магической силой. Большинство варварских племён связывают
              свои кланы с конкретными духами-покровителями, и иметь несколько
              тотемных духов считается необычным, хотя такие исключения и
              случаются. Доступны тотемы Волка, Медведя, Орла, а также Лося и
              Тигра (последние два из Sword Coast Adventurer’s Guide).
            </p>
            <div>
              <p className="race-item__item">Искатель духов</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Ваш путь, тесно связанный с дикой природой, даёт Вам близость с
              животными. Вы получаете возможность использовать заклинания
              Животные чувства и Разговор с животными, но только в виде
              ритуалов.
            </p>
            <div>
              <p className="race-item__item">Тотемный дух</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Вы выбираете своего тотемного духа, и получаете его умения. Вы
              должны сделать или приобрести тотем: физический предмет (амулет
              или похожее украшение), содержащий мех или кожу, перья, когти,
              зубы или кости тотемного животного. Если хотите, можете приобрести
              незначительные физические изменения, напоминающие Ваше тотемное
              животное. Например, если Вашим тотемным животным является медведь,
              Вы можете получить необычную волосатость и толстокожесть, а если
              это орёл, то Ваши глаза могут приобрести ярко-жёлтый цвет.
              <span>Волк</span>
              Пока Вы находитесь в состоянии Ярости, Ваши друзья совершают
              броски рукопашных атак по всем враждебным Вам существам,
              находящимся в пределах 5 футов от Вас, с преимуществом. Дух волка
              делает Вас вожаком стаи.
              <span>Медведь</span>В состоянии Ярости Вы получаете сопротивление
              ко всем видам урона, кроме урона психической энергией. Дух медведя
              делает Вас достаточно крепким, чтобы выдержать любое испытание.
              <span>Орёл</span> Когда Вы находитесь в состоянии Ярости и не
              носите тяжёлых доспехов, другие существа совершают провоцированные
              атаки по Вам с помехой. В свой ход Вы можете совершать Рывок
              бонусным действием. Дух орла превращает Вас в хищника, с лёгкостью
              носящегося по полю боя.
              <span>Лось</span>Когда вы находитесь в состоянии ярости и не
              носите тяжёлых доспехов, ваша скорость ходьбы увеличивается на 15
              футов. Дух лося делает вас необычайно подвижным.
              <span>Тигр</span>Пока вы находитесь в ярости, вы можете добавить
              10 футов к дальности вашего прыжка в длину и 3 фута к прыжку в
              высоту. Дух тигра помогает вам набрасываться на врагов.
            </p>
          </div>

          <p className="race-item__item">Путь бушующего в бою</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Называемые на дварфийском языке «Калджарх» (буквально «идиоты
              топора»), бушующие в бою — это последователи богов войны, вставшие
              на Путь Бушующего в Бою. Они специализируются в ношении громоздких
              шипованных доспехов, бросаются в бой, используя тело как оружие, и
              всецело отдаваясь ярости битвы
            </p>
            <div>
              <p className="race-item__item">Доспех бушующего в бою</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Вы получаете возможность использовать шипованный доспех в качестве
              оружия. Пока Вы носите шипованный доспех и находитесь в Ярости, Вы
              можете бонусным действием совершить одну атаку рукопашным оружием
              по цели в 5 футах от Вас, используя шипы на броне. Если атака
              попадает, шипы наносят 1к4 колющего урона. Используйте модификатор
              Силы для совершения атаки и броска урона. Кроме того, когда Вы
              используете действие Атака, чтобы схватить существо, цель получает
              3 колющего урона, если проверка захвата была успешной.
            </p>
            <div>
              <p className="race-item__item">Полное безрассудство</p>
              <p className="race-item__item">Доступно с 6 уровня</p>
            </div>
            <p className="race-item__item">
              Когда Вы используете Безрассудную атаку во время Ярости, Вы также
              получаете временные хиты равные модификатору Телосложения (минимум
              1). Оставшиеся после окончания Ярости временные хиты исчезают.
            </p>
          </div>

          <p className="race-item__item">Путь буревестника</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Все варвары прячут свою ярость внутри. Их гнев дает им их
              превосходную силу, выносливость и скорость. Варвары, следующие по
              Пути Буревестника, учатся трансформировать эту ярость в покров
              первобытной магии, который кружится вокруг них. Будучи в ярости,
              варвары этого пути используют силы природы для создания
              могущественных магических эффектов.
            </p>
            <div>
              <p className="race-item__item">Аура бури</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Вы излучаете штормовую магическую ауру во время ярости. Аура
              распространяется от вас на 10 футов во всех направлениях, но не
              через полные укрытия. У вашей ауры есть эффект, который
              активируется когда вы входите в ярость, и вы можете активировать
              эффект снова в каждый свой ход бонусным действием. Выберите
              пустыню, море или тундру. Ваш эффект ауры зависит от выбранной
              среды как описано ниже. Вы можете сменить выбор окружения когда
              получаете уровень в этом классе. Если эффект вашей ауры требует
              спасброска, Сл равна 8 + ваш бонус мастерства + ваш модификатор
              Телосложения.
              <span>Пустыня</span>Когда активируется этот эффект, все остальные
              существа в вашей ауре получают 2 урона огнём каждое. Урон
              увеличивается когда вы достигаете определенных уровней в этом
              классе: до 3 на 5-м уровне, 4 на 10-м уровне, 5 на 15-м уровне и 6
              на 20-м уровне.
              <span>Море</span>Когда активируется этот эффект, вы можете выбрать
              любое другое существо, которое можете видеть в пределах действия
              вашей ауры. Цель должна совершить спасбросок Ловкости. Цель
              получает 1к6 урона электричеством при провале или половину урона
              при успехе. Урон увеличивается когда вы достигаете определенных
              уровней в этом классе: до 2к6 на 10-м уровне, 3к6 на 15-м уровне,
              и 4к6 на 20-м уровне. <span>Тундра</span>Когда активируется этот
              эффект, каждое существо по вашему выбору в пределах действия вашей
              ауры получает 2 временных хита, так как ледяные духи делают их
              менее чувствительными к страданиям. Количество временных хитов
              увеличивается, когда вы достигаете определенных уровней в этом
              классе: до 3 на 5-м уровне, 4 на 10-м уровне, 5 на 15-м уровне и 6
              на 20-м уровне.
            </p>
          </div>

          <p className="race-item__item">Путь предка хранителя</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Варвары, которые призывают своих предков-хранителей, могут лучше
              защитить своё племя и своих союзников. Чтобы укрепить связь со
              своими стражами предками, варвары, которые следуют этому пути,
              покрывают себя детально проработанными татуировками, которые
              отмечают дела их предков. Эти татуировки рассказывают саги о
              победах над ужасными монстрами или другими страшными противниками.
            </p>
            <div>
              <p className="race-item__item">Древние защитники</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Когда Вы впадаете в Ярость, появляются призрачные воины. Пока Вы в
              Ярости, первое существо, по которому Вы попадаете атакой в свой
              ход, становится целью воинов, которые мешают его атакам. До начала
              Вашего следующего хода цель получает помеху на все атаки, которые
              не направлены на Вас. А когда цель попадает по существу, отличному
              от Вас атакой, у того существа появляется сопротивление урону,
              наносимому атакой. Эффект на цели заканчивается раньше, если
              заканчивается Ваша Ярость.
            </p>
            <div>
              <p className="race-item__item">Щит предков</p>
              <p className="race-item__item">Доступно с 6 уровня</p>
            </div>
            <p className="race-item__item">
              Духи-защитники могут дать защиту тем, кого Вы защищаете. Если Вы в
              Ярости и другое видимое Вами в пределах 30 футов существо получает
              урон, Вы можете реакцией уменьшить этот урон на 2к6.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
