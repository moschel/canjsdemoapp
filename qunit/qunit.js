(function(window){

    window.pageisloaded=false;

    var fn = function(){
        window.pageisloaded=true;
    };

    var addLoadEvent = function(fn){
        var name = "load";
        // Standards-based browsers
        if ( window.addEventListener ) {
            window.addEventListener( name, fn );

        } else {
            // IE
            window.attachEvent( "on" + name, fn );
        }
    };

    var iterations = 0;

    var checkLoaded = function(cb){

        setTimeout(function(){
            if(!window.pageisloaded && iterations < 25){
                iterations++;
                checkLoaded(cb);
            }else{
                if(!window.pageisloaded){
                    cb.call();
                }
            }
        },25);
    };

    addLoadEvent(fn);

    steal('bower_components/qunit/qunit/qunit.js','bower_components/qunit/qunit/qunit.css', function () {

        QUnit.config.autostart = false;


        steal.bind("ready", function () {
            QUnit.config.autostart = true;
            QUnit.config.reorder = false;
            if(!window.pageisloaded){
                checkLoaded(function(){
                    QUnit.load();
                })
            }
        });

        if (steal.instrument) {
            var reportBuilt = false;
            QUnit.done(function () {
                if (!reportBuilt) {
                    reportBuilt = true;
                    var data = steal.instrument.compileStats();
                    steal.instrument.report(data);
                }
            })
        }

        var getId = function (id) {
            return document.getElementById(id);
        };

        var appendToBody = function (type, id) {
            var el;
            if (!getId(id)) {
                el = document.createElement(type);
                el.setAttribute("id", id);
                document.body.appendChild(el);
            }
        };

        appendToBody("div", "qunit");
        appendToBody("div", "qunit-fixture");
        appendToBody("div", "qunit-test-area");

        // backwards compatibility
        window.equals = window.equal;
        QUnit.equals = QUnit.equal;
        window.same = window.deepEqual;
        QUnit.same = QUnit.deepEqual;

    });

})((function() {return this;}.call()));


