var CreatePanel = ReactMeteor.createClass({
    templateName: "createPanel",

    getMeteorState: function() {
        return {
            counter: Session.get('counter')
        }
    },

    createSpot: function() {
        var spotName = this.refs.inputSpotName.getDOMNode().value;
        Spots.insert({name: spotName});
        alert('create new spot is `' + spotName + '`');
    },

    render: function() {
        return (
            <section>
                <input type="text" ref="inputSpotName" value={this.state.textValue} onChange={this.changeText} />
                <button onClick={this.createSpot}>new spot</button>
            </section>
        )
    }
});
