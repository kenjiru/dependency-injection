var Injector = Y.Base.create('injector', Y.Base, [], {
    _bindings : {},

    configure : function(configureCallback) {
        configureCallback.call(this, this);
    },

    bind : function(name) {
        var binding = new Binding({
            name : name
        });

        this._bindings[name] = binding;

        return binding;
    },

    inject : function(name) {
        var binding = this._bindings[name];

        if (!binding) {
            return null;
        }

        return binding.getInstance();
    }
}, {
    _injector : null,

    configure : function(configureCallback) {
        if (!Injector._injector) {
            Injector._injector = new Injector();
        }

        Injector._injector.configure(configureCallback);
    },

    inject : function(name) {
        return Injector._injector.inject(name);
    }
});

var Scope = {
    SINGLETON : 'singleton',
    PROTOTYPE : 'prototype'
};

Y.namespace('di').Scope = Scope;
Y.namespace('di').configure = Injector.configure;

Y.inject = Injector.inject;