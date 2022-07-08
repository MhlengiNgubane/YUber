import { Text } from 'react-native';

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
            hour
        });
    }

    render(){
        const {hour, username} = this.state;
        return (
            <Text style={tw`text-center py-5 text-xl`}> 
            
                {hour < 12 ? "Good Morning" : "Good Evening"} {username}
            </Text>
            
        );
    }
}

const rootElement = document.getElementById()