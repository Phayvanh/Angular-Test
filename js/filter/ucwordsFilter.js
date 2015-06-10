ContactManager.filter('ucwords',function(){
   return function(input)
   {
       return (typeof input === 'undefined') ? '' : (input + '').replace
       (//replace à besoin d'un string pour marcher donc on lui envois un string vide
           //regex qui va rechercher la première lettre de chaque mot
           /^([a-z\u00E0-\u00FC])|(\s|\-)+([a-z\u00E0-\u00FC])/g,
           //on transforme la première lettre du mot trouvé en majuscule
           function($1)
           {
               return $1.toUpperCase();
           }
       );
   }
});