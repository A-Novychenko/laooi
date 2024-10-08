import Image from "next/image";
import styles from "./TestPage.module.css";

export const TestPage: React.FC = () => {
  return (
    <>
      <section className={styles.section_bg_first}>
        <div className="container">
          <h1 className="text-[72px] text-center font-semibold mb-20">
            Hello! This is an animation test page!
          </h1>

          <p className="text-[40px]/[1.2] mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            dolorem mollitia aspernatur rem dolore ducimus veniam architecto ex
            fugit, repellat deleniti dicta voluptas laboriosam exercitationem
            quibusdam sed unde ipsa impedit? Repudiandae repellendus cum quam
            amet iure tempora quas, repellat, veritatis aliquid nulla ea
            recusandae, officia fuga quod omnis reiciendis nobis.
          </p>

          <p className="text-[40px]/[1.2] mb-20">
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
          <h2 className="text-[64px] font-semibold text-center mb-20">
            Items section
          </h2>
          <ul className="flex flex-wrap gap-5">
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                dolorum fuga labore fugit quis beatae.
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
                Laboriosam nisi nesciunt sequi ducimus debitis voluptatum porro
                ab aspernatur? Consequatur?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                quae debitis esse culpa mollitia.
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
    </>
  );
};
