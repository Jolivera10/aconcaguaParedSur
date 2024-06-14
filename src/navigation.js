import { getPermalink} from './utils/permalinks';

export const headerData = {
  links: [
  
    
     
        {
          text: 'Expediciones',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Trekkings',
          href: getPermalink('/services'),
        },
        {
          text: 'Servicios',
          href: getPermalink('/servicescopy'),
        },
       
        {
          text: 'Nosotros',
          href: getPermalink('/homes/startup'),
        },
    
    {
      text: 'Aconcagua',
      href: getPermalink('/homes/saascopy'),
    },
    
    
  ],
  
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/aconcaguaparedsur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { ariaLabel: 'Gmail', icon: 'tabler:brand-gmail', href: '#' },
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ]

};

export const footerData = {
  links: [
    {
      title: 'Ayuda',
      links: [
        { text: 'Contáctenos', href: '/contact' },
        { text: 'Aconcagua', href: '' },
        { text: 'Politica de privacidad', href: '#' },
        { text: 'Términos y condiciones', href: '#' },
      ],
    },
    {
      title: 'Reviews',
      links: [
        { text: 'Google Reviews', href: '' },
        { text: 'Trip Advisor'},

      ],
    },
    {
      title: 'Acerca de',
      links: [
        { text: 'www.aconcaguaparedsur.com', href: '' },
        { text: 'Precios', href: '/pricing' },

      ],
    },
  ],
 
  
};
