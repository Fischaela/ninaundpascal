!function() {
    'use strict';
    function e(e) {
        $.each(c, function(n, t) {
            var l = t.calc(e);
            t.digitElement.text(l),
            t.labelElement.text(1 === l ? t.singular : t.plural)
        })
    }
    function n(l) {
        var a = l
          , i = Math.round(a - t);
        e(i),
        a.setSeconds(a.getSeconds() + 1),
        setTimeout(function() {
            n(a)
        }, d)
    }
    var t = new Date(2018,9,12,13,0)
      , l = 6e4
      , a = 60 * l
      , i = 24 * a
      , r = 365 * i
      , u = $('#counter')
      , o = $('#icon')
      , c = [{
        digitElement: $('#yearDigit'),
        labelElement: $('#yearLabel'),
        calc: function(e) {
            return Math.floor(e / r)
        },
        singular: 'Jahr',
        plural: 'Jahre'
    }, {
        digitElement: $('#dayDigit'),
        labelElement: $('#dayLabel'),
        calc: function(e) {
            return Math.floor(e % r / i)
        },
        singular: 'Tag',
        plural: 'Tage'
    }, {
        digitElement: $('#hourDigit'),
        labelElement: $('#hourLabel'),
        calc: function(e) {
            return Math.floor(e % i / a)
        },
        singular: 'Stunde',
        plural: 'Stunden'
    }, {
        digitElement: $('#minuteDigit'),
        labelElement: $('#minuteLabel'),
        calc: function(e) {
            return Math.floor(e % a / l)
        },
        singular: 'Minute',
        plural: 'Minuten'
    }, {
        digitElement: $('#secondDigit'),
        labelElement: $('#secondLabel'),
        calc: function(e) {
            return Math.floor(e % l / 1e3)
        },
        singular: 'Sekunde',
        plural: 'Sekunden'
    }]
      , d = 1e3;
    !function() {
        function e() {
            n(new Date),
            u.fadeIn(1e3),
            o.removeClass('loading')
        }
        function t(e) {
            var t = new Date(1e3 * e.timestamp);
            n(t),
            u.fadeIn(1e3),
            o.removeClass('loading')
        }
        var l = 'http://api.timezonedb.com/?zone=Europe/Berlin&format=json&key=309DGKMTBMAM';
        u.hide(),
        $.ajax({
            url: l,
            success: t,
            error: e
        })
    }()
}();
