var ContactManager = angular.module('app', []);

ContactManager.controller("headerCtrl",function($scope){
    //$scope = Accès à toutes variables que je controle

    $scope.nowDate = new Date();

});


ContactManager.controller('contactsCtrl',function($scope, localStorage)
{
    //création d'un objet contact
    function resetForm()
    {
        $scope.contact =
        {
            'firstName':    null,
            'lastName':     null,
            'email':        null,
            'role':         null,
            'category':     null
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

    //au lancement on cache le formulaire
    $scope.formIsShow = false;

    if(localStorage.load('contacts') === null)localStorage.save('contacts',[]);
    $scope.contacts = localStorage.load('contacts');


    $scope.toggle = function()
    {
//        $scope.formIsShow = !($scope.formIsShow);//fait la même chose que le ternaire en-dessous
        $scope.formIsShow = $scope.formIsShow == false;
    };

    $scope.contactSave = function()
    {
        $scope.formIsShow = false;

        var contacts = localStorage.load('contacts');
        contacts.push($scope.contact);
        localStorage.save('contacts',contacts);

        $scope.contacts = localStorage.load('contacts');
    //localStorage.save('contacts',contacts);

        resetForm();
    };
});
