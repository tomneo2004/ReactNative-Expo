import * as Linking from 'expo-linking';

const prefix = Linking.makeUrl('/');

export default {
    prefixes: [prefix],
    config: {
      screens: {
        Home:{
          path: '',
        },
        //Details screen handle uri /item and accpte param itemId in uri
        //? is optional param
        Details:{ 
          path: 'item/:itemId?',
          // parse: {
          //   itemId: (itemId:string)=>(Number(itemId)+1).toString()
          // },
          // stringify: {
          //   itemId: (itemId:string)=>(Number(itemId)+1).toString()
          // },
        },
        Setting: {
          path: 'setting',
          screens: {
            Profile: {
              path: 'profile/:name?'
            },
            System: {
              path: 'system/:ownerName?',
            },
            InvalidSettings: '*',
          }
        },
        Store: {
          path: 'store',
          screens: {
            Book: {
              path: 'book/:bookName?/:bookId',
              exact: true,
            }
          }
        },
        NotFound: '*'
      },
    },
  };