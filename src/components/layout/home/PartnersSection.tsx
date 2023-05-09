import PlatohedroLogo from "../../../../public/assets/partners/logo-platohedro.png";
import HashHouseLogo from "../../../../public/assets/partners/logo-hashhouse.png";
import Image from "next/image";

export const PartnersSection = () => {
  return (
    <div className="homepage homepage__container">
      <div>
        <h1 className="homepage__title">Aliados</h1>
        <p className="homepage__smallText">
          Su aporte en conocimiento, experiencia y oportunidades ha sido clave
          para hacer realidad dotlabs().{" "}
          <span>Gracias por formar parte de nuestra historia.</span>
        </p>
      </div>
      <div className="homepage__partners">
        <a
          className="homepage__partners__item"
          href="https://platohedro.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="homepage__partners__item__img"
            src={PlatohedroLogo}
            width={undefined}
            height={undefined}
            alt="Logo de la Corporación Platohedro"
          />
        </a>
        <a
          className="homepage__partners__item"
          href="https://www.hashhouse.club/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="homepage__partners__item__img"
            src={HashHouseLogo}
            width={undefined}
            height={undefined}
            alt="Logo del club Hash Houses"
          />
        </a>
      </div>
    </div>
  );
};
