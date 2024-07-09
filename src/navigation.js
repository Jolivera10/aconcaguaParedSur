import { getPermalink} from './utils/permalinks';

export const headerData = {
  links: [
  
    
     
        {
          text: 'Expediciones',
          href: getPermalink('/homes/expediciones'),
        },
        {
          text: 'Trekkings',
          href: getPermalink('/homes/trekkings'),
        },
        {
          text: 'Servicios',
          href: getPermalink('/homes/servicios'),
        },
       
        {
          text: 'Nosotros',
          href: getPermalink('/homes/nosotros'),
        },
    
    {
      text: 'Aconcagua',
      href: getPermalink('/homes/aconcagua'),
    },
    
    
  ],
  
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/aconcaguaparedsur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://api.whatsapp.com/send?phone=%2B542612506186&context=ARAKVNkBciDCVU2YK3h6Pr-I83LUqvxpNzuus0kKKhPgMULM3qxlbKZNQCDa9w1Ys6CR1KGJpBKRqK2LT9M-hFEc9zzkakb5gExwzs92SnllPVLL08hj7ldILl3mURX5GBzeVaQJ45Ji-3y8k0XN_7GxgA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR0mU9mJmTH66UDAexPgGXIosmHZ-azP4rf8nnsFRY0qlfiEZmRH2ph_RCs_aem_cZW7xvAZ-jsKw12LyXp3mQ' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/aconcaguaparedsur' },
  ]

};

export const footerData = {
  links: [
    {
      title: 'Ayuda',
      links: [
        { text: 'Contáctenos', href: '/contact' },
        { text: 'Aconcagua', href: '/homes/aconcagua' },
        { text: 'Politica de privacidad' },
        { text: 'Términos y condiciones' },
      ],
    },
    {
      title: 'Redes Sociales',
      links: [
        { text: 'Instagram', href: 'https://www.instagram.com/aconcaguaparedsur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
        { text: 'Facebook', href: 'https://www.facebook.com/aconcaguaparedsur' },
        { text: 'Whatsapp', href: 'https://api.whatsapp.com/send?phone=%2B542612506186&context=ARAKVNkBciDCVU2YK3h6Pr-I83LUqvxpNzuus0kKKhPgMULM3qxlbKZNQCDa9w1Ys6CR1KGJpBKRqK2LT9M-hFEc9zzkakb5gExwzs92SnllPVLL08hj7ldILl3mURX5GBzeVaQJ45Ji-3y8k0XN_7GxgA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR0mU9mJmTH66UDAexPgGXIosmHZ-azP4rf8nnsFRY0qlfiEZmRH2ph_RCs_aem_cZW7xvAZ-jsKw12LyXp3mQ' },


      ],
    },
    {
      title: 'Acerca de',
      links: [
        { text: 'paredsur.aconcagua@gmail.com' },


      ],
    },
  ],
 
  
};
