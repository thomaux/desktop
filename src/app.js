angular.module("demo", []).controller("DemoCtrl", function (FileSystemService) {
    var controller = this;

    controller.save = save;
    controller.load = load;

    function save() {
        FileSystemService.save('message.txt', controller.text).then(function(){
            alert("File saved correctly");
        });
    }

    function load() {
        FileSystemService.load('message.txt').then(function(data){
            controller.text = data;
        }, function(err){
            console.error(err);
        });
    }
});