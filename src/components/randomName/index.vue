<template>
    <book v-for="book in book_datas" :book-data.once="book"></book>

</template>

<script>
    import book from 'components/book';
    const name_list = ["Deann", "Jarred", "Janey", "Serena", "Stuart", "Sierra", "Edris", "Sylvia", "Margot", "Gertha", "Marquis", "Venessa", "Mi", "Liz", "Willy", "Shanti", "Curt", "Shaunda", "Simonne", "Gabriel", "Abraham", "Lauralee", "Rudy", "Shirlene", "Ambrose", "Teressa", "Carin", "Karren", "Joan", "Johnathan", "Marhta", "Arturo", "Teisha", "Williemae", "Edwardo", "Aldo", "Guillermo", "Lowell", "Bart", "Fred", "Elly", "Donnette", "Lyndia", "Dani", "Elwanda", "Berta", "Jeromy", "Bibi", "Janna", "Warner"];
    const length = name_list.length;
    let book_datas = [];
    
    function generateTitle(){
        const index = Math.floor(Math.random() * length);
        return name_list[index];
    }
    
    function generateId(){
        return Math.random().toString();
    }
    
    function generateImageCode(){
        return Math.floor(Math.random()*1080);
    }
    
    function generateAuthor(){
        const author_length = Math.floor(Math.random() * 3) + 1;
        let authors = '';
        for(let i = 0; i < author_length; i++){
            const name = generateTitle();
            authors += name + ' ';
        }
        
        return authors;
    }
    
    function generateDescription(){
        let description = '';
        for (let k = 0; k < 10; k ++) {
            description += generateTitle() + ' ';
        }
        return description;
    }
    
    for(let j = 0; j < 200; j++){
        let book_data = {
            id: generateId(),
            title: generateTitle(),
            author: generateAuthor(),
            image_code: generateImageCode(),
            description: generateDescription()
        };
        
        book_datas.push(book_data);
    }
    
    
    
    export default{
        data: ()=>({
            book_datas
        }),
        components:{
            book
        }
    }
    
    
</script>