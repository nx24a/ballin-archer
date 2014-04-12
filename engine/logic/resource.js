var Resource = (function() {
    
    var _type
    var _name
    var _amount;
    var _maxAmount;
    var _reapValue;
    var _clima;
    
    function Resource (type, clima, forcedReapValue, forcedAmount, forcedMaxAmount) {
        
        if(forcedReapValue != null || forcedAmount != null || forcedMaxAmount != null) {
            if(forcedReapValue != null) {
                this._reapValue = forcedReapValue;        
            }
            if(forcedMaxAmount != null) {
                this._maxAmount = forcedMaxAmount;        
            }
            if(forcedAmount != null && forcedAmount <= this._maxAmount) {
                this._amount = forcedAmount;        
            }
            else {
               this._amount = this._maxAmount; 
            }
        } else {
            this._reapValue = Math.random();
            this._maxAmount = Math.round(this._reapValue*100)*100;
            this._amount = this._maxAmount;
        }
        
        this._type = type;
        this._name = type;
        this._clima = clima;
    }
    
    //set methods
    Resource.prototype.setAmount = function(amount){
        this._amount = amount;
    };
    
    Resource.prototype.decreaseCurrentAmount = function(amount){
        this._amount = this._amount-amount;
    };

    Resource.prototype.getName = function(){
        return this._name;
    };
    
    Resource.prototype.getAmount = function(amount){
        return this._amount;
    };
    
    Resource.prototype.getReapValue = function(){
        return Math.round(this._reapValue*100);
    };
    
    Resource.prototype.getResourceName = function(type) {
        switch(type) {
            case 1:
                return "Getreide";
            break;
            case 2:
                return "Gewürze";
            break;
            case 3:
                return "Kakao";
            break;
            case 4:
                return "Mehl";
            break;
            case 5:
                return "Tabak";
            break;
            case 6:
                return "Zuckerrohr";
            break;
            case 7:
                return "Kakao";
            break;
            case 8:
                return "Mehl";
            break;
            case 9:
                return "Nahrung";
            break;
            case 10:
                return "Holz";
            break;
            case 11:
                return "Erz";
            break;
            case 12:
                return "Stoffe";
            break;
            case 13:
                return "Rind";
            break;
            case 14:
                return "Ziegel";
            break;
            case 15:
                return "Eisenerz";
            break;
            case 16:
                return "Gold";
            break;
            case 17:
                return "Wolle";
            break;
            case 18:
                return "Schmuck";
            break;
            case 19:
                return "Alkohol";
            break;
            case 20:
                return "Kanonen";
            break;
            case 21:
                return "Kleidung";
            break;
            case 22:
                return "Musketen";
            break;
            case 23:
                return "Schwerter";
            break;
            case 22:
                return "Tabakwaren";
            break;
            case 23:
                return "Werkzeug";
            break;
            default:
                alert("incorret input");
        }
    };
    
    return Resource;
})();