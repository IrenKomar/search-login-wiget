import React from "react";

export default function (RenderComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                data: null
            };
        }

        componentWillMount() {
            fetch("http://localhost:3000/hostlist.json")
                .then(response => response.json())
                .then(res => {
                    this.setState({ data: res });
                })
                .catch((e) => console.error(e));
        }

        render() {
            const { data } = this.state;
            return <RenderComponent {...this.props} data={data} />;
        }
    }
}