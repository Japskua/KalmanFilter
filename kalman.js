/**
 * Created with JetBrains WebStorm.
 * User: Japskua
 * Date: 13.6.2013
 * Time: 23:02
 * To change this template use File | Settings | File Templates.
 */



var Kalman = Class.extend({

    init: function(x0, P0, Fk, Qk) {

        // First, get the input values on initialization
        this.xk = x0;
        this.Pk = P0;
        this.Fk = Fk;
        this.Qk = Qk;

    }, // End of init


    update: function(o) {

    }

});