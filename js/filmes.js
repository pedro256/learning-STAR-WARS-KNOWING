function ViewModel(){
    var self = this;
    var URL_BASE = "https://swapi.dev/api/films/"
    self.list = ko.observableArray([])
    self.num = ko.observable(0)
  

    self.listarFilmes= function(pagina){
        self.getResquest(URL_BASE+"?page="+pagina);
    }

    self.getResquest = function(url){
        $.get(url,function(result){
            self.num(result.count) 
            self.list(result.results)
        })
    }
}
vm = new ViewModel()
ko.applyBindings(vm)
vm.listarFilmes(1)
