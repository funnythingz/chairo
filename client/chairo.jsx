Session.setDefault('counter', 0);

var HelloClick = ReactMeteor.createClass({
    templateName: "helloClick",

    counter: function () {
        return Session.get('counter');
    },

    addCount: function() {
        Session.set('counter', Session.get('counter') + 1);
    },

    render: function() {
        return (
            <button onClick={this.addCount}>click</button>
            <p>You have pressed the button {this.counter()} times.</p>
        )

    }
});
