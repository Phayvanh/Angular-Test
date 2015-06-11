ContactManager.service('localStorage', function($window)
{
    //on créé le service qu'on nome localStorage

    //on créé une fonction pour sauvegarder dans le local storage du navigateur
    var Save = function(key, value)
    {
        $window.localStorage.setItem(key,angular.toJson(value));
    };

    //on créé une fonction pour récupérer les données du local storage
    var Load = function(key)
    {
        return angular.fromJson($window.localStorage.getItem(key));
    };

    var clear = function()
    {
        $window.localStorage.clear();
    };

    return{
        save : Save,
        load : Load,
        clear: clear
    };

});