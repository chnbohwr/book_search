import queryBook from 'components/queryBook'
import bookDetail from 'components/bookDetail'
import favoriteList from 'components/favoriteList'

export default {
    '/': {
        component: queryBook
    },
    '/book/:book_id': {
        component: bookDetail,
        name: 'book_detail'
    },
    '/favorites': {
        component: favoriteList
    }
};
