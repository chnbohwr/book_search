import queryBook from 'components/queryBook'
import bookDetail from 'components/bookDetail'

export default {
    '/': {
        component: queryBook
    },
    '/book/:book_id': {
        component: bookDetail,
        name: 'book_detail'
    }
};
