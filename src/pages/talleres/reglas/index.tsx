import Layout from "@/components/Layout";
import { BackToHomeButton } from "@/components/buttons/BackToHomeButton";
import styles from "@/styles/components/workshop/rules/rules.module.sass";

function WorkshopsPage() {
  return (
    <Layout headTitle="Talleres">
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <BackToHomeButton />
        </div>
        <h1>Principios y reglas para la asistencia a los eventos</h1>
        <div className={styles.content}>
          <p>
            En nuestro compromiso por fomentar un ambiente seguro, respetuoso e
            inclusivo para todos los participantes de nuestros talleres y
            eventos, hemos establecido las siguientes reglas y normas:
          </p>

          <h2>Principios</h2>

          <ol>
            <li>No se permitirá ningún tipo de violencia basada en género.</li>
            <li>
              No se tolerará el racismo ni el odio hacia grupos étnicos o
              culturales.
            </li>
            <li>No se aceptará la xenofobia.</li>
            <li>No se permitirá el acoso de ningún tipo.</li>
            <li>
              No se tolerará la violencia o la intención de provocar caos.
            </li>
          </ol>

          <h2>Reglas</h2>

          <ol>
            <li>
              Durante las charlas y presentaciones, se debe evitar
              interrupciones a menos que sea para hacer preguntas.
            </li>
            <li>
              No se permitirá realizar actividades que puedan generar
              distracciones o interrupciones.
            </li>
            <li>
              Es responsabilidad de todos los participantes cuidar los objetos y
              espacios donde se desarrollan los eventos, y cualquier daño
              intencional será cobrado.
            </li>
            <li>
              No se tolerará el uso de vocabulario grosero, ofensivo o
              inapropiado, ya que este tipo de lenguaje puede generar un
              ambiente hostil y poco respetuoso.
            </li>
            <li>
              Todos los participantes deben respetar al presentador y centrarse
              en el tema de la charla o presentación, evitando hablar de otros
              temas o actividades que puedan distraer o incomodar a los demás.
            </li>
            <li>
              No se permitirá el ingreso de personas en estado de ebriedad o
              bajo los efectos de sustancias psicoactivas.
            </li>
          </ol>

          <p>
            En dotlabs, valoramos la inclusividad, el trabajo colaborativo y el
            respeto mutuo. Por lo tanto, esperamos que todos los participantes
            sigan estas reglas y normas para crear un ambiente positivo y seguro
            para todos. Cualquier violación a estas normas se tomará como
            justificación para la expulsión del espacio compartido.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default WorkshopsPage;
