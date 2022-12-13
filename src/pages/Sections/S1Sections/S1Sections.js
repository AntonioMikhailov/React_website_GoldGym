import React from 'react'
import img from '../../../data/images'

export default function S1Sections() {
  return (
    <section className="sec-one">
    <div className="container">
      <div className="sec-one__title title-h1">секция кросфит</div>
      <div className="sec-one__line line"></div>
      <div className="sec-one__row">
        <div className="sec-one__left">
          <div className="sec-one__image"><img src={img.section_1_1} alt="фото"/></div>
          <div className="sec-one-l__title title-h1">Кроссфит — с&nbsp;чего начать</div>
          <div className="sec-one__text text-body">Кроссфит завоевывает сердца атлетов по всему миру и в нашей стране в
            том числе. Поклонников кроссфита привлекает универсальность и вариативность функционального тренинга,
            азарт, который присутствует во время выполнения WOD, возможность быстро привести тело в тонус, скинуть
            лишние килограммы и использовать полученные навыки в обыденной жизни.
            <p></p>
            Если вы хотите попробовать себя в crossfit, но не знаете с чего начать, то в этой статье мы дадим
            парочку советов. Лучший способ получить максимум пользы для здоровья от кроссфита – это найти
            квалифицированного тренера. Если же по каким-то причинам вы хотите все делать сами, тогда вкратце введем
            вас в курс дела.
            Итак. Функциональным тренингом могут заниматься люди с разной физической подготовкой. Но, несмотря на
            вашу подготовку или ее отсутствие, первые тренировки всегда должны быть втягивающими. <p></p>
            <span>Что это означает?</span>
            <p></p>
            Так как в кроссфите используют самые разные динамические упражнения и сам комплекс является очень
            интенсивным, вашему телу необходима адаптация к такого рода нагрузкам. Первое что вам придется сделать –
            это подготовить сердце: начать с кардио. С нагрузкой для сердца не стоит спешить, поэтому кардио
            тренировкам уделите особое внимание. В этом вопросе очень полезен пульсометр. С ним в процессе занятия
            вы сможете отслеживать пульс и вовремя делать передышку. Оптимальный пульс во время нагрузок – 130-140
            ударов в минуту. Придерживаясь этого показателя, вы постепенно от тренировки к тренировке увеличиваете
            нагрузку. <p></p> Через какое-то время вы увидите, что готовы работать в данном диапазоне с большей
            интенсивностью. Это хороший показатель вашего физического роста. Понятное дело, что, придя на тренировки
            по кроссфиту, вам сразу хочется большего, чем просто тренить на гребном тренажере, беговой дорожке или
            велотренажере, поэтому для разнообразия включайте в тренировочный процесс гимнастические упражнения.
          </div>
          <div className="sec-one__l_priceRow">
            <div className="sec-one__priceRow__left"><img src={img.section_1_3} alt="фото"/></div>
            <div className="sec-one__priceRow__right">
              <div className="sec-one-priceRow-r__title title-h2">Тарифы</div>
              <ul className="sec-one-priceRow-r__list">
                <li>1-4 занятий в месяц <span>500</span> </li>
                <li>5-10 занятий в месяц <span>400</span> </li>
                <li>10-30 занятий в месяц <span>300</span> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sec-one__right">
          <div className="sec-one-r__image"><img src={img.section_1_2} alt="фото"/></div>
          <div className="sec-one-r__title title-h2">тренер по кроссфит</div>
          <div className="sec-one-r__subtitle">юрий садальский</div>
          <div className="sec-one-r__text text-body">Приступая к круговым тренировкам, вы должны понимать, что кроссфит
            – это мощные и высокоинтенсивные нагрузки. Многие упражнения требуют владения сложной техникой, такой
            как рывки, толчки, кольца. Неподготовленному человеку надо очень аккуратно начинать свои тренировки,
            обязательно под присмотром врача и тренера. Нужно понимать, что максимально эффективно тренировать
            различные физические качества одновременно физиологически невозможно. Правильно распределенные нагрузки
            – это и есть прекрасная физическая подготовка и крепкое здоровье.
            <p></p>
            Перед началом выполнения сложных функциональных кроссфит-комплексов в спортивном зале или фитнес-клубе,
            можно начать с простейших упражнений в домашних условиях. Я подготовил для вас эффективный комплекс,
            который не отнимает много времени.
            <p></p>
            Комплекс включает пять упражнений, которые можно выполнять по очереди в 3-4 подходах по 12-15 повторений
            или подряд без остановки в режиме круговой тренировки.</div>
        </div>
      </div>
    </div>
  </section>
  )
}
