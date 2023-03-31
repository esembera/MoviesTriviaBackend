countryApp.component('app',{

    template:`
       
        TEST
      
        `,
    controller:function($http){

        $http.get('/api/users')
            .then(data => data.data)
            .then(users => console.log(users));

    }

});
