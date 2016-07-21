import queryBook from 'components/queryBook'
import bookDetail from 'components/bookDetail'
import randomName from 'components/randomName'
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
    }
};
