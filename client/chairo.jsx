Session.setDefault('counter', 0);

var Hello = ReactMeteor.createClass({
    templateName: "hello",

    getMeteorState: function() {
        return {
            counter: Session.get('counter')
        }
    },

    addCount: function() {
        Session.set('counter', Session.get('counter') + 1);
    },

    render: function() {
        return (
            <section>
                <button onClick={this.addCount}>click</button>
                <p>You have pressed the button {this.state.counter} times.</p>
            </section>
        )
    }
});
