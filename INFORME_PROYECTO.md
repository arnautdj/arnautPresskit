# INFORME TÉCNICO Y COMERCIAL — ARNAUT PRESSKIT
> Documento generado el 2026-03-27. Audiencia: IA con contexto cero del proyecto.

---

## 1. IDENTIDAD DEL PROYECTO

| Campo | Valor |
|---|---|
| Nombre del proyecto | Arnaut Presskit |
| Dominio de producción | arnaut.ec |
| Tipo | Sitio web estático (sin framework de JS) |
| Hosting | GitHub Pages |
| Repositorio | Rama `master` → auto-deploy |
| Rama activa | `cotizacion` (desarrollo actual) |
| Tecnologías | HTML5, CSS3, Bootstrap 5.3.3, Vanilla JS |

**Propósito comercial:** Plataforma de presentación profesional para **ARNAUT**, DJ Crossover con 4 años de trayectoria basado en Ecuador. El sitio es su principal herramienta de captación de contratos para eventos privados y corporativos, además de hub de distribución de contenido musical (packs de mashups para otros DJs).

---

## 2. ARQUITECTURA — TRES SITIOS EN UNO

El proyecto contiene **tres páginas independientes**, cada una con su propia URL, propósito y audiencia:

```
arnaut.ec/              → Presskit público (audiencia: organizadores de eventos)
arnaut.ec/dj/           → Cotizador privado (audiencia: clientes que piden precio)
arnaut.ec/links/        → Bio-link (audiencia: seguidores en redes sociales)
```

Cada uno tiene su propio HTML, CSS y JS. No comparten componentes importados — son archivos independientes con estilos duplicados intencionalmente para mantener simplicidad de despliegue (sin build process).

---

## 3. ESTRUCTURA DE ARCHIVOS COMPLETA

```
arnautPresskit/
├── index.html                     # Presskit principal (478 líneas)
├── CNAME                          # DNS: arnaut.ec
├── CLAUDE.md                      # Guía de desarrollo para IA
├── .gitignore                     # Excluye .DS_Store
├── arnautPresskit.code-workspace  # Configuración VS Code
│
├── dj/
│   └── index.html                 # Página de cotización privada (9.1 KB)
│
├── links/
│   └── index.html                 # Página bio-link tipo Linktree (354 líneas)
│
├── docs/
│   └── ARNAUT_Tech_Rider_2026.pdf # Rider técnico para organizadores (110 KB)
│
├── styles/
│   ├── style.css                  # Hoja de estilos principal (590+ líneas)
│   └── style-dj.css               # Estilos específicos de la página DJ
│
├── js/
│   ├── script.js                  # JS principal (83 líneas)
│   └── script-dj.js               # JS de la página DJ (59 líneas)
│
└── images/                        # 33 WebP + 1 MP4 + 1 PNG (~13.6 MB total)
    ├── hero-background.webp       (124 KB) Fondo hero principal
    ├── logo.webp                  (18 KB)  Logo de marca
    ├── arnaut-pp.webp             (105 KB) Foto de perfil
    ├── showSection.webp           (59 KB)  Parallax de sección El Show
    ├── loopPreviaColor.mp4        (5 MB)   Video de fondo sección Video
    ├── playlist-cover.webp        Thumbnail del playlist de YouTube
    ├── fullSetThubail.webp        Thumbnail del full set 2026
    ├── short-yt.webp              Thumbnail YouTube Shorts
    ├── yt-thumbail.webp           Thumbnail canal de YouTube
    ├── reel-1.webp, reel-2.webp   Thumbnails de Instagram Reels
    ├── 0reel-1.webp, 0reel-2.webp Assets adicionales de reels
    ├── photo-1.webp → photo-16.webp (1.3 MB total) Galería de fotos
    └── ico.png                    (89 KB)  Favicon
```

---

## 4. PÁGINA PRINCIPAL — `index.html`

