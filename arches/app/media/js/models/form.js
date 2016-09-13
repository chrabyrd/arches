define(['arches',
    'models/abstract',
    'knockout',
    'knockout-mapping',
    'underscore'
], function (arches, AbstractModel, ko, koMapping, _) {

    var FormModel = AbstractModel.extend({
        /**
        * A backbone model to manage form data
        * @augments AbstractModel
        * @constructor
        * @name FormModel
        */
        url: arches.urls.form,
        constructor: function(attributes, options){
            options || (options = {});
            options.parse = true;
            AbstractModel.prototype.constructor.call(this, attributes, options);
        },
        /**
         * parse - parses the passed in attributes into a {@link FormModel}
         * @memberof FormModel.prototype
         * @param  {object} attributes - the properties to seed a {@link FormModel} with
         */
        parse: function(attributes){
          this.iconclass = ko.observable(attributes.data.iconclass);
          return attributes.data
        },
        toJSON: function(){
            var ret = {};
            for(var key in this.attributes){
                console.log(key)
            }
            return ret;
        }
    });
    return FormModel;
});
