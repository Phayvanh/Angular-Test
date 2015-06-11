var ContactManager = angular.module('app', []);

ContactManager.controller("headerCtrl",function($scope){
    //$scope = Accès à toutes variables que je controle

    $scope.nowDate = new Date();

});


ContactManager.controller('contactsCtrl',function($scope, localStorage)
{
    //création d'un objet contact qui permettra l'initialisation du formulaire en même temps
    function resetForm()
    {
        $scope.contact =
        {
            firstName:    null,
            lastName:     null,
            email:        null,
            role:         null,
            category:     null,
            civility:     null
        };
    }
    resetForm();

    /************************ insertion manuel ***************/
//    $scope.contacts =
//        [
//           {
//               firstName:'Alain',
//               lastName:"Sop",
//               role:"Chef Produit"
//           },
//           {
//               firstName:'Lauraine',
//               lastName:"Kish",
//               role:"Cuisinière"
//           }
//        ];

    //initialisation des données des boutons radios et du select
    $scope.civilities =
        [
            { id: 1, name: 'Mme.' },
            { id: 2, name: 'M.' }
        ];

    $scope.categories =
        [
            { id: 1, name: 'Personnel' },
            { id: 2, name: 'Professionnel' },
            { id: 3, name: 'Divers' }
        ];

    //au lancement on cache le formulaire et le boutton effacer
    $scope.formIsShow =         false;
    $scope.clearButtonIsShow =  false;

    $scope.contacts = localStorage.load('contacts');

    //si au chargement il y'a déjà des données enregistrées on affiche le bouton effacer
    if (localStorage.load('contacts') != null)$scope.clearButtonIsShow = true;
    

    $scope.toggle = function()
    {
        //$scope.formIsShow = !($scope.formIsShow);//fait la même chose que le ternaire en-dessous pour l'affichage du formulaire
        $scope.formIsShow = $scope.formIsShow == false;

        //s'il n'y a rien dans le localStorage on créé un tableau de contacts
        if(localStorage.load('contacts') === null)
        {
            localStorage.save('contacts', []);
            $scope.clearButtonIsShow =  false;
        }

    };

    $scope.contactSave = function()
    {
        //on cache le formulaire
        $scope.formIsShow = false;

        //on charge le local storage
        var contacts = localStorage.load('contacts');
        //on ajoute les dernières informations entrées
        contacts.push($scope.contact);
        //on enregistre dans le local storage
        localStorage.save('contacts',contacts);

        //on recharge le local storage pour l'afficher avec la dernière infos
        $scope.contacts = localStorage.load('contacts');

        //on réinitialise le formulaire
        resetForm();

        $scope.clearButtonIsShow = true;
    };

    $scope.clearStorage = function()
    {
        //on efface tout le local storage
        localStorage.clear();
        //on recharge
        $scope.contacts = localStorage.load('contacts');
        //le bouton ne sert plus à rien
        $scope.clearButtonIsShow = false;
    }
});