### 4.1 Navbar (Fijo, dinámico)

La barra de navegación es fija (`position: fixed`) y cambia su apariencia según la sección visible:

- **Transparente** cuando el usuario está en secciones "inmersivas" (hero, #el-show, #video, #clips, #booking, #formatos-show)
- **Sólida** (`background: #212529`) cuando el usuario está en secciones con fondo claro
- **Logo oculto** durante la sección hero (el logo ya aparece en el fondo de la sección)
- **Menú móvil**: auto-cierre al hacer clic en un enlace (mejora UX)

### 4.2 Secciones en orden

#### SECCIÓN 1 — Hero (`#inicio`)
- Fondo: `hero-background.webp` con overlay gradiente oscuro
- Contenido: Logo ARNAUT + tagline "DJ Profesional & Productor"
- 2 CTAs primarios:
  - **"Cotizar Evento"** → ancla a sección #booking
  - **"Descargar Mashups"** → enlace a Gumroad (free pack)
- Efecto parallax (solo desktop, desactivado en móvil por rendimiento)

#### SECCIÓN 2 — Biografía (`#bio`)
- Layout de dos columnas: foto de perfil circular | texto biográfico
- 3 párrafos describiendo la trayectoria de 4 años del DJ
- Enfoque en crossover, presentaciones en Ecuador, conexión con el público

#### SECCIÓN 3 — La Experiencia Arnaut (`#formatos-show`)
- Fondo oscuro con parallax (showSection.webp)
- 3 tarjetas de características:
  - **Mashups Exclusivos** — ediciones y remixes propios
  - **Energía en Cabina** — habilidades técnicas de DJ
  - **Formatos Versátiles** — adaptable a distintos eventos
- CTA: Descarga del Technical Rider PDF (`docs/ARNAUT_Tech_Rider_2026.pdf`)

#### SECCIÓN 4 — VIP DJ TOOLS (`#musica`)
- Thumbnail del playlist de YouTube con botón play superpuesto
- Audiencia objetivo: otros DJs y productores
- 2 CTAs:
  - **"Descargar Free Pack"** → `arnaut.gumroad.com/l/freepack`
  - **"Ver Catálogo Premium"** → `arnaut.gumroad.com/l/mashup_pack_vol_1`

#### SECCIÓN 5 — Video / El Show (`#video`)
- Fondo: video en loop `loopPreviaColor.mp4` con overlay oscuro
- Izquierda: Thumbnail del full set 2026 con botón play (link YouTube)
- Derecha: Título "ARNAUT LIVE SET 2026" + descripción
- CTA: "Ver en YouTube"

#### SECCIÓN 6 — Clips/Highlights (`#clips`)
- Fondo oscuro
- 3 tarjetas de contenido corto en relación 9:16 (portrait/vertical):
  - Instagram Reel 1 (`instagram.com/reels/DR0ahVZibYN/`)
  - YouTube Short (`youtu.be/4_Grcb01HPw`) — centrado, ligeramente escalado
  - Instagram Reel 2 (`instagram.com/reel/DB2m9LWAy3j/`)
- Iconos de plataforma superpuestos en cada card

#### SECCIÓN 7 — Galería (`#galeria`)
- Fondo claro (`bg-light`)
- Grid de 4 columnas responsivo (4→3→1 según breakpoint)
- 16 fotos de presentaciones en vivo (photo-1.webp → photo-16.webp)
- Imágenes redondeadas con sombra

#### SECCIÓN 8 — Booking / Footer (`#booking`)
- Fondo ultra-oscuro (`#070707`)
- Texto "BOOKING" de fondo en tamaño masivo, transparencia baja
- Título: "Haz que suceda"
- 2 tarjetas glassmorphism:
  - **WhatsApp**: `+593 98 709 3563` (link `wa.me/593987093563`)
  - **Email**: `djarnaut@gmail.com`
- Pills de redes sociales con conteo de seguidores:
  - Instagram: 10K (`@arnaut.ec`)
  - TikTok: 50K (`@arnaut.ec`)
  - Facebook: 50K
  - YouTube: link de suscripción (`@arnaut_ec`)
- Copyright: "© 2026 Arnaut. Todos los derechos reservados."

---

## 5. PÁGINA DE COTIZACIÓN — `dj/index.html`

Página privada (no enlazada desde el header público) destinada a organizadores de eventos que ya han contactado al DJ y necesitan ver los precios.

### 5.1 Hero de cotización
- Título: "Cotización Privada"
- Subtítulo: descripción de propuesta de valor
- CTA que hace scroll a la sección de precios

### 5.2 Estructura de precios (3 tarjetas)

| Tarjeta | Tipo | Precio | Color acento |
|---|---|---|---|
| ARNAUT DJ SHOW | Principal / anchor | $250 | Blanco |
| Equipamiento Provisto | Descuento logístico | -$50 → $200 | Verde (`#7dff9e`) |
| Equipo Compartido | Upsell logístico | +$50 → $300 | Naranja (`#ff9a5c`) |

**Tarjeta principal ($250):**
- Hasta 3 horas de actuación continua
- Consola Pioneer XDJ-XZ incluida
- Mashups y edits exclusivos
- Reunión previa de curación musical
- CTA: WhatsApp con mensaje pre-rellenado

**Tarjeta de descuento ($200):**
- El organizador provee el equipo de DJ
- Referencia al Technical Rider para especificaciones
- Descuento de $50

**Tarjeta de upsell ($300):**
- ARNAUT comparte su equipo con otros DJs de la lineup
- Pioneer XDJ-XZ disponible para transiciones suaves
- Incremento de $50

**Nota de disponibilidad:** Reserva recomendada con mínimo 3 semanas de anticipación.

---

## 6. PÁGINA BIO-LINK — `links/index.html`

Equivalente a un perfil de Linktree pero con diseño propio. Destino de los links en bio de Instagram/TikTok.

### 6.1 Layout
- Card centrada sobre fondo con gradiente radial oscuro
- Efecto glassmorphism (`backdrop-filter: blur(14px)`)
- Foto de perfil circular (104px)
- Handle: `@ARNAUT.EC`

### 6.2 Links disponibles (7 tarjetas)
1. **Presskit Oficial** → `arnaut.ec` (tarjeta más prominente)
2. **Moonset Full Set 2026** → YouTube
3. **Instagram** → `@arnaut.ec`
4. **TikTok** → `@arnaut.ec`
5. **YouTube** → `@arnaut_ec`
6. **WhatsApp** → `+593 98 709 3563`

### 6.3 Notas técnicas
- CSS completamente inline (sin Bootstrap)
- ARIA labels para accesibilidad
- Navegación por teclado funcional
- Responsive con ajustes de padding

---

## 7. SISTEMA DE DISEÑO

### 7.1 Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| Dark background | `#070707` | Footer/booking |
| Dark medium | `#0f0f0f` | Secciones oscuras |
| Bootstrap dark | `#212529` | Navbar sólida |
| Accent verde | `#7dff9e` | Descuento en precios DJ |
| Accent naranja | `#ff9a5c` | Upsell en precios DJ |
| White | `#ffffff` | Texto principal |

### 7.2 Patrones de diseño clave

**Glassmorphism (usado en booking y tarjetas DJ):**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
}
```

**Parallax (hero y sección #el-show):**
```css
background-attachment: fixed; /* solo desktop */
/* Desactivado en @media (max-width: 991.98px) */
```

**Video de fondo:**
```css
.video-background-section video {
  position: absolute;
  top: 50%; left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 100%; min-height: 100%;
}
/* Overlay: rgba(15,15,15, 0.75) */
```

**Navbar transparente → sólida:** Clase `.navbar-solid` añadida por JS según scroll.

### 7.3 Responsividad

- Breakpoint principal: `991.98px` (Bootstrap `lg`)
- Parallax desactivado en móvil (rendimiento en iOS/Android)
- Galería: 4 columnas → 3 columnas → 1 columna
- Botones: estilo `rounded-pill` optimizado para toque

---

## 8. JAVASCRIPT — LÓGICA DE NEGOCIO

### 8.1 `js/script.js` (83 líneas) — Página principal

**Lógica de navbar transparente:**
```
Secciones "inmersivas" (fondo oscuro):
.hero-section, #el-show, #video, #clips, #booking, #formatos-show

