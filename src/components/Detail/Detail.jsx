import React from "react";

import styles from "./Detail.scss";

export default function Detail() {
  return (
    <div className={styles.detail}>
      <div className={styles.preview}>
        <div className={styles.image}>
          <img
            src="https://http2.mlstatic.com/D_824249-MLA44333730675_122020-O.jpg"
            alt="Imagen de producto"
          />
        </div>
        <div className={styles.detailProduct}>
          <span>Nuevo - 5000 vendidos</span>
          <h1 className={styles.name}>Samsung Galaxy A21s 64 Gb Negro 4 Gb Ram</h1>

          <h1 className={styles.price}>$26999</h1>

          <button>Comprar</button>
        </div>
      </div>
      <div className={styles.description}>
        <h1>Descripcion del producto</h1>
        <p>
          Enfocate en lo importante El novedoso sistema operativo Android 10
          incorpora respuestas inteligentes y acciones sugeridas para todas tus
          aplicaciones. Además, incluye la función de Bienestar Digital y el
          Tema Oscuro, para que evites distracciones y logres una mayor
          concentración. Mayor rendimiento Su memoria RAM de 4 GB te permitirá
          ejecutar varias aplicaciones al mismo tiempo, jugar y navegar con gran
          rapidez y sin inconvenientes. Experiencia visual increíble Mirá tus
          series y películas favoritas con la mejor definición a través de su
          pantalla PLS TFT de 6.5". Disfrutá de colores brillantes y detalles
          precisos en todos tus contenidos. Gran capacidad de almacenamiento Con
          su memoria interna de 64 GB siempre tendrás espacio para almacenar
          archivos y documentos importantes. Además, podrás guardar películas,
          series y videos para reproducirlos cuando quieras sin conexión.
          Batería superior ¡Desenchufate! Con la súper batería de 5000 mAh,
          tendrás energía por mucho más tiempo para jugar, ver series o trabajar
          sin necesidad de recargar tu teléfono. Fotografía profesional en tu
          bolsillo Descubrí infinitas posibilidades para tus fotos con las 4
          cámaras principales de tu equipo. Gracias a la cámara teleobjetivo
          capturarás detalles casi imperceptibles, con la de ángulo amplio
          sacarás fotos nítidas y la ultra gran angular te permitirá obtener
          imágenes panorámicas excepcionales. ¿Amás los fondos difuminados? Vas
          a conseguirlos con el famoso modo retrato de la cuarta cámara. Además,
          el dispositivo cuenta con cámara frontal de 13 Mpx para que puedas
          sacarte divertidas selfies o hacer videollamadas. Tecnología premium
          Maximizá tu seguridad y asegurate de que solo vos puedas desbloquear
          el equipo. Gracias al sensor de huella dactilar, podrás habilitar tu
          dispositivo con solo un toque. Además, cuenta con reconocimiento
          facial que se activa rápidamente al colocar la pantalla frente a tu
          rostro.
        </p>
      </div>
    </div>
  );
}
