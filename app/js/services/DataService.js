"use strict";
/**
 * Service for setting and getting App data
 * @class DataService
 **/
app.service("DataService", [
        /**
         * @constructor
         **/
        function() {

            /**
             * Contains all data for App.
             * @private
             * @property data_obj
             * @type object
             **/
            var data_obj = {};

            /**
             * Getter function. Gets value of key in model object.
             * @public
             * @method get
             * @param key {String} key in object to return value of
             * @return {*} value of key in data_obj
             **/
            this.get = function get(key){
                return data_obj[key];
            }

            /**
             * Setter function. Adds key and value to object or updates the key in object if key already exists.
             * @public
             * @method set
             * @param key {String} key to update or add in data_obj
             * @param value {*} value to set to key in data_obj
             * @return {*} the new or updated value of key in data_obj
             **/
            this.set = function set(key, value){
                data_obj[key] = value;
                return value;
            }

            /**
             * removes key from data_obj
             * @public
             * @method remove
             * @param key {String} key in object to remove
             **/
            this.remove = function remove(key){
                delete data_obj[key];
            }

            /**
             * Deletes all data in DataDervice
             * @public
             * @method clear
             **/
            this.clear = function clear(){
                data_obj = {};
            }

        }
]);
