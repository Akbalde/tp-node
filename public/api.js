document.addEventListener('DOMContentLoaded',async()=>{
    const addPays = document.querySelector('#pays')
     // liste des pays depuis une api
     const recuperPays = await axios.get('https://restcountries.com/v3.1/all');
     const listePays = recuperPays.data;
     
    //  ajouter chaque pays dans le selecteur
    listePays.forEach((pays) => {
        const option = document.createElement('option');
        option.value= pays.name.common ;
        option.label= pays.name.common ;
        addPays.appendChild(option)
        
    });
});
     
    
document.addEventListener('DOMContentLoaded',async()=>{
    const addAuteur = document.querySelector('#auteurs');
      // recuperer liste des auteurs depuis l'API
      const recupereAuteurs = await axios.get('https://openlibrary.org/authors/OL7939339A.json');
    
    
     const listeauteur = recupereAuteurs.data;
    //  ajouter chaque pays dans le selecteur
        const option = document.createElement('option');
        option.value= listeauteur.name ;
        option.label= listeauteur.name;
        
        console.log(recupereAuteurs)
        addAuteur.add(option) 
    
});