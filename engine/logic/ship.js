var Ship = (function() {
    
    //variables
    var _id;
    var _name;
    var _type;
    var _model;
    var _icon;
    var _speed;
    var _capacity;
    var _load;
    var _cannons;
    var _life;
    var _maxLife;
    var _damage;
    var _currentPosition;

    //constructor
    function Ship(type, nextId) {
        switch(type) {
            case 1:
                this._id = nextId;
                this._type = "kleines Handelsschiff";
                this._name = "Santa Maria";
                this._speed = 4;
                this._capacity = 4;
                this._load = new Array(this._capacity);
                this._cannons = 0;
                this._life = 100;
                this._maxLife = 100;
                this._damage = 0;
            break;
            default:
                alert("no Ship created");
        }
    }
    
    //set methods
    Ship.prototype.setId = function(id){
        this._id = id;
    }

    Ship.prototype.setName = function(name){
        this._name = name;
    }
    
    Ship.prototype.setType = function(type){
        this._type = type;
    }
   
    Ship.prototype.setModel = function(model){
        this._model = model;
    }

    Ship.prototype.setIcon = function(icon){
        this._icon = icon;
    }

    Ship.prototype.setSpeed = function(speed){
        this._speed = speed;
    }
    
    Ship.prototype.setCapacity = function(capacity){
        this._capacity = capacity;
    }
   
    Ship.prototype.setLoad = function(load){
        this._load = load;
    }
 
    Ship.prototype.setCannons = function(cannons){
        this._cannons = cannons;
    }

    Ship.prototype.setLife = function(life){
        this._life = life;
    }
    
    Ship.prototype.setMaxLife = function(maxLife){
        this._maxLife = maxLife;
    }
   
    Ship.prototype.setDamage = function(damage){
        this._damage = damage;
    }
    
    Ship.prototype.setPosition = function(currentPosition){
        this._currentPosition = currentPosition;
    }
    
    //get methods
    Ship.prototype.getId = function(){
        return this._id;
    }

    Ship.prototype.getName = function(){
        return this._name;
    }
    
    Ship.prototype.getType = function(){
        return this._type;
    }
   
    Ship.prototype.getModel = function(){
        return this._model;
    }

    Ship.prototype.getIcon = function(){
        return this._icon;
    }

    Ship.prototype.getSpeed = function(){
        return this._speed;
    }
    
    Ship.prototype.getCapacity = function(){
        return this._capacity;
    }
   
    Ship.prototype.getLoad = function(){
        return this._load;
    }
 
    Ship.prototype.getCannons = function(){
        return this._cannons;
    }

    Ship.prototype.getLife = function(){
        return this._life;
    }
    
    Ship.prototype.getMaxLife = function(){
        return this._maxLife;
    }
   
    Ship.prototype.getDamage = function(){
        return this._damage;
    }
    
    Ship.prototype.getPosition = function(){
        return this._currentPosition;
    }
    
    return Ship;
})();