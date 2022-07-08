class Greeting extends React.Component {
    state = {
        hour: null,
        username: 'Mhlengi'
    }

    componentDidMount() {
        this.getHour()
    }

    getHour = () => {
        const date = new Date();
        const hour = date.getHours()
        this.setState({
            hou
        })
    }
}