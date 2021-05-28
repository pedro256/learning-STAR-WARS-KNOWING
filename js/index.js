function ViewModel(){
    var self = this;

    var URL_BASE = "https://swapi.dev/api/planets/"
    self.nextPageURL= null
    self.prevPageURL = null
    self.list = ko.observableArray([])
    self.page = ko.observable(1)
    self.numPlanets = ko.observable(0)

    self.nextPage = function(){
        if(self.nextPageURL!=null){
            self.getResquest(self.nextPageURL,1)
        }
        
    }
    self.prevPage = function(){
        if(self.prevPageURL!=null){
            self.getResquest(self.prevPageURL,0)
        }
    }

    

    self.listarPessoas = function(pagina){
        self.getResquest(URL_BASE+"?page="+pagina);
    }

    self.getResquest = function(url,orientation){
        $.get(url,function(result){
            console.log(self.numPlanets)
            self.nextPageURL = result.next
            self.prevPageURL = result.previous
            self.numPlanets(result.count) 
            console.log(self.numPlanets)
            self.list(result.results)
            if(orientation==1){
                self.page(self.page()+1)
            }else if(orientation==0){
                self.page(self.page()-1)
            }
        })
    }

}
vm = new ViewModel()
ko.applyBindings(vm)
vm.listarPessoas(1)