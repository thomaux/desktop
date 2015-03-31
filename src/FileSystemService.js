angular.module("demo").service("FileSystemService", function ($q) {
    var service = this;
    service.save = save;
    service.load = load;

    var fs = require('fs');
    var path = require('path');
    return service;

    function save(fileName, fileContent) {
        var deferred = $q.defer();
        fs.writeFile(path.join(path.dirname(), fileName), fileContent, function(err){
            if(err){
                deferred.reject(err);
            } else {
                deferred.resolve();
            }
        });
        return deferred.promise;
    }

    function load(fileName) {
        var deferred = $q.defer();
        fs.readFile(path.join(path.dirname(), fileName), {encoding: 'utf-8'}, function(err, data){
            if(err){
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    }

});