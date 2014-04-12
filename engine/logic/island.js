var Island = (function() {
    
    //private
    var _size;
    var _resources;
    var _usedSize;
    var _inhabitants;
    var _defense;
    var _damage;
    var _clima;
    
    //constructor
    function Island(clima, maxResources) {
        this._size = 2000;
        this._usedSize = 0;
        this._inhabitants = 0;
        this._defense = 0;
        this._damage = 0;
        this._clima = clima;
        this._resources = [];
        
        for(var i=1; i<=maxResources; i++){
            this._resources[i] = new Resource(i, clima);
        }
    }
    
    Island.prototype.getResourceAt = function(resourceAtI) {
        return this._resources[resourceAtI];
    }
    
    return Island;
})();