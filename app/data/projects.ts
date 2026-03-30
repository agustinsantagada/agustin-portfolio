export interface Project {
  slug: string
  title: string
  category: string
  image: string          // imagen del grid (portada)
  description?: string   // texto del proyecto
  role?: string          // tu rol
  year?: string          // año
  client?: string        // cliente
  images?: string[]      // imágenes extra (URLs)
  videoUrl?: string      // embed de Vimeo/YouTube
  link?: string          // link externo (Behance, etc.)
}

export const projects: Project[] = [
  {
    slug: 'reel-23',
    title: 'Reel | 23',
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694608038988-DLS2XDJRMCX26DJYC47V/Screenshot+2023-09-13+at+14.24.35.png',
  },
  {
    slug: 'google-growth-summit',
    title: 'Google | Growth Summit',
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034548-L4HZ25JBV4HTQ2NFMNRF/Google_avatar.jpg',
  },
  {
    slug: 'natgeo-kids-xmas',
    title: 'NatGeo Kids | Xmas',
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037678-V3RPJA5HTYLV2PTI6GHP/NatGeo+Kids+Navidad-04.png',
  },
  {
    slug: 'disney-channel-logo',
    title: 'Disney Channel | Logo',
    category: 'Branding',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033284-PNBTTU0FD1SGSP18D25D/disney+channel.png',
  },
  {
    slug: 'hinchas-fox-sports',
    title: 'Hinchas Fox Sports | Graphic Package',
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694528922196-DGBOAVHVLO549RB8JIP5/hinchas.jpeg',
  },
  {
    slug: 'bahamas-identity',
    title: 'Bahamas | Identity',
    category: 'Branding',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034067-Q5W0OZ1PDR7WAR7DRTYA/Bahamas-02.png',
  },
  {
    slug: 'agenda-fox-sports',
    title: 'Agenda Fox Sports | Graphic Package',
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694425618680-2PZPEK8TI2HQYL7CHVLC/FXS+Agenda+pic+05+%280%3B00%3B01%3B19%29.jpg',
  },
  {
    slug: 'mareth-restaurant',
    title: 'Mareth | Restaurant',
    category: 'Branding',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034916-YHNYF6MVNBHQ0G0Q5Z39/mareth+cover.jpg',
  },
  {
    slug: 'mercadolibre-ux-ui',
    title: 'MercadoLibre | UX/UI',
    category: 'UX/UI',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036354-JD76DEOCUFAFYQS7LZV1/Behance_responsive-02.png',
  },
  {
    slug: 'nike-sb-green-power',
    title: 'Nike SB | Green Power',
    category: 'Branding',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036558-9IN2XN3ATSK58AWQXUF3/Nike_Greenpower_behance-05.png',
  },
  {
    slug: 'gsw-champions-22',
    title: 'GSW | Champions 22',
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035222-KWD7L6B9P0F6AN0DON5I/Curry-04.png',
  },
  {
    slug: 'serie-a-fox-sports',
    title: 'Serie A Fox Sports | Promo Package',
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694507215664-RO4SXPSCNBY803WD5WMQ/SerieA_Chile+H264+%280%3B00%3B01%3B27%29.jpg',
  },
  {
    slug: 'colablearn-ux-ui',
    title: 'Colablearn | UX/UI',
    category: 'UX/UI',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033636-MZ5AHVDTEC3FBI1LSSWN/LEARN+AVATAR.jpg',
  },
  {
    slug: 'club-disney-graphic-package',
    title: 'Club Disney | Graphic Package',
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694519394259-8IALSX1EAAOP36TO7BHY/00_DC_CD_OPEN_NTSC+%280%3B00%3B28%3B05%29.jpg',
  },
  {
    slug: 'nike-by-you',
    title: 'Nike | by You',
    category: 'Branding',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036727-D4RONMUT6J0QV8QKMI8U/Nike_livitate_avatar.png',
  },
  {
    slug: 'lia-aerospace-styleguide',
    title: 'LIA Aerospace | Styleguide',
    category: 'Branding',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036973-9YC3HBB8U4R1B2ID0DZS/LIA+AVATAR.png',
  },
  {
    slug: 'natgeo-ids',
    title: "NatGeo | ID's",
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694507478500-RH64PV4U3KSHXMV70B9W/natgeoids.png',
  },
  {
    slug: 'fox-sports-players',
    title: 'Fox Sports Players | Graphic Package',
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694427494772-V494O3Y2PC18HB8RO7LR/FS+PLAYERS+OPEN+HIGH_H.264_1+%280-00-09-13%29.jpg',
  },
  {
    slug: 'kikely-brand-styleguide',
    title: 'Kikely Brand | Styleguide',
    category: 'Branding',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992038171-VVDBIUHQ4GH62U986JJK/Sistema+Grafico_4_TAPA.png',
  },
  {
    slug: 'hsm-highway',
    title: 'HSM Highway | Graphic Package',
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694430642534-0079P8W3VNHVK7IVEX0V/HW+La+Gira+%280-00-14-50%29.jpg',
  },
  {
    slug: 'lemon-brand-identity',
    title: 'Lemon | Brand Identity',
    category: 'Branding',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992038569-LO9KHJ0W6LAPTLYSV5IE/Lemon_transparent-09.png',
  },
  {
    slug: 'cliptastico-promo-package',
    title: 'Cliptastico | Promo Package',
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694439897695-VX4HIQ7X895BURAU5W5Y/Artboard+2.jpg',
  },
  {
    slug: 'copa-libertadores',
    title: 'Copa Libertadores & Sudamericana | Pitch',
    category: 'Motion',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694429217489-5QUUEMNMFN3WMBK24JZJ/Artboard+17-100.jpg',
  },
  {
    slug: 'simply-camera-ux-ui',
    title: 'Simply Camera | UX/UI',
    category: 'UX/UI',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036051-IBZ6BGOD8OVDFPE9CAVT/Simple+Camera_AVATAR-11.png',
  },
  {
    slug: 'frontend-dev',
    title: 'FrontEnd Dev | React - Firebase - Html - Css',
    category: 'Development',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694614011186-CPMD3O9XTWQO6RI9E33U/Entrega+01+-+Podcast.jpg',
  },
  {
    slug: 'smarthome-ux-ui',
    title: 'SmartHome UX/UI',
    category: 'UX/UI',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035715-WFDB5XTVKM45BFNL4S2R/SmartHome_Avatar-01.png',
  },
  {
    slug: 'disney-junior-logo',
    title: 'Disney Junior | Logo',
    category: 'Branding',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037163-UYZRRTQALISVMG3DP2ZH/DisneyJunior_AVATAR_Mesa+de+trabajo+1.png',
  },
  {
    slug: 'rainbow-vr-ar',
    title: 'Rainbow | VR / AR Commerce',
    category: 'UX/UI',
    image: 'https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694607395974-FDEIQ7YJWSOKW2TOVTIO/Artboard+1-100.jpg',
  },
]