En cada scroll:
→ Recorre todas las secciones inmersivas
→ Calcula si el viewport está dentro de alguna de ellas
→ Si SÍ → quita .navbar-solid (navbar transparente)
→ Si NO → añade .navbar-solid (navbar oscura)
→ Oculta/muestra logo con .hide-logo en la sección hero
```

**Auto-cierre menú móvil:**
```
Al hacer clic en cualquier enlace del nav:
→ Detecta si .navbar-collapse tiene clase 'show' (Bootstrap)
→ Dispara click en .navbar-toggler para colapsar
```

### 8.2 `js/script-dj.js` (59 líneas) — Página DJ

Lógica simplificada:
```
triggerPoint = alturaHero - alturaNavbar

Si scrollY > triggerPoint → .navbar-solid
Si scrollY ≤ triggerPoint → quitar .navbar-solid
```

Misma lógica de auto-cierre de menú móvil.

---

## 9. DEPENDENCIAS EXTERNAS

### 9.1 CDN (sin instalación local)
```html
<!-- Bootstrap 5.3.3 CSS -->
https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css

<!-- Bootstrap Icons 1.11.3 -->
https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css

<!-- Bootstrap 5.3.3 JS Bundle (incluye Popper) -->
https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
```

### 9.2 Plataformas externas vinculadas

| Plataforma | URL / Handle | Propósito |
|---|---|---|
| YouTube | `@arnaut_ec` | Canal principal, Full Set 2026 |
| YouTube Shorts | `youtu.be/4_Grcb01HPw` | Clip corto destacado |
| Gumroad | `arnaut.gumroad.com/l/freepack` | Free DJ Pack |
| Gumroad | `arnaut.gumroad.com/l/mashup_pack_vol_1` | Premium Catalog |
| Instagram | `@arnaut.ec` (10K) | Red principal |
| Instagram Reel 1 | `instagram.com/reels/DR0ahVZibYN/` | Clip destacado |
| Instagram Reel 2 | `instagram.com/reel/DB2m9LWAy3j/` | Clip destacado |
| TikTok | `@arnaut.ec` (50K) | Red de mayor alcance |
| Facebook | Enlace de compartir (50K) | Red secundaria |
| WhatsApp | `+593 98 709 3563` | Canal de booking directo |
| Email | `djarnaut@gmail.com` | Booking alternativo |

---

## 10. DESPLIEGUE Y FLUJO DE TRABAJO

### 10.1 Entorno de desarrollo
```bash
python3 -m http.server 8000
# Acceso local: http://localhost:8000
```

### 10.2 Deploy a producción
```bash
git checkout master
git merge cotizacion
git push origin master
# GitHub Pages detecta el push y despliega automáticamente
```

### 10.3 Estrategia de ramas
- `master` → producción (arnaut.ec)
- `cotizacion` → desarrollo activo
- Sin entornos de staging intermedios

### 10.4 DNS
El archivo `CNAME` contiene:
```
arnaut.ec
```
GitHub Pages usa este archivo para mapear el repositorio al dominio personalizado.

---

## 11. HISTORIAL GIT RECIENTE

| Hash | Mensaje | Interpretación |
|---|---|---|
| `9af2d39` | corrección transparencia navbar | Bugfix en lógica JS de scroll |
| `71756a2` | Pricing page | Creación de la página `dj/` |
| `9bf55b3` | add full set to links | Nuevo link en bio-link page |
| `6e2bfd1` | integrar playlist de yt a video section | Sección VIP DJ TOOLS |
| `09b72e7` | updatex2 | Ajustes generales |
| `796d91f` | metatags links update | SEO/OG tags en links page |
| `2cc379e` | metatags links | Primera iteración de meta tags |
| `4aa6482` | links | Creación de la bio-link page |
| `b3cee81` | refactorización de estructura de carpetas para dj page | Movió archivos DJ a `/dj/` |

---

## 12. ANÁLISIS COMERCIAL

### 12.1 Funnel de conversión

```
Redes sociales (Instagram/TikTok)
        ↓
   links/ (bio-link)
        ↓
   index.html (presskit)
        ↓
