var SpotList = ReactMeteor.createClass({
    templateName: "spotList",

    getMeteorState: function() {
        return {
            spotList: Spots.find({})
        }
    },

    render: function() {
        return (
            <section>
                <ul>
                    {this.state.spotList.map(function(spot) {
                        return <li id={spot._id}>{spot.name}</li>;
                    })}
                </ul>
            </section>
        )
    }
});
