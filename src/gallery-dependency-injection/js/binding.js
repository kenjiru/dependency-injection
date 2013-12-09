var Binding = Y.Base.create('binding', Y.Base, [], {
    _name : null,
    _implementation : null,
    _scope : null,
    _instance : null,

    initializer : function(config) {
        this._name = config.name;
        this._scope = Scope.PROTOTYPE;
    },

    to : function(implementation) {
        this._implementation = implementation;

        return this;
    },

    on : function(scope) {
        this._scope = scope;
    },

    getInstance : function() {
        if (this._scope == Scope.SINGLETON) {
            if (!this._instance) {
                this._instance = new this._implementation();
            }

            return this._instance;
        } else
        if (this._scope == Scope.PROTOTYPE) {
            return new this._implementation();
        }
    }
});