Interés en booking → CTA "Cotizar Evento"
        ↓
   dj/ (cotización privada)
        ↓
WhatsApp / Email → Cierre de contrato
```

### 12.2 Flujos secundarios

```
index.html → VIP DJ TOOLS → Gumroad (venta de packs a otros DJs)
index.html → Descarga Rider PDF (califica leads interesados en booking)
```

### 12.3 Propuestas de valor por audiencia

| Audiencia | Propuesta de valor | CTA principal |
|---|---|---|
| Organizadores de eventos | DJ profesional con equipo propio, 4 años de experiencia en Ecuador | WhatsApp para cotización |
| Otros DJs / Productores | Packs de mashups exclusivos (free + premium) | Gumroad |
| Seguidores en redes | Hub centralizado de contenido y contacto | Bio-link |

### 12.4 Modelo de precios actual

- **Precio base**: $250 (incluye equipo Pioneer XDJ-XZ)
- **Con equipo del organizador**: $200 (-$50)
- **Compartiendo equipo con otros DJs**: $300 (+$50)
- **Free Pack**: Gratis (lead generation para catálogo premium)
- **Premium Catalog**: Precio en Gumroad (no visible en el sitio)

---

## 13. NOTAS TÉCNICAS PARA FUTURAS MODIFICACIONES

### 13.1 Agregar una nueva sección con navbar transparente
En `js/script.js`, añadir el selector de la nueva sección al array de secciones inmersivas:
```javascript
const immersiveSections = document.querySelectorAll(
  '.hero-section, #el-show, #video, #clips, #booking, #formatos-show, #NUEVA-SECCION'
);
```

### 13.2 Scroll-margin-top
Las secciones full-bleed (que deben iniciar desde el borde superior sin margen de navbar) tienen:
```css
scroll-margin-top: 0;
```
Las secciones normales tienen:
```css
scroll-margin-top: 55px; /* altura del navbar */
```

### 13.3 Parallax en móvil
El parallax (`background-attachment: fixed`) está desactivado en `@media (max-width: 991.98px)` porque causa jank en iOS/Android. Si se reactiva en móvil, habrá degradación de rendimiento notable.

### 13.4 Imágenes
Todas las imágenes están en formato WebP para optimización. Para agregar nuevas imágenes, convertir a WebP antes de añadir al directorio `/images/`.

### 13.5 Sin build process
No existe `package.json`, `node_modules`, ni ningún bundler. Cualquier cambio en los archivos se refleja directamente. No ejecutar `npm install` — no hay dependencias locales.

---

## 14. ESTADO ACTUAL DEL PROYECTO (2026-03-27)

- **Rama activa**: `cotizacion` (última modificación: navbar fix)
- **Producción**: Estable en `master`
- **Trabajo reciente**: Creación y refinamiento de la página de cotización (`dj/`)
- **Pendiente de merge**: Los cambios en `cotizacion` (incluyendo la página DJ) aún no están en `master`

---

*Fin del informe. Toda la información fue derivada del estado actual del repositorio.*
