import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },

  {
    label: 'Brands',
    icon: 'home',
    subItems: [
      {
        label: 'Add New',
        link: 'brand/add_new',
      },
      {
        label: 'List All',
        link: 'brand/list_all'
      },
    
    ]
  },

  {
    label: 'Categories',
    icon: 'list',
    subItems: [
      {
        label: 'Add new',
        link: 'category/add_new',
      },
      {
        label: ' List All',
        link: 'category/list_all'
      },
      
    ]
  },

  {
    label: 'Metrics',
    icon: 'list',
    subItems: [
      {
        label: 'Metric',
        link: 'metric/metric',
      },
      {
        label: ' List All',
        link: 'metric/list_all'
      },
      
    ]
  },

 
  {
    label: 'Products',
    icon: 'list',
    subItems: [
      {
        label: 'Add new',
        link: 'product/add_new',
      },
      {
        label: 'List All',
        link: 'product/list_all'
      },
      
    ]
  },


  {
    label: 'Setting',
    icon: 'list',
    subItems: [
      {
        label: 'Setting',
        link: 'setting/setting',
      },
      {
        label: 'List All',
        link: 'setting/list_all'
      },
      
    ]
  },
 
  {
    label: 'Suppliers',
    icon: 'user',
    subItems: [
      {
        label: 'Add new',
        link: 'supplier/add_new',
      },
      {
        label: 'List All',
        link: 'supplier/list_all'
      },
      
    ]
  },
  
  {
    label: 'User',
    icon: 'user',
    subItems: [
      {
        label: 'Add new',
        link: 'user/add_new',
      },
      {
        label: 'List All',
        link: 'user/list_all'
      },
      
    ]
  }

];





       /*{
             label: 'Web Apps',
            isTitle: true
  },
  {
    label: 'Email',
    icon: 'mail',
    subItems: [
      {
        label: 'Inbox',
        link: '/apps/email/inbox',
      },
      {
        label: 'Read',
        link: '/apps/email/read'
      },
      {
        label: 'Compose',
        link: '/apps/email/compose'
      },
    ]
  },
  {
    label: 'Chat',
    icon: 'message-square',
    link: '/apps/chat',
  },
  {
    label: 'Calendar',
    icon: 'calendar',
    link: '/apps/calendar',
    badge: {
      variant: 'primary',
      text: 'New',
    }
  },  */
 

