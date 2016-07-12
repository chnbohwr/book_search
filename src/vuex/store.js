import Vuex from 'vuex';

const state = {
    bookData: {
        image: '',
        title: '',
        subtitle: '',
        publisher: '',
        authors: '',
        description: ''
    }
};

function getBookData(state){
    console.log('in mutation state', state);
}

const mutations = {
    getBookData
}

console.log(Vuex.Store)

export default new Vuex.Store({state, mutations});
