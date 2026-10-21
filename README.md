# RUTA 26 · Venezuela

Catálogo interactivo del mercado venezolano. Datos de Price Ladder, corte 20 de octubre de 2026, y vehículos exclusivos del catálogo previo de RUTA.

## Funciones

- Filtros acumulables por marca y tipo; orden por marca y precio.
- Ofertas de mercado/lista, transaccionales, de compra programada e inmediatas diferenciadas.
- Favoritos y sets de comparaciones guardados en el navegador, con importación y exportación.
- Comparador con la estructura completa de las 16 matrices SPECS; selección libre o vista original por gama.
- Plan de compra desde favoritos o el catálogo, tasa nominal anual/efectiva anual/mensual, switches independientes de IVA e IGTF, amortización y escenarios de 24 a 96 meses.

- Propuestas de compra guardadas localmente, con importes y condiciones originales, edición y descarga.

## Datos

`data.js` es el catálogo integrado; `app.js`, la interfaz; `math.js`, las fórmulas financieras; `styles.css`, la presentación. La página de extracción permite exportar los datos organizados y el cruce entre catálogos.

Price Ladder sustituye precio y SPECS de las versiones coincidentes. Se conserva el mes de cada observación, sin confundirlo con la fecha del corte. Las referencias de precios extranjeros se retiraron. Una celda vacía no se interpreta como ausencia de equipamiento.

Las variantes con cabecera vacía pueden reutilizar valores comunes de la columna base en la comparación personalizada; se identifican con ↳. La vista por gama conserva las celdas originales. Las unidades, denominaciones y posibles erratas permanecen como en la fuente.

Los impuestos se activan por separado como hipótesis editables y no acreditan un desglose confirmado. Un total final impide volver a añadirlos. Los planes de compra programada y sus reservas se distinguen de la inicial de un crédito.

Se revisaron los precios pendientes en portales oficiales venezolanos y se ampliaron galerías de exteriores, interiores y tecnología. Los precios adicionales mantienen condiciones y fecha de publicación. Se simplificaron gamas y se añadió comparación de todos los favoritos o por grupos, con sets que conservan su selección. Imágenes, marcas y fichas técnicas pertenecen a sus titulares.

## Publicación

Sitio estático sin compilación. GitHub Pages publica la raíz de `main`. Una copia local debe conservar `index.html`, los scripts, estilos y `assets/` juntos.

Favoritos, comparaciones y escenarios se almacenan en `localStorage`; no hay almacenamiento propio en servidor ni sincronización automática entre dispositivos.
