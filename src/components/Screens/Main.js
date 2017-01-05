import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
} from 'react-native';

import Wallpaper from '../Wallpaper';
import AddTodo from '../AddTodo';
import Visibility from '../Visibility';
import ListTodo from '../ListTodo';

class Main extends Component {
	render() {
		return (
			<View style={styles.bottomLayer}>
				<View style={styles.container}>
					<StatusBar translucent={true} />
					<Wallpaper>
						<AddTodo {...this.props}/>
						<Visibility {...this.props} />
						<ListTodo {...this.props} />
					</Wallpaper>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bottomLayer: {
		flex: 1,
		backgroundColor: 'white',
	},
	container: {
		flex: 1,
		marginTop: 20,
	},
});

Main.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		todos: state.todos,
		visibilityFilter: state.visibilityFilter,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(todoActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);