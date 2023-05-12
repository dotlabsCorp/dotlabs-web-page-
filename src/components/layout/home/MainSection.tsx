import Link from "next/link";

import Socials from "@/components/Socials";
import { BackgroundGradient } from "@/components/common/BackgroundGradient";

export const MainSection = () => {
  return (
    <>
      <BackgroundGradient />
      <div className="homepage homepage__container">
        <h1 className="homepage__title">
          <span>{"{"}</span>
          {"knowledge"}
          <span>{"}"}</span>&nbsp;= dotlabs()
        </h1>
        <p className="homepage__copy">
          Impulsamos el desarrollo y la adopción de blockchain a través de la
          enseñanza, la investigación y la creación de proyectos. <br />
          <span>
            Queremos que la tecnología blockchain sea accesible para todos.
          </span>
        </p>

        <div className="homepage__btn--container">
          <Link href="/talleres" className="homepage__btn homepage__btn--white">
            Talleres
          </Link>
          <a
            href="https://discord.gg/5a6V3tnXpW"
            target="_blank"
            rel="noreferrer"
            className="homepage__btn homepage__btn--bordered"
          >
            ¡Únete a la comunidad!
          </a>
        </div>
        <Socials white={true} />
      </div>
    </>
  );
};
