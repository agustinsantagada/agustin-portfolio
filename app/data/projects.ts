export type BlockType = 'text' | 'images-full' | 'images-grid' | 'images-grid-4'

export interface Block {
  type: BlockType
  text?: string          // para type: 'text'
  images?: string[]      // para type: 'images-full' o 'images-grid'
}

export interface ProjectSection {
  title?: string
  blocks: Block[]
}

export interface Project {
  slug: string
  title: string
  category: string
  image: string
  description?: string
  role?: string
  year?: string
  client?: string
  sections?: ProjectSection[]
  videoUrl?: string
  link?: string
}

export const projects: Project[] = [
  {
    slug: 'reel-23',
    title: 'Reel | 23',
    category: 'Motion',
    image: '/images/Screenshot_2023-09-13_at_14.24.35.png',
    year: '2023',
    role: 'Art Direction, Motion Design',
    description: 'Motion reel showcasing 2023 work across broadcast, branding and digital media.',
    videoUrl: 'https://player.vimeo.com/video/1178413778?badge=0&autopause=0&player_id=0&app_id=58479',
  },
  {
    slug: 'google-growth-summit',
    title: 'Google | Growth Summit',
    category: 'Motion',
    image: '/images/Google Growth Summit/Google_avatar.jpg',
    year: '2022',
    client: 'Google',
    role: 'Art Direction, Design',
    description: 'We had the pleasure of participating in the Google Partners Growth Summit event, designing the graphic system. This event is one of the most relevant events worldwide connecting with Google senior leaders to explore how your organization can use Google to enhance and diversify your digital advertising.',
    sections: [
      {
        blocks: [
          { type: 'images-full', images: ['/images/Google Growth Summit/Google-02.png'] },
        ]
      },
      {
        title: 'Typography',
        blocks: [
          { type: 'images-grid', images: ['/images/Google Growth Summit/Google-06.png', '/images/Google Growth Summit/Google-07.png'] },
        ]
      },
      {
        title: 'Colors',
        blocks: [
          { type: 'images-grid', images: ['/images/Google Growth Summit/Google-08.png', '/images/Google Growth Summit/Google-09.png'] },
        ]
      },
      {
        title: 'Applications',
        blocks: [
          { type: 'images-full', images: ['/images/Google Growth Summit/Google-10.png'] },
          { type: 'images-grid', images: ['/images/Google Growth Summit/Google-15.png', '/images/Google Growth Summit/Google-18.png'] },
          { type: 'images-grid', images: ['/images/Google Growth Summit/Google-16.png', '/images/Google Growth Summit/Google-17.png'] },
        ]
      },
    ],
  },
  {
    slug: 'natgeo-kids-xmas',
    title: 'NatGeo Kids | Xmas',
    category: 'Motion',
    image: '/images/NatGeo Christmas/NatGeo Kids Navidad-04.png',
    year: '2020',
    client: 'NatGeo',
    role: 'Lead Visual Designer',
    description: 'We designed a special ID to promote the Christmas season on NatGeo Kids. The concept was to invent a Christmas dream machine, with lots of candy and toys.',
    sections: [
      {
        blocks: [
          { type: 'text', text: 'The visual elements were not only used in this ID, they were a 360 campaign which included social networks, banners and offline art. With this comprehensive approach, the NatGeo Kids Christmas promotion effectively captured the imagination of viewers and ignited their excitement for the holiday season.' },
          { type: 'images-full', images: ['/images/NatGeo Christmas/NatGeo Kids Navidad-03.png'] },
        ]
      },
      {
        title: 'Typography',
        blocks: [
          { type: 'images-grid', images: ['/images/NatGeo Christmas/NatGeo Kids Navidad-05.png', '/images/NatGeo Christmas/NatGeo Kids Navidad-06.png'] },
        ]
      },
      {
        title: 'Colors',
        blocks: [
          { type: 'images-grid', images: ['/images/NatGeo Christmas/NatGeo Kids Navidad-08.png', '/images/NatGeo Christmas/NatGeo Kids Navidad-09.png'] },
          { type: 'images-grid', images: ['/images/NatGeo Christmas/NatGeo Kids Navidad-10.png', '/images/NatGeo Christmas/NatGeo Kids Navidad-11.png'] },
          { type: 'images-grid', images: ['/images/NatGeo Christmas/NatGeo Kids Navidad-12.png', '/images/NatGeo Christmas/NatGeo Kids Navidad-13.png'] },
        ]
      },
      {
        title: 'Style',
        blocks: [
          { type: 'images-full', images: ['/images/NatGeo Christmas/NatGeo Kids Navidad-04.png'] },
        ]
      },
      {
        title: 'Renders',
        blocks: [
          { type: 'images-full', images: ['/images/NatGeo Christmas/ESC_A_0442.png'] },
          { type: 'images-grid', images: ['/images/NatGeo Christmas/NatGeo Kids Navidad-14.png', '/images/NatGeo Christmas/NatGeo Kids Navidad-15.png'] },
          { type: 'images-grid', images: ['/images/NatGeo Christmas/NatGeo Kids Navidad-16.png', '/images/NatGeo Christmas/NatGeo Kids Navidad-07.png'] },
        ]
      },
    ],
  },
  {
    slug: 'disney-channel-logo',
    title: 'Disney Channel | Logo',
    category: 'Branding',
    image: '/images/Disney Channel Logos/DisneyChannel_Logos-02.png',
    year: '2021',
    client: 'Disney',
    role: 'Lead Visual Designer',
    description: 'The proposed redesign of the Disney Channel logo takes a bold and dynamic approach, infusing the brand with a burst of modernity and energy. The logo features a sleek and contemporary font that balances sophistication with a sense of fun.',
    sections: [
      {
        blocks: [
          { type: 'text', text: 'The color palette takes a departure from the traditional Disney colors, embracing a range of vibrant fluorescent hues. The background is an electrifying neon blue, representing innovation and excitement. The word "Disney" is rendered in a striking neon green, symbolizing growth and fresh perspectives.' },
          { type: 'images-full', images: ['/images/Disney Channel Logos/DisneyChannel_Logos_1-02.png'] },
        ]
      },
      {
        title: 'Problems',
        blocks: [
          { type: 'text', text: 'Over time, design trends change, and a logo that once felt fresh and modern might start to look outdated. An old logo could have lost its visual appeal and failed to resonate with modern audiences. If Disney Channel underwent rebranding efforts, the old logo might not have aligned with these changes.' },
          { type: 'images-grid', images: ['/images/Disney Channel Logos/DisneyChannel_Logos-03.png', '/images/Disney Channel Logos/DisneyChannel_Logos-04.png'] },
        ]
      },
      {
        title: 'Logos',
        blocks: [
          { type: 'text', text: 'The proposed Disney Channel logo redesign with new and fluorescent colors injects the brand with a burst of contemporary flair. The vibrant hues and dynamic typography capture the essence of a channel that\'s always on the cutting edge of entertainment.' },
          { type: 'images-grid', images: ['/images/Disney Channel Logos/DisneyChannel_Logos-05.png', '/images/Disney Channel Logos/DisneyChannel_Logos-06.png'] },
          { type: 'images-grid', images: ['/images/Disney Channel Logos/DisneyChannel_Logos-07.png', '/images/Disney Channel Logos/DisneyChannel_Logos-08.png'] },
          { type: 'images-full', images: ['/images/Disney Channel Logos/DisneyChannel_Logos-09.png'] },
          { type: 'images-full', images: ['/images/Disney Channel Logos/LOGO DISNEY CHANNEL-02.png'] },
        ]
      },
    ],
  },
  {
    slug: 'bahamas-identity',
    title: 'Bahamas | Identity',
    category: 'Branding',
    image: '/images/Bahamas/Bahamas-02.png',
    year: '2019',
    role: 'Art Direction, Branding',
    description: 'They needed to refresh their brand. So, we did the new visual identity development for the island of Bahamas. Something colorful, fresh, inspired by nature, full of life.',
    sections: [
      {
        title: 'State of Mind',
        blocks: [
          { type: 'text', text: 'The Bahamas is a country located in the Atlantic Ocean, consisting of over 700 islands and cays, situated southeast of Florida and north of Cuba. Known for its beautiful beaches, crystal clear waters, and year-round warm weather, making it a popular tourist destination.' },
          { type: 'images-full', images: ['/images/Bahamas/Bahamas-08.png'] },
          { type: 'images-full', images: ['/images/Bahamas/Bahamas-30.png'] },
        ]
      },
      {
        title: 'Typography & Colors',
        blocks: [
          { type: 'images-grid', images: ['/images/Bahamas/Bahamas-19.png', '/images/Bahamas/Bahamas-20.png'] },
          { type: 'images-grid', images: ['/images/Bahamas/Bahamas-21.png', '/images/Bahamas/Bahamas-22.png'] },
        ]
      },
      {
        title: 'Styleguide',
        blocks: [
          { type: 'text', text: 'The new branding for the Bahamas is a captivating blend of modern luxury and authentic island charm. It invites travelers to embark on a journey of discovery, where the allure of the turquoise waters and the warmth of the Bahamian hospitality create unforgettable experiences.' },
        ]
      },
      {
        title: 'Photography',
        blocks: [
          { type: 'images-grid', images: ['/images/Bahamas/Bahamas-13.png', '/images/Bahamas/Bahamas-14.png'] },
          { type: 'images-grid', images: ['/images/Bahamas/Bahamas-15.png', '/images/Bahamas/Bahamas-16.png'] },
          { type: 'images-grid', images: ['/images/Bahamas/Bahamas-17.png', '/images/Bahamas/Bahamas-18.png'] },
        ]
      },
      {
        title: 'Mockups',
        blocks: [
          { type: 'images-grid', images: ['/images/Bahamas/Bahamas-29.png', '/images/Bahamas/Bahamas-27.png'] },
          { type: 'images-grid', images: ['/images/Bahamas/Bahamas-28.png', '/images/Bahamas/Bahamas-26.png'] },
          { type: 'images-grid', images: ['/images/Bahamas/Bahamas-11.png', '/images/Bahamas/Bahamas-09.png'] },
          { type: 'images-grid', images: ['/images/Bahamas/Bahamas-12.png', '/images/Bahamas/Bahamas-10.png'] },
        ]
      },
    ],
  },
  {
    slug: 'mareth-restaurant',
    title: 'Mareth | Restaurant',
    category: 'Branding',
    image: '/images/Mareth/Mareth-0.png',
    year: '2022',
    role: 'Art Direction, Branding',
    description: 'The new brand identity for Mareth Fish Boutique encapsulates the essence of Greek coastal cuisine and the mesmerizing allure of Mykonos.',
    sections: [
      {
        blocks: [
          { type: 'images-full', images: ['/images/Mareth/Mareth-02.png'] },
        ]
      },
      {
        title: 'Typography',
        blocks: [
          { type: 'text', text: 'The typography is a harmonious blend of classic and modern elements. A sophisticated serif font represents the elegance of the restaurant, while a contemporary sans-serif font adds a touch of freshness. The combination captures both the restaurant\'s commitment to tradition and its innovative approach to fish cuisine.' },
          { type: 'images-full', images: ['/images/Mareth/Mareth-03.png'] },
        ]
      },
      {
        title: 'Colors',
        blocks: [
          { type: 'text', text: 'The color palette draws inspiration from the vivid colors of the Mykonos landscape. Crisp whites, shades of blue reminiscent of the sea and sky, and soft sandy tones reflect the natural beauty of the island. Accents of warm coral and gold highlight the rich flavors and culinary experiences that await.' },
          { type: 'images-grid', images: ['/images/Mareth/Mareth-04.png', '/images/Mareth/Mareth-06.png'] },
        ]
      },
      {
        title: 'Imagery',
        blocks: [
          { type: 'text', text: 'The brand imagery showcases breathtaking seascapes, tantalizing seafood platters, and moments of conviviality among diners. These images capture the ambiance of Mareth Fish Boutique, from the sun-drenched terraces to the intimate interiors.' },
          { type: 'images-grid', images: ['/images/Mareth/Mareth-08.png', '/images/Mareth/Mareth-07.png'] },
          { type: 'images-grid', images: ['/images/Mareth/Mareth-10.png', '/images/Mareth/Mareth-09.png'] },
        ]
      },
      {
        title: 'Menu Design',
        blocks: [
          { type: 'text', text: 'Menus are designed with a blend of artistic creativity and practicality. Inspired by nautical charts, the menu layout features subtle seafaring motifs and elegant typography, making it a visual delight while offering easy navigation of the delectable offerings.' },
          { type: 'images-grid', images: ['/images/Mareth/Mareth-11.png', '/images/Mareth/Mareth-12.png'] },
          { type: 'images-grid', images: ['/images/Mareth/Mareth-13.png', '/images/Mareth/Mareth-14.png'] },
          { type: 'images-grid', images: ['/images/Mareth/Mareth-15.png', '/images/Mareth/Mareth-17.png'] },
          { type: 'images-grid', images: ['/images/Mareth/Mareth-18.png', '/images/Mareth/Mareth-19.png'] },
          { type: 'images-grid', images: ['/images/Mareth/Mareth-20.png', '/images/Mareth/Mareth-21.png'] },
          { type: 'images-full', images: ['/images/Mareth/Mareth-22.png'] },
        ]
      },
    ],
  },
  {
    slug: 'mercadolibre-ux-ui',
    title: 'MercadoLibre | UX/UI',
    category: 'UX/UI',
    image: '/images/Mercadolibre/Behance_responsive-02.png',
    year: '2021',
    client: 'MercadoLibre',
    role: 'UX/UI Design',
    description: 'New simpler, more agile and modern user interface having everything on screen to access faster — adding features such as purchase tracking from home, simplified user profile, and lists to share with whoever you like.',
    sections: [
      {
        title: 'Cards',
        blocks: [
          { type: 'text', text: 'The new cards allow focusing and ordering all the information for the user to find and make better and intuitive use of the interface being more direct and simple for the end user.' },
          { type: 'images-full', images: ['/images/Mercadolibre/Behance_responsive-03.png'] },
        ]
      },
      {
        title: 'Less is More',
        blocks: [
          { type: 'text', text: 'Simplicity of lines and less weight favoring the fast reading and the importance on the screen.' },
          { type: 'images-grid', images: ['/images/Mercadolibre/Behance_responsive-04.png', '/images/Mercadolibre/Behance_responsive-05.png'] },
        ]
      },
      {
        title: 'Colors',
        blocks: [
          { type: 'text', text: 'New colors to reach everything quickly.' },
          { type: 'images-full', images: ['/images/Mercadolibre/Behance_responsive-06.png'] },
        ]
      },
      {
        title: 'Listing',
        blocks: [
          { type: 'text', text: 'The expected lists have arrived so that you can add the products that you like the most and be able to share it with whoever you like the most.' },
          { type: 'images-grid', images: ['/images/Mercadolibre/Behance_responsive-07.png', '/images/Mercadolibre/Behance_responsive-08.png'] },
        ]
      },
      {
        title: 'My Profile',
        blocks: [
          { type: 'text', text: 'Simply, easy to use and clean.' },
          { type: 'images-full', images: ['/images/Mercadolibre/Behance_responsive-10.png'] },
        ]
      },
    ],
  },
  {
    slug: 'nike-sb-green-power',
    title: 'Nike SB | Green Power',
    category: 'Branding',
    image: '/images/Nike SB GreenPower/Nike_Greenpower_behance-05.png',
    year: '2020',
    client: 'Nike',
    role: 'Art Direction, Design',
    description: 'The poster "Green Power" embodies the essence of Nike SB\'s shoes in a striking visual representation. A massive, ethereal hand, reminiscent of nature\'s strength, cradles a Nike SB shoe, showcasing the brand\'s commitment to eco-conscious design.',
    sections: [
      {
        title: 'Typography',
        blocks: [
          { type: 'text', text: 'The typography is minimalistic, allowing the imagery to take center stage. A sleek, modern font is used for a succinct tagline that complements the concept, emphasizing the fusion of style and eco-consciousness.' },
          { type: 'images-full', images: ['/images/Nike SB GreenPower/Nike_Greenpower_behance-04.png'] },
        ]
      },
      {
        title: 'Colors',
        blocks: [
          { type: 'text', text: 'The color palette predominantly features shades of green, representing growth, renewal, and sustainability. The white background accentuates the shoe\'s design details and provides contrast to the vibrant green hues.' },
          { type: 'images-grid', images: ['/images/Nike SB GreenPower/Nike_Greenpower_behance-05.png', '/images/Nike SB GreenPower/Nike_Greenpower_behance-06.png'] },
          { type: 'images-grid', images: ['/images/Nike SB GreenPower/Nike_Greenpower_behance-07.png', '/images/Nike SB GreenPower/Nike_Greenpower_behance-08.png'] },
          { type: 'images-full', images: ['/images/Nike SB GreenPower/Nike_Greenpower_behance-09.png'] },
        ]
      },
    ],
  },
  {
    slug: 'gsw-champions-22',
    title: 'GSW | Champions 22',
    category: 'Motion',
    image: '/images/GSW Champions 22/Curry-04.png',
    year: '2022',
    role: 'Art Direction, Motion Design',
    description: 'The graphic proposal for celebrating the Golden State Warriors\' victory as the 2022 champions is a visual feast that captures the team\'s triumphant journey to glory.',
    sections: [
      {
        blocks: [
          { type: 'images-grid', images: ['/images/GSW Champions 22/Curry-02.png', '/images/GSW Champions 22/Curry-03.png'] },
        ]
      },
      {
        title: 'Symbols',
        blocks: [
          { type: 'text', text: 'At the heart of the design, the iconic Golden State Warriors logo stands tall, glistening in a radiant gold hue. The logo is surrounded by a burst of celebratory confetti, representing the joy and excitement of their victory.' },
          { type: 'images-grid', images: ['/images/GSW Champions 22/Curry-14.png', '/images/GSW Champions 22/Curry-15.png'] },
          { type: 'images-full', images: ['/images/GSW Champions 22/Curry-05.png'] },
        ]
      },
      {
        title: 'Identity',
        blocks: [
          { type: 'text', text: 'Incorporated into the design are action shots of key moments from the championship games, capturing the intensity and emotion of the players\' performances. The images showcase both teamwork and individual brilliance.' },
          { type: 'images-grid', images: ['/images/GSW Champions 22/Curry-10.png', '/images/GSW Champions 22/Curry-11.png'] },
          { type: 'images-grid', images: ['/images/GSW Champions 22/Curry-12.png', '/images/GSW Champions 22/Curry-13.png'] },
        ]
      },
    ],
  },
  {
    slug: 'colablearn-ux-ui',
    title: 'Colablearn | UX/UI',
    category: 'UX/UI',
    image: '/images/Colablearn/Colablearn-01.png',
    year: '2022',
    role: 'UX/UI Design',
    description: 'ColaLearn is a cutting-edge educational app designed to transform the way people learn by offering a personalized and immersive virtual classroom experience.',
    sections: [
      {
        title: 'Problems',
        blocks: [
          { type: 'text', text: 'Waste time. Travel issues or long distance. Difficult to take classes.' },
        ]
      },
      {
        title: 'Solutions',
        blocks: [
          { type: 'text', text: 'Time saving. Learn by your own way. Wherever you are.' },
          { type: 'images-full', images: ['/images/Colablearn/open.png'] },
        ]
      },
      {
        title: 'User Persona',
        blocks: [
          { type: 'text', text: 'ColaLearn\'s user personas are carefully crafted to represent a diverse range of learners — from high school students eager to excel, to working adults keen on upskilling, to retirees exploring new hobbies. These personas guide development to ensure the app caters to various learning preferences.' },
        ]
      },
      {
        title: 'Logo',
        blocks: [
          { type: 'images-grid', images: ['/images/Colablearn/Colablearn-06.png', '/images/Colablearn/Colablearn-07.png'] },
        ]
      },
      {
        title: 'User Flow',
        blocks: [
          { type: 'text', text: 'The customer journey of ColaLearn is centered around user convenience and engagement. From the moment users download the app, they are welcomed with a user-friendly onboarding process that helps tailor the app to their preferences and learning goals.' },
          { type: 'images-full', images: ['/images/Colablearn/Colablearn-03.png'] },
        ]
      },
      {
        title: 'Wireframes',
        blocks: [
          { type: 'images-full', images: ['/images/Colablearn/Colablearn-02.png'] },
        ]
      },
      {
        title: 'UI Kit',
        blocks: [
          { type: 'images-full', images: ['/images/Colablearn/Colablearn-04.png'] },
        ]
      },
      {
        title: 'Typography & Colors',
        blocks: [
          { type: 'images-full', images: ['/images/Colablearn/Colablearn-05.png'] },
        ]
      },
      {
        title: 'Journey',
        blocks: [
          { type: 'images-grid', images: ['/images/Colablearn/Colablearn-10.png', '/images/Colablearn/Colablearn-11.png'] },
        ]
      },
    ],
  },
  {
    slug: 'nike-by-you',
    title: 'Nike | by You',
    category: 'Branding',
    image: '/images/Nike SB Levitate/Nike_livitate_avatar.png',
    year: '2021',
    client: 'Nike',
    role: 'Art Direction, Design',
    description: 'The drawing depicts a custom-designed Nike SB shoe, created through the "Nike By You" customization platform, featuring a distinctive pair of wings that symbolize both style and freedom.',
    sections: [
      {
        blocks: [
          { type: 'images-full', images: ['/images/Nike SB Levitate/Nike_SB_Behance-01.png'] },
        ]
      },
      {
        title: 'Colors',
        blocks: [
          { type: 'text', text: 'The color palette is vibrant and diverse, showcasing the multitude of color choices available through the customization process. The shoe\'s hues represent the wearer\'s unique taste and personality.' },
          { type: 'images-grid', images: ['/images/Nike SB Levitate/Nike_SB_Behance-03.png', '/images/Nike SB Levitate/Nike_SB_Behance-04.png'] },
          { type: 'images-grid', images: ['/images/Nike SB Levitate/Nike_SB_Behance-05.png', '/images/Nike SB Levitate/Nike_SB_Behance-06.png'] },
          { type: 'images-grid', images: ['/images/Nike SB Levitate/Nike_SB_Behance-07.png', '/images/Nike SB Levitate/Nike_SB_Flight.png'] },
        ]
      },
    ],
  },
  {
    slug: 'lia-aerospace-styleguide',
    title: 'LIA Aerospace | Styleguide',
    category: 'Branding',
    image: '/images/Lia/LIA AVATAR.png',
    year: '2022',
    role: 'Art Direction, Branding',
    description: 'This brand encapsulates the spirit of innovation, dedication, and forward-thinking that defines this Argentine startup. LIA solutions is poised to soar to new heights, revolutionizing the aerospace industry with its cutting-edge approach.',
    sections: [
      {
        blocks: [
          { type: 'images-full', images: ['/images/Lia/LiaAerospace-02.png'] },
          { type: 'images-full', images: ['/images/Lia/LiaAerospace-03.png'] },
          { type: 'images-grid', images: ['/images/Lia/LiaAerospace-04.png', '/images/Lia/LiaAerospace-05.png'] },
          { type: 'images-grid', images: ['/images/Lia/LiaAerospace-06.png', '/images/Lia/LiaAerospace-07.png'] },
        ]
      },
    ],
  },
  {
    slug: 'kikely-brand-styleguide',
    title: 'Kikely Brand | Styleguide',
    category: 'Branding',
    image: '/images/Kikely/Sistema Grafico_4_TAPA.png',
    year: '2021',
    role: 'Art Direction, Branding',
    description: 'Nordik Living is a fresh and exciting furniture brand by Kikely, dedicated to crafting furniture pieces that seamlessly blend modern design aesthetics with the cozy and inviting charm of Nordic influences.',
    sections: [
      {
        blocks: [
          { type: 'text', text: 'Our mission was to create a new stunning brand and elegant design to wrap the 360 campaigns and customer journey until the new bed, chair or table is in their home.' },
          { type: 'images-full', images: ['/images/Kikely/Sistema Grafico_4_LOGO PPAL.png'] },
        ]
      },
      {
        title: 'Color & Typography',
        blocks: [
          { type: 'images-full', images: ['/images/Kikely/Kikely-05.png'] },
        ]
      },
      {
        title: 'Miscellaneous',
        blocks: [
          { type: 'images-grid', images: ['/images/Kikely/Kikely-04.png', '/images/Kikely/Kikely-06.png'] },
          { type: 'images-full', images: ['/images/Kikely/GARAGE SALE O CATEGORIA MESAS.jpg'] },
        ]
      },
      {
        title: 'Applications',
        blocks: [
          { type: 'images-grid', images: ['/images/Kikely/Kikely-12.png', '/images/Kikely/Kikely-09.png'] },
          { type: 'images-grid', images: ['/images/Kikely/Kikely-10.png', '/images/Kikely/Kikely-07.png'] },
          { type: 'images-grid', images: ['/images/Kikely/Kikely-08.png', '/images/Kikely/Kikely-11.png'] },
        ]
      },
    ],
  },
  {
    slug: 'lemon-brand-identity',
    title: 'Lemon | Brand Identity',
    category: 'Branding',
    image: '/images/Lemon/Lemon_transparent-09.png',
    year: '2022',
    role: 'Art Direction, Branding',
    description: 'Lemon, a pioneering fintech company at the forefront of the cryptocurrency revolution in Latin America, unveils a new brand identity that resonates with its commitment to transparency, innovation, and financial empowerment.',
    sections: [
      {
        blocks: [
          { type: 'text', text: 'Lemon\'s messaging revolves around accessibility, security, and education. The company communicates its commitment to providing intuitive crypto solutions that empower users, while also offering resources to enhance financial literacy in the crypto space.' },
          { type: 'images-grid', images: ['/images/Lemon/Lemon-03.png', '/images/Lemon/Lemon-04.png'] },
          { type: 'images-grid', images: ['/images/Lemon/Lemon-05.png', '/images/Lemon/Lemon-06.png'] },
          { type: 'images-full', images: ['/images/Lemon/Lemon-07.png'] },
          { type: 'images-grid', images: ['/images/Lemon/Lemon_transparent-13.png', '/images/Lemon/Lemon_transparent-14.png'] },
          { type: 'images-grid', images: ['/images/Lemon/Lemon_transparent-15.png', '/images/Lemon/Lemon_transparent-16.png'] },
          { type: 'images-grid', images: ['/images/Lemon/Lemon_transparent-17.png', '/images/Lemon/Lemon_transparent-18.png'] },
        ]
      },
    ],
  },
  {
    slug: 'copa-libertadores',
    title: 'Copa Libertadores & Sudamericana | Pitch',
    category: 'Motion',
    image: '/images/Copa Libertadores/Copas-01.png',
    year: '2017',
    role: 'Art Direction, Motion Design',
    description: 'The Copa Libertadores and Sudamericana tournaments hold a special place in the hearts of football fans across South America and beyond. To keep these tournaments at the forefront of the global football stage, a refresh of their logos and graphics is in order.',
    sections: [
      {
        blocks: [
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-02.png', '/images/Copa Libertadores/Copas-03.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-04.png', '/images/Copa Libertadores/Copas-05.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-06.png', '/images/Copa Libertadores/Copas-07.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-08.png', '/images/Copa Libertadores/Copas-09.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-10.png', '/images/Copa Libertadores/Copas-11.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-12.png', '/images/Copa Libertadores/Copas-13.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-14.png', '/images/Copa Libertadores/Copas-15.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-16.png', '/images/Copa Libertadores/Copas-17.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-18.png', '/images/Copa Libertadores/Copas-19.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-20.png', '/images/Copa Libertadores/Copas-21.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-22.png', '/images/Copa Libertadores/Copas-23.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-24.png', '/images/Copa Libertadores/Copas-25.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-26.png', '/images/Copa Libertadores/Copas-27.png'] },
          { type: 'images-grid', images: ['/images/Copa Libertadores/Copas-28.png', '/images/Copa Libertadores/Copas-29.png'] },
          { type: 'images-full', images: ['/images/Copa Libertadores/Copas-30.png'] },
        ]
      },
    ],
  },
  {
    slug: 'simply-camera-ux-ui',
    title: 'Simply Camera | UX/UI',
    category: 'UX/UI',
    image: '/images/Simple Camera/Simple Camera_AVATAR-11.png',
    year: '2022',
    role: 'UX/UI Design',
    description: 'Introducing Simply Camera, a revolutionary camera app designed to bring back the essence of real photography in the digital age. In a world flooded with filters and complex features, Simply Camera is a breath of fresh air.',
    sections: [
      {
        title: 'Problem',
        blocks: [
          { type: 'text', text: 'Time, filters and NOT real people. This app offers only a camera button to take your favourite photo with regular light, no filters and the best pictures in town.' },
        ]
      },
      {
        title: 'Solution',
        blocks: [
          { type: 'text', text: 'Everyday Photography: Whether it\'s a spontaneous smile, a breathtaking landscape, or a cherished memory, SimplyCamera is the go-to app for capturing real-life moments. Realists who appreciate unfiltered, genuine imagery and on-the-go photographers who want a camera app ready in an instant.' },
        ]
      },
      {
        title: 'Colors',
        blocks: [
          { type: 'text', text: 'The color palette reflects its minimalistic and authentic approach. Clean whites and calming neutrals dominate the interface, creating a soothing canvas. Subtle accents of muted blues and greys add a touch of modernity and sophistication.' },
          { type: 'images-full', images: ['/images/Simple Camera/Simple Camera-07.png'] },
        ]
      },
      {
        title: 'User Flow',
        blocks: [
          { type: 'text', text: 'Capture: Users tap the central "Capture" button. Image Review: After capturing, users are shown the result. Save or Share: Users can save the photo or share it directly to social media or messaging apps.' },
          { type: 'images-full', images: ['/images/Simple Camera/Simple Camera-04.png'] },
        ]
      },
      {
        title: 'Wireframe',
        blocks: [
          { type: 'images-full', images: ['/images/Simple Camera/Simple Camera-05.png'] },
        ]
      },
      {
        title: 'UI Kit',
        blocks: [
          { type: 'text', text: 'The Simply Camera UI Kit is a thoughtfully designed collection of user interface elements that perfectly encapsulate the essence of the app — simplicity, authenticity, and efficiency.' },
          { type: 'images-full', images: ['/images/Simple Camera/Simple Camera-06.png'] },
          { type: 'images-grid', images: ['/images/Simple Camera/Simple Camera-08.png', '/images/Simple Camera/Simple Camera-09.png'] },
          { type: 'images-full', images: ['/images/Simple Camera/Simple Camera-10.png'] },
        ]
      },
    ],
  },
  {
    slug: 'frontend-dev',
    title: 'FrontEnd Dev | React - Firebase - Html - Css',
    category: 'Development',
    image: '/images/Desarrollo/Entrega_01_-_Podcast.jpg',
    year: '2023',
    role: 'Frontend Development',
    description: 'Four different projects showing my skills with HTML, CSS and React.',
    sections: [
      {
        title: 'Podcast Website',
        blocks: [
          { type: 'text', text: 'Built to practice HTML5 and CSS, challenging mobile and desktop layouts.' },
          { type: 'images-full', images: ['/images/Desarrollo/Entrega_01_-_Podcast.jpg'] },
        ]
      },
      {
        title: 'GIF Search',
        blocks: [
          { type: 'text', text: 'This project uses the GIPHY API for searches, adding a Dark Mode feature. Built with HTML5, CSS, GIPHY API, and React.' },
        ]
      },
      {
        title: 'Hotel Site',
        blocks: [
          { type: 'text', text: 'Built to practice iteration methods in React (Filter, Map). Allows selection between 4 countries, room size, price and date. Built with HTML5, CSS, and React.' },
        ]
      },
      {
        title: 'Tweets Site',
        blocks: [
          { type: 'text', text: 'A full stack site to dev front and back, using React and Firebase to create and admin the database. Includes Firebase authentication rules and environment variables.' },
        ]
      },
    ],
    link: 'https://podcastweb.netlify.app',
  },
  {
    slug: 'smarthome-ux-ui',
    title: 'SmartHome UX/UI',
    category: 'UX/UI',
    image: '/images/SmartHome/SmartHome_Avatar-01.png',
    year: '2021',
    role: 'UX/UI Design',
    description: 'SmartLife is an innovative app designed to seamlessly control all your intelligent home devices with ease and efficiency. SmartLife unifies the control of these devices into one intuitive interface.',
    sections: [
      {
        title: 'Problem',
        blocks: [
          { type: 'text', text: 'The app tackles the complexity of managing a variety of smart devices from different manufacturers. SmartLife unifies the control of these devices into one intuitive interface, eliminating the need to switch between multiple apps.' },
        ]
      },
      {
        title: 'Solution',
        blocks: [
          { type: 'images-grid', images: ['/images/SmartHome/SmartHome-13.png', '/images/SmartHome/SmartHome-14.png'] },
        ]
      },
      {
        title: 'User Persona',
        blocks: [
          { type: 'text', text: 'An individual in their late 20s, tech-savvy, and always on the lookout for ways to streamline their busy lifestyle. Intrigued by the concept of a smart home but overwhelmed by the hassle of managing multiple device apps.' },
        ]
      },
      {
        title: 'User Flow',
        blocks: [
          { type: 'text', text: 'Device Setup → Dashboard Access → Device Control → Scenarios and Automations → User-Friendly Alerts.' },
          { type: 'images-full', images: ['/images/SmartHome/SmartHome-05.png'] },
        ]
      },
      {
        title: 'UI Kit',
        blocks: [
          { type: 'text', text: 'Clean Cards, Consistent Icons, and Intuitive Navigation. A bottom navigation bar with icons allows effortless movement between the dashboard, scenarios, automations, and settings.' },
          { type: 'images-full', images: ['/images/SmartHome/SmartHome-06.png'] },
          { type: 'images-grid', images: ['/images/SmartHome/SmartHome-07.png', '/images/SmartHome/SmartHome-08.png'] },
        ]
      },
      {
        title: 'Wireframe',
        blocks: [
          { type: 'images-grid', images: ['/images/SmartHome/SmartHome-10.png', '/images/SmartHome/SmartHome-11.png'] },
          { type: 'images-full', images: ['/images/SmartHome/SmartHome-12.png'] },
        ]
      },
    ],
  },
  {
    slug: 'disney-junior-logo',
    title: 'Disney Junior | Logo',
    category: 'Branding',
    image: '/images/DisneyJunior Logos/DisneyJunior_AVATAR_Mesa de trabajo 1.png',
    year: '2021',
    client: 'Disney',
    role: 'Lead Visual Designer',
    description: 'The new Disney Junior logo embraces a fresh and modern approach while maintaining the beloved essence of the brand.',
    sections: [
      {
        title: 'Why We Need to Change',
        blocks: [
          { type: 'text', text: 'The previous logo might have been too intricate with its fine details. This complexity could make it less adaptable to different mediums and sizes. The color palette might not have been as vibrant and attention-grabbing as needed for a children\'s brand.' },
          { type: 'images-full', images: ['/images/DisneyJunior Logos/DisneyJunior_Logos-02.png'] },
        ]
      },
      {
        title: 'Logos',
        blocks: [
          { type: 'text', text: 'The proposed Disney Junior logo redesign captures the essence of childhood wonder and creativity through its inviting colors, approachable font, and subtle Disney reference. A delightful update that appeals to both young audiences and their nostalgic parents.' },
          { type: 'images-grid', images: ['/images/DisneyJunior Logos/DisneyJunior_Logos-03.png', '/images/DisneyJunior Logos/DisneyJunior_Logos-04.png'] },
          { type: 'images-grid', images: ['/images/DisneyJunior Logos/DisneyJunior_Logos-05.png', '/images/DisneyJunior Logos/DisneyJunior_Logos-06.png'] },
          { type: 'images-grid', images: ['/images/DisneyJunior Logos/DisneyJunior_Logos-07.png', '/images/DisneyJunior Logos/DisneyJunior_Logos-08.png'] },
          { type: 'images-full', images: ['/images/DisneyJunior Logos/DisneyJunior_Logos-09.png'] },
        ]
      },
    ],
  },
  {
    slug: 'gaudi-identity',
    title: 'Gaudí | Brand Identity',
    category: 'Branding',
    image: '/images/Gaudi/GAUDI-01.png',
    year: '2022',
    role: 'Art Direction, Branding',
    description: 'Brand identity inspired by the iconic work of Antoni Gaudí. A visual system capturing the essence of organic architecture, mosaic patterns and the unmistakable aesthetic of Barcelona\'s most celebrated architect.',
    sections: [
      {
        blocks: [
          { type: 'images-grid', images: ['/images/Gaudi/GAUDI-02.png', '/images/Gaudi/GAUDI-03.png'] },
          { type: 'images-grid', images: ['/images/Gaudi/GAUDI-04.png', '/images/Gaudi/GAUDI-05.png'] },
          { type: 'images-grid', images: ['/images/Gaudi/GAUDI-06.png', '/images/Gaudi/GAUDI-07.png'] },
          { type: 'images-grid', images: ['/images/Gaudi/GAUDI-08.png', '/images/Gaudi/GAUDI-09.png'] },
          { type: 'images-grid', images: ['/images/Gaudi/GAUDI-10.png', '/images/Gaudi/GAUDI-11.png'] },
          { type: 'images-grid', images: ['/images/Gaudi/GAUDI-12.png', '/images/Gaudi/GAUDI-13.png'] },
          { type: 'images-grid', images: ['/images/Gaudi/GAUDI-14.png', '/images/Gaudi/GAUDI-15.png'] },
          { type: 'images-full', images: ['/images/Gaudi/GAUDI-16.png'] },
        ]
      },
      {
        title: 'Placas',
        blocks: [
          { type: 'images-grid', images: ['/images/Gaudi/Placas_Gaudi-01.jpg', '/images/Gaudi/Placas_Gaudi-02.jpg'] },
          { type: 'images-grid', images: ['/images/Gaudi/Placas_Gaudi-03.jpg', '/images/Gaudi/Placas_Gaudi-04.jpg'] },
          { type: 'images-grid', images: ['/images/Gaudi/Placas_Gaudi-05.jpg', '/images/Gaudi/Placas_Gaudi-06.jpg'] },
          { type: 'images-grid', images: ['/images/Gaudi/Placas_Gaudi-07.jpg', '/images/Gaudi/Placas_Gaudi-08.jpg'] },
          { type: 'images-full', images: ['/images/Gaudi/Placas_Gaudi-09.jpg'] },
        ]
      },
    ],
  },
  {
    slug: 'nulinga-brand',
    title: 'Nulinga | Brand Identity',
    category: 'Branding',
    image: '/images/Nulinga/nulinga-01.png',
    year: '2023',
    role: 'Art Direction, Branding',
    description: 'Complete brand identity and visual system for Nulinga. A comprehensive styleguide covering logo, typography, color system, and digital applications.',
    sections: [
      {
        blocks: [
          { type: 'images-grid', images: ['/images/Nulinga/nulinga-02.png', '/images/Nulinga/nulinga-03.png'] },
          { type: 'images-grid', images: ['/images/Nulinga/nulinga-04.png', '/images/Nulinga/nulinga-05.png'] },
          { type: 'images-grid', images: ['/images/Nulinga/nulinga-06.png', '/images/Nulinga/nulinga-07.png'] },
          { type: 'images-grid', images: ['/images/Nulinga/nulinga-08.png', '/images/Nulinga/nulinga-09.png'] },
          { type: 'images-grid', images: ['/images/Nulinga/nulinga-10.png', '/images/Nulinga/nulinga-11.png'] },
          { type: 'images-grid', images: ['/images/Nulinga/nulinga-12.png', '/images/Nulinga/nulinga-13.png'] },
          { type: 'images-grid', images: ['/images/Nulinga/nulinga-14.png', '/images/Nulinga/nulinga-15.png'] },
        ]
      },
      {
        title: 'COM',
        blocks: [
          { type: 'images-grid', images: ['/images/Nulinga/NulingaCOM-01.png', '/images/Nulinga/NulingaCOM-02.png'] },
          { type: 'images-grid', images: ['/images/Nulinga/NulingaCOM-03.png', '/images/Nulinga/NulingaCOM-04.png'] },
          { type: 'images-grid', images: ['/images/Nulinga/NulingaCOM-05.png', '/images/Nulinga/NulingaCOM-06.png'] },
        ]
      },
      {
        title: 'Web',
        blocks: [
          { type: 'images-grid', images: ['/images/Nulinga/web_empresa_Onboarding-01.png', '/images/Nulinga/web_empresa_Onboarding-02.png'] },
          { type: 'images-grid', images: ['/images/Nulinga/web_empresa_Onboarding-03.png', '/images/Nulinga/web_empresa_Onboarding-04.png'] },
        ]
      },
    ],
  },
  {
    slug: 'activity-kids',
    title: 'Activity Kids | Brand',
    category: 'Branding',
    image: '/images/Activity Kids/ACTIVITY KIDS_ABAD-Mesa de trabajo 1.png',
    year: '2022',
    role: 'Art Direction, Branding',
    description: 'Complete brand identity for Activity Kids, a children\'s activity and entertainment brand. A vibrant and playful visual system designed to connect with kids and parents alike.',
    sections: [
      {
        blocks: [
          { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-01.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-02.png'] },
          { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-03.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-04.png'] },
          { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-05.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-06.png'] },
          { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-07.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-08.png'] },
          { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-09.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-10.png'] },
          { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-11.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-12.png'] },
          { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-13.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-14.png'] },
          { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-15.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-16.png'] },
          { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-17.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-18.png'] },
          { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-19.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-20.png'] },
          { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-21.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-22.png'] },
          { type: 'images-full', images: ['/images/Activity Kids/ACTIVITY KIDS-06.png'] },
        ]
      },
    ],
  },
]
