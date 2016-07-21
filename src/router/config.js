import queryBook from 'components/queryBook'
import bookDetail from 'components/bookDetail'
import randomName from 'components/randomName'
import favoriteList from 'components/favoriteList'

export default {
    '/': {
        component: queryBook
    },
    '/book/:book_id': {
        component: bookDetail,
        name: 'book_detail'
    },
    '/testIE':{
        component:randomName
    '/favorites': {
        component: favoriteList
    }
};
