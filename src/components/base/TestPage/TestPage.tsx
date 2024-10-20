import Image from 'next/image';

import { MCounter, MWrap } from '@/components/ui/animateComponents';
import { Button } from '@/components/ui';

import { TestPageProps } from './types';

import styles from './TestPage.module.css';

import TrashIcon from '~/icons/trash.svg';

export const TestPage: React.FC<TestPageProps> = ({ textTest }) => {
  return (
    <>
      <section className={styles.section_pure}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-10 p-10">
            <Button type="primary">Click me!</Button>
            <br />
            <Button type="secondary">Click me!</Button>
            <br />
            <Button type="light">Click me!</Button>
            <br />
            <Button>Click me!</Button>
            <br />

            <Button icon={false}>
              Click me! <TrashIcon width={24} height={24} className="ml-10" />
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section_bg_first}>
        <div className="container">
          <h1 className="mb-20 text-center text-[72px] font-semibold">
            Hello! This is an animation test page!
          </h1>

          <p className="text-center text-[100px] font-bold">
            <span className="visually-hidden">100</span>
            Conter: <MCounter value={100} className="text-indigo-700" />
          </p>

          <p className="mb-10 text-[40px]/[1.2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            dolorem mollitia aspernatur rem dolore ducimus veniam architecto ex
            fugit, repellat deleniti dicta voluptas laboriosam exercitationem
            quibusdam sed unde ipsa impedit? Repudiandae repellendus cum quam
            amet iure tempora quas, repellat, veritatis aliquid nulla ea
            recusandae, officia fuga quod omnis reiciendis nobis.
          </p>

          <p className="mb-20 text-[40px]/[1.2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            dolorem mollitia aspernatur rem dolore ducimus veniam architecto ex
            fugit, repellat deleniti dicta voluptas laboriosam exercitationem
            quibusdam sed unde ipsa impedit? Repudiandae repellendus cum quam
            amet iure tempora quas, repellat, veritatis aliquid nulla ea
            recusandae, officia fuga quod omnis reiciendis nobis.
          </p>

          <div className="flex gap-10">
            <Image
              src="https://picsum.photos/400/600"
              alt="test"
              width={400}
              height={600}
              className="shrink-0"
            />

            <p className="text-[32px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
              voluptatem vitae maxime sunt odit eligendi quis. Pariatur dolor
              veniam doloremque facilis earum modi minus fugiat velit tenetur
              incidunt quos hic eligendi, porro voluptas repudiandae. Itaque
              esse adipisci corrupti culpa. Ratione corrupti ut repudiandae
              inventore qui quasi consequatur repellat cumque veritatis quod
              voluptas eveniet, consequuntur id! Quaerat laboriosam, provident
              quo soluta ipsum nihil, voluptates iure placeat asperiores ex, at
              optio aperiam quis! A doloremque illum quas officia eum doloribus
              atque non, tempora dicta veritatis dolore incidunt laudantium
              necessitatibus numquam, ex voluptatem!
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section_bg_second}>
        <div className="container">
          <h2 className="mb-20 text-center text-[64px] font-semibold">
            Items section
          </h2>

          <MWrap>
            <ul id="list-animation" className="flex flex-wrap gap-5">
              <li className={styles.text_item}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, sequi!
                </p>
              </li>
              <li className={styles.text_item}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos rerum est blanditiis quo ad excepturi dicta labore
                  suscipit. Deserunt, accusamus?
                </p>
              </li>
              <li className={styles.text_item}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Alias dolorum fuga labore fugit quis beatae.
                </p>
              </li>
              <li className={styles.text_item}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia pariatur minus error fugit delectus illo debitis
                  molestias.
                </p>
              </li>
              <li className={styles.text_item}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita adipisci maxime nulla.
                </p>
              </li>
              <li className={styles.text_item}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat, consectetur deserunt impedit aliquid autem reiciendis?
                </p>
              </li>
              <li className={styles.text_item}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam nisi nesciunt sequi ducimus debitis voluptatum
                  porro ab aspernatur? Consequatur?
                </p>
              </li>
              <li className={styles.text_item}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus voluptas laborum laudantium deleniti atque
                  voluptatibus, sapiente saepe.
                </p>
              </li>
              <li className={styles.text_item}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ullam quae debitis esse culpa mollitia.
                </p>
              </li>
              <li className={styles.text_item}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officiis, maxime a.
                </p>
              </li>
              <li className={styles.text_item}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellendus quam cum sint sequi assumenda vitae quo ipsum?
                </p>
              </li>
              <li className={styles.text_item}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Recusandae officiis fugit magnam tenetur quibusdam voluptates
                  accusantium, tempora commodi cum.
                </p>
              </li>
            </ul>
          </MWrap>
        </div>
      </section>

      <section className={styles.section_bg_third}>
        <div className="container">
          <Image
            src="https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA"
            alt="test"
            width={1400}
            height={960}
            className="shrink-0"
          />
        </div>
      </section>

      <section className="text-[100px]">
        <div className="container">{textTest}</div>
      </section>
    </>
  );
};
