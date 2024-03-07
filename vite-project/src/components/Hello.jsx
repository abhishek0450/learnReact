import PropTypes from 'prop-types'

function Hello({name , phone}){
    return (
        <h1>Hello, World! This is {name}, call me at {phone} </h1>
            )
}

Hello.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.number
}

    export default Hello