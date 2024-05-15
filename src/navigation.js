import { getPermalink} from './utils/permalinks';

export const headerData = {
  links: [
  
    {
      text: 'Oferta',
      links: [
        {
          text: 'Expediciones',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Trekkings',
          href: getPermalink(''),
        },
        {
          text: 'Servicios',
          href: getPermalink(''),
        },
       
      ],
    },
    {
      text: 'Aconcagua',
      href: getPermalink(''),
    },
    {
      text: 'Nosotros',
      href: getPermalink(''),
    },
    {
      text: 'Precios',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
  ],

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
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Gmail', icon: 'tabler:brand-gmail', href: '#' },
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  
};
