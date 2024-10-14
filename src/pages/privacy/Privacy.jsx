import { MainLayout } from "@/components";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { ListItemPrefix } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="container font-alegreya p-4 text-secondary">
        <div>
          <h1 className="text-2xl font-bold">Politicas de privacidad</h1>
          <span className="text-sm text-gray-600">
            Actualizado el 2024-03-02
          </span>
        </div>
        <div>
          <p className="pt-3 text-justify">
            Adatex ("nosotros", "nuestro" o "nos") se compromete a proteger su
            privacidad. Esta Política de privacidad explica cómo Adatex
            recopila, usa y divulga su información personal.
          </p>
          <p className="pt-3 text-justify">
            Esta Política de privacidad se aplica a nuestro sitio web,
            www.adatex.co y sus subdominios asociados (colectivamente, nuestro
            "Servicio") junto con nuestra aplicación, Adatex. Al acceder o
            utilizar nuestro Servicio, usted indica que ha leído, comprendido y
            aceptado nuestra recopilación, almacenamiento, uso y divulgación de
            su información personal como se describe en esta Política de
            privacidad y en nuestros Términos de servicio.
          </p>
        </div>
        <div className="py-4 text-justify">
          <h2 className="text-xl font-bold">Definiciones y Términos Clave</h2>
          <p>
            Para ayudar a explicar las cosas de la manera más clara posible en
            esta Política de privacidad, cada vez que se hace referencia a
            cualquiera de estos términos, se definen estrictamente como:
          </p>
          <ul className="py-4 list-disc px-4">
            <li className="text-wrap py-2">
              <span className="font-bold">Cookie:</span> Pequeña cantidad de
              datos generados por un sitio web y guardados por su navegador web.
              Se utiliza para identificar su navegador, proporcionar análisis,
              recordar información sobre usted, como su preferencia de idioma o
              información de inicio de sesión.
            </li>
            <li className="text-wrap py-2">
              <span className="font-bold">Compañía:</span> Cuando esta política
              menciona "Compañía", "nosotros", "nos" o "nuestro", se refiere a
              Adatex (Calle 11 # 31A - 14 Yumbo), que es responsable de su
              información en virtud de esta Política de privacidad.
            </li>
            <li className="text-wrap py-2">
              <span className="font-bold">Plataforma:</span> Sitio web de
              Internet, aplicación web o aplicación digital de cara al público
              de Adatex.
            </li>
            <li className="text-wrap py-2">
              <span className="font-bold">País:</span> Donde se encuentra Adatex
              o los propietarios / fundadores de Adatex, en este caso es
              Colombia.
            </li>
            <li className="text-wrap py-2">
              <span className="font-bold">Cliente:</span> se refiere a la
              empresa, organización o persona que se registra para utilizar el
              Servicio Adatex para gestionar las relaciones con sus consumidores
              o usuarios del servicio.
            </li>
            <li className="text-wrap py-2">
              <span className="font-bold">Dispositivo:</span> Cualquier
              dispositivo conectado a Internet, como un teléfono, tablet,
              computadora o cualquier otro dispositivo que se pueda usar para
              visitar Adatex y usar los servicios.
            </li>
            <li className="text-wrap py-2">
              <span className="font-bold">Dirección IP:</span> A cada
              dispositivo conectado a Internet se le asigna un número conocido
              como dirección de protocolo de Internet (IP). Estos números
              generalmente se asignan en bloques geográficos. A menudo, se puede
              utilizar una dirección IP para identificar la ubicación desde la
              que un dispositivo se conecta a Internet.
            </li>
            <li className="text-wrap py-2">
              <span className="font-bold">Personal:</span> Se refiere a aquellas
              personas que son empleadas por Adatex o están bajo contrato para
              realizar un servicio en nombre de una de las partes.
            </li>
            <li className="text-wrap py-2">
              <span className="font-bold">Datos personales:</span> Cualquier
              información que directa, indirectamente o en conexión con otra
              información, incluido un número de identificación personal,
              permita la identificación de una persona física.
            </li>
            <li className="text-wrap py-2">
              <span className="font-bold">Servicio:</span> Se refiere al
              servicio brindado por Adatex como se describe en los términos
              relativos (si están disponibles) y en esta plataforma.
            </li>
            <li className="text-wrap py-2">
              <span className="font-bold">Terceros:</span> Se refiere a
              anunciantes, patrocinadores de concursos, socios promocionales y
              de marketing, y otros que brindan nuestro contenido o cuyos
              productos o servicios que creemos que pueden interesarle.
            </li>
            <li className="text-wrap py-2">
              <span className="font-bold">Sitio Web:</span> El sitio de Adatex,
              al que se puede acceder a través de esta URL: www.Adatex.co.
            </li>
            <li className="text-wrap py-2">
              <span className="font-bold">Usted:</span> Una persona o entidad
              que está registrada con Adatex para utilizar los Servicios.
            </li>
          </ul>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">¿Qué información recopilamos?</h2>
          <p>
            Recopilamos información suya cuando visita nuestra plataforma, se
            registra en nuestro sitio, realiza un pedido, se suscribe a nuestro
            boletín, responde a una encuesta o completa un formulario.
          </p>
          <ul className="py-4 list-disc px-4">
            <li className="text-wrap py-2">Nombre / Nombre de usuario</li>
            <li className="text-wrap py-2">Números de teléfono</li>
            <li className="text-wrap py-2">Correos electrónicos</li>
            <li className="text-wrap py-2">Direcciones de correo</li>
            <li className="text-wrap py-2">Direcciones de facturación</li>
          </ul>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            ¿Cómo usamos la información que recopilamos?
          </h2>
          <p>
            Cualquiera de la información que recopilamos de usted puede usarse
            de una de las siguientes maneras:
          </p>
          <ul className="py-4 list-disc px-4">
            <li className="text-wrap py-2">
              Para personalizar su experiencia (su información nos ayuda a
              responder mejor a sus necesidades individuales).
            </li>
            <li className="text-wrap py-2">
              Para mejorar nuestra plataforma (nos esforzamos continuamente por
              mejorar lo que ofrece nuestra plataforma en función de la
              información y los comentarios que recibimos de usted).
            </li>
            <li className="text-wrap py-2">
              Para mejorar el servicio al cliente (su información nos ayuda a
              responder de manera más efectiva a sus solicitudes de servicio al
              cliente y necesidades de soporte).
            </li>
            <li className="text-wrap py-2">Para procesar transacciones.</li>
            <li className="text-wrap py-2">
              Para administrar un concurso, promoción, encuesta u otra
              característica del sitio.
            </li>
            <li className="text-wrap py-2">
              Para enviar correos electrónicos periódicos.
            </li>
          </ul>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            ¿Cuándo usa Adatex la información del usuario final de terceros?
          </h2>
          <p>
            Adatex recopilará los datos del usuario final necesarios para
            proporcionar los servicios de Adatex a nuestros clientes.
          </p>
          <p>
            Los usuarios finales pueden proporcionarnos voluntariamente la
            información que han puesto a disposición en los sitios web de las
            redes sociales. Si nos proporciona dicha información, podemos
            recopilar información disponible públicamente de los sitios web de
            redes sociales que ha indicado. Puede controlar la cantidad de
            información que los sitios web de redes sociales hacen pública
            visitando estos sitios web y cambiando su configuración de
            privacidad.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            ¿Cuándo usa Adatex la información del cliente de terceros?
          </h2>
          <p>
            Recibimos información de terceros cuando se comunica con nosotros.
            Por ejemplo, cuando nos envía su dirección de correo electrónico
            para mostrar interés en convertirse en cliente de Adatex, recibimos
            información de un tercero que brinda servicios automáticos de
            detección de fraude a Adatex. Ocasionalmente, también recopilamos
            información que se pone a disposición del público en los sitios web
            de redes sociales. Puede controlar la cantidad de información que
            los sitios web de redes sociales hacen pública visitando estos
            sitios web y cambiando su configuración de privacidad.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            ¿Compartimos la información que recopilamos con terceros?
          </h2>
          <p>
            Podemos compartir la información que recopilamos, tanto personal
            como no personal, con terceros como anunciantes, patrocinadores de
            concursos, socios promocionales y de marketing, y otros que
            proporcionan nuestro contenido o cuyos productos o servicios creemos
            que pueden interesarle. También podemos compartirlo con nuestras
            compañías afiliadas y socios comerciales actuales y futuros, y si
            estamos involucrados en una fusión, venta de activos u otra
            reorganización comercial, también podemos compartir o transferir su
            información personal y no personal a nuestros sucesores en interés.
          </p>
          <p>
            Podemos contratar proveedores de servicios de terceros de confianza
            para que realicen funciones y nos brinden servicios, como el
            alojamiento y el mantenimiento de nuestros servidores y la
            plataforma, almacenamiento y administración de bases de datos,
            administración de correo electrónico, marketing de almacenamiento,
            procesamiento de tarjetas de crédito, servicio y cumplimiento de
            pedidos de productos y servicios que puede comprar a través de la
            plataforma. Es probable que compartamos su información personal, y
            posiblemente alguna información no personal, con estos terceros para
            permitirles realizar estos servicios para nosotros y para usted.
          </p>
          <p>
            Podemos compartir partes de los datos de nuestro archivo de
            registro, incluidas las direcciones IP, con fines analíticos con
            terceros, como socios de análisis web, desarrolladores de
            aplicaciones y redes publicitarias. Si se comparte su dirección IP,
            se puede utilizar para estimar la ubicación general y otros datos
            tecnológicos, como la velocidad de conexión, si ha visitado la
            plataforma en una ubicación compartida y el tipo de dispositivo
            utilizado para visitar la plataforma. Pueden agregar información
            sobre nuestra publicidad y lo que ve en la plataforma y luego
            proporcionar auditorías, investigaciones e informes para nosotros y
            nuestros anunciantes.
          </p>
          <p>
            También podemos divulgar información personal y no personal sobre
            usted al gobierno, a funcionarios encargados de hacer cumplir la ley
            o a terceros privados, según consideremos, a nuestro exclusivo
            criterio, necesario o apropiado para responder a reclamos, procesos
            legales (incluidas citaciones), para proteger nuestra derechos e
            intereses o los de un tercero, la seguridad del público o de
            cualquier persona, para prevenir o detener cualquier actividad
            ilegal, poco ética o legalmente procesable, o para cumplir con las
            órdenes judiciales, leyes, reglas y regulaciones aplicables.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            ¿Dónde y cuándo se recopila la información de los clientes y
            usuarios finales?
          </h2>
          <p>
            Adatex recopilará la información personal que nos envíe. También
            podemos recibir información personal sobre usted de terceros como se
            describe anteriormente.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            ¿Cómo utilizamos su dirección de correo electrónico?
          </h2>
          <p>
            Al enviar su dirección de correo electrónico en esta plataforma,
            acepta recibir nuestros correos electrónicos. Puede cancelar su
            participación en cualquiera de estas listas de correo electrónico en
            cualquier momento haciendo clic en el enlace de exclusión voluntaria
            u otra opción para cancelar la suscripción que se incluye en el
            correo electrónico respectivo. Solo enviamos correos electrónicos a
            personas que nos han autorizado a contactarlos, ya sea directamente
            o a través de un tercero. No enviamos correos electrónicos
            comerciales no solicitados, porque odiamos el spam tanto como usted.
            Al enviar su dirección de correo electrónico, también acepta
            permitirnos usar su dirección de correo electrónico para la
            orientación de la audiencia del cliente en sitios como Facebook,
            donde mostramos publicidad personalizada a personas específicas que
            han optado por recibir nuestras comunicaciones. Las direcciones de
            correo electrónico enviadas solo a través de la página de
            procesamiento de pedidos se utilizarán con el único propósito de
            enviarle información y actualizaciones relacionadas con su pedido.
            Sin embargo, si nos ha proporcionado el mismo correo electrónico a
            través de otro método, podemos usarlo para cualquiera de los fines
            establecidos en esta Política. Nota: Si en algún momento desea
            cancelar la suscripción para no recibir correos electrónicos
            futuros, incluimos instrucciones detalladas para cancelar la
            suscripción en la parte inferior de cada correo electrónico.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            ¿Cuánto tiempo conservamos su información?
          </h2>
          <p>
            Conservamos su información solo mientras la necesitemos para
            proporcionarle Adatex y cumplir con los propósitos descritos en esta
            política. Este también es el caso de cualquier persona con la que
            compartamos su información y que lleve a cabo servicios en nuestro
            nombre. Cuando ya no necesitemos usar su información y no sea
            necesario que la conservemos para cumplir con nuestras obligaciones
            legales o reglamentarias, la eliminaremos de nuestros sistemas o la
            despersonalizaremos para que no podamos identificarlo.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            ¿Cómo protegemos su información?
          </h2>
          <p>
            Implementamos una variedad de medidas de seguridad para mantener la
            seguridad de su información personal cuando realiza un pedido,
            ingresa, envía o accede a su información personal. Ofrecemos el uso
            de un servidor seguro. Toda la información confidencial / crediticia
            suministrada se transmite a través de la tecnología Secure Socket
            Layer (SSL) y luego se encripta en nuestra base de datos de
            proveedores de pasarela de pago solo para que sea accesible por
            aquellos autorizados con derechos especiales de acceso a dichos
            sistemas, y deben mantener la información confidencial. Después de
            una transacción, su información privada (tarjetas de crédito,
            números de seguro social, finanzas, etc.) nunca se archiva. Sin
            embargo, no podemos garantizar la seguridad absoluta de la
            información que transmita a Adatex ni garantizar que su información
            en el servicio no sea accedida, divulgada, alterada o destruida por
            una infracción de cualquiera de nuestras condiciones físicas,
            salvaguardias técnicas o de gestión.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            ¿Podría transferirse mi información a otros países?
          </h2>
          <p>
            Adatex está incorporada en Colombia. La información recopilada a
            través de nuestro sitio web, a través de interacciones directas con
            usted o del uso de nuestros servicios de ayuda puede transferirse de
            vez en cuando a nuestras oficinas o personal, o a terceros, ubicados
            en todo el mundo, y puede verse y alojarse en cualquier lugar de el
            mundo, incluidos los países que pueden no tener leyes de aplicación
            general que regulen el uso y la transferencia de dichos datos. En la
            mayor medida permitida por la ley aplicable, al utilizar cualquiera
            de los anteriores, usted acepta voluntariamente la transferencia
            transfronteriza y el alojamiento de dicha información.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            ¿La información recopilada a través del Servicio Adatex es segura?
          </h2>
          <p>
            Tomamos precauciones para proteger la seguridad de su información.
            Contamos con procedimientos físicos, electrónicos y administrativos
            para ayudar a salvaguardar, prevenir el acceso no autorizado,
            mantener la seguridad de los datos y usar correctamente su
            información. Sin embargo, ni las personas ni los sistemas de
            seguridad son infalibles, incluidos los sistemas de cifrado. Además,
            las personas pueden cometer delitos intencionales, cometer errores o
            no seguir las políticas. Por lo tanto, aunque hacemos todos los
            esfuerzos razonables para proteger su información personal, no
            podemos garantizar su seguridad absoluta. Si la ley aplicable impone
            algún deber irrenunciable de proteger su información personal, usted
            acepta que la mala conducta intencional serán los estándares
            utilizados para medir nuestro cumplimiento con ese deber.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            ¿Puedo actualizar o corregir mi información?
          </h2>
          <p>
            Los derechos que tienes para solicitar actualizaciones o
            correcciones de la información que recopila Adatex dependen de tu
            relación con Adatex. El personal puede actualizar o corregir su
            información según se detalla en nuestras políticas de empleo
            internas de la empresa.
          </p>
          <p>
            Los clientes tienen derecho a solicitar la restricción de ciertos
            usos y divulgaciones de información de identificación personal de la
            siguiente manera. Puede comunicarse con nosotros para (1) actualizar
            o corregir su información de identificación personal, (2) cambiar
            sus preferencias con respecto a las comunicaciones y otra
            información que recibe de nosotros, o (3) eliminar la información de
            identificación personal que se mantiene sobre usted en nuestro
            sistema (sujeto al siguiente párrafo), cancelando su cuenta. Dichas
            actualizaciones, correcciones, cambios y eliminaciones no tendrán
            ningún efecto sobre otra información que mantenemos o información
            que hayamos proporcionado a terceros de acuerdo con esta Política de
            privacidad antes de dicha actualización, corrección, cambio o
            eliminación. Para proteger su privacidad y seguridad, podemos tomar
            medidas razonables (como solicitar una contraseña única) para
            verificar su identidad antes de otorgarle acceso a su perfil o hacer
            correcciones. Usted es responsable de mantener en secreto su
            contraseña única y la información de su cuenta en todo momento.
          </p>
          <p>
            Debe tener en cuenta que tecnológicamente no es posible eliminar
            todos y cada uno de los registros de la información que nos ha
            proporcionado de nuestro sistema. La necesidad de realizar copias de
            seguridad de nuestros sistemas para proteger la información de
            pérdidas involuntarias significa que puede existir una copia de su
            información en una forma que no se pueda borrar y que será difícil o
            imposible de localizar para nosotros. Inmediatamente después de
            recibir su solicitud, toda la información personal almacenada en las
            bases de datos que usamos activamente y otros medios fácilmente
            buscables se actualizará, corregirá, cambiará o eliminará, según
            corresponda, tan pronto como y en la medida en que sea razonable y
            técnicamente posible.
          </p>
          <p>
            Si es un usuario final y desea actualizar, eliminar o recibir
            cualquier información que tengamos sobre usted, puede hacerlo
            poniéndose en contacto con la organización de la que es cliente.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Personal</h2>
          <p>
            Si es un trabajador o solicitante de Adatex, recopilamos la
            información que nos proporciona voluntariamente. Usamos la
            información recopilada con fines de recursos humanos para
            administrar los beneficios a los trabajadores y seleccionar a los
            solicitantes.
          </p>
          <p>
            Puede comunicarse con nosotros para (1) actualizar o corregir su
            información, (2) cambiar sus preferencias con respecto a las
            comunicaciones y otra información que reciba de nosotros, o (3)
            recibir un registro de la información que tenemos relacionada con
            usted. Dichas actualizaciones, correcciones, cambios y eliminaciones
            no tendrán ningún efecto sobre otra información que mantenemos o
            información que hayamos proporcionado a terceros de acuerdo con esta
            Política de privacidad antes de dicha actualización, corrección,
            cambio o eliminación.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Venta de Negocio</h2>
          <p>
            Nos reservamos el derecho de transferir información a un tercero en
            el caso de una venta, fusión u otra transferencia de todos o
            sustancialmente todos los activos de Adatex o cualquiera de sus
            afiliadas corporativas (como se define en este documento), o la
            porción de Adatex o cualquiera de sus Afiliadas corporativas con las
            que se relaciona el Servicio, o en el caso de que discontinuemos
            nuestro negocio o presentemos una petición o hayamos presentado una
            petición contra nosotros en caso de quiebra, reorganización o
            procedimiento similar, siempre que el el tercero acepte adherirse a
            los términos de esta Política de privacidad.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Afiliados</h2>
          <p>
            Podemos divulgar información (incluida la información personal)
            sobre usted a nuestros afiliados corporativos. Para los propósitos
            de esta Política de Privacidad, "Afiliado Corporativo" significa
            cualquier persona o entidad que directa o indirectamente controla,
            está controlada por o está bajo control común con Adatex, ya sea por
            propiedad o de otra manera. Cualquier información relacionada con
            usted que proporcionemos a nuestros afiliados corporativos será
            tratada por dichos afiliados corporativos de acuerdo con los
            términos de esta política de privacidad.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Ley que Rige</h2>
          <p>
            Esta Política de privacidad se rige por las leyes de Colombia sin
            tener en cuenta su disposición sobre conflicto de leyes. Usted
            acepta la jurisdicción exclusiva de los tribunales en relación con
            cualquier acción o disputa que surja entre las partes en virtud de
            esta Política de privacidad o en relación con ella, excepto aquellas
            personas que puedan tener derecho a presentar reclamaciones en
            virtud del Escudo de privacidad o el marco suizo-estadounidense.
          </p>
          <p>
            Las leyes de Colombia, excluyendo sus conflictos de leyes, regirán
            este Acuerdo y su uso de la plataforma. Su uso de la plataforma
            también puede estar sujeto a otras leyes locales, estatales,
            nacionales o internacionales.
          </p>
          <p>
            Al usar Adatex o comunicarse con nosotros directamente, significa
            que acepta esta Política de privacidad. Si no está de acuerdo con
            esta Política de privacidad, no debe interactuar con nuestro sitio
            web ni utilizar nuestros servicios. El uso continuo del sitio web,
            la interacción directa con nosotros o después de la publicación de
            cambios en esta Política de privacidad que no afecten
            significativamente el uso o divulgación de su información personal
            significará que acepta esos cambios.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Tu consentimiento</h2>
          <p>
            Hemos actualizado nuestra Política de privacidad para brindarle
            total transparencia sobre lo que se establece cuando visita nuestro
            sitio y cómo se utiliza. Al utilizar nuestra plataforma, registrar
            una cuenta o realizar una compra, por la presente acepta nuestra
            Política de privacidad y acepta sus términos.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Enlaces a otros Sitios Web</h2>
          <p>
            Esta Política de privacidad se aplica solo a los Servicios. Los
            Servicios pueden contener enlaces a otros sitios web que Adatex no
            opera ni controla. No somos responsables por el contenido, la
            precisión o las opiniones expresadas en dichos sitios web, y dichos
            sitios web no son investigados, monitoreados o verificados por
            nuestra precisión o integridad. Recuerde que cuando utiliza un
            enlace para ir desde los Servicios a otro sitio web, nuestra
            Política de privacidad deja de estar en vigor. Su navegación e
            interacción en cualquier otro sitio web, incluidos aquellos que
            tienen un enlace en nuestra plataforma, están sujetos a las propias
            reglas y políticas de ese sitio web. Dichos terceros pueden utilizar
            sus propias cookies u otros métodos para recopilar información sobre
            usted.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Cookies</h2>
          <p>
            Adatex utiliza "cookies" para identificar las áreas de nuestro sitio
            web que ha visitado. Una cookie es una pequeña porción de datos que
            su navegador web almacena en su computadora o dispositivo móvil.
            Usamos cookies para mejorar el rendimiento y la funcionalidad de
            nuestra plataforma, pero no son esenciales para su uso. Sin embargo,
            sin estas cookies, es posible que ciertas funciones, como los
            videos, no estén disponibles o se le solicitará que ingrese sus
            datos de inicio de sesión cada vez que visite la plataforma, ya que
            no podríamos recordar que había iniciado sesión anteriormente. La
            mayoría de los navegadores web se pueden configurar para desactivar
            el uso de cookies. Sin embargo, si desactiva las cookies, es posible
            que no pueda acceder a la funcionalidad de nuestro sitio web
            correctamente o en absoluto. Nunca colocamos información de
            identificación personal en cookies.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            Bloquear y deshabilitar Cookies y tecnologías similares
          </h2>
          <p>
            Donde sea que se encuentre, también puede configurar su navegador
            para bloquear cookies y tecnologías similares, pero esta acción
            puede bloquear nuestras cookies esenciales e impedir que nuestro
            sitio web funcione correctamente, y es posible que no pueda utilizar
            todas sus funciones y servicios por completo. También debe tener en
            cuenta que también puede perder información guardada (por ejemplo,
            detalles de inicio de sesión guardados, preferencias del sitio) si
            bloquea las cookies en su navegador. Los distintos navegadores ponen
            a su disposición distintos controles. Deshabilitar una cookie o una
            categoría de cookie no elimina la cookie de su navegador, deberá
            hacerlo usted mismo desde su navegador, debe visitar el menú de
            ayuda de su navegador para obtener más información.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Servicios de Remarketing</h2>
          <p>
            Usamos servicios de remarketing. ¿Qué es el remarketing? En
            marketing digital, el remarketing (o retargeting) es la práctica de
            publicar anuncios en Internet a personas que ya han visitado su
            sitio web. Permite que su empresa parezca que está "siguiendo" a las
            personas en Internet mediante la publicación de anuncios en los
            sitios web y las plataformas que más utilizan.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Detalles del Pago</h2>
          <p>
            Con respecto a cualquier tarjeta de crédito u otros detalles de
            procesamiento de pagos que nos haya proporcionado, nos comprometemos
            a que esta información confidencial se almacene de la manera más
            segura posible.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Privacidad de los Niños</h2>
          <p>
            No nos dirigimos a ninguna persona menor de 13 años. No recopilamos
            información de identificación personal de ninguna persona menor de
            13 años. Si usted es padre o tutor y sabe que su hijo nos ha
            proporcionado Datos personales, comuníquese con Nos. Si nos damos
            cuenta de que hemos recopilado datos personales de cualquier persona
            menor de 13 años sin la verificación del consentimiento de los
            padres, tomamos medidas para eliminar esa información de nuestros
            servidores.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">
            Cambios en nuestra Política de Privacidad
          </h2>
          <p>
            Podemos cambiar nuestro Servicio y nuestras políticas, y es posible
            que debamos realizar cambios en esta Política de privacidad para que
            reflejen con precisión nuestro Servicio y nuestras políticas. A
            menos que la ley exija lo contrario, le notificaremos (por ejemplo,
            a través de nuestro Servicio) antes de realizar cambios en esta
            Política de privacidad y le daremos la oportunidad de revisarlos
            antes de que entren en vigencia. Luego, si continúa utilizando el
            Servicio, estará sujeto a la Política de privacidad actualizada. Si
            no desea aceptar esta o cualquier Política de privacidad
            actualizada, puede eliminar su cuenta.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Servicios de terceros</h2>
          <p>
            Podemos mostrar, incluir o poner a disposición contenido de terceros
            (incluidos datos, información, aplicaciones y otros servicios de
            productos) o proporcionar enlaces a sitios web o servicios de
            terceros ("Servicios de terceros"). Usted reconoce y acepta que
            Adatex no será responsable de ningún Servicio de terceros, incluida
            su precisión, integridad, puntualidad, validez, cumplimiento de los
            derechos de autor, legalidad, decencia, calidad o cualquier otro
            aspecto de los mismos. Adatex no asume ni tendrá ninguna obligación
            o responsabilidad ante usted o cualquier otra persona o entidad por
            los Servicios de terceros. Los Servicios de terceros y los enlaces a
            los mismos se brindan únicamente para su conveniencia y usted accede
            a ellos y los usa completamente bajo su propio riesgo y sujeto a los
            términos y condiciones de dichos terceros.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Facebook Pixel</h2>
          <p>
            Facebook pixel es una herramienta de análisis que le permite medir
            la efectividad de su publicidad al comprender las acciones que las
            personas realizan en su sitio web. Puede utilizar el píxel para:
            Asegurarse de que sus anuncios se muestren a las personas adecuadas.
            Facebook pixel puede recopilar información de su dispositivo cuando
            utiliza el servicio. Facebook pixel recopila información que se
            guarda de acuerdo con su Política de privacidad.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Tecnologías de Seguimiento</h2>
          <p>API de Google Maps</p>
          <ul className="py-4 list-disc px-4">
            <li className="text-wrap py-2">
              La API de Google Maps es una herramienta sólida que se puede
              utilizar para crear un mapa personalizado, un mapa de búsqueda,
              funciones de registro, mostrar la sincronización de datos en vivo
              con la ubicación, planificar rutas o crear un mashup, solo por
              nombrar algunos.
            </li>
            <li className="text-wrap py-2">
              La API de Google Maps puede recopilar información suya y de su
              dispositivo por motivos de seguridad.
            </li>
            <li className="text-wrap py-2">
              La API de Google Maps recopila información que se mantiene de
              acuerdo con su Política de privacidad.
            </li>
          </ul>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Cookies</h2>
          <p>
            Usamos Cookies para mejorar el rendimiento y la funcionalidad de
            nuestra plataforma, pero no son esenciales para su uso. Sin embargo,
            sin estas cookies, es posible que ciertas funciones, como los
            videos, no estén disponibles o se le solicitará que ingrese sus
            datos de inicio de sesión cada vez que visite la plataforma, ya que
            no podríamos recordar que había iniciado sesión anteriormente.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Sesiones</h2>
          <p>
            Adatex utiliza "Sesiones" para identificar las áreas de nuestro
            sitio web que ha visitado. Una sesión es un pequeño fragmento de
            datos que su navegador web almacena en su computadora o dispositivo
            móvil.
          </p>
        </div>
        <div className="pb-4 text-justify">
          <h2 className="text-xl font-bold">Contáctenos</h2>
          <p>No dude en contactarnos si tiene alguna pregunta.</p>
          <ul className="py-4 list-disc px-4">
            <li className="text-wrap py-2">
              A través de correo electrónico: info@Adatex.co.
            </li>
            <li className="text-wrap py-2">
              A través del número de teléfono: +57 (316)-3138-308.
            </li>
            <li className="text-wrap py-2">
              A través de este enlace:{" "}
              <Link href={"/contact-us"}>https://Adatex.co/contact-us</Link>.
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
